const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(cookieParser('xamplore-super-secret-key-2024'));
app.use(express.static(path.join(__dirname, 'public')));



const PASSWORDS = {
    A: "alpha123",
    B: "beta123",
    C: "gamma123"
};

const SECOND_PASS = "93449";
const ADMIN_CREDENTIALS = {
    name: "Ellen@SRCAS",
    password: "srcasadmin123"
};

const QUESTION_BANK = {
    A: [
        { q: "Which JavaScript declaration keyword binds an immutable identifier?", options: ["var", "let", "const", "static"], answer: "const" },
        { q: "Which semantic HTML element represents a site-level link grouping?", options: ["section", "menu", "nav", "header"], answer: "nav" },
        { q: "Which CSS property affects internal spacing of a box model?", options: ["margin", "gap", "padding", "outline"], answer: "padding" },
        { q: "Which Canvas API function renders bitmap data onto the surface?", options: ["paintImage()", "renderImg()", "drawImage()", "putImage()"], answer: "drawImage()" },
        { q: "Which JavaScript built-in function invokes a modal dialog?", options: ["console.log()", "prompt()", "alert()", "confirm()"], answer: "alert()" },
        { q: "Which HTML attribute enforces user input before submission?", options: ["validate", "compulsory", "required", "checked"], answer: "required" },
        { q: "Which CSS unit scales relative to viewport horizontal size?", options: ["vh", "em", "vw", "%"], answer: "vw" },
        { q: "Which Canvas method resets pixels within a defined region?", options: ["resetRect()", "eraseRect()", "clearRect()", "wipeRect()"], answer: "clearRect()" },
        { q: "Which semantic HTML element encapsulates primary document content?", options: ["body", "article", "main", "section"], answer: "main" },
        { q: "Which HTML element inserts a thematic break?", options: ["br", "hr", "line", "rule"], answer: "hr" },
        { q: "Which CSS property determines vertical layering priority?", options: ["depth", "overlay", "z-index", "stack"], answer: "z-index" },
        { q: "Which HTML element embeds raster graphics?", options: ["picture", "media", "image", "img"], answer: "img" },
        { q: "Which Canvas rendering property controls fill pigment?", options: ["fillColor", "fillStyle", "colorFill", "background"], answer: "fillStyle" },
        { q: "Which JavaScript control keyword terminates iteration execution?", options: ["exit", "stop", "break", "halt"], answer: "break" },
        { q: "Which CSS property modifies corner curvature?", options: ["curve", "border-edge", "border-radius", "outline-radius"], answer: "border-radius" },
        { q: "Which HTML element constructs a bullet-based list?", options: ["li", "ul", "ol", "dl"], answer: "ul" },
        { q: "Which JavaScript keyword initializes a scoped identifier?", options: ["define", "var", "let", "set"], answer: "let" },
        { q: "Which Canvas method preserves the current context snapshot?", options: ["hold()", "cache()", "save()", "store()"], answer: "save()" },
        { q: "Which CSS layout model aligns items horizontally by default?", options: ["grid", "inline", "flex", "block"], answer: "flex" },
        { q: "Which character encoding declaration avoids symbol distortion?", options: ["ASCII", "UTF-18", "UTF-8", "UTF-16"], answer: "UTF-8" },
        { q: "Which JavaScript structure maintains indexed collections?", options: ["object", "array", "map", "set"], answer: "array" },
        { q: "Which CSS concept adapts layout across device sizes?", options: ["scaling", "responsiveness", "transitions", "alignment"], answer: "responsiveness" },
        { q: "Which JavaScript method retrieves an element via unique identifier?", options: ["getelementById()", "getelementsByClassName()", "getElementById()", "getElementbyId()"], answer: "getElementById()" },
        { q: "Which Canvas API function renders text glyphs?", options: ["drawText()", "fillText()", "writeText()", "textDraw()"], answer: "fillText()" },
        { q: "Which JavaScript primitive represents intentional absence?", options: ["null", "undefined", "NaN", "false"], answer: "null" },
        { q: "Which CSS property clips excess visual content?", options: ["hidden", "clip", "overflow", "mask"], answer: "overflow" },
        { q: "Which document declaration activates compliance rendering?", options: ["‹html›", "‹meta›", "‹!DOCTYPE html›", "‹head›"], answer: "‹!DOCTYPE html›" },
        { q: "Which HTML element triggers user interaction events?", options: ["input", "button", "submit", "click"], answer: "button" },
        { q: "Which Canvas function restores the last stored context?", options: ["load()", "undo()", "restore()", "recall()"], answer: "restore()" },
        { q: "Which CSS selector references a unique element?", options: [".class", "elementId", "#id", "*"], answer: "#id" }
    ],
    B: [
        { q: "Which HTML element defines a clickable control?", options: ["action", "submit", "button", "input"], answer: "button" },
        { q: "Which JavaScript operator inverses logical evaluation?", options: ["!=", "!", "!==", "not"], answer: "!" },
        { q: "Which Canvas interface exposes rendering methods?", options: ["CanvasObject", "CanvasAPI", "CanvasRenderingContext2D", "GraphicsContext"], answer: "CanvasRenderingContext2D" },
        { q: "Which CSS property horizontally aligns inline text?", options: ["align", "justify", "text-align", "text-position"], answer: "text-align" },
        { q: "Which semantic HTML tag contains supplementary content?", options: ["aside", "section", "article", "nav"], answer: "aside" },
        { q: "Which HTML element defines last page content?", options: ["end", "footer", "bottom", "end-content"], answer: "footer" },
        { q: "Which CSS property repositions elements visually?", options: ["float", "transform", "margin", "display"], answer: "transform" },
        { q: "Which CSS property modifies font texture intensity?", options: ["font-style", "text-weight", "font-weight", "letter-spacing"], answer: "font-weight" },
        { q: "Which HTML attribute opens hyperlinks externally?", options: ["new", "target", "href", "rel"], answer: "target" },
        { q: "Which JavaScript keyword declares executable blocks?", options: ["method", "function", "def", "exec"], answer: "function" },
        { q: "Which CSS property controls outer spacing?", options: ["padding", "border", "margin", "gap"], answer: "margin" },
        { q: "Which JavaScript method locates elements by ID?", options: ["getelementsByClassName()", "getElementById()", "getElementbyId()", "getelementbyId()"], answer: "getElementById()" },
        { q: "Which Canvas property determines the line's stroke pigment?", options: ["strokeColor", "lineColor", "strokeStyle", "borderColor"], answer: "strokeStyle" },
        { q: "Which Canvas method initializes a drawing path?", options: ["begin()", "startPath()", "beginPath()", "openPath()"], answer: "beginPath()" },
        { q: "Which CSS unit inherits relative font sizing?", options: ["px", "rem", "em", "vh"], answer: "em" },
        { q: "Which CSS property controls opacity levels?", options: ["visibility", "transparency", "opacity", "filter"], answer: "opacity" },
        { q: "Which JavaScript keyword terminates function execution?", options: ["end", "stop", "return", "break"], answer: "return" },
        { q: "Which Canvas method creates line segments?", options: ["line()", "drawLine()", "lineTo()", "strokeLine()"], answer: "lineTo()" },
        { q: "Which CSS display value removes elements entirely?", options: ["hidden", "none", "invisible", "collapse"], answer: "none" },
        { q: "Which HTML utility validates syntax correctness?", options: ["Browser", "Inspector", "Validator", "Compiler"], answer: "Validator" },
        { q: "Which JavaScript data type stores characters?", options: ["char", "text", "string", "varchar"], answer: "string" },
        { q: "Which CSS property aligns items along cross-axis?", options: ["justify-content", "align-content", "align-items", "place-items"], answer: "align-items" },
        { q: "Which HTML attribute displays hint text in inputs?", options: ["label", "hint", "placeholder", "value"], answer: "placeholder" },
        { q: "Which HTML element produces numbered lists?", options: ["ul", "dl", "li", "ol"], answer: "ol" },
        { q: "Which Canvas property defines stroke thickness?", options: ["borderWidth", "strokeSize", "lineWidth", "penWidth"], answer: "lineWidth" },
        { q: "Which CSS property defines layout reference model?", options: ["position", "display", "float", "align"], answer: "position" },
        { q: "Which Canvas method reverts saved drawing state?", options: ["undo()", "restore()", "reload()", "reverse()"], answer: "restore()" },
        { q: "Which HTML element groups form controls?", options: ["group", "fieldset", "formset", "legend"], answer: "fieldset" },
        { q: "Which CSS rule enables animated transitions?", options: ["animation", "transition", "transform", "interpolate"], answer: "transition" },
        { q: "Which CSS property alters cursor appearance?", options: ["pointer", "arrow", "cursor", "mouse"], answer: "cursor" }
    ],
    C: [
        { q: "Which HTML element provides a drawable region?", options: ["draw", "paint", "canvas", "surface"], answer: "canvas" },
        { q: "Which HTML element encapsulates metadata?", options: ["body", "meta", "head", "title"], answer: "head" },
        { q: "Which Canvas method seals the current path?", options: ["endPath()", "closePath()", "finishPath()", "stopPath()"], answer: "closePath()" },
        { q: "Which CSS property assigns background pigment?", options: ["background-style", "background-color", "color", "fill"], answer: "background-color" },
        { q: "Which CSS property defines typeface grouping?", options: ["font", "font-style", "font-family", "typeface"], answer: "font-family" },
        { q: "Which Canvas method erases a defined pixel region?", options: ["deleteRect()", "wipeRect()", "clearRect()", "removeRect()"], answer: "clearRect()" },
        { q: "Which Canvas method draws semi-circles and circles?", options: ["curve()", "arc()", "circle()", "round()"], answer: "arc()" },
        { q: "Which CSS property controls animation timing length?", options: ["animation-speed", "animation-duration", "transition-time", "animation-delay"], answer: "animation-duration" },
        { q: "Which HTML element represents the highest heading?", options: ["h6", "heading", "h1", "header"], answer: "h1" },
        { q: "Which JavaScript operator checks strict inequality?", options: ["!=", "!!=", "!==", "!==="], answer: "!==" },
        { q: "Which Canvas method stores rendering state?", options: ["save()", "cache()", "hold()", "keep()"], answer: "save()" },
        { q: "Which HTML element generates selection menus?", options: ["option", "dropdown", "select", "menu"], answer: "select" },
        { q: "Which HTML element embeds external pages?", options: ["embed", "iframe", "frame", "object"], answer: "iframe" },
        { q: "Which Canvas method draws a line to coordinates?", options: ["drawTo()", "moveTo()", "lineTo()", "pathTo()"], answer: "lineTo()" },
        { q: "Which Canvas method renders textual output?", options: ["text()", "fillText()", "printText()", "drawFont()"], answer: "fillText()" },
        { q: "Which CSS property hides content but preserves layout space?", options: ["display", "opacity", "visibility", "hidden"], answer: "visibility" },
        { q: "Which HTML attribute disables input controls?", options: ["readonly", "inactive", "disabled", "locked"], answer: "disabled" },
        { q: "Which JavaScript keyword defines immutable variables?", options: ["let", "var", "const", "static"], answer: "const" },
        { q: "Which Canvas property controls alpha transparency?", options: ["opacity", "alpha", "globalAlpha", "transparency"], answer: "globalAlpha" },
        { q: "Which CSS property spaces flex children evenly?", options: ["align-items", "gap-content", "justify-content", "place-content"], answer: "justify-content" },
        { q: "Which HTML element directly creates user data entry controls?", options: ["form", "textarea", "input", "field"], answer: "input" },
        { q: "Which JavaScript function converts strings to numbers?", options: ["Number()", "parseInt()", "toNum()", "convert(num)"], answer: "parseInt()" },
        { q: "Which CSS property alters text casing?", options: ["font-style", "text-transform", "letter-spacing", "word-break"], answer: "text-transform" },
        { q: "Which HTML attribute controls image loading behavior?", options: ["async", "lazy", "loading", "defer"], answer: "loading" },
        { q: "Which HTML attribute assign initial cursor focus with scripting for an input?", options: ["focus", "selected", "autofocus", "active"], answer: "autofocus" },
        { q: "Which CSS property positions background imagery?", options: ["background-align", "background-origin", "background-position", "background-place"], answer: "background-position" },
        { q: "Which JavaScript operator checks loose equality?", options: ["===", "=", "==", "!=="], answer: "==" },
        { q: "Which DOM method retrieves an element by ID?", options: ["getelementbyId()", "getElementById()", "getElementbyId()", "getelementById()"], answer: "getElementById()" },
        { q: "Which HTML element represents keyboard input?", options: ["kbdIn", "keyboard-input", "kbd", "input-key"], answer: "kbd" },
        { q: "Which CSS property fits images within containers?", options: ["object-position", "image-fit", "object-fit", "background-size"], answer: "object-fit" }
    ],
};

