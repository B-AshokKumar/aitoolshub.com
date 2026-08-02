/* ======================================
   AI Learning Hub
   quiz.js
====================================== */

const params = new URLSearchParams(window.location.search);

const lessonId = Number(params.get("id"));

const quiz = quizzes.find(q => q.lessonId === lessonId);

const quizTitle = document.getElementById("quizTitle");
const quizProgress = document.getElementById("quizProgress");
const quizProgressFill = document.getElementById("quizProgressFill");
const question = document.getElementById("question");
const answers = document.getElementById("answers");
const nextQuestionBtn = document.getElementById("nextQuestionBtn");

let currentQuestion = 0;
let score = 0;

if (!quiz) {

    quizTitle.textContent = "Quiz Not Available";

    question.textContent =
        "No quiz found for this lesson.";

    nextQuestionBtn.style.display = "none";

} else {

    quizTitle.textContent =
        "Lesson " + lessonId + " Quiz";

    showQuestion();

}

function showQuestion() {

    const q = quiz.questions[currentQuestion];

    quizProgress.textContent =
        "Question " +
        (currentQuestion + 1) +
        " of " +
        quiz.questions.length;

    const progress =
        ((currentQuestion + 1) /
        quiz.questions.length) * 100;

    quizProgressFill.style.width =
        progress + "%";

    question.textContent = q.question;

    answers.innerHTML = "";

    const options = q.options.map((text, index) => ({

        text,

        correct: index === q.answer

    }));

    // Fisher-Yates Shuffle

    for (let i = options.length - 1; i > 0; i--) {

        const j =
        Math.floor(Math.random() * (i + 1));

        [options[i], options[j]] =
        [options[j], options[i]];

    }

    options.forEach(option => {

        const button =
        document.createElement("button");

        button.className = "quiz-option";

button.textContent = option.text;

// Store whether this is the correct answer
button.dataset.correct = option.correct;

        button.onclick = function () {

            checkAnswer(button, option.correct);

        };

        answers.appendChild(button);

    });

}

function checkAnswer(button, correct) {

    const buttons =
        document.querySelectorAll(".quiz-option");

    buttons.forEach(btn => {

        btn.disabled = true;

    });

    if (correct) {

        score++;

        button.style.background = "#16a34a";
        button.style.color = "#fff";

    } else {

        button.style.background = "#dc2626";
        button.style.color = "#fff";

        const q = quiz.questions[currentQuestion];

        buttons.forEach(btn => {

    if (btn.dataset.correct === "true") {

        btn.style.background = "#16a34a";
        btn.style.color = "#fff";

    }

});

    }

    nextQuestionBtn.style.display = "inline-block";

}

function showResult() {

    quizProgress.textContent = "Completed";

    quizProgressFill.style.width = "100%";

    question.innerHTML = "🎉 Quiz Completed!";

    const percentage =
        (score / quiz.questions.length) * 100;

    let stars = "";
    let message = "";

    if (percentage === 100) {

        stars = "⭐⭐⭐⭐⭐";
        message = "Excellent!";

    } else if (percentage >= 80) {

        stars = "⭐⭐⭐⭐";
        message = "Very Good!";

    } else if (percentage >= 60) {

        stars = "⭐⭐⭐";
        message = "Good Job!";

    } else if (percentage >= 40) {

        stars = "⭐⭐";
        message = "Keep Practising!";

    } else {

        stars = "⭐";
        message = "Keep Practising!";

    }

    // Save Best Score

    const key = "quiz_" + lessonId;

    const bestScore =
        Number(localStorage.getItem(key) || 0);

    if (score > bestScore) {

        localStorage.setItem(key, score);

    }

    answers.innerHTML = `

        <div class="quiz-result">

            <h2>${score} / ${quiz.questions.length}</h2>

            <p>
                Best Score:
                ${localStorage.getItem(key)}
                /
                ${quiz.questions.length}
                🏆
            </p>

            <div class="quiz-stars">
                ${stars}
            </div>

            <p>${message}</p>

            <button onclick="location.reload()">
                🔄 Retry Quiz
            </button>

            <button onclick="history.back()">
                📘 Back to Lesson
            </button>

            <button onclick="location.href='study.html'">
                🏠 Learning Hub
            </button>

        </div>

    `;

    nextQuestionBtn.style.display = "none";

}

nextQuestionBtn.onclick = function () {

    currentQuestion++;

    nextQuestionBtn.style.display = "none";

    if (currentQuestion < quiz.questions.length) {

        showQuestion();

    } else {

        showResult();

    }

};
