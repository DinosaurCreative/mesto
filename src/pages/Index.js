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
  inputName,
  inputOccupation,
  gridList,
  popupDeletePic
} from '../utils/constants.js'
import { popupViewer } from '../utils/constants.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { FormValidator } from '../components/FormValidator.js';
import { initialCards } from '../utils/cards.js';
import { PopupWithForm} from '../components/PopupWithForm.js';
import { Section} from '../components/Section.js';
import { UserInfo} from '../components/UserInfo.js';
import { Card } from '../components/Card.js';
import '../pages/index.css';
import { PopupWithConfirm } from '../components/PopupWithConfirm.js';
import { Api } from '../components/Api.js';






const createCard = items => {
  const card = new Card({
    name: items.name,
    link: items.link
  }, cardHandlerClick,'#grid_item')
  return card;
}

// Создание экземпляра класса Api
const api = new Api({
  address: 'https://nomoreparties.co/v1/cohort-24/', 
  token: '1b42587b-1212-49d2-8dac-fba90d326288'
});



console.log(Promise);

// Создание экземпляра класса аватара
// const popupAvatrEdit = new PopupWithForm(popupAvatarEdit, ()=> {

// })

// Создание экземпляа класса PopupWithConfirm

// const popupWithConfirm = new PopupWithConfirm(popupDeletePic);


const imagePopup = new PopupWithForm(popupImage, items => {
    const card = createCard(items);
    gridCard.addItem(card.generateCard());
    imagePopup.close();
})

const gridCard = new Section({
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
  imageViewerPopup.open({
    name: name,
    link: link
  });
}

editButton.addEventListener('click', () => {
  infoPopupFormValidation.resetInputError(popupInfoEdit)
  imageAdderPopupFormValidation.activateButton(editButton);
  const currentUserInfo = newUserInfoClass.getUserInfo();
  inputName.value = currentUserInfo.name;
  inputOccupation.value = currentUserInfo.occupation;
  infoPopup.open();
})

addButton.addEventListener('click', () => {
  imageAdderPopupFormValidation.disactivateButton(buttonElement);
  infoPopupFormValidation.resetInputError(popupImage)
  imagePopup.open();
})

gridCard.renderItems(initialCards);
imageAdderPopupFormValidation.enableValidation();
infoPopupFormValidation.enableValidation();
infoPopup.setEventListeners();
imagePopup.setEventListeners();
imageViewerPopup.setEventListeners();

// Территория эксперементов
// popupWithConfirm.setEventListeners();