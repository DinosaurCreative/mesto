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
  popupDeletePic,
  saveButtonInfoEditPopup,
  avatarSaveButton,
  cardTemplate,
} from '../utils/constants.js'
import { popupViewer } from '../utils/constants.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { FormValidator } from '../components/FormValidator.js';
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
let userId = '';

const api = new Api(apiKeys);

const increaseLike = (id, likeContainer) => {
  api.increaseLike(id)
    .then(res => {
      likeContainer.textContent = res.likes.length;
    })
    .catch(err => console.log(`Ошибка при увеличении лайков ${err}`))
}

const decreaseLike = ( id, likeContainer) => {
  api.reduceLike(id) 
    .then(res => {
      likeContainer.textContent = res.likes.length;
    })
    .catch(err => console.log(`Ошибка при уменьшении лайков ${err}`))
}

const createCard = items => {
  const card = new Card( items , cardHandlerClick, cardTemplate, userId, confirmPopup, decreaseLike, increaseLike);
  return card;
}

const newUserInfo = new UserInfo({
  nameSelector: profileName,
  occupationSelector: profileOccupation,
  avatarSelector: avatar
});

const deleteImageHandler = (id, handleDeleteButton, cardElement) => {
  api.deleteImage(id)
    .then(() => {
      handleDeleteButton(cardElement);
      confirmPopup.close();
    })
    .catch(err => console.log(`Карточка не удалена по причине: ${err}`))
}

const confirmPopup = new PopupWithConfirm(popupDeletePic, deleteImageHandler);

const popupAvatar = new PopupWithForm(popupAvatarEdit, item => {
  api.changeAvatar(item.link)
    .then(res => {
      newUserInfo.setNewAvatar(res);
      popupAvatar.close();
    })
    .catch(err => console.log(`Ошибка при добавлении нового аватара: ${err}`))
  })
Promise.all([api.getImages(), api.getProfileData()])
  .then(([cardsData, userData]) => {
    userId = userData._id;
    gridCard.renderItems(cardsData.reverse());
    newUserInfo.setUserInfo({ name: userData.name, about: userData.about, avatar: userData.avatar});
  })
  .catch(err => console.log(`Ошибка: ${err}`))

const imagePopup = new PopupWithForm(popupImage, items => {
  api.postImage(items)
    .then(res => {
      const card = createCard(res);
      gridCard.addItem(card.generateCard());
      imagePopup.close();
    })
    .catch(err => console.log(err))
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

const infoPopup = new PopupWithForm(popupInfoEdit, data => {
  api.setNewProfileData(data)
    .then(res => {
      newUserInfo.setUserInfo(res);
      infoPopup.close();
    })
    .catch(err => console.log(`Ошибка произошла по причине: ${err}`))
});

const cardHandlerClick = (name, link) => {
  imageViewerPopup.open({
    name: name,
    link: link
  });
}

avatarEditButton.addEventListener('click', () => {
  avatarPopupFormValidation.disactivateButton(avatarPopupSubmitButton);
  avatarPopupFormValidation.resetInputError(avatarInput);
  avatarPopupFormValidation.activateButton(avatarSaveButton);
  avatarInput.value = (newUserInfo.getUserInfo()).avatar;
  popupAvatar.open();
});

editButton.addEventListener('click', () => {
  infoPopupFormValidation.resetInputError(popupInfoEdit);
  infoPopupFormValidation.activateButton(saveButtonInfoEditPopup);
  inputName.value = (newUserInfo.getUserInfo()).name;
  inputOccupation.value = (newUserInfo.getUserInfo()).occupation;
  infoPopup.open();
})

addButton.addEventListener('click', () => {
  imageAdderPopupFormValidation.disactivateButton(buttonElement);
  imageAdderPopupFormValidation.resetInputError(popupImage);
  imagePopup.open();
})

avatarPopupFormValidation.enableValidation();
imageAdderPopupFormValidation.enableValidation();
infoPopupFormValidation.enableValidation();
infoPopup.setEventListeners();
imagePopup.setEventListeners();
imageViewerPopup.setEventListeners();
popupAvatar.setEventListeners();
confirmPopup.setEventListeners();