// --- GLOBAL TIMER STATE ---
let globalTimer = {
    active: false,
    startTime: null,      
    endTime: null,        
    duration: 0,
    paused: false,
    pauseRemaining: 0
};

let studentSessions = new Map(); 
let timerHistory = [];

let studentCompletedPatterns = new Map(); 

let pendingSubmissions = new Map(); 

function shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function getAllStudentSessions() {
    return Array.from(studentSessions.values());
}

function updateStudentProgress(name, pattern, status, currentQuestion, totalQuestions) {
    if (!studentSessions.has(name)) {
        studentSessions.set(name, {
            name,
            pattern,
            status,
            currentQuestion: currentQuestion || 0,
            totalQuestions: totalQuestions || QUESTION_BANK[pattern]?.length || 30,
            lastActive: Date.now(),
            createdAt: Date.now(),
            completedPatterns: studentCompletedPatterns.get(name) || []
        });
    } else {
        const session = studentSessions.get(name);
        session.status = status;
        session.pattern = pattern;
        session.currentQuestion = currentQuestion || session.currentQuestion;
        session.lastActive = Date.now();
        session.completedPatterns = studentCompletedPatterns.get(name) || [];
        studentSessions.set(name, session);
    }
}

function cleanupOldSessions() {
    const sixHoursAgo = Date.now() - 21600000;
    for (const [name, session] of studentSessions.entries()) {
        if (session.lastActive < sixHoursAgo) {
            studentSessions.delete(name);
        }
    }
    
    for (const [name, submission] of pendingSubmissions.entries()) {
        if (Date.now() - submission.timestamp > 3600000) { // 1 hour
            pendingSubmissions.delete(name);
        }
    }
}

