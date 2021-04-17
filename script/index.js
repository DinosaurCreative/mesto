const preventPopupVisibilityUntilStylesDownload = () => {
  popupImage.classList.add('popup_visible');
  popupInfoEdit.classList.add('popup_visible');
  popupViewer.classList.add('popup_visible');
};

const createDataObjectFromImgPopup = (name, link) => {
  const newPic = {};
  newPic.name = name;
  newPic.link = link;
  return newPic;
};

const defineAltSrcNameData = (item, image, name) => {
  image.src = item.link;
  name.textContent = item.name;
  if (image.hasAttribute('alt')) {
    image.removeAttribute('alt');
  } else {
    image.setAttribute('alt', item.name);
  };
};

const clearImageInputPopup = () => {
  inputCityTitle.value = '';
  inputlink.value = '';
};

const handleClosePopup = evt => {
  if (evt.key === 'Escape' || evt.target.classList.contains('popup')) {
    const openedPopup = document.querySelector('.popup_opened');
    hidePopup(openedPopup);
  };
};

const activateButton = () => {
  profileEditorSubmitBtn.classList.remove('popup__save-btn_type_disabled');
  profileEditorSubmitBtn.disabled = false;
};

const resetInputError = className => {
  const errorList = Array.from(className.querySelectorAll('.popup__input-error'));
  const inputList = Array.from(className.querySelectorAll('.popup__input'));
  errorList.forEach(errorElement => {
    errorElement.classList.remove('popup__input-error_visible');
  });
  inputList.forEach(inputElement => {
    inputElement.classList.remove('popup__input_type_error');
  });
};

const setPopupEvtListener = (evtType, callback) => {
  document.addEventListener(evtType, callback);
}

const showPopup = className => {
  // resetInputError(className);
  clearImageInputPopup();
  className.classList.add('popup_opened');
  setPopupEvtListener('click', handleClosePopup);
  setPopupEvtListener('keydown', handleClosePopup);
};

const removePopupEvtListener = (evtType, callback) => {
  document.removeEventListener(evtType, callback);
};

const hidePopup = className => {
  className.classList.remove('popup_opened');
  removePopupEvtListener('keydown', handleClosePopup);
  removePopupEvtListener('click', handleClosePopup);
};

const addCurrentTextToInput = () => {
  inputName.value = profileName.textContent;
  inputOccupation.value = profileOccupation.textContent;
};

const applyProfileInfoChanges = () => {
  profileName.textContent = inputName.value;
  profileOccupation.textContent = inputOccupation.value;
};

const addCard = item => {
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
};

initialCards.forEach(item => {
  addCard(item);
});

setTimeout(preventPopupVisibilityUntilStylesDownload, 1000);

editButton.addEventListener('click', () => {
  addCurrentTextToInput();
  activateButton();
  resetInputError(popupInfoEdit);
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
  resetInputError(popupImage);
  showPopup(popupImage);
  const buttonElement = popupImage.querySelector('.popup__save-btn');
  buttonElement.disabled = true;
  buttonElement.classList.add('popup__save-btn_type_disabled');
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