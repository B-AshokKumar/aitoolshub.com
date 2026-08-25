/* ======================================
   AI Learning Hub
   quiz.js
   v1.18 — Reliable Quiz + Learning Streak
====================================== */


/* ======================================
   READ LESSON ID
====================================== */

const params =
    new URLSearchParams(window.location.search);

const lessonId =
    Number(params.get("id"));


/* ======================================
   SAFELY LOAD QUIZ DATA
====================================== */

/*
   Supports both:

   const quizzes = [...]

   and:

   window.quizzes = [...]

   This makes the quiz page more
   resistant to script-loading problems.
*/

let quizList = [];

try {

    if (typeof quizzes !== "undefined") {

        quizList = quizzes;

    } else if (Array.isArray(window.quizzes)) {

        quizList = window.quizzes;

    }

} catch (error) {

    console.error(
        "❌ Quiz data error:",
        error
    );

}


/* ======================================
   FIND QUIZ
====================================== */

const quiz =
    Array.isArray(quizList)
        ? quizList.find(
            q => Number(q.lessonId) === lessonId
          )
        : null;


/* ======================================
   DOM ELEMENTS
====================================== */

const quizTitle =
    document.getElementById("quizTitle");

const quizProgress =
    document.getElementById("quizProgress");

const quizProgressFill =
    document.getElementById("quizProgressFill");

const question =
    document.getElementById("question");

const answers =
    document.getElementById("answers");

const nextQuestionBtn =
    document.getElementById("nextQuestionBtn");


/* ======================================
   BASIC SAFETY CHECK
====================================== */

if (
    !quizTitle ||
    !quizProgress ||
    !quizProgressFill ||
    !question ||
    !answers ||
    !nextQuestionBtn
) {

    console.error(
        "❌ Quiz page is missing required HTML elements."
    );

}


/* ======================================
   QUIZ STATE
====================================== */

let currentQuestion = 0;

let score = 0;


/* ======================================
   QUIZ DATA ERROR
====================================== */

if (!Array.isArray(quizList) || quizList.length === 0) {

    if (quizTitle) {

        quizTitle.textContent =
            "⚠️ Quiz Data Not Loaded";

    }

    if (question) {

        question.innerHTML = `
            <p>
                The quiz data could not be loaded.
            </p>

            <p>
                Please refresh the page and try again.
            </p>
        `;

    }

    if (quizProgress) {

        quizProgress.textContent =
            "Quiz data unavailable";

    }

    if (nextQuestionBtn) {

        nextQuestionBtn.style.display =
            "none";

    }

    console.error(
        "❌ quizzes.js was not loaded or contains no quiz data."
    );


} else if (!quiz) {

    /* ==================================
       QUIZ NOT FOUND
    ================================== */

    if (quizTitle) {

        quizTitle.textContent =
            "⚠️ Quiz Not Available";

    }

    if (question) {

        question.textContent =
            "No quiz was found for Lesson " +
            lessonId +
            ".";

    }

    if (quizProgress) {

        quizProgress.textContent =
            "Quiz unavailable";

    }

    if (nextQuestionBtn) {

        nextQuestionBtn.style.display =
            "none";

    }

    console.error(
        "❌ No quiz found for lesson:",
        lessonId
    );


} else {

    /* ==================================
       VALID QUIZ
    ================================== */

    if (quizTitle) {

        quizTitle.textContent =
            "Lesson " +
            lessonId +
            " Quiz";

    }

    console.log(
        "✅ Quiz loaded:",
        lessonId
    );

    showQuestion();

}


/* ======================================
   SHOW QUESTION
====================================== */

function showQuestion() {

    if (!quiz) return;

    const q =
        quiz.questions[currentQuestion];


    if (!q) {

        console.error(
            "❌ Question not found:",
            currentQuestion
        );

        return;

    }


    /* ----------------------------------
       Progress text
    ---------------------------------- */

    quizProgress.textContent =
        "Question " +
        (currentQuestion + 1) +
        " of " +
        quiz.questions.length;


    /* ----------------------------------
       Progress bar
    ---------------------------------- */

    const progress =
        (
            (currentQuestion + 1) /
            quiz.questions.length
        ) * 100;


    quizProgressFill.style.width =
        progress + "%";


    /* ----------------------------------
       Question
    ---------------------------------- */

    question.textContent =
        q.question;


    /* ----------------------------------
       Clear answers
    ---------------------------------- */

    answers.innerHTML = "";


    /* ----------------------------------
       Prepare options
    ---------------------------------- */

    const options =
        q.options.map(
            (text, index) => ({

                text: text,

                correct:
                    index === q.answer

            })
        );


    /* ----------------------------------
       Fisher-Yates Shuffle
    ---------------------------------- */

    for (
        let i = options.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );


        [
            options[i],
            options[j]
        ] =
        [
            options[j],
            options[i]
        ];

    }


    /* ----------------------------------
       Create answer buttons
    ---------------------------------- */

    options.forEach(option => {

        const button =
            document.createElement("button");


        button.className =
            "quiz-option";


        button.textContent =
            option.text;


        /*
           Store correct answer state.
        */

        button.dataset.correct =
            String(option.correct);


        button.onclick =
            function () {

                checkAnswer(
                    button,
                    option.correct
                );

            };


        answers.appendChild(button);

    });


    /*
       Make sure Next is hidden
       until an answer is selected.
    */

    nextQuestionBtn.style.display =
        "none";

}


