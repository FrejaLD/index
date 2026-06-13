const backToTopButton = document.getElementById("myBtn");

window.addEventListener("scroll", () => {
    // Show button if scrolled down more than 300px
    if (window.scrollY > 300) {
        backToTopButton.classList.add("visible");
    } else {
        backToTopButton.classList.remove("visible");
    }
});
