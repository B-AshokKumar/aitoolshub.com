const studentName =
    localStorage.getItem("student_name") || "AI Learner";

document.getElementById("studentName").textContent =
    studentName;

const today = new Date();

document.getElementById("date").textContent =
    today.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric"
    });

const certificateId =
    "ATH-" +
    today.getFullYear() +
    "-" +
    Math.floor(100000 + Math.random() * 900000);

document.getElementById("certificateId").textContent =
    certificateId;


/* ===== Edit Certificate Name ===== */

document.getElementById("editNameBtn").addEventListener("click", () => {

    const currentName =
        localStorage.getItem("student_name") || "";

    const newName = prompt(
        "Enter the name for your certificate:",
        currentName
    );

    if (newName && newName.trim() !== "") {

        localStorage.setItem(
            "student_name",
            newName.trim()
        );

        document.getElementById("studentName").textContent =
            newName.trim();
    }

});
