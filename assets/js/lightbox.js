// assets/js/lightbox.js

document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    const images = Array.from(document.querySelectorAll('.photo-grid img'));
    let currentIndex = 0;

    if (!lightbox) return;

    // Open image
    images.forEach((img, index) => {
        img.addEventListener('click', () => {
            currentIndex = index;
            lightboxImg.src = img.src;
            lightbox.style.display = 'flex';
        });
    });

    // Close
    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    // Click outside closes
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });

    // Show next image
    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex + 1) % images.length;
        lightboxImg.src = images[currentIndex].src;
    });

    // Show previous image
    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        lightboxImg.src = images[currentIndex].src;
    });

    // Keyboard support
    document.addEventListener('keydown', (e) => {
        if (lightbox.style.display === 'flex') {
            if (e.key === 'ArrowRight') nextBtn.click();
            if (e.key === 'ArrowLeft') prevBtn.click();
            if (e.key === 'Escape') closeBtn.click();
        }
    });
});
