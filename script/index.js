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

const page = document.querySelector('.page');
const closeButtonInfoEdit = page.querySelector('.popup__cross_info-edit');
const editButton = page.querySelector('.profile__edit-button');
const profileName = page.querySelector('.profile__name');
const profileOccupation = page.querySelector('.profile__occupation');
const inputName = page.querySelector('.popup__input_type_name');
const inputOccupation = page.querySelector('.popup__input_type_occupation');
const inputFormEditor = page.querySelector('.popup__form_type_editor');
const popupInfoEdit = page.querySelector('.popup_info-edit');

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


// Попап добавления изображений
// переменные
const addButton = page.querySelector('.profile__add-button');
const popupImage = page.querySelector('.popup_type_image');
const closeImagePopup = page.querySelector('.popup__cross_type_image');
const submitChangesImagePopup = page.querySelector('.popup__form_type_image');
const gridItemTemplate = page.querySelector('#grid_item').content;
const gridList = page.querySelector('.grid__list');
const inputCityTitle = page.querySelector('.popup__input_type_image-title');
const inputlink = page.querySelector('.popup__input_type_image-link');


// Открытие попапа
addButton.addEventListener('click', () => {
  showPopup(popupImage);
})

// Закрытие попапа
closeImagePopup.addEventListener('click', () => {
  hidePopup(popupImage);
});

// Объявление функции добавления новой карточки.
function addCard(picture, link) {
  if (link == false) return
  const gridItem = gridItemTemplate.querySelector('.grid__item').cloneNode(true);
  gridItem.querySelector('.grid__city-name').textContent = picture;
  gridItem.querySelector('.grid__image').src = link;
  const likeButton = gridItem.querySelector('.grid__like');
  likeButton.addEventListener('click', (event) => {
    event.target.classList.toggle('grid__like_type_dark');
  })
  const deleteButton = gridItem.querySelector('.grid__delete-btn');
  deleteButton.addEventListener('click', () => {
    gridItem.remove();
  })

  gridList.prepend(gridItem);
}
// Автодобавление карточек из массива 
initialCards.forEach(item => {
  addCard(item.name, item.link);
})

// Вызов функции добавления карточки 
submitChangesImagePopup.addEventListener('submit', (evt) => {
  evt.preventDefault();
  addCard(inputCityTitle.value, inputlink.value);
  hidePopup(popupImage);
});
