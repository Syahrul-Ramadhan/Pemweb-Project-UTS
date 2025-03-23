// Hamburger Menu dan side Navbar
const burgerMenu = document.querySelector(".burger-menu");
const sideNav = document.querySelector(".menu-responsive");
const close = document.querySelector(".close-nav");

// Buka Side Navbar
burgerMenu.addEventListener("click", () => {
  sideNav.classList.add("active");
  close.classList.add("active");
});

// Tutup Side Navbar dengan Klik di Luar
close.addEventListener("click", () => {
  sideNav.classList.remove("active");
  close.classList.remove("active");
});

// Search button ketika lebar layar kurang dari 1080
const searchIcon = document.querySelector(".search-icon");
const searchContainer = document.querySelector(".search-container");

// Fungsi untuk mengontrol tampilan search bar
function toggleSearchBar() {
  if (window.innerWidth <= 1080) {
    // Jika layar kecil, toggle search bar bisa muncul/menghilang saat search icon diklik
    if (
      searchContainer.style.display === "none" ||
      searchContainer.style.display === ""
    ) {
      searchContainer.style.display = "flex";
    } else {
      searchContainer.style.display = "none";
    }
  }
}

// Event listener saat ikon pencarian diklik
searchIcon.addEventListener("click", toggleSearchBar);

// Event listener saat ukuran layar berubah
window.addEventListener("resize", () => {
  if (window.innerWidth > 1080) {
    searchContainer.style.display = "flex"; // Selalu tampil di layar besar
  } else {
    searchContainer.style.display = "none"; // Sembunyikan saat layar kecil
  }
});

// Panggil event sekali saat halaman dimuat untuk menyesuaikan kondisi awal
window.dispatchEvent(new Event("resize"));

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