/* ======================================
   CHECK ANSWER
====================================== */

function checkAnswer(
    button,
    correct
) {

    const buttons =
        document.querySelectorAll(
            ".quiz-option"
        );


    /* ----------------------------------
       Disable all answers
    ---------------------------------- */

    buttons.forEach(btn => {

        btn.disabled = true;

    });


    /* ----------------------------------
       Correct answer
    ---------------------------------- */

    if (correct) {

        score++;


        button.style.background =
            "#16a34a";

        button.style.color =
            "#fff";

    }


    /* ----------------------------------
       Wrong answer
    ---------------------------------- */

    else {

        button.style.background =
            "#dc2626";

        button.style.color =
            "#fff";


        /*
           Show the correct answer.
        */

        buttons.forEach(btn => {

            if (
                btn.dataset.correct ===
                "true"
            ) {

                btn.style.background =
                    "#16a34a";

                btn.style.color =
                    "#fff";

            }

        });

    }


    /* ----------------------------------
       More questions
    ---------------------------------- */

    if (
        currentQuestion <
        quiz.questions.length - 1
    ) {

        nextQuestionBtn.style.display =
            "inline-block";

    }


    /* ----------------------------------
       Last question
    ---------------------------------- */

    else {

        setTimeout(
            showResult,
            800
        );

    }

}


/* ======================================
   🔥 LEARNING STREAK
   DIRECTLY CONNECTED TO QUIZ PASS
====================================== */

function recordLearningStreak() {

    const today =
        new Date();


    const todayKey =
        today.getFullYear() +
        "-" +
        String(
            today.getMonth() + 1
        ).padStart(2, "0") +
        "-" +
        String(
            today.getDate()
        ).padStart(2, "0");


    const lastActivity =
        localStorage.getItem(
            "learningLastActivity"
        );


    let streak =
        Number(
            localStorage.getItem(
                "learningStreak"
            ) || 0
        );


    /* ----------------------------------
       First successful quiz completion
    ---------------------------------- */

    if (!lastActivity) {

        streak = 1;

    }


    /* ----------------------------------
       Already active today
    ---------------------------------- */

    else if (
        lastActivity === todayKey
    ) {

        /*
           Do not increase twice
           on the same day.
        */

    }


    /* ----------------------------------
       Previous activity exists
    ---------------------------------- */

    else {

        const lastDate =
            new Date(
                lastActivity +
                "T00:00:00"
            );


        const todayDate =
            new Date(
                todayKey +
                "T00:00:00"
            );


        const difference =
            Math.round(
                (
                    todayDate -
                    lastDate
                ) / 86400000
            );


        /* ------------------------------
           Continued from yesterday
        ------------------------------ */

        if (difference === 1) {

            streak++;

        }


        /* ------------------------------
           Missed one or more days
        ------------------------------ */

        else if (difference > 1) {

            streak = 1;

        }


        /* ------------------------------
           Future date safety
        ------------------------------ */

        else if (difference < 0) {

            streak = 1;

        }

    }


    /* ----------------------------------
       Save streak
    ---------------------------------- */

    localStorage.setItem(
        "learningStreak",
        String(streak)
    );


    localStorage.setItem(
        "learningLastActivity",
        todayKey
    );


    /* ----------------------------------
       Update dashboard if available
    ---------------------------------- */

    try {

        if (
            typeof updateLearningStreak ===
            "function"
        ) {

            updateLearningStreak();

        }

        if (
            typeof updateReturnStreakMessage ===
            "function"
        ) {

            updateReturnStreakMessage();

        }

    } catch (error) {

        console.log(
            "Dashboard streak update skipped:",
            error
        );

    }


    console.log(
        "🔥 Learning streak:",
        streak,
        "day(s)"
    );


    return streak;

}


