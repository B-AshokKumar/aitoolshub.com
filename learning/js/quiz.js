const params = new URLSearchParams(window.location.search);

const lessonId = Number(params.get("id"));

document.getElementById("quizTitle").textContent =
    "Quiz for Lesson " + lessonId;

document.getElementById("quizProgress").textContent =
    "Lesson ID: " + lessonId;

document.getElementById("question").textContent =
    "Quiz engine coming in the next step.";