setInterval(cleanupOldSessions, 600000);

function canStartExam() {
    const now = Date.now();
    
    if (!globalTimer.active) {
        return { canStart: false, reason: "Timer not active. Exam window not open." };
    }
    
    if (globalTimer.paused) {
        return { canStart: false, reason: "Timer is paused. Exam window not open." };
    }
    
    if (globalTimer.startTime && now < globalTimer.startTime) {
        const timeLeft = globalTimer.startTime - now;
        const minutes = Math.floor(timeLeft / 60000);
        const seconds = Math.floor((timeLeft % 60000) / 1000);
        return { 
            canStart: false, 
            reason: `Exam window opens in ${minutes}m ${seconds}s` 
        };
    }
    
    if (globalTimer.endTime && now > globalTimer.endTime) {
        return { canStart: false, reason: "Exam window has closed." };
    }
    
    return { canStart: true, reason: "Exam window is open." };
}

function canSubmitExam() {
    const now = Date.now();
    
    if (!globalTimer.active) {
        return { canSubmit: false, reason: "Timer not active. Cannot submit." };
    }
    
    if (globalTimer.paused) {
        return { canSubmit: false, reason: "Timer is paused. Cannot submit." };
    }
    
    if (globalTimer.startTime && now < globalTimer.startTime) {
        return { canSubmit: false, reason: "Exam window hasn't opened yet." };
    }
    
    if (globalTimer.endTime && now > globalTimer.endTime) {
        return { canSubmit: true, reason: "Timer ended, can submit." };
    }
    
    return { canSubmit: true, reason: "Can submit within exam window." };
}


