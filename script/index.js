import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import { initialCards } from './cards.js'

const createDataObjectFromImgPopup = (name, link) => {
  const newPic = {};

  newPic.name = name;
  newPic.link = link;

  return newPic;
};

const clearImageInputPopup = form => {
  form.reset();
};

const handleClosePopupWithEscBtn = evt => {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    hidePopup(openedPopup);
  };
};

const handleClosePopupWithClick = evt => {
  if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__cross')) {
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
};

const showPopup = className => {
  className.classList.add('popup_opened');
  setPopupEvtListener('click', handleClosePopupWithClick);
  setPopupEvtListener('keydown', handleClosePopupWithEscBtn);
};

const removePopupEvtListener = (evtType, callback) => {
  document.removeEventListener(evtType, callback);
};

const hidePopup = className => {
  className.classList.remove('popup_opened');
  removePopupEvtListener('keydown', handleClosePopupWithEscBtn);
  removePopupEvtListener('click', handleClosePopupWithClick);
};

const addCurrentTextToInput = () => {
  inputName.value = profileName.textContent;
  inputOccupation.value = profileOccupation.textContent;
};

const applyProfileInfoChanges = () => {
  profileName.textContent = inputName.value;
  profileOccupation.textContent = inputOccupation.value;
};

const addCard = (item, openPopup, closePopup, templateSelector) => {
  const newCard = new Card(item, openPopup, closePopup, templateSelector);
  gridList.prepend(newCard.generateCard());
};

const formValidation = new FormValidator(config);

formValidation.enableValidation();

initialCards.forEach(item => {
  addCard(item, showPopup, hidePopup, '#grid_item');
});

editButton.addEventListener('click', () => {
  addCurrentTextToInput();
  activateButton();
  resetInputError(popupInfoEdit);
  showPopup(popupInfoEdit);
});

closeImagePopup.addEventListener('click', () => {
  hidePopup(popupImage);
});

inputFormEditor.addEventListener('submit', evt => {
  evt.preventDefault();
  applyProfileInfoChanges();
  hidePopup(popupInfoEdit);
});

addButton.addEventListener('click', () => {
  clearImageInputPopup(submitChangesImageHandler);
  resetInputError(popupImage);
  showPopup(popupImage);
  buttonElement.disabled = true;
  buttonElement.classList.add('popup__save-btn_type_disabled');
});

submitChangesImageHandler.addEventListener('submit', evt => {
  evt.preventDefault();
  addCard(createDataObjectFromImgPopup(inputCityTitle.value, inputlink.value), showPopup, hidePopup, '#grid_item');
  hidePopup(popupImage);
});