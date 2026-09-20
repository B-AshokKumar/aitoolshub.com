(function () {

    const THEME_KEY = "aiToolsHubTheme";

    function applySavedTheme() {

        const savedTheme =
            localStorage.getItem(THEME_KEY);

        document.body.classList.toggle(
            "dark",
            savedTheme === "dark"
        );
    }

    if (document.readyState === "loading") {

        document.addEventListener(
            "DOMContentLoaded",
            applySavedTheme
        );

    } else {

        applySavedTheme();
    }

})();
