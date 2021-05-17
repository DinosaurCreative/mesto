import {
  addButton,
  // popupImage,
  // submitChangesImageHandler,
  // inputCityTitle,
  // inputlink,
  // config,
  editButton,
  popupInfoEdit,
  gridList
} from '../utils/constants.js'

import { activateButton, resetInputError } from '../utils/utils.js';
// import  FormValidator  from '../components/FormValidator.js';
import { initialCards } from '../utils/cards.js';

import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
// import UserInfo from '../components/UserInfo.js';
import Card from '../components/testCard.js';

// const formValidation = new FormValidator(config);
// formValidation.enableValidation();

// Функция-колбек для класса Card, добавляет слушатель клика на gridImage для открытия превью  (перенести в utils по завершению)  сделал новый варик

const handleCardClick = () => {
  document.addEventListener('click', evt => {
    if (evt.target.classList.contains('grid__image')) {
      const imagePopup = new PopupWithImage('popup_type_viewer');
      // imagePopup.open({name: evt.target.alt, link: evt.target.src});
    }
  }
)}

const newCard = item => new Card(item, handleCardClick);

const userInfoPopup = new PopupWithForm(popupInfoEdit, );

// функция содания новой карточки, куда упакован класс создания новой карточки. Вызывается при обработке массиива и клика по сабмит попапа добавления карты.

const gridCard = new Section({
  items: initialCards,
  renderer: item => {
    const card = newCard(item);
    const cardElement = card.generateCard();
    gridCard.addItem(cardElement);
  }
}, gridList);

gridCard.renderItems();




// // Слушатель события сабмит в попапе добавления нового изображения в Грид, добавляет новое изображение в сетку. 
// submitChangesImageHandler.addEventListener('submit', evt => {
//   evt.preventDefault();
//   newCardAdder({name: inputCityTitle.value, link: inputlink.value});
// })


/// Слушатель клика по фото, открывающее превью
document.addEventListener('click', evt => {
  if (evt.target.classList.contains('grid__image')) {
    const imagePopup = new PopupWithImage('popup_type_viewer');
    imagePopup.open({ name: evt.target.alt, link: evt.target.src });
  }
})

// // Создание экземпляра класса UserInfo  
// const newUserInfoClass = new UserInfo({ nameSelector: 'profile__name', occupationSelector: 'profile__occupation' });



// // слушатель клика по кнопке открытия попапа редактирования инфы, выводящий
editButton.addEventListener('click', () => {
  activateButton();
  resetInputError(popupInfoEdit);
  const currentUserInfo = newUserInfoClass.getUserInfo();/// получаем текущие данны для вставления в инпут и укладывваем их в обект
  const infoPopup = new PopupWithForm(popupInfoEdit, newUserInfoClass.setUserInfo(newUserInfo)); //Создаем попап с формой
  inputName.value = currentUserInfo.name;
  inputOccupation.value = currentUserInfo.occupation;
  infoPopup.setEventListeners();
})



// //Слшатель события нажатия кнопки открытия попапа добаления нового фото в грид

// addButton.addEventListener('click', () => {
//   resetInputError(popupImage);
//   const imageFormPopup = new PopupWithForm(popupImage, newCardAdder(card));
// })

// // слушатель сабмита формы изменения  информации пользователя
