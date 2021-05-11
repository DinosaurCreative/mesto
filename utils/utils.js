import Card from '../components/Card.js'
import {
  profileOccupation,
  inputName,
  inputOccupation,
  gridList,
  profileEditorSubmitBtn,
  profileName
} from '../utils/constants.js'

export const createDataObjectFromImgPopup = (name, link) => {
  const newPic = {};

  newPic.name = name;
  newPic.link = link;

  return newPic;
};

export const clearImageInputPopup = form => {
  form.reset();
};

export const handleClosePopupWithEscBtn = evt => {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    hidePopup(openedPopup);
  };
};

export const handleClosePopupWithClick = evt => {
  if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__cross')) {
    const openedPopup = document.querySelector('.popup_opened');
    hidePopup(openedPopup);
  };
};

export const activateButton = () => {
  profileEditorSubmitBtn.classList.remove('popup__save-btn_type_disabled');
  profileEditorSubmitBtn.disabled = false;
};

export const resetInputError = className => {
  const errorList = Array.from(className.querySelectorAll('.popup__input-error'));
  const inputList = Array.from(className.querySelectorAll('.popup__input'));

  errorList.forEach(errorElement => {
    errorElement.classList.remove('popup__input-error_visible');
  });
  inputList.forEach(inputElement => {
    inputElement.classList.remove('popup__input_type_error');
  });
};

export const setPopupEvtListener = (evtType, callback) => {
  document.addEventListener(evtType, callback);
};

export const showPopup = className => {
  className.classList.add('popup_opened');
  setPopupEvtListener('click', handleClosePopupWithClick);
  setPopupEvtListener('keydown', handleClosePopupWithEscBtn);
};

export const removePopupEvtListener = (evtType, callback) => {
  document.removeEventListener(evtType, callback);
};

export const hidePopup = className => {
  className.classList.remove('popup_opened');
  removePopupEvtListener('keydown', handleClosePopupWithEscBtn);
  removePopupEvtListener('click', handleClosePopupWithClick);
};

export const addCurrentTextToInput = () => {
  inputName.value = profileName.textContent;
  inputOccupation.value = profileOccupation.textContent;
};

export const applyProfileInfoChanges = () => {
  profileName.textContent = inputName.value;
  profileOccupation.textContent = inputOccupation.value;
};

export const addCard = (item, openPopup, closePopup, templateSelector) => {
  const newCard = new Card(item, openPopup, closePopup, templateSelector);
  gridList.prepend(newCard.generateCard());
};