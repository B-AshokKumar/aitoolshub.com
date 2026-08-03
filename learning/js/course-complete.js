const total = topics.length;

let passed = 0;

topics.forEach(topic => {

if(localStorage.getItem("quiz_passed_" + topic.id)){

passed++;

}

});

document.getElementById("lessonCount").textContent =
passed + " / " + total;

document.getElementById("quizCount").textContent =
passed + " / " + total;

document.getElementById("progress").textContent =
Math.round((passed/total)*100) + "%";
