// Gallery Navigation
document.addEventListener("DOMContentLoaded", function () {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const arrowLeft = document.querySelector('.arrow:first-child');
    const arrowRight = document.querySelector('.arrow:last-child');
    let currentIndex = 0;

    // Function to update gallery display
    function updateGallery() {
        galleryItems.forEach((item, index) => {
            item.style.display = (index === currentIndex) ? 'block' : 'none';
        });
    }

    // Event listener for left arrow
    arrowLeft.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? galleryItems.length - 1 : currentIndex - 1;
        updateGallery();
    });

    // Event listener for right arrow
    arrowRight.addEventListener('click', () => {
        currentIndex = (currentIndex === galleryItems.length - 1) ? 0 : currentIndex + 1;
        updateGallery();
    });

    // Initialize the gallery display
    updateGallery();
});

// Smooth Scroll for Navbar Links
const links = document.querySelectorAll('a.nav-link');
links.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});