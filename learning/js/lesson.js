/* =====================================
   AI Learning Hub
   lesson.js
===================================== */

const params = new URLSearchParams(window.location.search);

const lessonId = Number(params.get("id")) || 1;

let currentIndex = topics.findIndex(topic => topic.id === lessonId);

if (currentIndex < 0) currentIndex = 0;

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function loadLesson(index) {

    currentIndex = index;

    const topic = topics[currentIndex];

    document.title = topic.title + " - AI Learning Hub";

    document.getElementById("lessonTitle").textContent = topic.title;

    document.getElementById("lessonCategory").textContent =
        "Category: " + topic.category;

    document.getElementById("lessonProgress").textContent =
        "Lesson " + (currentIndex + 1) + " of " + topics.length;

    document.getElementById("lessonContent").innerHTML =
        topic.content.replace(/\n/g, "<br>");

    prevBtn.disabled = (currentIndex === 0);
    nextBtn.disabled = (currentIndex === topics.length - 1);

    history.replaceState(
        {},
        "",
        "lesson.html?id=" + topic.id
    );

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

prevBtn.addEventListener("click", function () {

    if (currentIndex > 0) {

        loadLesson(currentIndex - 1);

    }

});

nextBtn.addEventListener("click", function () {

    if (currentIndex < topics.length - 1) {

        loadLesson(currentIndex + 1);

    }

});

loadLesson(currentIndex);

