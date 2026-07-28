const topBtn = document.getElementById("scrollTopBtn");
const bottomBtn = document.getElementById("scrollBottomBtn");

function updateButtons(){

    const scrollTop = window.pageYOffset;
    const pageHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;

    if(topBtn){

        if(scrollTop < 100){

            topBtn.style.display = "none";

        }else{

            topBtn.style.display = "block";

        }

    }

    if(bottomBtn){

        if(scrollTop + windowHeight >= pageHeight - 100){

            bottomBtn.style.display = "none";

        }else{

            bottomBtn.style.display = "block";

        }

    }

}

if(topBtn){

    topBtn.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}

if(bottomBtn){

    bottomBtn.addEventListener("click",()=>{

        window.scrollTo({

            top:document.documentElement.scrollHeight,

            behavior:"smooth"

        });

    });

}

window.addEventListener("scroll",updateButtons);

window.addEventListener("load",updateButtons);
