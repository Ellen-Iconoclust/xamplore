const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');
const path = require('path');

// Middleware
app.use(cors());
app.use(express.json());

// Get absolute path for files
const __dirname = path.resolve();
const usersFilePath = path.join(__dirname, 'users.json');
const testResultsFilePath = path.join(__dirname, 'testResults.json');

// Initialize storage files
function initStorage() {
  if (!fs.existsSync(usersFilePath)) {
    fs.writeFileSync(usersFilePath, JSON.stringify([]));
  }
  if (!fs.existsSync(testResultsFilePath)) {
    fs.writeFileSync(testResultsFilePath, JSON.stringify([]));
  }
}

initStorage();

// Helper functions
function readUsers() {
  try {
    return JSON.parse(fs.readFileSync(usersFilePath, 'utf8'));
  } catch (error) {
    console.error('Error reading users:', error);
    return [];
  }
}

function writeUsers(users) {
  fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
}

function readTestResults() {
  try {
    return JSON.parse(fs.readFileSync(testResultsFilePath, 'utf8'));
  } catch (error) {
    console.error('Error reading test results:', error);
    return [];
  }
}

function writeTestResults(results) {
  fs.writeFileSync(testResultsFilePath, JSON.stringify(results, null, 2));
}

// API Routes
app.post('/api/auth', (req, res) => {
  const { name, password } = req.body;
  
  if (!name || !password) {
    return res.status(400).json({ error: 'Name and password required' });
  }

  const users = readUsers();
  const existingUser = users.find(u => u.name.toLowerCase() === name.toLowerCase());
  
  if (existingUser) {
    if (existingUser.password !== password) {
      return res.status(401).json({ error: 'Invalid password' });
    }
    return res.json({ 
      success: true, 
      message: 'Login successful',
      user: { name: existingUser.name, canRetake: existingUser.canRetake }
    });
  } else {
    const newUser = {
      id: Date.now(),
      name: name.trim(),
      password: password,
      canRetake: true,
      createdAt: new Date().toISOString()
    };
    
    users.push(newUser);
    writeUsers(users);
    
    return res.json({ 
      success: true, 
      message: 'Registration successful',
      user: { name: newUser.name, canRetake: true }
    });
  }
});

app.get('/api/can-take-test/:name', (req, res) => {
  const { name } = req.params;
  const users = readUsers();
  const user = users.find(u => u.name.toLowerCase() === name.toLowerCase());
  
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  
  const results = readTestResults();
  const hasCompleted = results.some(r => 
    r.studentName.toLowerCase() === name.toLowerCase() && r.pdfDownloaded
  );
  
  res.json({ 
    canRetake: user.canRetake && !hasCompleted,
    hasCompleted 
  });
});

app.post('/api/submit-test', (req, res) => {
  const { studentName, pattern, score, total, answers, pdfDownloaded } = req.body;
  
  if (!studentName) {
    return res.status(400).json({ error: 'Student name required' });
  }
  
  const results = readTestResults();
  const users = readUsers();
  
  // Check if already submitted with PDF downloaded
  const existingResult = results.find(r => 
    r.studentName.toLowerCase() === studentName.toLowerCase() && r.pdfDownloaded
  );
  
  if (existingResult) {
    return res.status(400).json({ 
      error: 'Test already completed and PDF downloaded' 
    });
  }
  
  // Update or add result
  const testResult = {
    id: Date.now(),
    studentName,
    pattern,
    score,
    total,
    answers,
    pdfDownloaded: pdfDownloaded || false,
    submittedAt: new Date().toISOString(),
    ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress
  };
  
  const resultIndex = results.findIndex(r => 
    r.studentName.toLowerCase() === studentName.toLowerCase()
  );
  
  if (resultIndex !== -1) {
    results[resultIndex] = testResult;
  } else {
    results.push(testResult);
  }
  
  writeTestResults(results);
  
  // Update user's retake status if PDF was downloaded
  if (pdfDownloaded) {
    const userIndex = users.findIndex(u => 
      u.name.toLowerCase() === studentName.toLowerCase()
    );
    if (userIndex !== -1) {
      users[userIndex].canRetake = false;
      writeUsers(users);
    }
  }
  
  res.json({ success: true, message: 'Test result saved' });
});

app.post('/api/verify-second-chance', (req, res) => {
  const { password, studentName } = req.body;
  const secondChancePassword = "choice2ellen";
  
  if (password !== secondChancePassword) {
    return res.status(401).json({ error: 'Invalid second chance password' });
  }
  
  const users = readUsers();
  const user = users.find(u => u.name.toLowerCase() === studentName.toLowerCase());
  
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  
  // Reset user's retake permission
  const userIndex = users.findIndex(u => 
    u.name.toLowerCase() === studentName.toLowerCase()
  );
  if (userIndex !== -1) {
    users[userIndex].canRetake = true;
    writeUsers(users);
  }
  
  // Remove previous results
  const results = readTestResults();
  const filteredResults = results.filter(r => 
    r.studentName.toLowerCase() !== studentName.toLowerCase()
  );
  
  if (filteredResults.length !== results.length) {
    writeTestResults(filteredResults);
  }
  
  res.json({ 
    success: true, 
    message: 'Second chance granted, you can retake the test'
  });
});

app.get('/api/test-results/:name', (req, res) => {
  const { name } = req.params;
  const results = readTestResults();
  const userResults = results.filter(r => 
    r.studentName.toLowerCase() === name.toLowerCase()
  );
  
  res.json({ results: userResults });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    version: '2.0'
  });
});

// Admin endpoints (for debugging)
app.get('/api/admin/data', (req, res) => {
  const users = readUsers();
  const results = readTestResults();
  
  res.json({
    users: users.map(u => ({ ...u, password: '***' })),
    results,
    totalUsers: users.length,
    totalTests: results.length
  });
});

app.post('/api/admin/reset-user/:name', (req, res) => {
  const { name } = req.params;
  
  const users = readUsers();
  const userIndex = users.findIndex(u => u.name.toLowerCase() === name.toLowerCase());
  
  if (userIndex === -1) {
    return res.status(404).json({ error: 'User not found' });
  }
  
  users[userIndex].canRetake = true;
  writeUsers(users);
  
  const results = readTestResults();
  const filteredResults = results.filter(r => 
    r.studentName.toLowerCase() !== name.toLowerCase()
  );
  writeTestResults(filteredResults);
  
  res.json({ success: true, message: 'User reset successfully' });
});

// Export the app for Vercel
module.exports = app;
