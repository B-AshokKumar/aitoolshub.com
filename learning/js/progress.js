// ===============================
// AI Tools Hub Progress System
// ===============================

const TOTAL_LESSONS = 20;

// Mark a lesson as passed
function markLessonPassed(lessonNumber, score) {

    localStorage.setItem(
        "lesson_" + lessonNumber + "_passed",
        "true"
    );

    localStorage.setItem(
        "lesson_" + lessonNumber + "_score",
        score
    );

}

// Check if a lesson is passed
function isLessonPassed(lessonNumber) {

    return localStorage.getItem(
        "lesson_" + lessonNumber + "_passed"
    ) === "true";

}

// Count passed lessons
function getPassedLessons() {

    let passed = 0;

    for (let i = 1; i <= TOTAL_LESSONS; i++) {

        if (isLessonPassed(i)) {

            passed++;

        }

    }

    return passed;

}

// Get progress percentage
function getProgressPercentage() {

    return Math.round(
        (getPassedLessons() / TOTAL_LESSONS) * 100
    );

}

// Check if course is completed
function isCourseCompleted() {

    return getPassedLessons() === TOTAL_LESSONS;

}
