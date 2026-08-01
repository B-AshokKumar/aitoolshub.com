const params = new URLSearchParams(window.location.search);

const lessonId = Number(params.get("id"));

const quiz = quizzes.find(q => q.lessonId === lessonId);

const quizTitle = document.getElementById("quizTitle");
const quizProgress = document.getElementById("quizProgress");
const question = document.getElementById("question");
const answers = document.getElementById("answers");

if (!quiz) {

    quizTitle.textContent = "Quiz Not Available";

    quizProgress.textContent = "";

    question.textContent =
        "No quiz has been created for this lesson yet.";

} else {

    quizTitle.textContent =
        "Lesson " + lessonId + " Quiz";

    quizProgress.textContent =
        quiz.questions.length + " Question(s)";

    const q = quiz.questions[0];

    question.textContent = q.question;

    answers.innerHTML = "";

    q.options.forEach(option => {

        const button = document.createElement("button");

        button.textContent = option;

        button.style.width = "100%";
        button.style.padding = "14px";
        button.style.margin = "10px 0";
        button.style.borderRadius = "10px";
        button.style.cursor = "pointer";

        answers.appendChild(button);

    });

}
