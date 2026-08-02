window.onerror = function(message, source, line, column, error) {
    alert(
        "Error:\n\n" +
        message +
        "\n\nLine: " + line
    );
};

alert("quiz.js loaded");
const params = new URLSearchParams(window.location.search);

const lessonId = Number(params.get("id"));

const quiz = quizzes.find(q => q.lessonId === lessonId);

let shuffledQuestions = [];

if (quiz) {
    shuffledQuestions = quiz.questions;
}

const quizTitle = document.getElementById("quizTitle");
const quizProgress = document.getElementById("quizProgress");
const question = document.getElementById("question");
const answers = document.getElementById("answers");
const nextQuestionBtn = document.getElementById("nextQuestionBtn");
const quizProgressFill = document.getElementById("quizProgressFill");

alert(
"quizTitle: " + !!quizTitle +
"\nquizProgress: " + !!quizProgress +
"\nquestion: " + !!question +
"\nanswers: " + !!answers +
"\nnextButton: " + !!nextQuestionBtn +
"\nprogressFill: " + !!quizProgressFill
);

let currentQuestion = 0;
let score = 0;

if (!quiz) {

    quizTitle.textContent = "Quiz Not Available";
    quizProgress.textContent = "";
    question.textContent = "No quiz has been created for this lesson yet.";

} else {

    quizTitle.textContent = "Lesson " + lessonId + " Quiz";
    if (shuffledQuestions.length === 0) {

    quizProgress.textContent = "";

    question.textContent = "This quiz has no questions yet.";

    return;

}

    showQuestion();

}

function showQuestion() {

    const q = shuffledQuestions[currentQuestion];

    const options = q.options.map((option, index) => ({
    text: option,
    correct: index === q.answer
}));

// Fisher-Yates Shuffle
for (let i = options.length - 1; i > 0; i--) {

    const j = Math.floor(Math.random() * (i + 1));

    [options[i], options[j]] = [options[j], options[i]];

}

    quizProgress.textContent =
        "Question " + (currentQuestion + 1) +
        " of " + shuffledQuestions.length;

    const progress =
((currentQuestion + 1) / shuffledQuestions.length) * 100;

document.getElementById("quizProgressFill").style.width =
progress + "%";
    question.textContent = q.question;

    answers.innerHTML = "";

    options.forEach((option) => {

    const button = document.createElement("button");

    button.textContent = option.text;

    button.className = "quiz-option";

    button.onclick = function () {

        document
            .querySelectorAll(".quiz-option")
            .forEach(btn => btn.disabled = true);

        if(option.correct){

            score++;

            button.style.background = "#16a34a";

        }else{

            button.style.background = "#dc2626";

            document.querySelectorAll(".quiz-option")
.forEach((btn, i) => {

    if(options[i].correct){

        btn.style.background = "#16a34a";

    }

});

        }

        nextQuestionBtn.style.display = "block";

    };

    answers.appendChild(button);

});

}

function showResult() {

    quizProgress.textContent = "Completed";

    document.getElementById("quizProgressFill").style.width = "100%";
    question.innerHTML = "🎉 Quiz Completed!";

    let stars = "";

    const percentage = (score / shuffledQuestions.length) * 100;

    if (percentage === 100) {

        stars = "⭐⭐⭐⭐⭐";

    } else if (percentage >= 80) {

        stars = "⭐⭐⭐⭐";

    } else if (percentage >= 60) {

        stars = "⭐⭐⭐";

    } else if (percentage >= 40) {

        stars = "⭐⭐";

    } else {

        stars = "⭐";

    }

    let message = "";

    if (percentage === 100) {

        message = "Excellent!";

    } else if (percentage >= 80) {

        message = "Very Good!";

    } else if (percentage >= 60) {

        message = "Good Job!";

    } else {

        message = "Keep Practising!";
    }

    // Save best score
const bestScore = localStorage.getItem("quiz_" + lessonId);

if (!bestScore || score > Number(bestScore)) {

    localStorage.setItem("quiz_" + lessonId, score);

}
    
    answers.innerHTML = `

        <div class="quiz-result">

            <h2>${score} / ${shuffledQuestions.length}</h2>

<p>
Best Score:
${localStorage.getItem("quiz_" + lessonId)}
/
${shuffledQuestions.length}
🏆
</p>

            <div class="quiz-stars">${stars}</div>

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

}

nextQuestionBtn.onclick = function(){

    currentQuestion++;

    nextQuestionBtn.style.display = "none";

    if(currentQuestion < shuffledQuestions.length){

        showQuestion();

    }else{

        showResult();

    }

};
