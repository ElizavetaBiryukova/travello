const slide = document.querySelector('.testimonials__slider');
const sliders = document.querySelectorAll('.testimonials__slider');
const toggle = document.querySelector('.testimonials__button');
const toggles = document.querySelectorAll('.testimonials__button');

const togglesArray = Array.from(toggles);

let index = 0;

togglesArray.forEach((el) => {
    el.addEventListener('click', (event) => {
        togglesArray.forEach(item => {
            item.classList.remove('testimonials__button--active');

        });
        el.classList.add('testimonials__button--active');
        const index = togglesArray.indexOf(event.target);
        sliders.forEach(item => {
            item.classList.remove('testimonials__slider--active');

        });
        sliders[index].classList.add('testimonials__slider--active');
    });

});