const studentName =
    localStorage.getItem("student_name") || "AI Learner";

document.getElementById("studentName").textContent = studentName;

document.getElementById("date").textContent =
    new Date().toLocaleDateString();

const certificateId =
    "ATH-" + Date.now();

document.getElementById("certificateId").textContent =
    certificateId;
