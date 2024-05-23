//-- Carrusel ABout
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel__inner');
    const carouselCards = document.querySelectorAll('.about__card');
    
    let currentIndex = 0;
    const totalCards = carouselCards.length;
    const visibleCards = 3;
    const cardWidth = 100 / visibleCards;

    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * cardWidth}%)`;
    }

    function autoSlide() {
        currentIndex = (currentIndex + 1) % totalCards;
        updateCarousel();
    }

    setInterval(autoSlide, 3000);
});




//-- Services Toggle
const serviceButtons = document.querySelectorAll('.service__item');
const serviceDetails = document.querySelector('.services__right');
const contenidoCargado = document.getElementById('contenidoCargado');

const getService = (category) => {
    const details = servicesData.find(item => item.category === category);
    serviceDetails.innerHTML = `
        <h3>${details.title}</h3>
        ${details.description.map(paragraph => `<p>${paragraph}</p>`).join('')}
        <div style="text-align: center; margin-top: 1rem;">
            <a href="${details.link}" class="btn" id="moreDetailsButton" download="${details.fileName}">Descargar</a>
        </div>
    `;
};

const removeActiveClass = () => {
    serviceButtons.forEach(button => {
        button.classList.remove('active');
    });
};

serviceButtons.forEach(item => {
    item.addEventListener('click', () => {
        removeActiveClass();
        item.classList.add('active');
        
        const serviceClass = item.classList[1];
        getService(serviceClass);
    });
});

getService('frontend'); 




// Mixitup (Identidad)
const containerEl = document.querySelector('.projects__container');
var mixer = mixitup(containerEl, {
    animation: {
        enable: false
    }
});
mixer.filter('*');




// Swiper JS (Testimonios)
document.addEventListener('DOMContentLoaded', function () {
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    const slides = document.querySelectorAll('.swiper-slide');
    const pagination = document.querySelector('.swiper-pagination');
    let currentIndex = 0;

    // bullets de paginación
    slides.forEach((slide, index) => {
        const bullet = document.createElement('div');
        bullet.classList.add('swiper-pagination-bullet');
        if (index === 0) bullet.classList.add('swiper-pagination-bullet-active');
        bullet.addEventListener('click', () => {
            currentIndex = index;
            updateSlider();
        });
        pagination.appendChild(bullet);
    });

    function updateSlider() {
        const offset = -currentIndex * slides[0].offsetWidth;
        swiperWrapper.style.transform = `translateX(${offset}px)`;
        document.querySelectorAll('.swiper-pagination-bullet').forEach((bullet, index) => {
            bullet.classList.toggle('swiper-pagination-bullet-active', index === currentIndex);
        });
    }

    function autoSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    }

    let slideInterval = setInterval(autoSlide, 3000);

    document.querySelector('.swipe').addEventListener('mouseover', () => {
        clearInterval(slideInterval);
    });

    document.querySelector('.swipe').addEventListener('mouseout', () => {
        slideInterval = setInterval(autoSlide, 3000);
    });
});



// Preguntas Frecuentes (FAQ)
document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll(".faq__item");

    items.forEach(item => {
        const question = item.querySelector(".faq__question");
        
        question.addEventListener("click", () => {
            item.classList.toggle("active");

            items.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove("active");
                }
            });
        });
    });
});


// Banner Cookies y Publidad Flotante
document.addEventListener('DOMContentLoaded', (event) => {
    const cookieBanner = document.getElementById('cookieBanner');
    const acceptCookiesButton = document.getElementById('acceptCookies');
    const adSection = document.getElementById('adSection');
    const closeAdButton = document.getElementById('closeAd');

    // Comprueba si el usuario ya aceptó las cookies
    if (!localStorage.getItem('cookiesAccepted')) {
        cookieBanner.style.display = 'block';
    }

    acceptCookiesButton.addEventListener('click', () => {
        // Guarda en localStorage que el usuario aceptó las cookies
        localStorage.setItem('cookiesAccepted', 'true');
        cookieBanner.style.display = 'none';
    });

    // Manejar el cierre de la sección publicitaria
    closeAdButton.addEventListener('click', () => {
        adSection.style.display = 'none';
    });
});





