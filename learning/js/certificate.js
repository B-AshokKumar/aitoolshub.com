const name =
localStorage.getItem("student_name") ||
"AI Learner";

document.getElementById("studentName").textContent =
name;

document.getElementById("date").textContent =
new Date().toLocaleDateString();

const id =
"ATH-" +
Date.now();

document.getElementById("certificateId").textContent =
id;
