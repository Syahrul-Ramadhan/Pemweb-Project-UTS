// HALAMAN LOMBA

document.addEventListener('DOMContentLoaded', function() {
    // Burger menu toggle
    const burgerMenu = document.getElementById('burger-menu');
    const menuResponsive = document.getElementById('menu-responsive');
    const closeNav = document.getElementById('close-nav');
    
    if (burgerMenu && menuResponsive && closeNav) {
        burgerMenu.addEventListener('click', function() {
            this.classList.toggle('active');
            menuResponsive.classList.toggle('active');
            closeNav.classList.toggle('active');
        });
        
        closeNav.addEventListener('click', function() {
            burgerMenu.classList.remove('active');
            menuResponsive.classList.remove('active');
            this.classList.remove('active');
        });
    }
    
    // Search functionality
    const searchInput = document.getElementById('search-input');
    
    if (searchInput) {
        // Function to handle search
        function handleSearch() {
            const searchTerm = searchInput.value.trim().toLowerCase();
            if (searchTerm.length > 0) {
                // Update section title to show search term
                const sectionTitle = document.querySelector('.competition-header .section-title');
                if (sectionTitle) {
                    sectionTitle.textContent = `Lomba untuk "${searchTerm}"`;
                }
                
                // Filter competition cards
                const cards = document.querySelectorAll('.competition-card');
                let matchCount = 0;
                
                cards.forEach(card => {
                    const title = card.querySelector('h3').textContent.toLowerCase();
                    const organizer = card.querySelector('.organizer').textContent.toLowerCase();
                    
                    // Check if card matches search term
                    if (title.includes(searchTerm) || organizer.includes(searchTerm)) {
                        card.style.display = 'flex';
                        card.style.opacity = '0';
                        setTimeout(() => {
                            card.style.opacity = '1';
                        }, 150 * matchCount); // Staggered animation
                        matchCount++;
                    } else {
                        card.style.display = 'none';
                    }
                });
                
                // Show message if no results found
                const noResultsMsg = document.getElementById('no-results-message');
                if (matchCount === 0) {
                    if (!noResultsMsg) {
                        const competitionGrid = document.querySelector('.competition-grid');
                        const message = document.createElement('div');
                        message.id = 'no-results-message';
                        message.className = 'no-results-message';
                        message.innerHTML = `
                            <i class="fas fa-search"></i>
                            <h3>Tidak ada hasil untuk "${searchTerm}"</h3>
                            <p>Coba kata kunci lain atau filter yang berbeda</p>
                            <button class="btn btn-reset-search">Reset Pencarian</button>
                        `;
                        competitionGrid.appendChild(message);
                        
                        // Add event listener to reset button
                        document.querySelector('.btn-reset-search').addEventListener('click', resetSearch);
                    }
                } else if (noResultsMsg) {
                    noResultsMsg.remove();
                }
                
                // Hide pagination if searching
                const pagination = document.querySelector('.pagination');
                if (pagination) {
                    pagination.style.display = 'none';
                }
                
                // Add reset button to search if not already there
                if (!document.querySelector('.search-reset-btn')) {
                    const resetBtn = document.createElement('button');
                    resetBtn.className = 'search-reset-btn';
                    resetBtn.innerHTML = '<i class="fas fa-times"></i>';
                    resetBtn.addEventListener('click', resetSearch);
                    
                    // Append to the parent of search input
                    searchInput.parentNode.appendChild(resetBtn);
                }
            }
        }
        
        // Function to reset search
        function resetSearch() {
            // Clear search input
            searchInput.value = '';
            
            // Reset section title
            const sectionTitle = document.querySelector('.competition-header .section-title');
            if (sectionTitle) {
                sectionTitle.textContent = 'Lomba Bulan Maret';
            }
            
            // Show all cards
            const cards = document.querySelectorAll('.competition-card');
            cards.forEach(card => {
                card.style.display = 'flex';
                card.style.opacity = '1';
            });
            
            // Remove no results message if it exists
            const noResultsMsg = document.getElementById('no-results-message');
            if (noResultsMsg) {
                noResultsMsg.remove();
            }
            
            // Show pagination again
            const pagination = document.querySelector('.pagination');
            if (pagination) {
                pagination.style.display = 'flex';
            }
            
            // Remove reset button
            const resetBtn = document.querySelector('.search-reset-btn');
            if (resetBtn) {
                resetBtn.remove();
            }
        }
        
        // Event listener for search on Enter key
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                handleSearch();
            }
        });
    }
    
    // Toggle mobile menu
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            document.querySelector('.nav-menu').classList.toggle('active');
        });
    }

    // Toggle filter sidebar on mobile
    const filterToggle = document.querySelector('.filter-toggle');
    if (filterToggle) {
        filterToggle.addEventListener('click', function() {
            document.querySelector('.filter-content').classList.toggle('active');
            this.querySelector('i').classList.toggle('fa-chevron-up');
            this.querySelector('i').classList.toggle('fa-chevron-down');
        });
    }

    // Bookmark functionality
    const bookmarkButtons = document.querySelectorAll('.bookmark-btn');
    if (bookmarkButtons.length > 0) {
        bookmarkButtons.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                this.classList.toggle('bookmarked');
                if (this.classList.contains('bookmarked')) {
                    this.querySelector('i').classList.replace('far', 'fas');
                } else {
                    this.querySelector('i').classList.replace('fas', 'far');
                }
            });
        });
    }

    // Month selector
    const monthButtons = document.querySelectorAll('.month-button');
    if (monthButtons.length > 0) {
        monthButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.month-button').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }
    
    // Pagination functionality
    const paginationButtons = document.querySelectorAll('.pagination-btn');
    const nextPageButton = document.querySelector('.pagination-btn.next');
    let currentPage = 1;

    // Function to simulate loading different pages
    function loadPage(pageNumber) {
        // Update active state of pagination buttons
        paginationButtons.forEach(btn => {
            if (parseInt(btn.textContent) === pageNumber) {
                btn.classList.add('active');
            } else if (!isNaN(parseInt(btn.textContent))) {
                btn.classList.remove('active');
            }
        });
        
        // Update current page
        currentPage = pageNumber;
        
        // Scroll to top of competition container
        document.querySelector('.competition-container').scrollIntoView({ behavior: 'smooth' });
        
        // Simulate loading new content with animation
        const cards = document.querySelectorAll('.competition-card');
        cards.forEach(card => {
            card.style.opacity = '0';
            setTimeout(() => {
                card.style.opacity = '1';
            }, 300);
        });
        
        // Update section title to show current page
        document.querySelector('.competition-header .section-title').textContent = `Lomba Bulan Maret (Halaman ${pageNumber})`;
    }

    // Add click event to pagination buttons
    if (paginationButtons.length > 0) {
        paginationButtons.forEach(btn => {
            if (!isNaN(parseInt(btn.textContent))) {
                btn.addEventListener('click', function() {
                    loadPage(parseInt(this.textContent));
                });
            }
        });
    }

    // Add click event to next button
    if (nextPageButton) {
        nextPageButton.addEventListener('click', function() {
            if (currentPage < 3) {
                loadPage(currentPage + 1);
            }
        });
    }
});

