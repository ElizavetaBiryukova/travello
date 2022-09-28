const slide = document.querySelector('.testimonials__slider');
const sliders = document.querySelectorAll('.testimonials__slider');
const toggle = document.querySelector('.testimonials__button');
const toggles = document.querySelectorAll('.testimonials__button');

const togglesArray = Array.from(toggles);

let index = 0;

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
    });
});



const timeChange = () => {
    for (index = 0; index < togglesArray.length; index++) {

        changeButton(togglesArray[index]);
        changeSlider(index);
    }
};

// timeChange();
// const timeChange = () => {
//     for (let i = 0; i < togglesArray.length - 1; i++) {
//         // console.log(index++);
//         changeButton(togglesArray[index]);
//         changeSlider(index);
//         index++;
//     }
//     // console.log(index);

// };

// // if ()

// console.log(timeChange());
// // console.log(togglesArray[2]);
setTimeout(timeChange, 2000);
// setInterval(timeChange, 2000);