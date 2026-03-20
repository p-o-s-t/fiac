// assets/js/slides.js

let currentSlide = 0;
let slides = [];

function showSlide(index) {
    if (slides.length === 0) return;
    
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.remove('hidden');
            slide.classList.add('active');
        } else {
            slide.classList.add('hidden');
            slide.classList.remove('active');
        }
    });
    
    // Update navigation buttons if they exist
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (prevBtn) prevBtn.disabled = (index === 0);
    if (nextBtn) {
        if (index === slides.length - 1) {
            nextBtn.textContent = 'Finish';
            nextBtn.onclick = () => window.location.href = '../index.html';
        } else {
            nextBtn.textContent = 'Next';
            nextBtn.onclick = nextSlide;
        }
    }
}

function nextSlide() {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
        showSlide(currentSlide);
    }
}

function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
        showSlide(currentSlide);
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    slides = document.querySelectorAll('.slide');
    if (slides.length > 0) {
        showSlide(0);
    }
});

// Export to window for global access
window.nextSlide = nextSlide;
window.prevSlide = prevSlide;
window.showSlide = showSlide;
