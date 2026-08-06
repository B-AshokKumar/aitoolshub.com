
/* ======================================
   AI Learning Hub
   study.js
====================================== */

const cardContainer = document.querySelector(".card-container");
const searchBox = document.getElementById("searchBox");

/* Render Topics */

function renderTopics(list){

    cardContainer.innerHTML = "";

    list.forEach(topic => {

        const card = document.createElement("div");

        card.className = "card";

        const passed =
    localStorage.getItem("quiz_passed_" + topic.id);

const attempted =
    localStorage.getItem("quiz_" + topic.id);

let status = "";
let statusClass = "";

if (passed) {

    status = "🟢 Passed";
    statusClass = "status-passed";

} else if (attempted) {

    status = "🔴 Try Again";
    statusClass = "status-failed";

} else {

    status = "⚪ Not Attempted";
    statusClass = "status-not";

}

card.innerHTML = `
    <div class="lesson-icon">📘</div>

    <div class="lesson-number">
        Lesson ${topic.id}
    </div>

    <h3>${topic.title}</h3>

    <p>${topic.description}</p>

    <div class="${statusClass}">
        ${status}
    </div>
`;

        card.onclick = () => {

    location.href =
    "lesson.html?id=" + topic.id;

};

        cardContainer.appendChild(card);

    });

}

/* Search */

searchBox.addEventListener("input", function(){

    const keyword = this.value.toLowerCase();

    const filtered = topics.filter(topic =>

        topic.title.toLowerCase().includes(keyword) ||

        topic.description.toLowerCase().includes(keyword) ||

        topic.category.toLowerCase().includes(keyword)

    );

    renderTopics(filtered);

});

/* Load */

renderTopics(topics);

updateProgress();

function updateProgress(){

    let completed = 0;

    topics.forEach(topic => {

        const passed =
    localStorage.getItem("quiz_passed_" + topic.id);

if (passed) {

    completed++;

}

    });

    document.getElementById("completedLessons").textContent =
    "Lessons Passed: " +
    completed +
    " / " +
    topics.length;

    document.getElementById("completedQuizzes").textContent =
        "Quizzes Passed: " +
        completed +
        " / " +
        topics.length;

    const percent =
        Math.round(
            (completed / topics.length) * 100
        );

    document.getElementById("progressFill").style.width =
        percent + "%";

    document.getElementById("progressPercent").textContent =
        percent + "% Completed";

   // Course Completed (Show Only Once)

if (
    completed === topics.length &&
    !localStorage.getItem("course_completed")
) {

    localStorage.setItem("course_completed", "true");

    setTimeout(function () {

       location.href = "course-complete.html";


    }, 500);

}

}

// ===================================
// Restart Quiz
// ===================================

const restartQuizBtn =
document.getElementById("restartQuizBtn");

if(restartQuizBtn){

restartQuizBtn.addEventListener("click",()=>{

const confirmReset =
confirm(
"Restart all quizzes?\n\nYour quiz progress will be cleared."
);

if(!confirmReset) return;

// Remove quiz progress
localStorage.removeItem("quiz_progress");
localStorage.removeItem("quiz_score");
localStorage.removeItem("quiz_completed");

alert("Quiz progress has been restarted.");

location.reload();

});

}

const viewCertificateBtn =
document.getElementById("viewCertificateBtn");

viewCertificateBtn.addEventListener("click", () => {

    const lessons =
        Number(localStorage.getItem("completedLessons")) || 0;

    const quizzes =
        Number(localStorage.getItem("completedQuizzes")) || 0;

    if (lessons < 20 || quizzes < 20) {

        showToast(
            "🏆 Certificate Not Yet Available<br><br>Complete all <b>20 lessons</b> and pass all <b>20 quizzes</b> to unlock your AI Learning Hub Certificate."
        );

        return;

    }

    location.href = "certificate.html";

});
