const elbrus = new URL('./images/Джомолунгма.jpg', import.meta.url);
const saintPitersburg = new URL('./images/Амстердам.jpg', import.meta.url);
const apatity = new URL('./images/Апатиты.jpg', import.meta.url);
const camchatka = new URL('./images/Камчатка.jpg', import.meta.url);
const village = new URL('../images/Деревня.jpg', import.meta.url);


export const initialCards = [{
    name: 'Эльбрус',
    link: elbrus
    // link: './images/Джомолунгма.jpg'
  },
  {
    name: 'Санкт-Петербург',
    link: saintPitersburg
    // link: './images/Амстердам.jpg'
  },
  {
    name: 'Апатиты',
    link: apatity
    // link: './images/Апатиты.jpg'
  },
  {
    name: 'Камчатка',
    link: camchatka
    // link: './images/Камчатка.jpg'
  },
  {
    name: 'Деревня',
    link: village
    // link: '../images/Деревня.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
];
