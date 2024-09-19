////////////////////////////
//         SLIDER         //
////////////////////////////

const slider = document.querySelector(".slider");
const slides = slider.getElementsByTagName("img");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let currentSlide = 0;
let intervalId;

slides[currentSlide].classList.add("active");

function nextSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}

function prevSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].classList.add("active");
}

prev.addEventListener("click", prevSlide);
next.addEventListener("click", nextSlide);

function autoSlide() {
  intervalId = setInterval(nextSlide, 3000);
}

autoSlide();

slider.addEventListener("mouseover", function () {
  clearInterval(intervalId);
});

slider.addEventListener("mouseout", autoSlide);