function getTimerStatus() {
    const now = Date.now();
    
    if (!globalTimer.active) {
        return {
            active: false,
            message: "No active exam window",
            startTime: null,
            endTime: null,
            remaining: 0,
            canStart: false,
            canSubmit: false
        };
    }
    
    if (globalTimer.paused) {
        return {
            active: true,
            paused: true,
            message: "Timer paused",
            startTime: globalTimer.startTime,
            endTime: globalTimer.endTime,
            remaining: globalTimer.pauseRemaining,
            canStart: false,
            canSubmit: false
        };
    }
    
    if (globalTimer.startTime && now < globalTimer.startTime) {
        const timeLeft = globalTimer.startTime - now;
        return {
            active: true,
            message: `Exam starts in ${Math.floor(timeLeft / 60000)}m ${Math.floor((timeLeft % 60000) / 1000)}s`,
            startTime: globalTimer.startTime,
            endTime: globalTimer.endTime,
            remaining: timeLeft,
            canStart: false,
            canSubmit: false
        };
    }
    
    if (globalTimer.endTime && now > globalTimer.endTime) {
        return {
            active: true,
            message: "Exam window closed",
            startTime: globalTimer.startTime,
            endTime: globalTimer.endTime,
            remaining: 0,
            canStart: false,
            canSubmit: true
        };
    }
    
    if (globalTimer.endTime && now <= globalTimer.endTime) {
        const timeLeft = globalTimer.endTime - now;
        return {
            active: true,
            message: `Exam ends in ${Math.floor(timeLeft / 60000)}m ${Math.floor((timeLeft % 60000) / 1000)}s`,
            startTime: globalTimer.startTime,
            endTime: globalTimer.endTime,
            remaining: timeLeft,
            canStart: true,
            canSubmit: true
        };
    }
    
    return {
        active: true,
        message: "Exam window open",
        startTime: globalTimer.startTime,
        endTime: globalTimer.endTime,
        remaining: globalTimer.endTime ? globalTimer.endTime - now : 0,
        canStart: true,
        canSubmit: true
    };
}

app.post('/api/login', (req, res) => {
    const { name, pattern, password } = req.body;

    if (!name || !pattern || !password) {
        return res.status(400).json({ error: "Missing fields" });
    }

    if (PASSWORDS[pattern] !== password) {
        return res.status(401).json({ error: "Invalid password for selected pattern" });
    }

    const completedPatterns = studentCompletedPatterns.get(name) || [];
    if (completedPatterns.includes(pattern)) {
        return res.status(403).json({ 
            error: `Pattern ${pattern} is already completed. You cannot retake it.` 
        });
    }


    if (pendingSubmissions.has(name)) {
        return res.status(403).json({ 
            error: `You have a pending submission. Please wait for the timer to end.` 
        });
    }

    const timerStatus = getTimerStatus();
    if (!timerStatus.canStart) {
        return res.status(403).json({ 
            error: `Cannot start exam now. ${timerStatus.message}` 
        });
    }
    const sessionData = {
        name,
        pattern,
        status: 'ready',
        score: null,
        startTime: null,
        currentQuestion: 0,
        submittedAnswers: null
    };

    res.cookie('session', sessionData, {
        httpOnly: true,
        signed: true,
        maxAge: 7200000 // 2 hours
    });

    updateStudentProgress(name, pattern, 'ready', 0, QUESTION_BANK[pattern]?.length);

    res.json({ 
        success: true, 
        message: "Logged in",
        timerStatus: timerStatus
    });
});

