document.addEventListener("DOMContentLoaded", () => {

    /* ============================
       Progress Summary
    ============================ */

    let passed = 0;
    const total = topics.length;

    topics.forEach(topic => {
        if (localStorage.getItem("quiz_passed_" + topic.id)) {
            passed++;
        }
    });

    document.getElementById("lessonCount").textContent =
        passed + " / " + total;

    document.getElementById("quizCount").textContent =
        passed + " / " + total;

    document.getElementById("progress").textContent =
        Math.round((passed / total) * 100) + "%";


    /* ============================
       Restart Course
    ============================ */

    let restartConfirm = false;
    let restartTimer;

    const restartBtn =
        document.getElementById("restartBtn");

    restartBtn.addEventListener("click", () => {

        if (!restartConfirm) {

            restartConfirm = true;

            showToast(
                "Tap Restart again within 3 seconds to confirm.",
                "warning"
            );

            restartTimer = setTimeout(() => {
                restartConfirm = false;
            }, 3000);

            return;
        }

        clearTimeout(restartTimer);

        topics.forEach(topic => {

            localStorage.removeItem("quiz_" + topic.id);

            localStorage.removeItem(
                "quiz_passed_" + topic.id
            );

        });

        localStorage.removeItem("course_completed");

        restartConfirm = false;

        showToast(
            "Course restarted successfully.",
            "success"
        );

        setTimeout(() => {

            location.href = "study.html";

        }, 2000);

    });


    /* ============================
       Certificate
    ============================ */

    const certificateBtn =
        document.getElementById("certificateBtn");

    const modal =
        document.getElementById("nameModal");

    const input =
        document.getElementById("certificateName");

    const continueBtn =
        document.getElementById("continueBtn");

    const skipBtn =
        document.getElementById("skipBtn");


    certificateBtn.addEventListener("click", () => {

        const savedName =
            localStorage.getItem("student_name");

        if (savedName) {

            location.href = "certificate.html";

            return;

        }

        modal.classList.add("show");

        input.focus();

    });


    continueBtn.addEventListener("click", () => {

        let name = input.value.trim();

        if (name === "") {

            name = "AI Learner";

        }

        localStorage.setItem(
            "student_name",
            name
        );

        location.href = "certificate.html";

    });


    skipBtn.addEventListener("click", () => {

        localStorage.setItem(
            "student_name",
            "AI Learner"
        );

        location.href = "certificate.html";

    });

});


/* ============================
   Toast
============================ */

function showToast(message, type = "info") {

    const toast = document.createElement("div");

    toast.className = "toast " + type;

    if (type === "warning") {

        toast.innerHTML = "⚠️ " + message;

    }
    else if (type === "success") {

        toast.innerHTML = "✅ " + message;

    }
    else {

        toast.innerHTML = message;

    }

    document.body.appendChild(toast);

    setTimeout(() => {

        toast.classList.add("show");

    }, 10);

    setTimeout(() => {

        toast.classList.remove("show");

        setTimeout(() => {

            toast.remove();

        }, 300);

    }, 2200);

}
