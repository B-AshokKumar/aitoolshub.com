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


let restartConfirm = false;
let restartTimer;

function handleRestart() {
    const btn = document.getElementById("restartBtn");

    if (!restartConfirm) {
        restartConfirm = true;
        btn.textContent = "⚠️ Tap again to confirm";

        restartTimer = setTimeout(() => {
            restartConfirm = false;
            btn.textContent = "🔄 Restart Course";
        }, 3000);

        return;
    }

    clearTimeout(restartTimer);

    // Remove quiz progress
    topics.forEach(topic => {
        localStorage.removeItem("quiz_" + topic.id);
        localStorage.removeItem("quiz_passed_" + topic.id);
    });

    // Remove course completion flag
    localStorage.removeItem("course_completed");

    restartConfirm = false;
    btn.textContent = "🔄 Restart Course";

    location.href = "study.html";
}
