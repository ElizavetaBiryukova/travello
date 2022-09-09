const slide = document.querySelector('.testimonials__slider');
const sliders = document.querySelectorAll('.testimonials__slider');
const toggle = document.querySelector('.testimonials__button');
const toggles = document.querySelectorAll('.testimonials__button');


toggles.forEach((el) => {
    el.addEventListener('click', () => {
        toggles.forEach(item => {
            item.classList.remove('testimonials__button--active');
        });
        el.classList.add('testimonials__button--active');
    });
});