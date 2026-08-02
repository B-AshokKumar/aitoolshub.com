
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

        card.innerHTML = `
    <div class="lesson-icon">📘</div>

    <div class="lesson-number">
        Lesson ${topic.id}
    </div>

    <h3>${topic.title}</h3>

    <p>${topic.description}</p>
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

        const bestScore =
            localStorage.getItem("quiz_" + topic.id);

        if(bestScore !== null){

            completed++;

        }

    });

    document.getElementById("completedLessons").textContent =
        "Lessons Completed: " +
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

}
