const slide = document.querySelector('.testimonials__slider');
const sliders = document.querySelectorAll('.testimonials__slider');
const toggle = document.querySelector('.testimonials__button');
const toggles = document.querySelectorAll('.testimonials__button');

const togglesArray = Array.from(toggles);

let index = 0;
let timer;

const changeButton = (el) => {
    togglesArray.forEach(item => {
        item.classList.remove('testimonials__button--active');
    });
    el.classList.add('testimonials__button--active');
};

const changeSlider = (index) => {
    sliders.forEach(item => {
        item.classList.remove('testimonials__slider--active');
    });
    sliders[index].classList.add('testimonials__slider--active');
};

togglesArray.forEach((el) => {
    el.addEventListener('click', (event) => {
        const index = togglesArray.indexOf(event.target);
        changeButton(el);
        changeSlider(index);
        clearTimeout(timer);
    });

});


const timeChange = () => {
    index++;
    if (index > togglesArray.length - 1) {
        index = 0;
    }
    changeButton(togglesArray[index]);
    changeSlider(index);
    timer = setTimeout(timeChange, 4000);
};


timeChange();