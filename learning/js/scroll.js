const topBtn = document.getElementById("scrollTopBtn");
const bottomBtn = document.getElementById("scrollBottomBtn");

function updateButtons() {

    const scrollTop = window.pageYOffset;
    const pageHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;

    if (topBtn) {
        topBtn.style.display = (scrollTop < 100) ? "none" : "flex";
    }

    if (bottomBtn) {
        bottomBtn.style.display =
            (scrollTop + windowHeight >= pageHeight - 100)
            ? "none"
            : "flex";
    }

}

if (topBtn) {

    topBtn.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

if (bottomBtn) {

    bottomBtn.addEventListener("click", function () {

        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth"
        });

    });

}

window.addEventListener("scroll", updateButtons);

document.addEventListener("DOMContentLoaded", updateButtons);
