// CAROUSEL
const slides = document.querySelectorAll(".slide");
const carousel = document.querySelector(".carousel");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentIndex = 0;

// Add active class to current slide
if (index === currentIndex) {
  slide.classList.add("active");
} else {
  slide.classList.remove("active");
}

function goToSlide(index) {
  if (index >= totalSlides) index = 0;
  if (index < 0) index = totalSlides - 1;

  currentIndex = index;

  // Update the position of all slides based on the current index
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 * (i - currentIndex)}%)`;

    // Update active state
    if (i === currentIndex) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  });
}

// Next button click event
nextBtn.addEventListener("click", () => {
  goToSlide(currentIndex + 1);
});

// Previous button click event
prevBtn.addEventListener("click", () => {
  goToSlide(currentIndex - 1);
});
