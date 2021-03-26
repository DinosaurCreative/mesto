let page = document.querySelector('.page');
let closeButtonInfoEdit = page.querySelector('.popup__cross_info-edit');
let editButton = page.querySelector('.profile__edit-button');
let profileName = page.querySelector('.profile__name');
let profileOccupation = page.querySelector('.profile__occupation');
let inputName = page.querySelector('.popup__input_type_name');
let inputOccupation = page.querySelector('.popup__input_type_occupation');
let inputFormEditor = page.querySelector('.popup__form_type_editor');
let popupInfoEdit = page.querySelector('.popup_info-edit');

function showPopup(className) {
  className.classList.add('popup_opened');
}

function addCurrentTextToInput() {
  inputName.value = profileName.textContent;
  inputOccupation.value = profileOccupation.textContent;
}

function hidePopup(className) {
  className.classList.remove('popup_opened');
}

function applyInfoChanges() {
  profileName.textContent = inputName.value;
  profileOccupation.textContent = inputOccupation.value;
}

editButton.addEventListener('click', () => {
  showPopup(popupInfoEdit);
  addCurrentTextToInput();
});


closeButtonInfoEdit.addEventListener('click', () => {
  hidePopup(popupInfoEdit);
});

inputFormEditor.addEventListener('submit', (evt) => {
  evt.preventDefault();
  applyInfoChanges();
  hidePopup(popupInfoEdit);
});


// попап ля добавления картинок

// переменные
const addButton = page.querySelector('.profile__add-button');

const popupImageAdder = page.querySelector('.popup_image-add');

const closeButtonImageAdd = page.querySelector('.popup__cross_image-add');

const inputFormImageAdd = page.querySelector('.popup__form_type_image_add');
// функции


// слушатели  
addButton.addEventListener('click', () => {
  showPopup(popupImageAdder);
});

closeButtonImageAdd.addEventListener('click', () => {
  hidePopup(popupImageAdder);
});

inputFormImageAdd.addEventListener('submit', (evt) => {
  evt.preventDefault();
  // applyInfoChanges();
  hidePopup(popupImageAdder);
});

const initialCards = [
  {
    name: 'Эльбрус',
    link: './images/Джомолунгма.jpg'
  },
  {
    name: 'Санкт-Петербург',
    link: './images/Амстердам.jpg'
  },
  {
    name: 'Апатиты',
    link: './images/Апатиты.jpg'
  },
  {
    name: 'Краснодарский край',
    link: './images/Machu_Pikchu.jpg'
  },
  {
    name: 'Камчатка',
    link: './images/Камчатка.jpg'
  },
  {
    name: 'Деревня',
    link: './images/Деревня.jpg'
  }
];