/* ======================================
   SHOW QUIZ RESULT
====================================== */

function showResult() {

    if (!quiz) return;


    /* ----------------------------------
       Calculate score
    ---------------------------------- */

    const percentage =
        (
            score /
            quiz.questions.length
        ) * 100;


    const passMark = 70;


    const passed =
        percentage >= passMark;


    /* ----------------------------------
       Result progress
    ---------------------------------- */

    quizProgress.textContent =
        passed
            ? "✅ Passed"
            : "❌ Not Passed";


    quizProgressFill.style.width =
        "100%";


    question.innerHTML =
        "🎉 Quiz Completed!";


    /* ----------------------------------
       Rating
    ---------------------------------- */

    let stars = "";

    let message = "";

    let result = "";


    if (percentage === 100) {

        stars =
            "⭐⭐⭐⭐⭐";

        message =
            "Excellent!";

    }

    else if (percentage >= 80) {

        stars =
            "⭐⭐⭐⭐";

        message =
            "Very Good!";

    }

    else if (percentage >= 60) {

        stars =
            "⭐⭐⭐";

        message =
            "Good Job!";

    }

    else if (percentage >= 40) {

        stars =
            "⭐⭐";

        message =
            "Keep Practising!";

    }

    else {

        stars =
            "⭐";

        message =
            "Keep Practising!";

    }


    /* ----------------------------------
       Pass / Fail
    ---------------------------------- */

    if (passed) {

        result =
            "✅ PASSED";

    } else {

        result =
            "❌ TRY AGAIN";

    }


    /* ==================================
       SAVE BEST SCORE
    ================================== */

    const key =
        "quiz_" + lessonId;


    const passKey =
        "quiz_passed_" + lessonId;


    const bestScore =
        Number(
            localStorage.getItem(key) || 0
        );


    if (score > bestScore) {

        localStorage.setItem(
            key,
            String(score)
        );

    }


    /* ==================================
       QUIZ PASS
    ================================== */

    if (passed) {

        /*
           Check whether this lesson was
           already passed BEFORE this attempt.

           This is important because the
           same quiz should not repeatedly
           create learning activity.
        */

        const wasAlreadyPassed =
            localStorage.getItem(
                passKey
            ) === "true";


        /* ------------------------------
           Mark lesson as passed
        ------------------------------ */

        localStorage.setItem(
            passKey,
            "true"
        );


        /* ------------------------------
           Record streak only when this
           lesson is newly passed.
        ------------------------------ */

        if (!wasAlreadyPassed) {

            recordLearningStreak();

        }


        console.log(
            "✅ Lesson " +
            lessonId +
            " quiz passed."
        );


    } else {

        /*
           Failed attempt does NOT count
           as learning-streak completion.
        */

        /*
           IMPORTANT:
           Do not remove an existing pass.

           If the user passed this lesson
           previously and later gets a lower
           score, the lesson remains passed.
        */

        console.log(
            "❌ Lesson " +
            lessonId +
            " quiz not passed."
        );

    }


    /* ==================================
       RESULT SCREEN
    ================================== */

    const storedBestScore =
        localStorage.getItem(key);


    answers.innerHTML = `

        <div class="quiz-result">

            <h2>
                ${score} /
                ${quiz.questions.length}
            </h2>

            <h3 class="quiz-status">
                ${result}
            </h3>

            <p>
                Score:
                ${percentage.toFixed(0)}%
            </p>

            <p>
                Best Score:
                ${storedBestScore}
                /
                ${quiz.questions.length}
                🏆
            </p>

            <div class="quiz-stars">
                ${stars}
            </div>

            <p>
                ${message}
            </p>

            ${
                passed
                ? `
                    <p>
                        🔥 Learning streak updated!
                    </p>
                  `
                : `
                    <p>
                        Pass with ${passMark}% or higher
                        to complete this lesson.
                    </p>
                  `
            }

            <button
                onclick="location.reload()">

                🔄 Retry Quiz

            </button>

            <button
                onclick="history.back()">

                📘 Back to Lesson

            </button>

            <button
                onclick="location.href='study.html'">

                🏠 Learning Hub

            </button>

        </div>

    `;


    nextQuestionBtn.style.display =
        "none";

}


/* ======================================
   NEXT QUESTION
====================================== */

nextQuestionBtn.onclick =
    function () {

        currentQuestion++;


        nextQuestionBtn.style.display =
            "none";


        if (
            currentQuestion <
            quiz.questions.length
        ) {

            showQuestion();

        } else {

            showResult();

        }

    };