//CHECK STATUS
app.get('/api/me', (req, res) => {
    const session = req.signedCookies.session;
    if (!session) {
        return res.json({ loggedIn: false });
    }
    
    
    const completedPatterns = studentCompletedPatterns.get(session.name) || [];
    
    if (session.status === 'started') {
        updateStudentProgress(session.name, session.pattern, 'started', 
                             session.currentQuestion || 0, 
                             QUESTION_BANK[session.pattern]?.length);
    } else if (session.status === 'waiting') {
        updateStudentProgress(session.name, session.pattern, 'waiting', 
                             QUESTION_BANK[session.pattern]?.length, 
                             QUESTION_BANK[session.pattern]?.length);
    }
    
    const timerStatus = getTimerStatus();
    
    return res.json({
        loggedIn: true,
        name: session.name,
        pattern: session.pattern,
        status: session.status,
        score: session.score,
        totalQuestions: QUESTION_BANK[session.pattern]?.length || 30,
        currentQuestion: session.currentQuestion || 0,
        completedPatterns: completedPatterns,
        timerStatus: timerStatus
    });
});


app.get('/api/completed-patterns', (req, res) => {
    const session = req.signedCookies.session;
    if (!session) {
        return res.json({ completedPatterns: [] });
    }
    
    const completedPatterns = studentCompletedPatterns.get(session.name) || [];
    res.json({ completedPatterns });
});

app.get('/api/timer/status', (req, res) => {
    res.json(getTimerStatus());
});

app.post('/api/start-v2', (req, res) => {
    const session = req.signedCookies.session;
    if (!session) return res.status(401).json({ error: "Not logged in" });

   
    const timerStatus = getTimerStatus();
    if (!timerStatus.canStart) {
        return res.status(403).json({ 
            error: `Cannot start exam now. ${timerStatus.message}` 
        });
    }

    const completedPatterns = studentCompletedPatterns.get(session.name) || [];
    if (completedPatterns.includes(session.pattern)) {
        return res.status(403).json({ 
            error: `Pattern ${session.pattern} is already completed. You cannot retake it.` 
        });
    }

    if (pendingSubmissions.has(session.name)) {
        return res.status(403).json({ 
            error: `You have a pending submission. Please wait for the timer to end. Status: waiting` 
        });
    }

    if (session.status === 'completed') {
        return res.status(403).json({ error: "Test already completed. You cannot retake it." });
    }

    if (session.status === 'failed') {
        return res.status(403).json({ error: "Test failed. Please use second chance." });
    }

    const fullBank = QUESTION_BANK[session.pattern];
    if (!fullBank) {
        return res.status(400).json({ error: "Invalid pattern" });
    }

    const indices = Array.from({ length: fullBank.length }, (_, i) => i);
    const shuffledIndices = shuffle(indices);

    session.questionOrder = shuffledIndices;
    session.status = 'started';
    session.currentQuestion = 0;
    session.startTime = Date.now();
    session.submittedAnswers = null;

    res.cookie('session', session, { httpOnly: true, signed: true, maxAge: 7200000 });

    updateStudentProgress(session.name, session.pattern, 'started', 0, fullBank.length);

    const questionsToSend = shuffledIndices.map(i => {
        const q = fullBank[i];
        return {
            q: q.q,
            options: shuffle(q.options),
            id: i
        };
    });

    res.json({ 
        questions: questionsToSend,
        timerStatus: timerStatus
    });
});

