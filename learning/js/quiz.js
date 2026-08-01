const params = new URLSearchParams(window.location.search);

const lessonId = Number(params.get("id"));

const quiz = quizzes.find(q => q.lessonId === lessonId);

const quizTitle = document.getElementById("quizTitle");
const quizProgress = document.getElementById("quizProgress");
const question = document.getElementById("question");
const answers = document.getElementById("answers");

const nextQuestionBtn =
document.getElementById("nextQuestionBtn");

let currentQuestion = 0;
let score = 0;

if (!quiz) {

    quizTitle.textContent = "Quiz Not Available";
    quizProgress.textContent = "";
    question.textContent = "No quiz has been created for this lesson yet.";

} else {

    quizTitle.textContent = "Lesson " + lessonId + " Quiz";

    showQuestion();

}

function showQuestion() {

    const q = quiz.questions[currentQuestion];

    quizProgress.textContent =
        "Question " + (currentQuestion + 1) +
        " of " + quiz.questions.length;

    question.textContent = q.question;

    answers.innerHTML = "";

    q.options.forEach((option, index) => {

    const button = document.createElement("button");

    button.textContent = option;

    button.className = "quiz-option";

    button.onclick = function () {

        document
            .querySelectorAll(".quiz-option")
            .forEach(btn => btn.disabled = true);

        if(index === q.answer){

            score++;

            button.style.background = "#16a34a";

        }else{

            button.style.background = "#dc2626";

            document
                .querySelectorAll(".quiz-option")[q.answer]
                .style.background = "#16a34a";

        }

        nextQuestionBtn.style.display = "block";

    };

    answers.appendChild(button);

});

}

function showResult() {

    quizProgress.textContent = "Completed";

    question.innerHTML = "🎉 Quiz Completed!";

    let stars = "";

    const percentage = (score / quiz.questions.length) * 100;

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

    answers.innerHTML = `

        <div class="quiz-result">

            <h2>${score} / ${quiz.questions.length}</h2>

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

    if(currentQuestion < quiz.questions.length){

        showQuestion();

    }else{

        showResult();

    }

};
