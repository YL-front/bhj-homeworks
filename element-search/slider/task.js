let slides = Array.from(document.querySelectorAll('.slider__item'));

let prevArrow = document.querySelector('.slider__arrow_prev');
let nextArrow = document.querySelector('.slider__arrow_next');

let activeSlide = 0;

function hideSlide() {
    slides[activeSlide].classList.remove('slider__item_active');
}

function activateSlide() {
    slides[activeSlide].classList.add('slider__item_active');
}

nextArrow.onclick = () => {
    hideSlide();

    activeSlide++;

    if (activeSlide === slides.length) {
        activeSlide = 0;
    }

    activateSlide();
}

prevArrow.onclick = () => {
    hideSlide();

    activeSlide--;

    if (activeSlide < 0) {
        activeSlide = (slides.length - 1);
    }

    activateSlide();
}
