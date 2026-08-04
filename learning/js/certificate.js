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

    const random =
    Math.random().toString(36).substring(2, 8).toUpperCase();

certificateId =
    `ATH-${today.getFullYear()}-${random}`;

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


saveBtn.addEventListener("click", saveCertificateName);

function saveCertificateName() {

    let name = editInput.value.trim();

    if (name === "") {
        name = "AI Learner";
    }

    // Remove extra spaces
    name = name.replace(/\s+/g, " ");

    // Limit length
    if (name.length > 40) {
        name = name.substring(0, 40);
    }

    // Capitalize each word
    name = name.replace(/\b\w/g, c => c.toUpperCase());

    localStorage.setItem("student_name", name);

    document.getElementById("studentName").textContent = name;

    editModal.classList.remove("show");
}

// Save when Enter is pressed
editInput.addEventListener("keydown", (e) => {

    if (e.key === "Enter") {

        saveCertificateName();

    }

});

// Close popup with Escape
document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        editModal.classList.remove("show");

    }

});
