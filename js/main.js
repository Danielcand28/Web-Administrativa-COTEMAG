let index = 0;
const slides = document.querySelectorAll(".slider-content div");
const totalSlides = slides.length;
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

function moveToSlide(slide) {
    const sliderContent = document.querySelector(".slider-content");
    sliderContent.style.transform = `translateX(-${slide * 100}%)`;
}

nextButton.addEventListener("click", () => {
    index = (index + 1) % totalSlides;
    moveToSlide(index);
});

prevButton.addEventListener("click", () => {
    index = (index - 1 + totalSlides) % totalSlides;
    moveToSlide(index);
});

// Mover automáticamente a la siguiente imagen cada 3 segundos
setInterval(() => {
    index = (index + 1) % totalSlides;
    moveToSlide(index);
}, 3000);