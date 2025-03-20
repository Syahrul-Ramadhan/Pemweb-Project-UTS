// CAROUSEL BANNER
const slides = document.querySelectorAll(".slide");
const carousel = document.querySelector(".carousel");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentIndex = 1;
const totalSlides = slides.length;

// Menampilkan slide berdasarkan indeks
function updateCarousel() {
  const offset = -currentIndex * 50; // Menggeser slide
  carousel.style.transform = `translateX(${offset}%)`;
  carousel.style.transition = "transform 0.5s ease-in-out";
}

// Tombol Next
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateCarousel();
});

// Tombol Prev
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateCarousel();
});

// Inisialisasi
updateCarousel();

// CAROUSEL BEASISWA
document.addEventListener("DOMContentLoaded", function () {
  const carouselBeasiswa = document.querySelector(".carousel-beasiswa");
  const leftBtn = document.querySelector(".prev-btn-beasiswa");
  const rightBtn = document.querySelector(".next-btn-beasiswa");

  const scrollAmount = 300;

  rightBtn.addEventListener("click", function () {
    carouselBeasiswa.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });

  leftBtn.addEventListener("click", function () {
    carouselBeasiswa.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });
});

// CAROUSEL LOMBA
document.addEventListener("DOMContentLoaded", function () {
  const carouselLomba = document.querySelector(".carousel-lomba");
  const leftBtn = document.querySelector(".prev-btn-lomba");
  const rightBtn = document.querySelector(".next-btn-lomba");

  const scrollAmount = 300;

  rightBtn.addEventListener("click", function () {
    carouselLomba.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });

  leftBtn.addEventListener("click", function () {
    carouselLomba.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });
});
