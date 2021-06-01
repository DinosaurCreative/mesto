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
  saveButtonInfoEditPopup
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

const createCard1 = items => {
  const card = new Card( items , cardHandlerClick,'#grid_item', api, "4d426ed11c4589547aeb84e9", confirmPopup);
  return card;
}

const createCard = items => {
  const card = new Card( items , cardHandlerClick,'#grid_item', "4d426ed11c4589547aeb84e9", confirmPopup, decreaseLike, increaseLike);
  return card;
}


const newUserInfo = new UserInfo({
  nameSelector: profileName,
  occupationSelector: profileOccupation,
  avatarSelector: avatar
});

const confirmPopup = new PopupWithConfirm(popupDeletePic, api);

const popupAvatar = new PopupWithForm(popupAvatarEdit, item => {  
  popupAvatar.showTextWhileSaving(true)
    api.changeAvatar(item.link)
      .then(res => {
        newUserInfo.setNewAvatar(res.avatar);
      })
      .catch(err => console.log(`Ошибка при добавлении нового аватара: ${err}`))
      .finally(() => {
        popupAvatar.showTextWhileSaving(false);
      })
  })    

api.getImages()
  .then(res => {
    gridCard.renderItems(res.reverse());
  })
  .catch(err => console.log(err));

const imagePopup = new PopupWithForm(popupImage, items => {
  imagePopup.showTextWhileSaving(true)  ;
  api.postImage(items)
      .then(res => {
        const card = createCard(res);
        gridCard.addItem(card.generateCard());
      })
      .catch(err => console.log(err))
      .finally(() => {
        imagePopup.showTextWhileSaving(false);
        imagePopup.close(); 
      })
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
    })
    newUserInfo.setNewAvatar(data.avatar);
  })
  .catch(err => console.log(`Ошибка: ${err}`))

const infoPopup = new PopupWithForm(popupInfoEdit, () => {
  infoPopup.showTextWhileSaving(true);
  api.setNewProfileData(infoPopup._getInputValues())
    .then((res)=> res )
    .catch(err => console.log(err))
    .finally(() => {
      infoPopup.showTextWhileSaving(false);
    })
  newUserInfo.setUserInfo(infoPopup._getInputValues());
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
  popupAvatar.open();
});

editButton.addEventListener('click', () => {
  infoPopupFormValidation.resetInputError(popupInfoEdit);
  infoPopupFormValidation.activateButton(saveButtonInfoEditPopup);
  const currentUserInfo = newUserInfo.getUserInfo();
  inputName.value = currentUserInfo.name;
  inputOccupation.value = currentUserInfo.occupation;
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