// Make sure bookmark buttons don't trigger card links
document.addEventListener('DOMContentLoaded', function() {
    const bookmarkBtns = document.querySelectorAll('.bookmark-btn');
    
    bookmarkBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            // Stop the click event from bubbling up to the card link
            e.stopPropagation();
            e.preventDefault();
            
            // Toggle bookmark state
            this.classList.toggle('bookmarked');
            
            // Change the icon
            if (this.classList.contains('bookmarked')) {
                this.querySelector('i').classList.replace('far', 'fas');
            } else {
                this.querySelector('i').classList.replace('fas', 'far');
            }
        });
    });
});


// DETAIL LOMBA JS
document.addEventListener('DOMContentLoaded', function() {
    // Bookmark functionality for detail page
    const detailBookmarkBtn = document.querySelector('.btn-bookmark');
    if (detailBookmarkBtn) {
        detailBookmarkBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            if (this.classList.contains('active')) {
                this.querySelector('i').classList.replace('far', 'fas');
                this.querySelector('span').textContent = 'Dibookmark';
            } else {
                this.querySelector('i').classList.replace('fas', 'far');
                this.querySelector('span').textContent = 'Bookmark';
            }
        });
    }

    // Share link functionality
    const shareBtn = document.querySelector('.btn-share');
    if (shareBtn) {
        shareBtn.addEventListener('click', function() {
            // Get current URL
            const url = window.location.href;
            
            // Copy to clipboard
            navigator.clipboard.writeText(url).then(() => {
                // Visual feedback
                const originalText = this.querySelector('span').textContent;
                this.querySelector('span').textContent = 'Tautan Disalin!';
                
                // Add temporary class for animation
                this.classList.add('copied');
                
                // Reset after 2 seconds
                setTimeout(() => {
                    this.classList.remove('copied');
                    this.querySelector('span').textContent = originalText;
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy: ', err);
                alert('Gagal menyalin tautan. Silakan coba lagi.');
            });
        });
    }
    
    // Download button functionality
    const downloadBtn = document.querySelector('.btn-download');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function(e) {
            // This would typically download a file
            // For demo purposes, we'll just show an alert
            e.preventDefault();
            alert('Downloading guidebook...');
            // In a real implementation, you would trigger the file download here
        });
    }
});
