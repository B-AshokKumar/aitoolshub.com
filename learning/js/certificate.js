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

const editBtn =
document.getElementById("editNameBtn");

const editModal =
document.getElementById("editModal");

const editInput =
document.getElementById("editNameInput");

const cancelBtn =
document.getElementById("cancelEditBtn");

const saveBtn =
document.getElementById("saveEditBtn");

editBtn.addEventListener("click", () => {

    editInput.value =
        localStorage.getItem("student_name") ||
        "";

    editModal.classList.add("show");

    editInput.focus();

});

cancelBtn.addEventListener("click", () => {

    editModal.classList.remove("show");

});

saveBtn.addEventListener("click", () => {

    let name =
        editInput.value.trim();

    if(name===""){

        name="AI Learner";

    }

    localStorage.setItem(
        "student_name",
        name
    );

    document.getElementById("studentName").textContent =
        name;

    editModal.classList.remove("show");

});

