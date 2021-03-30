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

function preventPopupVisibilityUntilStylesDownload() {
  popupImage.classList.add('popup_visible');
  popupInfoEdit.classList.add('popup_visible');
  popupViewer.classList.add('popup_visible');
}

function createDataObjectFromImgPopup(name, link) {
  const newPic = {};
  newPic.name = name;
  newPic.link = link;
  return newPic;
}

function resetViewerPopup() {
  imageLink.src = '';
  imageName.textContent = '';
  imageLink.alt = '';
}

function defineAltSrcNameData(item, image, name) {
  image.src = item.link;
  name.textContent = item.name;
  if (image.hasAttribute('alt')) {
    image.removeAttribute('alt');
  } else {
    image.setAttribute('alt', item.name)
  }; 
}

function clearImageInputPopup() {
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

function applyProfileInfoChanges() {
  profileName.textContent = inputName.value;
  profileOccupation.textContent = inputOccupation.value;
}

function addCard(item) {
  if (!item.link) return
  const gridItem = gridItemTemplate.querySelector('.grid__item').cloneNode(true);
  const deleteButton = gridItem.querySelector('.grid__delete-btn');
  const likeButton = gridItem.querySelector('.grid__like');
  const gridImage = gridItem.querySelector('.grid__image');
  const gridCityName = gridItem.querySelector('.grid__city-name');
  
  defineAltSrcNameData(item, gridImage, gridCityName);

  deleteButton.addEventListener('click', () => {
    gridItem.remove();
  });

  gridImage.addEventListener('click', () => {
    defineAltSrcNameData(item, imageLink, imageName); 
    showPopup(popupViewer);
  });

  likeButton.addEventListener('click', event => {
    event.target.classList.toggle('grid__like_type_dark');
  });

  gridList.prepend(gridItem);
}

initialCards.forEach(item => {
  addCard(item);
});

setTimeout(preventPopupVisibilityUntilStylesDownload, 1000);

editButton.addEventListener('click', () => {
  showPopup(popupInfoEdit);
  addCurrentTextToInput();
});

closeButtonInfoEdit.addEventListener('click', () => {
  hidePopup(popupInfoEdit);
});

inputFormEditor.addEventListener('submit', evt => {
  evt.preventDefault();
  applyProfileInfoChanges();
  hidePopup(popupInfoEdit);
});

addButton.addEventListener('click', () => {
  showPopup(popupImage);
});

closeImagePopup.addEventListener('click', () => {
  hidePopup(popupImage);
  setTimeout(clearImageInputPopup, 500)
});

submitChangesImageHandler.addEventListener('submit', evt => {
  evt.preventDefault();
  addCard(createDataObjectFromImgPopup(inputCityTitle.value, inputlink.value));
  setTimeout(clearImageInputPopup, 500)
  hidePopup(popupImage);
});

closeViewerBtn.addEventListener('click', () => {
  hidePopup(popupViewer);
  setTimeout(resetViewerPopup, 500)
});