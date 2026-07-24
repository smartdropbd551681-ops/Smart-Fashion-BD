let currentSlide = 0;

function nextSlide() {
    const slides = document.querySelectorAll(".slider img");

    if (slides.length === 0) return;

    slides[currentSlide].style.display = "none";

    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    slides[currentSlide].style.display = "block";
}

setInterval(nextSlide, 3000);
