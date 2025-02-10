document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const backToTop = document.getElementById("backToTop");
    const body = document.body;

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Back to Top Button
    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    backToTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Dark Mode Toggle
    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
    }

    darkModeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "enabled");
        } else {
            localStorage.removeItem("dark-mode");
        }
    });
});
