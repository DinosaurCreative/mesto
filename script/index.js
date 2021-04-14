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

const handleClosePopup = evt => {
  console.log(evt.target);
  if (evt.key === 'Escape' || evt.target.classList.contains('popup')) {
    const openedPopup = document.querySelector('.popup_opened');
    hidePopup(openedPopup);
  }
}

function enableClickListener() {
  document.addEventListener('click', handleClosePopup);
}

function enableEscapeListener() {
  document.addEventListener('keydown', handleClosePopup);
}

function showPopup(className) {
  clearImageInputPopup();
  className.classList.add('popup_opened');
  enableEscapeListener();
  enableClickListener();

}

function hidePopup(className) {
  className.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleClosePopup);
  document.removeEventListener('click', handleClosePopup);
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
  addCurrentTextToInput();
  showPopup(popupInfoEdit);
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
});

submitChangesImageHandler.addEventListener('submit', evt => {
  evt.preventDefault();
  addCard(createDataObjectFromImgPopup(inputCityTitle.value, inputlink.value));
  hidePopup(popupImage);
});

closeViewerBtn.addEventListener('click', () => {
  hidePopup(popupViewer);
});