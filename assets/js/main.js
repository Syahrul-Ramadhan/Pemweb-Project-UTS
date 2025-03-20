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

// Halaman Lomba

// Filter functionality
document.querySelector('.filter-reset').addEventListener('click', function() {
    const selects = document.querySelectorAll('.filter-group select');
    selects.forEach(select => {
        select.selectedIndex = 0;
    });
});

// Search functionality
document.querySelector('.lomba-search-button').addEventListener('click', function() {
    const searchTerm = document.querySelector('.lomba-search-input').value.toLowerCase();
    if (searchTerm) {
        // In a real application, this would trigger a search request
        alert('Mencari: ' + searchTerm);
    }
});

// View more button
document.querySelector('.view-more-btn').addEventListener('click', function() {
    // In a real application, this would load more competitions
    alert('Memuat lebih banyak lomba...');
});

// Pagination
document.querySelectorAll('.pagination-number').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelectorAll('.pagination-number').forEach(num => {
            num.classList.remove('active');
        });
        this.classList.add('active');
        // In a real application, this would load the corresponding page
    });
});

// Newsletter subscription
document.querySelector('.newsletter-button').addEventListener('click', function() {
    const email = document.querySelector('.newsletter-input').value;
    if (email && /^\S+@\S+\.\S+$/.test(email)) {
        alert('Terima kasih telah berlangganan newsletter kami!');
        document.querySelector('.newsletter-input').value = '';
    } else {
        alert('Mohon masukkan alamat email yang valid.');
    }
});

// Halaman Detail Lomba


// Tab switching functionality
document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all buttons and content
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Show corresponding content
        const tabId = this.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

// Bookmark functionality
document.querySelector('.btn-bookmark').addEventListener('click', function() {
    const icon = this.querySelector('i');
    if (icon.classList.contains('far')) {
        icon.classList.replace('far', 'fas');
        alert('Lomba disimpan ke daftar favorit!');
    } else {
        icon.classList.replace('fas', 'far');
        alert('Lomba dihapus dari daftar favorit!');
    }
});

// Share functionality
document.querySelector('.btn-share').addEventListener('click', function() {
    if (navigator.share) {
        navigator.share({
            title: 'GEMASTIK XV - Pagelaran Mahasiswa Nasional Bidang TIK',
            text: 'Cek lomba GEMASTIK XV dengan total hadiah Rp 500.000.000!',
            url: window.location.href
        })
        .catch(error => console.log('Error sharing:', error));
    } else {
        alert('Bagikan link: ' + window.location.href);
    }
});

// FAQ toggle
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        const icon = this.querySelector('i');
        
        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
            icon.classList.replace('fa-chevron-up', 'fa-chevron-down');
        } else {
            answer.style.maxHeight = answer.scrollHeight + 'px';
            icon.classList.replace('fa-chevron-down', 'fa-chevron-up');
        }
    });
});