app.post('/api/submit-v2', (req, res) => {
    const session = req.signedCookies.session;
    if (!session) return res.status(401).json({ error: "Not logged in" });

    if (session.status === 'completed') {
        return res.json({ 
            score: session.score, 
            total: QUESTION_BANK[session.pattern]?.length || 30, 
            alreadyCompleted: true 
        });
    }

    const { answers } = req.body;

    if (!session.questionOrder) {
        return res.status(400).json({ error: "Exam not started appropriately." });
    }

    const fullBank = QUESTION_BANK[session.pattern];
    if (!fullBank) {
        return res.status(400).json({ error: "Invalid pattern" });
    }

    let score = 0;
    const results = [];

    session.questionOrder.forEach((originalIndex, i) => {
        const userAns = answers[i];
        const correctAns = fullBank[originalIndex].answer;
        const isCorrect = userAns === correctAns;

        if (isCorrect) score++;

        results.push({
            q: fullBank[originalIndex].q,
            userAns: userAns || "Skipped",
            correctAns: correctAns,
            isCorrect
        });
    });

    const timerStatus = getTimerStatus();
    const now = Date.now();
    
    if (globalTimer.active && !globalTimer.paused && globalTimer.endTime && globalTimer.endTime > now) {
        pendingSubmissions.set(session.name, {
            pattern: session.pattern,
            answers: answers,
            timestamp: now,
            results: results,
            score: score,
            total: fullBank.length
        });

        session.status = 'waiting';
        session.submittedAnswers = answers;
        
        res.cookie('session', session, { httpOnly: true, signed: true, maxAge: 7200000 });
        
        updateStudentProgress(session.name, session.pattern, 'waiting', fullBank.length, fullBank.length);

        return res.json({
            waiting: true,
            message: "Exam submitted. Waiting for timer to end.",
            remainingTime: globalTimer.endTime - now,
            score: score,
            total: fullBank.length,
            timerEndsAt: globalTimer.endTime
        });
    } else {
      
        session.status = 'completed';
        session.score = score;
        session.currentQuestion = fullBank.length;
        session.submittedAnswers = answers;

        res.cookie('session', session, { httpOnly: true, signed: true, maxAge: 7200000 });

        const completedPatterns = studentCompletedPatterns.get(session.name) || [];
        if (!completedPatterns.includes(session.pattern)) {
            completedPatterns.push(session.pattern);
            studentCompletedPatterns.set(session.name, completedPatterns);
        }

        updateStudentProgress(session.name, session.pattern, 'completed', fullBank.length, fullBank.length);

        return res.json({
            score,
            total: fullBank.length,
            results,
            name: session.name,
            pattern: session.pattern,
            completedPatterns: completedPatterns,
            waiting: false
        });
    }
});


app.get('/api/check-results', (req, res) => {
    const session = req.signedCookies.session;
    if (!session) return res.status(401).json({ error: "Not logged in" });

    const now = Date.now();
    if (globalTimer.active && !globalTimer.paused && globalTimer.endTime && globalTimer.endTime > now) {

        return res.json({ 
            completed: false, 
            remaining: globalTimer.endTime - now,
            message: "Waiting for timer to end..."
        });
    }

    if (pendingSubmissions.has(session.name)) {
        const submission = pendingSubmissions.get(session.name);
        
        session.status = 'completed';
        session.score = submission.score;
        session.currentQuestion = QUESTION_BANK[session.pattern]?.length || 30;
        session.submittedAnswers = submission.answers;

        res.cookie('session', session, { httpOnly: true, signed: true, maxAge: 7200000 });

        const completedPatterns = studentCompletedPatterns.get(session.name) || [];
        if (!completedPatterns.includes(session.pattern)) {
            completedPatterns.push(session.pattern);
            studentCompletedPatterns.set(session.name, completedPatterns);
        }

        updateStudentProgress(session.name, session.pattern, 'completed', 
                             QUESTION_BANK[session.pattern]?.length, 
                             QUESTION_BANK[session.pattern]?.length);

        pendingSubmissions.delete(session.name);

        return res.json({
            completed: true,
            score: submission.score,
            total: submission.total,
            results: submission.results,
            name: session.name,
            pattern: session.pattern,
            completedPatterns: completedPatterns
        });
    } else if (session.status === 'completed') {

        const fullBank = QUESTION_BANK[session.pattern];
        return res.json({
            completed: true,
            score: session.score,
            total: fullBank?.length || 30,
            alreadyCompleted: true
        });
    } else {
        return res.json({ 
            completed: false, 
            error: "No pending submission found" 
        });
    }
});

app.post('/api/retry', (req, res) => {
    const session = req.signedCookies.session;
    if (!session) return res.status(401).json({ error: "Not logged in" });

    const { code } = req.body;
    if (code !== SECOND_PASS) {
        return res.status(400).json({ error: "Invalid Second Chance Code" });
    }

    if (pendingSubmissions.has(session.name)) {
        pendingSubmissions.delete(session.name);
    }

    const timerStatus = getTimerStatus();
    if (!timerStatus.canStart) {
        return res.status(403).json({ 
            error: `Cannot retry exam now. ${timerStatus.message}` 
        });
    }

    session.status = 'ready';
    session.score = null;
    session.questionOrder = null;
    session.currentQuestion = 0;
    session.submittedAnswers = null;

    res.cookie('session', session, { httpOnly: true, signed: true, maxAge: 7200000 });

    updateStudentProgress(session.name, session.pattern, 'ready', 0, QUESTION_BANK[session.pattern]?.length);

    res.json({ 
        success: true, 
        message: "Use the chance wisely.",
        timerStatus: timerStatus
    });
});

app.post('/api/fail', (req, res) => {
    const session = req.signedCookies.session;
    if (session) {
        session.status = 'failed';
        res.cookie('session', session, { httpOnly: true, signed: true, maxAge: 7200000 });
        
        updateStudentProgress(session.name, session.pattern, 'failed', 
                             session.currentQuestion || 0, 
                             QUESTION_BANK[session.pattern]?.length);
    }
    res.json({ success: true });
});

