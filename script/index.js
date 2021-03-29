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
  },
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

//переменные попапа редактирования информации
const page = document.querySelector('.page');
const closeButtonInfoEdit = page.querySelector('.popup__cross_info-edit');
const editButton = page.querySelector('.profile__edit-button');
const profileName = page.querySelector('.profile__name');
const profileOccupation = page.querySelector('.profile__occupation');
const inputName = page.querySelector('.popup__input_type_name');
const inputOccupation = page.querySelector('.popup__input_type_occupation');
const inputFormEditor = page.querySelector('.popup__form_type_editor');
const popupInfoEdit = page.querySelector('.popup_info-edit');
// переменные попапа добавления фото
const addButton = page.querySelector('.profile__add-button');
const popupImage = page.querySelector('.popup_type_image');
const closeImagePopup = page.querySelector('.popup__cross_type_image');
const submitChangesImagePopup = page.querySelector('.popup__form_type_image');
const gridItemTemplate = page.querySelector('#grid_item').content;
const gridList = page.querySelector('.grid__list');
const inputCityTitle = page.querySelector('.popup__input_type_image-title');
const inputlink = page.querySelector('.popup__input_type_image-link');
// Переменные попапа VIEWER
const popupViewer = page.querySelector('.popup_type_viewer');
const closeViewerBtn = popupViewer.querySelector('.popup__cross_type_viewer');
const imageLink = popupViewer.querySelector('.popup__image');
const imageName = popupViewer.querySelector('.popup__image-title');
// const gridImage = page.querySelector('.grid__image');

initialCards.forEach(item => {
  addCard(item);
})

function newPictureDataObj(name, link) {
  const newPic = {};
  newPic.name = name;
  newPic.link = link;
  return newPic;
}


function showPopup(className) {
  className.classList.add('popup_opened');
}

function hidePopup(className) {
  className.classList.remove('popup_opened');
}

function addCurrentTextToInput() {
  inputName.value = profileName.textContent;
  inputOccupation.value = profileOccupation.textContent;
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

addButton.addEventListener('click', () => {
  showPopup(popupImage);
})

closeImagePopup.addEventListener('click', () => {
  hidePopup(popupImage);
});

function addCard(item) {
  if (!item.link) return
  const gridItem = gridItemTemplate.querySelector('.grid__item').cloneNode(true);
  const deleteButton = gridItem.querySelector('.grid__delete-btn');
  const likeButton = gridItem.querySelector('.grid__like');
  const gridImage = gridItem.querySelector('.grid__image');
  gridItem.querySelector('.grid__city-name').textContent = item.name;
  gridItem.querySelector('.grid__image').src = item.link;
  
  deleteButton.addEventListener('click', () => {
    gridItem.remove();
  })
  
  gridImage.addEventListener('click', () => {
    imageLink.src = item.link;
    imageName.textContent = item.name;
    showPopup(popupViewer);
  })

  likeButton.addEventListener('click', (event) => {
    event.target.classList.toggle('grid__like_type_dark');
  })

  gridList.prepend(gridItem);
}


// Вызов функции добавления карточки 
submitChangesImagePopup.addEventListener('submit', (evt) => {
  evt.preventDefault();
  addCard(newPictureDataObj(inputCityTitle.value, inputlink.value));
  hidePopup(popupImage);
});

closeViewerBtn.addEventListener('click', () => {
  hidePopup(popupViewer);
})