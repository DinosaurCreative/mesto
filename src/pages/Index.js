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
import { apiKeys } from '../utils/constants.js';
import { avatar } from '../utils/constants.js';
import { popupAvatarEdit } from '../utils/constants.js';
import { avatarInput } from '../utils/constants.js';
import { avatarForm } from '../utils/constants.js';
import { avatarEditButton } from '../utils/constants.js';
import { avatarPopupSubmitButton } from '../utils/constants.js';



const createCard = items => {
  const card = new Card({
    name: items.name,
    link: items.link
  }, cardHandlerClick,'#grid_item')
  return card;
}

const api = new Api(apiKeys);

const newUserInfo = new UserInfo({
  nameSelector: profileName,
  occupationSelector: profileOccupation,
  avatarSelector: avatar
});


const popupAvatar = new PopupWithForm(popupAvatarEdit, item => {  
    api.changeAvatar(item.link)
      .then(res => {
        newUserInfo.setNewAvatar(res.avatar);
      })
      .catch(err => console.log(`Ошибка: ${err}`))
  })    




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

const avatarPopupFormValidation = new FormValidator(config, avatarForm);
const infoPopupFormValidation = new FormValidator(config, inputFormEditor);
const imageAdderPopupFormValidation = new FormValidator(config, submitChangesImageHandler);
const imageViewerPopup = new PopupWithImage(popupViewer);


api.getProfileData()
  .then((data) => {
    newUserInfo.setUserInfo({
      name: data.name,
      about: data.about, 
      avatar: data.avatar
    })
  })
  .catch(err => console.log(`oshibka: ${err}`))



const infoPopup = new PopupWithForm(popupInfoEdit, () => {
  newUserInfo.setUserInfo(infoPopup._getInputValues())
});

const cardHandlerClick = (name, link) => {
  imageViewerPopup.open({
    name: name,
    link: link
  });
}



avatarEditButton.addEventListener('click', () => {
  avatarPopupFormValidation.disactivateButton(avatarPopupSubmitButton);
  avatarPopupFormValidation.resetInputError(avatarInput)
  popupAvatar.open();
});


editButton.addEventListener('click', () => {
  infoPopupFormValidation.resetInputError(popupInfoEdit)
  imageAdderPopupFormValidation.activateButton(editButton);
  const currentUserInfo = newUserInfo.getUserInfo();
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
avatarPopupFormValidation.enableValidation();
imageAdderPopupFormValidation.enableValidation();
infoPopupFormValidation.enableValidation();
infoPopup.setEventListeners();
imagePopup.setEventListeners();
imageViewerPopup.setEventListeners();
popupAvatar.setEventListeners();