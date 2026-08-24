/* ======================================
   AI Learning Hub
   LIVE QUIZ ENGINE
   --------------------------------------
   Production version converted from
   TEST quiz engine.

   Uses LIVE localStorage keys.
====================================== */

"use strict";


/* ======================================
   LIVE LOCALSTORAGE KEYS
====================================== */

const LEARNING_STREAK_KEY =
    "learningStreak";

const LEARNING_LAST_ACTIVITY_KEY =
    "learningLastActivity";


/* ======================================
   GET QUIZ / LESSON ID
====================================== */

const params =
    new URLSearchParams(window.location.search);

const rawLessonId =
    params.get("id");

const lessonId =
    Number(rawLessonId);


/* ======================================
   PAGE ELEMENTS
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
   SAFETY CHECK
====================================== */

function showQuizError(message) {

    console.error(
        "QUIZ ERROR:",
        message
    );

    if (quizTitle) {

        quizTitle.textContent =
            "⚠️ Quiz Error";

    }

    if (quizProgress) {

        quizProgress.textContent =
            message;

    }

    if (quizProgressFill) {

        quizProgressFill.style.width =
            "0%";

    }

    if (question) {

        question.innerHTML =
            "Please check the quiz files.";

    }

    if (answers) {

        answers.innerHTML = `
            <p style="
                color:#dc2626;
                font-weight:600;
                text-align:center;
                padding:20px;
            ">
                ${message}
            </p>
        `;

    }

    if (nextQuestionBtn) {

        nextQuestionBtn.style.display =
            "none";

    }

}


/* ======================================
   VALIDATE LESSON ID
====================================== */

if (
    !rawLessonId ||
    !Number.isInteger(lessonId) ||
    lessonId < 1
) {

    showQuizError(
        "Invalid lesson ID. Please return to the Study page and select a lesson."
    );

    throw new Error(
        "LIVE: Invalid lesson ID"
    );

}


/* ======================================
   VERIFY QUIZ DATA
====================================== */

if (
    typeof quizzes === "undefined"
) {

    showQuizError(
        "quizzes.js was not loaded."
    );

    throw new Error(
        "LIVE: quizzes is undefined"
    );

}


if (!Array.isArray(quizzes)) {

    showQuizError(
        "Quiz data is invalid."
    );

    throw new Error(
        "LIVE: quizzes is not an array"
    );

}


/* ======================================
   FIND CURRENT QUIZ
====================================== */

const quiz =
    quizzes.find(
        q =>
            Number(q.lessonId) === lessonId
    );


if (!quiz) {

    showQuizError(
        "No quiz found for Lesson " +
        lessonId
    );

    throw new Error(
        "LIVE: Quiz not found for lesson " +
        lessonId
    );

}


if (
    !Array.isArray(quiz.questions) ||
    quiz.questions.length === 0
) {

    showQuizError(
        "This quiz has no questions."
    );

    throw new Error(
        "LIVE: No questions"
    );

}


/* ======================================
   QUIZ STATE
====================================== */

let currentQuestion = 0;

let score = 0;


/* ======================================
   SHOW QUESTION
====================================== */

function showQuestion() {

    const q =
        quiz.questions[currentQuestion];


    if (!q) {

        showQuizError(
            "Question could not be loaded."
        );

        return;

    }


    /* ----------------------------------
       Progress
    ---------------------------------- */

    quizProgress.textContent =
        "Question " +
        (currentQuestion + 1) +
        " of " +
        quiz.questions.length;


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


    answers.innerHTML = "";


    /* ----------------------------------
       Create shuffled options
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
       Fisher-Yates shuffle
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
       Render answers
    ---------------------------------- */

    options.forEach(option => {

        const button =
            document.createElement(
                "button"
            );


        button.className =
            "quiz-option";


        button.textContent =
            option.text;


        /*
           Store answer status so the
           correct answer can be shown
           when the user selects wrongly.
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


        answers.appendChild(
            button
        );

    });

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
       Prevent multiple answers
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
   🔥 LIVE LEARNING STREAK
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
            LEARNING_LAST_ACTIVITY_KEY
        );


    let streak =
        Number(
            localStorage.getItem(
                LEARNING_STREAK_KEY
            ) || 0
        );


    /* ----------------------------------
       First successful quiz
    ---------------------------------- */

    if (!lastActivity) {

        streak = 1;

    }


    /* ----------------------------------
       Already completed today
    ---------------------------------- */

    else if (
        lastActivity === todayKey
    ) {

        /*
           Do not increase the streak
           twice on the same day.
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
           Continue from yesterday
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
       Save LIVE learning streak data
    ---------------------------------- */

    localStorage.setItem(
        LEARNING_STREAK_KEY,
        String(streak)
    );


    localStorage.setItem(
        LEARNING_LAST_ACTIVITY_KEY,
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
        "🔥 Learning Streak:",
        streak,
        "day(s)"
    );


    return streak;

}


/* ======================================
   SHOW RESULT
====================================== */

function showResult() {

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

    const result =
        passed
            ? "✅ PASSED"
            : "❌ TRY AGAIN";


    /* ==================================
       LIVE SCORE STORAGE
    ================================== */

    const scoreKey =
        "quiz_" + lessonId;


    const passKey =
        "quiz_passed_" + lessonId;


    const bestScore =
        Number(
            localStorage.getItem(
                scoreKey
            ) || 0
        );


    if (score > bestScore) {

        localStorage.setItem(
            scoreKey,
            String(score)
        );

    }


    /* ==================================
       LIVE PASS STORAGE
    ================================== */

    if (passed) {

        /*
           Check whether this lesson was
           already passed BEFORE this attempt.

           This prevents a repeated pass
           from creating another learning
           activity.
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

    }


    /* ----------------------------------
       Failed attempt
       ----------------------------------
       IMPORTANT:

       Do NOT remove an existing pass.

       If the learner passed this lesson
       previously, that lesson remains
       completed even if a later attempt
       scores below 70%.
    ---------------------------------- */

    else {

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
        localStorage.getItem(scoreKey);


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
                <p style="
                    color:#16a34a;
                    font-weight:bold;
                ">
                    🔥 Learning streak recorded!
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
                onclick="location.href='quiz.html?id=${lessonId}'">

                🔄 Take Quiz Again

            </button>

        </div>

    `;


    nextQuestionBtn.style.display =
        "none";


    console.log(
        "QUIZ RESULT:",
        {
            lessonId: lessonId,
            score: score,
            percentage: percentage,
            passed: passed,
            learningStreak:
                localStorage.getItem(
                    LEARNING_STREAK_KEY
                )
        }
    );

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

        }

        else {

            showResult();

        }

    };


/* ======================================
   START LIVE QUIZ
====================================== */

quizTitle.textContent =
    "Lesson " +
    lessonId +
    " Quiz";


showQuestion();


console.log(
    "🧠 LIVE QUIZ STARTED",
    "Lesson:",
    lessonId
);
