const countriesList = document.querySelector('.countries__list');
const countriesItem = document.querySelectorAll('.countries__item');
const buttons = document.querySelectorAll('.countries__button');
const hotels = document.querySelectorAll('.hotels__item');
const viewAll = document.querySelector('.gallery__button');

// buttons.forEach(button => {
//     button.addEventListener('click', () => {
//         buttons.forEach(item => {
//             item.classList.remove('countries__button--active');
//         });
//         button.classList.add('countries__button--active');
//     });
// });

const filter = () => {
    countriesList.addEventListener('click', (event) => {
        const targetId = event.target.dataset.id;
        const target = event.target;

        buttons.forEach(item => {
            item.classList.remove('countries__button--active');
        });
        target.classList.add('countries__button--active');


        switch (targetId) {
            case 'singapore':
                getItems('hotels__item--singapore');
                break;

            case 'china':
                getItems('hotels__item--china');
                break;

            case 'india':
                getItems('hotels__item--india');
                break;

            case 'bhutan':
                getItems('hotels__item--bhutan');
                break;

            case 'thailaand':
                getItems('hotels__item--thailaand');
                break;

            case 'nepal':
                getItems('hotels__item--nepal');
                break;
        }
    });
};

filter();

const getItems = (className) => {
    hotels.forEach(item => {
        if (item.classList.contains(className) == true) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
};