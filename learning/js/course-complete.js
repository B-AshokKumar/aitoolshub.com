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

function restartCourse() {

    if (!confirm("Are you sure you want to restart the course?\n\nAll quiz scores and progress will be deleted.")) {

        return;

    }

    // Remove quiz progress
    topics.forEach(topic => {

        localStorage.removeItem("quiz_" + topic.id);
        localStorage.removeItem("quiz_passed_" + topic.id);

    });

    // Remove course completion flag
    localStorage.removeItem("course_completed");

    // Go back to Learning Hub
    location.href = "study.html";

}
