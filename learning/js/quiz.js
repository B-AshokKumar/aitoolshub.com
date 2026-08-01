const params = new URLSearchParams(window.location.search);

const lessonId = Number(params.get("id"));

const quiz = quizzes.find(q => q.lessonId === lessonId);

const title = document.getElementById("quizTitle");
const progress = document.getElementById("quizProgress");
const question = document.getElementById("question");
const answers = document.getElementById("answers");

if (!quiz) {

    title.textContent = "Quiz Not Available";

    progress.textContent = "";

    question.textContent = "No quiz has been created for this lesson yet.";

} else {

    title.textContent = "Lesson " + lessonId + " Quiz";

    progress.textContent =
        quiz.questions.length + " Questions";

    const q = quiz.questions[0];

    question.textContent = q.question;

    answers.innerHTML = "";

    q.options.forEach(option => {

        const button = document.createElement("button");

        button.textContent = option;

        button.style.display = "block";
        button.style.width = "100%";
        button.style.margin = "10px 0";
        button.style.padding = "14px";

        answers.appendChild(button);

    });

}
