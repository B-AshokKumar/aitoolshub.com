/* ======================================
   AI Learning Hub
   TEST QUIZ ENGINE
   --------------------------------------
   IMPORTANT:
   Uses TEST-only localStorage keys.
   Live app data is NOT touched.
====================================== */

"use strict";


/* ======================================
   TEST LOCALSTORAGE KEYS
====================================== */

const TEST_STREAK_KEY =
    "TEST_learningStreak";

const TEST_LAST_ACTIVITY_KEY =
    "TEST_learningLastActivity";

const TEST_COMPLETED_COUNT_KEY =
    "TEST_learningCompletedCount";


/* ======================================
   GET QUIZ / LESSON ID
====================================== */

const params =
    new URLSearchParams(window.location.search);

const lessonId =
    Number(params.get("id")) || 1;


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

function showTestError(message) {

    console.error(
        "TEST QUIZ ERROR:",
        message
    );

    if (quizTitle) {

        quizTitle.textContent =
            "⚠️ Test Quiz Error";

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
            "Please check the test files.";

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
   VERIFY QUIZ DATA
====================================== */

if (
    typeof quizzes === "undefined"
) {

    showTestError(
        "test-quizzes.js was not loaded."
    );

    throw new Error(
        "TEST: quizzes is undefined"
    );

}


if (!Array.isArray(quizzes)) {

    showTestError(
        "Test quiz data is invalid."
    );

    throw new Error(
        "TEST: quizzes is not an array"
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

    showTestError(
        "No test quiz found for Lesson " +
        lessonId
    );

    throw new Error(
        "TEST: Quiz not found for lesson " +
        lessonId
    );

}


if (
    !Array.isArray(quiz.questions) ||
    quiz.questions.length === 0
) {

    showTestError(
        "This test quiz has no questions."
    );

    throw new Error(
        "TEST: No questions"
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

        showTestError(
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


    /* Fisher-Yates shuffle */

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


    /* Prevent multiple answers */

    buttons.forEach(btn => {

        btn.disabled = true;

    });


    if (correct) {

        score++;

        button.style.background =
            "#16a34a";

        button.style.color =
            "#fff";

    }

    else {

        button.style.background =
            "#dc2626";

        button.style.color =
            "#fff";


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
       Next question / result
    ---------------------------------- */

    if (
        currentQuestion <
        quiz.questions.length - 1
    ) {

        nextQuestionBtn.style.display =
            "inline-block";

    }

    else {

        setTimeout(
            showResult,
            800
        );

    }

}


/* ======================================
   🔥 TEST LEARNING STREAK
====================================== */

function recordTestLearningStreak() {

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
            TEST_LAST_ACTIVITY_KEY
        );


    let streak =
        Number(
            localStorage.getItem(
                TEST_STREAK_KEY
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


        if (difference === 1) {

            /* Continue streak */

            streak++;

        }

        else {

            /* Missed day(s) → new streak */

            streak = 1;

        }

    }


    /* ----------------------------------
       Save TEST-only streak data
    ---------------------------------- */

    localStorage.setItem(
        TEST_STREAK_KEY,
        String(streak)
    );


    localStorage.setItem(
        TEST_LAST_ACTIVITY_KEY,
        todayKey
    );


    console.log(
        "🔥 TEST Learning Streak:",
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


    const result =
        passed
            ? "✅ PASSED"
            : "❌ TRY AGAIN";


    /* ==================================
       TEST-ONLY SCORE STORAGE
    ================================== */

    const scoreKey =
        "TEST_quiz_" + lessonId;

    const passKey =
        "TEST_quiz_passed_" + lessonId;


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
       TEST-ONLY PASS STORAGE
    ================================== */

    if (passed) {

        localStorage.setItem(
            passKey,
            "true"
        );


        /*
           🔥 IMPORTANT

           The streak is recorded ONLY
           when the quiz is actually passed.

           This is the direct connection
           we wanted.
        */

        recordTestLearningStreak();

    }

    else {

        localStorage.removeItem(
            passKey
        );

    }


    /* ==================================
       SHOW RESULT
    ================================== */

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
                ${localStorage.getItem(scoreKey)}
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
                    🔥 TEST streak recorded!
                </p>
                `
                : ""
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
                onclick="location.href='test-quiz.html?id=${lessonId}'">

                🧪 Test Again

            </button>

        </div>

    `;


    nextQuestionBtn.style.display =
        "none";


    console.log(
        "TEST RESULT:",
        {
            lessonId: lessonId,
            score: score,
            percentage: percentage,
            passed: passed,
            testStreak:
                localStorage.getItem(
                    TEST_STREAK_KEY
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
   START TEST QUIZ
====================================== */

quizTitle.textContent =
    "Lesson " +
    lessonId +
    " Test Quiz";


showQuestion();


console.log(
    "🧪 TEST QUIZ STARTED",
    "Lesson:",
    lessonId
);
