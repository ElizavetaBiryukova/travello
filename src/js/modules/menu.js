const burger = document.querySelector('.page-header__burger');
const menu = document.querySelector('.main-nav');

const Keys = {
    ESCAPE: 'Escape',
    ESC: 'Esc'
};


burger.addEventListener('click', () => {
    menu.classList.toggle('main-nav--open');
    burger.classList.toggle('page-header__burger--open');
});

const escapeCloseMenu = (evt) => {
    if (evt.key === Keys.ESCAPE || evt.key === Keys.ESC) {
        menu.classList.remove('main-nav--open');
        burger.classList.remove('page-header__burger--open');
    }
};


document.addEventListener('keydown', escapeCloseMenu);

