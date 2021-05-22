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
import { PopupWithForm} from '../components/PopupWithForm.js';
import { Section} from '../components/Section.js';
import { UserInfo} from '../components/UserInfo.js';
import { Card } from '../components/Card.js';
import '../styles/index.css';

const createCard = items => {
  const card = new Card({
    name: items.name,
    link: items.link
  }, cardHandlerClick,'#grid_item')
  return card;
}

const imagePopup = new PopupWithForm(popupImage, items => {
    const card = createCard(items);
    gridCard.addItem(card.generateCard());
    imagePopup.close();
})

const gridCard = new Section({
  items: initialCards,
  renderer: data => {
    const card = createCard(data);
    gridCard.addItem(card.generateCard());
  }
}, gridList);

const infoPopupFormValidation = new FormValidator(config, inputFormEditor);
const imageAdderPopupFormValidation = new FormValidator(config, submitChangesImageHandler);
const imageViewerPopup = new PopupWithImage(popupViewer);
const newUserInfoClass = new UserInfo({
  nameSelector: profileName,
  occupationSelector: profileOccupation
});
const infoPopup = new PopupWithForm(popupInfoEdit, ()=> {
  newUserInfoClass.setUserInfo(infoPopup._getInputValues())
});
const cardHandlerClick = (name, link) => {
  document.addEventListener('click', evt => {
    if (evt.target.classList.contains('grid__image')) {
      imageViewerPopup.open({
        name: name,
        link: link
      });
    }
  })
}

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

gridCard.renderItems();
imageAdderPopupFormValidation.enableValidation();
infoPopupFormValidation.enableValidation();
infoPopup.setEventListeners();
imagePopup.setEventListeners();
imageViewerPopup.setEventListeners();