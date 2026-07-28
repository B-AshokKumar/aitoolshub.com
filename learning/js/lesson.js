/* =====================================
   AI Learning Hub
   lesson.js
===================================== */

const params = new URLSearchParams(window.location.search);

const lessonId = parseInt(params.get("id")) || 1;

let currentIndex = topics.findIndex(topic => topic.id === lessonId);

if (currentIndex === -1) {
    currentIndex = 0;
}

const prevBtn =
document.getElementById("prevBtn");

const nextBtn =
document.getElementById("nextBtn");

function updateButtons(){

    prevBtn.disabled = currentIndex === 0;

    nextBtn.disabled = currentIndex === topics.length - 1;

}

function loadLesson(index){

    const topic = topics[index];

    document.title = topic.title + " - AI Learning Hub";

    document.getElementById("lessonTitle").textContent = topic.title;

    document.getElementById("lessonCategory").textContent =
        "Category: " + topic.category;

   document.getElementById("lessonProgress").textContent =
    "Lesson " + (index + 1) + " of " + topics.length;

    document.getElementById("lessonContent").innerHTML =
        topic.content.replace(/\n/g,"<br>");

   updateButtons();

window.scrollTo({

    top:0,

    behavior:"smooth"

});

}

loadLesson(currentIndex);

/* Previous */

document.getElementById("prevBtn").addEventListener("click",()=>{

    if(currentIndex>0){

        currentIndex--;

        loadLesson(currentIndex);

        history.replaceState(
            {},
            "",
            "lesson.html?id="+topics[currentIndex].id
        );

    }

});

/* Next */

document.getElementById("nextBtn").addEventListener("click",()=>{

    if(currentIndex<topics.length-1){

        currentIndex++;

        loadLesson(currentIndex);

        history.replaceState(
            {},
            "",
            "lesson.html?id="+topics[currentIndex].id
        );

    }

});

