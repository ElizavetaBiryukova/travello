const buttons = document.querySelectorAll('.countries__button');

buttons.forEach(el => {
    el.addEventListener('click', () => {
        buttons.forEach(item => {
            item.classList.remove('countries__button--active');

        });
        el.classList.add('countries__button--active');
    });
});
