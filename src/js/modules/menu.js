const burger = document.querySelector('.page-header__burger');
const menu = document.querySelector('.main-nav');


burger.addEventListener('click', () => {
    menu.classList.toggle('main-nav--open');
    burger.classList.toggle('page-header__burger--open');
});