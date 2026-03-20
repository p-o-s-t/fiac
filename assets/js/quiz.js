// assets/js/quiz.js

let questions = [];
let currentQuestionIndex = 0;
let score = 0;

async function loadQuestions(topic) {
    try {
        // Determine path based on current location (root vs subfolder)
        const isSubfolder = window.location.pathname.includes('/lessons/') || window.location.pathname.includes('/challenges/');
        const path = isSubfolder ? '../data/questions.json' : 'data/questions.json';
        
        const response = await fetch(path);
        if (!response.ok) throw new Error('Network response was not ok');
        
        const data = await response.json();
        const filtered = data.filter(q => q.topic === topic || topic === 'all');
        
        // Shuffle and pick max 5
        questions = filtered.sort(() => Math.random() - 0.5).slice(0, 5);
        console.log(`Loaded ${questions.length} questions for ${topic}`);
    } catch (error) {
        console.error('Error loading questions:', error);
        // We leave questions as [] to be handled by displayQuestion
    }
}

function displayQuestion() {
    const quizContainer = document.getElementById('quiz-container');
    if (!quizContainer) return;

    if (questions.length === 0) {
        quizContainer.innerHTML = `
            <div style="padding: 20px; border: 1px solid #ef9a9a; border-radius: 4px; background: rgba(239, 154, 154, 0.1);">
                <p style="color: #ef9a9a; margin-bottom: 10px;"><strong>Error:</strong> Failed to load questions.</p>
                <p style="font-size: 0.9rem;">This usually happens if you are opening the HTML file directly. Please run the project through a web server (e.g., Live Server, python -m http.server, etc.) or host it on GitHub Pages.</p>
                <button class="btn" onclick="location.reload()" style="margin-top: 10px;">Retry</button>
            </div>
        `;
        return;
    }
    
    const question = questions[currentQuestionIndex];
    
    quizContainer.innerHTML = `
        <div class="quiz-question">
            <p style="font-size: 0.8rem; color: var(--light-grey); margin-bottom: 10px;">Question ${currentQuestionIndex + 1} of ${questions.length}</p>
            <h3>${question.question}</h3>
            <div class="options">
                ${question.options.map((option, index) => `
                    <button class="option-btn" onclick="checkAnswer(${index})">${option}</button>
                `).join('')}
            </div>
        </div>
    `;
}

function checkAnswer(selectedIndex) {
    const question = questions[currentQuestionIndex];
    const btns = document.querySelectorAll('.option-btn');
    
    btns.forEach((btn, index) => {
        btn.disabled = true;
        if (index === question.answer) {
            btn.classList.add('correct');
        } else if (index === selectedIndex) {
            btn.classList.add('incorrect');
        }
    });
    
    if (selectedIndex === question.answer) {
        score++;
    }
    
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            displayQuestion();
        } else {
            showResults();
        }
    }, 1500);
}

function showResults() {
    const quizContainer = document.getElementById('quiz-container');
    
    // Mark progress if the user got at least 50% correct
    if (typeof markCompleted === 'function' && score >= (questions.length / 2)) {
        const urlPath = window.location.pathname;
        const pageId = urlPath.split('/').pop().split('.')[0];
        markCompleted(pageId);
    }

    quizContainer.innerHTML = `
        <div class="quiz-results">
            <h3>Knowledge Check Complete!</h3>
            <p style="font-size: 1.5rem; margin-bottom: 20px;">Score: ${score} / ${questions.length}</p>
            <p style="margin-bottom: 20px; color: var(--light-grey);">${score >= (questions.length / 2) ? 'Excellent work! You have mastered this topic.' : 'Keep practicing to improve your score!'}</p>
            <div style="display: flex; gap: 10px; justify-content: center;">
                <button class="btn" onclick="location.reload()">Try Again</button>
                <button class="btn" onclick="location.href='../index.html'">Finish Lesson</button>
            </div>
        </div>
    `;
}

// Global functions attached to window for inline onclick access
window.startQuiz = async (topic) => {
    currentQuestionIndex = 0;
    score = 0;
    await loadQuestions(topic);
    displayQuestion();
};

window.checkAnswer = checkAnswer;
