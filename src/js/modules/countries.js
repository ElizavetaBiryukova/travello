const countriesList = document.querySelector('.countries__list');
const buttons = document.querySelectorAll('.countries__button');
const hotels = document.querySelectorAll('.hotels__item');
const viewAll = document.querySelector('.gallery__view-all');
const up = document.querySelector('.gallery__up');
const nothingFound = document.querySelector('.gallery__nothing-found');

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

            case 'thailand':
                getItems('hotels__item--thailand');
                break;

            case 'nepal':
                getItems('hotels__item--nepal');
                break;
        }

        viewAll.classList.remove('visually-hidden');
        up.classList.ad('visually-hidden');
    });

    viewAll.addEventListener('click', () => {
        hotels.forEach(item => {
            item.classList.remove('block-none');
            item.classList.add('block');

        });
        buttons.forEach(item => {
            item.classList.remove('countries__button--active');
        });
        viewAll.classList.add('visually-hidden');
        up.classList.remove('visually-hidden');
        nothingFound.classList.add('visually-hidden');
        countriesList.scrollIntoView();
    });


    up.addEventListener('click', () => {
        countriesList.scrollIntoView();
    });

};

filter();

const getItems = (className) => {

    hotels.forEach(item => {
        if (item.classList.contains(className)) {
            item.classList.remove('block-none');
            item.classList.add('block');
        } else {
            item.classList.remove('block');
            item.classList.add('block-none');
        }
    });

    let hotelsArray = Array.from(hotels);
    console.log(hotelsArray);
    console.log(hotelsArray.find(el => el.classList.contains('block')));
    if (hotelsArray.find(el => el.classList.contains('block')) == undefined) {
        nothingFound.classList.remove('visually-hidden');
    } else {
        nothingFound.classList.add('visually-hidden');
    }


};