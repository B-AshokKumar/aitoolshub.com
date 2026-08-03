// ===============================
// Load Certificate Information
// ===============================

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

let certificateId =
    localStorage.getItem("certificate_id");

if (!certificateId) {

    certificateId =
        "ATH-" +
        today.getFullYear() +
        "-" +
        Math.floor(100000 + Math.random() * 900000);

    localStorage.setItem(
        "certificate_id",
        certificateId
    );
}

document.getElementById("certificateId").textContent =
    certificateId;


// ===============================
// Edit Certificate Name (Custom Popup)
// ===============================

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
        "AI Learner";

    editModal.classList.add("show");

    editInput.focus();

});


cancelBtn.addEventListener("click", () => {

    editModal.classList.remove("show");

});


saveBtn.addEventListener("click", () => {

    let name =
        editInput.value.trim();

    if (name === "") {

        name = "AI Learner";

    }

    localStorage.setItem(
        "student_name",
        name
    );

    document.getElementById("studentName").textContent =
        name;

    editModal.classList.remove("show");

});


// Close popup when clicking outside

editModal.addEventListener("click", (e) => {

    if (e.target === editModal) {

        editModal.classList.remove("show");

    }

});
