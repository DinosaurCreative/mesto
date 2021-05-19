import {
  addButton,
  buttonElement,
  popupImage,
  submitChangesImageHandler,
  inputFormEditor,
  profileName,
  profileOccupation,
  config,
  editButton,
  popupInfoEdit,
  gridList,
  inputName,
  inputOccupation,
} from '../utils/constants.js'
import { popupViewer } from '../utils/constants.js';
import { inputlink } from '../utils/constants.js';
import { inputCityTitle } from '../utils/constants.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { activateButton, resetInputError } from '../utils/utils.js';
import { FormValidator } from '../components/FormValidator.js';
import { initialCards } from '../utils/cards.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {Section} from '../components/Section.js';
import {UserInfo} from '../components/UserInfo.js';
import { Card } from '../components/Card.js';

const infoPopupFormValidation = new FormValidator(config, inputFormEditor);
const imageAdderPopupFormValidation = new FormValidator(config, submitChangesImageHandler);
const imagePopup = new PopupWithForm(popupImage);
const imageViewerPopup = new PopupWithImage(popupViewer);
const gridCard = new Section({
  items: initialCards,
  renderer: data => {
    const card = new Card(data, cardHandlerClick);
    return card.generateCard();
  }
}, gridList);
const newUserInfoClass = new UserInfo({
  nameSelector: profileName,
  occupationSelector: profileOccupation
});
const infoPopup = new PopupWithForm(popupInfoEdit, newUserInfoClass.setUserInfo);

const cardHandlerClick = () => {
  document.addEventListener('click', evt => {
    if (evt.target.classList.contains('grid__image')) {
      imageViewerPopup.open({
        name: evt.target.alt,
        link: evt.target.src
      });
    }
  })
}

const cardformSubmitHandler = () => {
  const card = new Card({
    name: inputCityTitle.value,
    link: inputlink.value
  }, cardHandlerClick)
  gridCard.addItem(card.generateCard());
  imagePopup.close()
}

inputFormEditor.addEventListener('submit', evt => {
  evt.preventDefault();
  infoPopup.submitChanges();
  infoPopup.close();
})

editButton.addEventListener('click', () => {
  resetInputError(popupInfoEdit);
  activateButton();
  const currentUserInfo = newUserInfoClass.getUserInfo();
  inputName.value = currentUserInfo.name;
  inputOccupation.value = currentUserInfo.occupation;
  infoPopup.open();
})

addButton.addEventListener('click', () => {
  buttonElement.disabled = true;
  buttonElement.classList.add('popup__save-btn_type_disabled');
  resetInputError(popupImage);
  imagePopup.open();
})

submitChangesImageHandler.addEventListener('submit', evt => {
  evt.preventDefault();
  cardformSubmitHandler();
  imagePopup.close()
})

gridCard.renderItems();
imageAdderPopupFormValidation.enableValidation();
infoPopupFormValidation.enableValidation();
infoPopup.setEventListeners();
imagePopup.setEventListeners();
imageViewerPopup.setEventListeners();