let currentSlideIndex = 1; // Commencez par la première vraie diapositive

const slides = document.querySelectorAll('.carousel-slide');
const slideWidth = slides[0].clientWidth;
const totalSlides = slides.length;

const carouselWrapper = document.querySelector('.carousel-wrapper');

// Cloner la première et la dernière diapositive
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[totalSlides - 1].cloneNode(true);

// Ajouter les clones au carrousel
carouselWrapper.appendChild(firstClone);
carouselWrapper.insertBefore(lastClone, slides[0]);

// Mettre à jour la liste des diapositives
const allSlides = document.querySelectorAll('.carousel-slide');
const totalAllSlides = allSlides.length;

function showSlide(index) {
    const offset = -index * slideWidth;
    carouselWrapper.style.transition = 'transform 0.3s ease-in-out';
    carouselWrapper.style.transform = `translateX(${offset}px)`;
    currentSlideIndex = index;

    if (index === 0) {
        setTimeout(() => {
            carouselWrapper.style.transition = 'none';
            const offset = -(totalSlides) * slideWidth;
            carouselWrapper.style.transform = `translateX(${offset}px)`;
            currentSlideIndex = totalSlides;
        }, 500);
    }

    if (index === totalSlides + 1) {
        setTimeout(() => {
            carouselWrapper.style.transition = 'none';
            const offset = -slideWidth;
            carouselWrapper.style.transform = `translateX(${offset}px)`;
            currentSlideIndex = 1;
        }, 500);
    }

    updateIndicators();
}

function prevSlide() {
    showSlide(currentSlideIndex - 1);
}

function nextSlide() {
    showSlide(currentSlideIndex + 1);
}

function createIndicators() {
    const indicatorContainer = document.querySelector('.carousel-indicators');

    // Supprimer les indicateurs existants
    indicatorContainer.innerHTML = '';

    // Créer un indicateur pour chaque diapositive (sauf les clones)
    for (let i = 0; i < totalSlides; i++) {
        const indicator = document.createElement('span');
        indicator.classList.add('indicator');
        indicatorContainer.appendChild(indicator);

        // Ajouter un écouteur d'événement pour le clic sur l'indicateur
        indicator.addEventListener('click', () => {
            showSlide(i + 1); // Afficher la diapositive correspondante au clic sur l'indicateur
        });
    }

    // Mettre à jour les indicateurs initialement
    updateIndicators();
}

function updateIndicators() {
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
        if (index === (currentSlideIndex - 1 + totalSlides) % totalSlides) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

// Appeler la fonction pour créer les indicateurs au chargement de la page
createIndicators();

// Afficher la première vraie diapositive au chargement de la page
showSlide(currentSlideIndex);
