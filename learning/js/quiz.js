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

    question.textContent =
        "Quiz Completed!";

    answers.innerHTML = `

        <h2>Your Score</h2>

        <p>${score} / ${quiz.questions.length}</p>

        <button onclick="location.reload()">

            🔄 Retry Quiz

        </button>

    `;

    quizProgress.textContent = "Completed";

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
