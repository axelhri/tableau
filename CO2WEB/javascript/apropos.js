let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const leftBtn = document.getElementById('leftBtn');
const rightBtn = document.getElementById('rightBtn');

// Initialize the slider
showSlide(currentSlide, 'none'); // Utiliser 'none' comme direction pour éviter le déplacement initial

function showSlide(index, direction) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active', 'incoming-left', 'incoming-right');
        if (i === index) {
            slide.classList.add('active');
            slide.style.left = '0';
        } else if (direction === 'right' && i < index) { // Déplacer vers la droite les diapositives précédentes
            slide.style.left = '-100%';
        } else if (direction === 'left' && i > index) { // Déplacer vers la gauche les diapositives suivantes
            slide.style.left = '100%';
        } else {
            slide.style.left = '100%'; // Par défaut, positionner toutes les diapositives à droite pour éviter le croisement initial
        }
    });

    if (direction === 'left') {
        slides[index].classList.add('incoming-left');
    } else if (direction === 'right') {
        slides[index].classList.add('incoming-right');
    }
}

function slideLeft() {
    if (currentSlide > 0) {
        currentSlide--;
        showSlide(currentSlide, 'left');
    }
    toggleButtons();
}

function slideRight() {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
        showSlide(currentSlide, 'right');
    }
    toggleButtons();
}

function toggleButtons() {
    leftBtn.disabled = currentSlide === 0;
    rightBtn.disabled = currentSlide === slides.length - 1;
}

document.querySelector('.slider-container').addEventListener('mouseover', () => toggleButtons(true));
document.querySelector('.slider-container').addEventListener('mouseout', () => toggleButtons(false));
