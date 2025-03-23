// Register

// Toggle password visibility
document.querySelectorAll('.toggle-password').forEach(icon => {
    icon.addEventListener('click', function() {
        const input = this.previousElementSibling;
        if (input.type === 'password') {
            input.type = 'text';
            this.classList.replace('fa-eye-slash', 'fa-eye');
        } else {
            input.type = 'password';
            this.classList.replace('fa-eye', 'fa-eye-slash');
        }
    });
});

// Mobile menu toggle
document.querySelector('.mobile-menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Form validation
document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    if (password !== confirmPassword) {
        alert('Password tidak cocok!');
        return;
    }
    
    // Here you would typically send the form data to your server
    alert('Pendaftaran berhasil! Silahkan cek email Anda untuk verifikasi.');
});

// Toggle password visibility
        document.querySelector('.toggle-password').addEventListener('click', function() {
            const input = this.previousElementSibling;
            if (input.type === 'password') {
                input.type = 'text';
                this.classList.replace('fa-eye-slash', 'fa-eye');
            } else {
                input.type = 'password';
                this.classList.replace('fa-eye', 'fa-eye-slash');
            }
        });

        // Mobile menu toggle
        document.querySelector('.mobile-menu-toggle').addEventListener('click', function() {
            document.querySelector('.nav-links').classList.toggle('active');
        });

        // Form validation
        document.getElementById('login-form').addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would typically send the form data to your server for authentication
            alert('Login successful!');
        });

// Login

// Toggle password visibility
document.querySelector('.toggle-password').addEventListener('click', function() {
    const input = this.previousElementSibling;
    if (input.type === 'password') {
        input.type = 'text';
        this.classList.replace('fa-eye-slash', 'fa-eye');
    } else {
        input.type = 'password';
        this.classList.replace('fa-eye', 'fa-eye-slash');
    }
});

// Mobile menu toggle
document.querySelector('.mobile-menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Form validation
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Here you would typically send the form data to your server for authentication
    alert('Login successful!');
});