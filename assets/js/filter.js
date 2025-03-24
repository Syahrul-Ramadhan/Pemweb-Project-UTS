// filter
const filterWrap = document.querySelector(".filter-wrap-responsive");
const filterBtn = document.querySelector(".filter-btn");
const closeFilter = document.querySelector(".close-filter");
// Buka Side Filter
filterBtn.addEventListener("click", () => {
  filterWrap.classList.add("active");
  closeFilter.classList.add("active");
});

// Tutup Side Filter dengan Klik di Luar
closeFilter.addEventListener("click", () => {
  filterWrap.classList.remove("active");
  closeFilter.classList.remove("active");
});

// pop up cari tim

const popUp = document.querySelector(".pop-up-container");
const bgOverlay = document.querySelector(".background-pop-up");
const closeBtn = document.querySelector(".close-pop-up-btn");
const openBtn = document.querySelectorAll(".card-btn");
const confirmBtn = document.querySelector(".confirm-btn");
const notification = document.querySelector(".custom-notification");

// Event listener untuk semua tombol card-btn
openBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    popUp.classList.add("active");
    bgOverlay.classList.add("active");
  });
});

// Event listener untuk tombol close
closeBtn.addEventListener("click", () => {
  popUp.classList.remove("active");
  bgOverlay.classList.remove("active");
});

// Event listener untuk tombol confirm-btn
confirmBtn.addEventListener("click", () => {
  notification.classList.add("show");
  // Hilangkan notifikasi setelah 3 detik
  setTimeout(() => {
    notification.classList.remove("show");
  }, 3000);
  popUp.classList.remove("active");
  bgOverlay.classList.remove("active");
});

// Upload KTM
const ktmUpload = document.getElementById("ktm-upload");
const fileNameDisplay = document.getElementById("file-name");

ktmUpload.addEventListener("change", function () {
  if (this.files.length > 0) {
    fileNameDisplay.textContent = this.files[0].name;
  } else {
    fileNameDisplay.textContent = "Tidak ada file dipilih";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Bookmark functionality
  const bookmarkButtons = document.querySelectorAll(".bookmark-btn");
  if (bookmarkButtons.length > 0) {
    bookmarkButtons.forEach((btn) => {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        this.classList.toggle("bookmarked");
        if (this.classList.contains("bookmarked")) {
          this.querySelector("i").classList.replace("far", "fas");
        } else {
          this.querySelector("i").classList.replace("fas", "far");
        }
      });
    });
  }

  // Month selector
  const monthButtons = document.querySelectorAll(".month-button");
  if (monthButtons.length > 0) {
    monthButtons.forEach((btn) => {
      btn.addEventListener("click", function () {
        document
          .querySelectorAll(".month-button")
          .forEach((b) => b.classList.remove("active"));
        this.classList.add("active");
      });
    });
  }

  // Pagination functionality
  const paginationButtons = document.querySelectorAll(".pagination-btn");
  const nextPageButton = document.querySelector(".pagination-btn.next");
  let currentPage = 1;

  // Function to simulate loading different pages
  function loadPage(pageNumber) {
    // Update active state of pagination buttons
    paginationButtons.forEach((btn) => {
      if (parseInt(btn.textContent) === pageNumber) {
        btn.classList.add("active");
      } else if (!isNaN(parseInt(btn.textContent))) {
        btn.classList.remove("active");
      }
    });

    // Update current page
    currentPage = pageNumber;

    // Scroll to top of competition container
    document
      .querySelector(".beasiswa-container")
      .scrollIntoView({ behavior: "smooth" });

    // Simulate loading new content with animation
    const cards = document.querySelectorAll(".card-content");
    cards.forEach((card) => {
      card.style.opacity = "0";
      setTimeout(() => {
        card.style.opacity = "1";
      }, 300);
    });

    // Update section title to show current page
    document.querySelector(
      ".competition-header .section-title"
    ).textContent = `Lomba Bulan Maret (Halaman ${pageNumber})`;
  }

  // Add click event to pagination buttons
  if (paginationButtons.length > 0) {
    paginationButtons.forEach((btn) => {
      if (!isNaN(parseInt(btn.textContent))) {
        btn.addEventListener("click", function () {
          loadPage(parseInt(this.textContent));
        });
      }
    });
  }

  // Add click event to next button
  if (nextPageButton) {
    nextPageButton.addEventListener("click", function () {
      if (currentPage < 3) {
        loadPage(currentPage + 1);
      }
    });
  }
});
