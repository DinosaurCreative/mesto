const page = document.querySelector('.page');
const closeButtonInfoEdit = page.querySelector('.popup__cross_info-edit');
const editButton = page.querySelector('.profile__edit-button');
const profileName = page.querySelector('.profile__name');
const profileOccupation = page.querySelector('.profile__occupation');
const inputName = page.querySelector('.popup__input_type_name');
const inputOccupation = page.querySelector('.popup__input_type_occupation');
const inputFormEditor = page.querySelector('.popup__form_type_editor');
const popupInfoEdit = page.querySelector('.popup_info-edit');
const addButton = page.querySelector('.profile__add-button');
const popupImage = page.querySelector('.popup_type_image');
const closeImagePopup = page.querySelector('.popup__cross_type_image');
const submitChangesImageHandler = page.querySelector('.popup__form_type_image');
const gridItemTemplate = page.querySelector('#grid_item').content;
const gridList = page.querySelector('.grid__list');
const inputCityTitle = page.querySelector('.popup__input_type_image-title');
const inputlink = page.querySelector('.popup__input_type_image-link');
const popupViewer = page.querySelector('.popup_type_viewer');
const closeViewerBtn = popupViewer.querySelector('.popup__cross_type_viewer');
const imageLink = popupViewer.querySelector('.popup__image');
const imageName = popupViewer.querySelector('.popup__image-title');

function createDataObjectFromImgPopup(name, link) {
  const newPic = {};
  newPic.name = name;
  newPic.link = link;
  return newPic;
}

function clearImageInputHander() {
  inputCityTitle.value = '';
  inputlink.value = '';
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

function addCard(item) {
  if (!item.link) return
  const gridItem = gridItemTemplate.querySelector('.grid__item').cloneNode(true);
  const deleteButton = gridItem.querySelector('.grid__delete-btn');
  const likeButton = gridItem.querySelector('.grid__like');
  const gridImage = gridItem.querySelector('.grid__image');
  gridItem.querySelector('.grid__city-name').textContent = item.name;
  gridItem.querySelector('.grid__image').src = item.link;
  gridItem.querySelector('.grid__image').alt = item.name;
  deleteButton.addEventListener('click', () => {
    gridItem.remove();
  });
  gridImage.addEventListener('click', () => {
    imageLink.src = item.link;
    imageName.textContent = item.name;
    imageLink.alt = item.name;
    showPopup(popupViewer);
  });

  likeButton.addEventListener('click', (event) => {
    event.target.classList.toggle('grid__like_type_dark');
  });

  gridList.prepend(gridItem);
}

initialCards.forEach(item => {
  addCard(item);
});

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
});

closeImagePopup.addEventListener('click', () => {
  hidePopup(popupImage);
  setTimeout(() => {
    clearImageInputHander();
  }, 500)
});

submitChangesImageHandler.addEventListener('submit', (evt) => {
  evt.preventDefault();
  addCard(createDataObjectFromImgPopup(inputCityTitle.value, inputlink.value));
  setTimeout(() => {
    clearImageInputHander();
  }, 500)
  hidePopup(popupImage);
});

closeViewerBtn.addEventListener('click', () => {
  hidePopup(popupViewer);
  setTimeout(() => {
    imageLink.src = '';
    imageName.textContent = '';
    imageLink.alt = '';
  }, 500)
});