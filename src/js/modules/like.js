const hearts = document.querySelectorAll('.hotels__icon');

hearts.forEach((el) => {
    el.addEventListener('click', () => {
        el.classList.toggle('hotels__heart-icon--active');
    });
});