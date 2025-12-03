// assets/js/lightbox.js

document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close');

    if (!lightbox) return;

    // Thumbnail click
    document.querySelectorAll('.photo-grid img').forEach(img => {
        img.addEventListener('click', () => {
            lightboxImg.src = img.src;
            lightbox.style.display = 'flex'; // IMPORTANT: flex, not block
        });
    });

    // Close button
    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    // Click outside image closes lightbox
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});
