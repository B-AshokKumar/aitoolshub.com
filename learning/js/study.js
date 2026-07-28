
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
            <div style="font-size:40px;">📘</div>

            <h3>${topic.title}</h3>

            <p>${topic.description}</p>
        `;

        card.onclick = () => {

            alert(
`${topic.title}

${topic.content}`
            );

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