app.post('/api/fail-waiting', (req, res) => {
    const session = req.signedCookies.session;
    if (session) {
        session.status = 'failed';
        res.cookie('session', session, { httpOnly: true, signed: true, maxAge: 7200000 });
    
        if (pendingSubmissions.has(session.name)) {
            pendingSubmissions.delete(session.name);
        }
        
        updateStudentProgress(session.name, session.pattern, 'failed', 
                             QUESTION_BANK[session.pattern]?.length, 
                             QUESTION_BANK[session.pattern]?.length);
    }
    res.json({ success: true });
});

app.post('/api/update-progress', (req, res) => {
    const session = req.signedCookies.session;
    if (!session) return res.status(401).json({ error: "Not logged in" });

    const { currentQuestion } = req.body;
    session.currentQuestion = currentQuestion || 0;
    
    res.cookie('session', session, { httpOnly: true, signed: true, maxAge: 7200000 });
    
    if (session.status === 'started') {
        updateStudentProgress(session.name, session.pattern, 'started', 
                             currentQuestion, 
                             QUESTION_BANK[session.pattern]?.length);
    }
    
    res.json({ success: true });
});

app.get('/api/timer/can-submit', (req, res) => {
    const timerStatus = getTimerStatus();

    if (globalTimer.active && !globalTimer.paused && globalTimer.endTime) {
        const now = Date.now();
        if (globalTimer.endTime > now) {
            res.json({ 
                canSubmit: false, 
                remaining: globalTimer.endTime - now,
                message: "Cannot submit until timer ends"
            });
            return;
        }
    }
    
    res.json({ 
        canSubmit: true, 
        remaining: 0,
        message: "Can submit"
    });
});

app.post('/api/admin/login', (req, res) => {
    const { name, password } = req.body;
    
    if (name === ADMIN_CREDENTIALS.name && password === ADMIN_CREDENTIALS.password) {
        res.cookie('admin', { loggedIn: true, name }, { 
            httpOnly: true, 
            signed: true, 
            maxAge: 3600000 // 1 hour
        });
        res.json({ success: true });
    } else {
        res.status(401).json({ error: "Invalid admin credentials" });
    }
});

function checkAdminAuth(req, res, next) {
    const adminSession = req.signedCookies.admin;
    if (!adminSession || !adminSession.loggedIn) {
        return res.status(401).json({ error: "Admin authentication required" });
    }
    next();
}

app.get('/api/admin/stats', checkAdminAuth, (req, res) => {
    const sessions = getAllStudentSessions();
    
    const stats = {
        totalStudents: sessions.length,
        activeExams: sessions.filter(s => s.status === 'started').length,
        completedExams: sessions.filter(s => s.status === 'completed').length,
        failedExams: sessions.filter(s => s.status === 'failed').length,
        waitingExams: sessions.filter(s => s.status === 'waiting').length,
        readyStudents: sessions.filter(s => s.status === 'ready').length,
        pendingSubmissions: pendingSubmissions.size,
        globalTimer: globalTimer,
        timerStatus: getTimerStatus()
    };
    
    res.json(stats);
});

app.get('/api/admin/timer', checkAdminAuth, (req, res) => {
    const response = {
        ...globalTimer,
        status: getTimerStatus(),
        history: timerHistory.slice(-10)
    };
    res.json(response);
});

app.post('/api/admin/timer/set', checkAdminAuth, (req, res) => {
    const { startInMinutes, durationMinutes } = req.body;
    
    if (durationMinutes <= 0) {
        return res.status(400).json({ error: "Invalid duration" });
    }
    
    const now = Date.now();
    const startTime = startInMinutes > 0 ? now + (startInMinutes * 60000) : now;
    const endTime = startTime + (durationMinutes * 60000);
    
    globalTimer = {
        active: true,
        startTime: startTime,
        endTime: endTime,
        duration: durationMinutes * 60,
        paused: false,
        pauseRemaining: 0
    };
    
    timerHistory.push({
        action: 'set',
        startInMinutes: startInMinutes,
        durationMinutes: durationMinutes,
        startTime: startTime,
        endTime: endTime,
        timestamp: new Date().toISOString()
    });
    
    if (timerHistory.length > 50) {
        timerHistory = timerHistory.slice(-50);
    }
    
    res.json({ 
        success: true, 
        timer: globalTimer,
        status: getTimerStatus(),
        message: `Timer set: Starts in ${startInMinutes} minutes, runs for ${durationMinutes} minutes`
    });
});

