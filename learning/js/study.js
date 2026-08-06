/* ======================================
   AI Learning Hub
   study.js
====================================== */

const cardContainer = document.querySelector(".card-container");
const searchBox = document.getElementById("searchBox");

/* ======================================
   Render Topics 
====================================== */

function renderTopics(list) {

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

            location.href = "lesson.html?id=" + topic.id;

        };

        cardContainer.appendChild(card);

    });

}

/* ======================================
   Search
====================================== */

if (searchBox) {

    searchBox.addEventListener("input", function () {

        const keyword = this.value.toLowerCase();

        const filtered = topics.filter(topic =>

            topic.title.toLowerCase().includes(keyword) ||

            topic.description.toLowerCase().includes(keyword) ||

            topic.category.toLowerCase().includes(keyword)

        );

        renderTopics(filtered);

    });

}

/* ======================================
   Initial Load
====================================== */

renderTopics(topics);

updateProgress();

/* ======================================
   Learning Progress
====================================== */

function updateProgress() {

    let completed = 0;

    topics.forEach(topic => {

        if (localStorage.getItem("quiz_passed_" + topic.id)) {

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
        Math.round((completed / topics.length) * 100);

    document.getElementById("progressFill").style.width =
        percent + "%";

    document.getElementById("progressPercent").textContent =
        percent + "% Completed";

    // Course Completed (Show Only Once)

    if (
        completed === topics.length &&
        !localStorage.getItem("course_completed")
    ) {

        localStorage.setItem(
            "course_completed",
            "true"
        );

        setTimeout(function () {

            location.href = "course-complete.html";

        }, 500);

    }

}

/* ======================================
   View Certificate
====================================== */

const viewCertificateBtn =
document.getElementById("viewCertificateBtn");

if (viewCertificateBtn) {

    viewCertificateBtn.addEventListener("click", () => {

        if (
            localStorage.getItem("course_completed") !== "true"
        ) {

            showToast(`
<strong>Certificate Not Yet Available</strong>

Complete all <strong>20 lessons</strong> and pass all
<strong>20 quizzes</strong> to unlock your
<strong>AI Learning Hub Certificate</strong>.
`);

            return;

        }

        location.href = "certificate.html";

    });

}

/* ======================================
   Toast Message
====================================== */

function showToast(message){

    const toast = document.getElementById("toast");

    if(!toast) return;

    toast.innerHTML =
    `<span class="toast-icon">🏆</span>${message}`;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 4500);

}
