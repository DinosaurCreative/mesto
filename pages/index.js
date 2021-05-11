import {
  addButton,
  popupImage,
  closeImagePopup,
  submitChangesImageHandler,
  inputCityTitle,
  inputlink,
  buttonElement,
  config,
  editButton,
  inputFormEditor,
  popupInfoEdit
} from '../utils/constants.js'
import {
  createDataObjectFromImgPopup,
  clearImageInputPopup,
  activateButton,
  resetInputError,
  showPopup,
  hidePopup,
  addCurrentTextToInput,
  applyProfileInfoChanges,
  addCard
} from '../utils/utils.js';
import  FormValidator  from '../components/FormValidator.js';
import { initialCards } from '../utils/cards.js'

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