app.post('/api/admin/timer/start', checkAdminAuth, (req, res) => {
    const { duration } = req.body;
    
    if (duration <= 0) {
        return res.status(400).json({ error: "Invalid duration" });
    }
    
    const startTime = Date.now();
    const endTime = startTime + (duration * 1000);
    
    globalTimer = {
        active: true,
        startTime: startTime,
        endTime: endTime,
        duration: duration,
        paused: false,
        pauseRemaining: 0
    };
    
    timerHistory.push({
        action: 'start',
        duration: duration,
        startTime: startTime,
        endTime: endTime,
        timestamp: new Date().toISOString()
    });
    
    if (timerHistory.length > 50) {
        timerHistory = timerHistory.slice(-50);
    }

    checkPendingSubmissions();
    
    res.json({ 
        success: true, 
        timer: globalTimer,
        status: getTimerStatus()
    });
});

app.post('/api/admin/timer/pause', checkAdminAuth, (req, res) => {
    if (!globalTimer.active || globalTimer.paused) {
        return res.status(400).json({ error: "Timer is not running" });
    }
    
    const now = Date.now();
    globalTimer.pauseRemaining = globalTimer.endTime - now;
    globalTimer.paused = true;
    
    timerHistory.push({
        action: 'pause',
        pauseRemaining: globalTimer.pauseRemaining,
        timestamp: new Date().toISOString()
    });
    
    res.json({ 
        success: true, 
        timer: globalTimer,
        status: getTimerStatus()
    });
});

app.post('/api/admin/timer/resume', checkAdminAuth, (req, res) => {
    if (!globalTimer.active || !globalTimer.paused) {
        return res.status(400).json({ error: "Timer is not paused" });
    }
    
    globalTimer.endTime = Date.now() + globalTimer.pauseRemaining;
    globalTimer.paused = false;
    globalTimer.pauseRemaining = 0;
    
    timerHistory.push({
        action: 'resume',
        endTime: globalTimer.endTime,
        timestamp: new Date().toISOString()
    });
    
    res.json({ 
        success: true, 
        timer: globalTimer,
        status: getTimerStatus()
    });
});

app.post('/api/admin/timer/stop', checkAdminAuth, (req, res) => {
    globalTimer = {
        active: false,
        startTime: null,
        endTime: null,
        duration: 0,
        paused: false,
        pauseRemaining: 0
    };
    
    timerHistory.push({
        action: 'stop',
        timestamp: new Date().toISOString()
    });
   
    checkPendingSubmissions();
    
    res.json({ 
        success: true, 
        timer: globalTimer,
        status: getTimerStatus()
    });
});

function checkPendingSubmissions() {
    const now = Date.now();
    if (!globalTimer.active || (globalTimer.endTime && globalTimer.endTime <= now)) {
        // Timer ended or not active, process pending submissions
        for (const [name, submission] of pendingSubmissions.entries()) {
            // Update student session if it exists
            if (studentSessions.has(name)) {
                const session = studentSessions.get(name);
                session.status = 'completed';
                session.score = submission.score;
                session.currentQuestion = QUESTION_BANK[session.pattern]?.length || 30;
                studentSessions.set(name, session);
            }
  
            const completedPatterns = studentCompletedPatterns.get(name) || [];
            if (!completedPatterns.includes(submission.pattern)) {
                completedPatterns.push(submission.pattern);
                studentCompletedPatterns.set(name, completedPatterns);
            }
        }
   
        pendingSubmissions.clear();
    }
}

app.get('/api/admin/students', checkAdminAuth, (req, res) => {
    const sessions = getAllStudentSessions();
    
    const studentsWithProgress = sessions.map(session => {
        const progress = session.totalQuestions > 0 
            ? Math.round((session.currentQuestion / session.totalQuestions) * 100) 
            : 0;
        
        return {
            ...session,
            progress,
            completedPatterns: studentCompletedPatterns.get(session.name) || [],
            lastActiveFormatted: new Date(session.lastActive).toLocaleTimeString(),
            createdFormatted: new Date(session.createdAt).toLocaleTimeString()
        };
    });
    
    studentsWithProgress.sort((a, b) => b.lastActive - a.lastActive);
    
    res.json(studentsWithProgress);
});

app.post('/api/admin/end-exam', checkAdminAuth, (req, res) => {
    const { studentName } = req.body;
    
    if (studentSessions.has(studentName)) {
        const session = studentSessions.get(studentName);
        session.status = 'failed';
        session.lastActive = Date.now();
        studentSessions.set(studentName, session);
    
        if (pendingSubmissions.has(studentName)) {
            pendingSubmissions.delete(studentName);
        }
        
        res.json({ success: true, message: `Exam ended for ${studentName}` });
    } else {
        res.json({ success: true, message: `Student session not found in memory, but request processed` });
    }
});

app.post('/api/admin/clear-completed', checkAdminAuth, (req, res) => {
    const { studentName } = req.body;
    
    if (studentCompletedPatterns.has(studentName)) {
        studentCompletedPatterns.delete(studentName);
        res.json({ success: true, message: `Cleared completed patterns for ${studentName}` });
    } else {
        res.json({ success: true, message: `No completed patterns found for ${studentName}` });
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

if (require.main === module) {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app;
