import {
  addButton,
  buttonElement,
  popupImage,
  submitChangesImageHandler,
  inputCityTitle,
  inputlink,
  inputFormEditor,
  profileName,
  profileOccupation,
  config,
  editButton,
  popupInfoEdit,
  gridList,
  inputName,
  inputOccupation,
  popupViewer
} from '../utils/constants.js'
import { activateButton, resetInputError } from '../utils/utils.js';
import  FormValidator  from '../components/FormValidator.js';
import { initialCards } from '../utils/cards.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import Card from '../components/testCard.js';


//создаю экземпляр класса FormValidator
const formValidation = new FormValidator(config);

//включаю валидалку
formValidation.enableValidation();

// Функция-колбек для класса Card, добавляет слушатель клика на gridImage для открытия превью  (перенести в utils по завершению)  сделал новый варик
const cardHandlerClick = () => {
  document.addEventListener('click', evt => {
    if (evt.target.classList.contains('grid__image')) {
      const imagePopup = new PopupWithImage(popupViewer);
      imagePopup.open({ name: evt.target.alt, link: evt.target.src });
    }
  }
)}

// функция содания новой карточки, куда упакован класс создания новой карточки. Вызывается при обработке массиива и клика по сабмит попапа добавления карты.
const gridCard = new Section({
  items: initialCards,
  renderer: data => {
    const card = new Card(data, cardHandlerClick);
    return card.generateCard();
  } 
}, gridList);

gridCard.renderItems();

// // Создание экземпляра класса UserInfo  
const newUserInfoClass = new UserInfo({ nameSelector: profileName, occupationSelector: profileOccupation });

// Создание экземляра попапа редактирования инфы профиля
const infoPopup = new PopupWithForm( popupInfoEdit, newUserInfoClass.setUserInfo);

//Вешаю слушатель сабмита на попап редактирования инфы профиля
inputFormEditor.addEventListener('submit', evt => {
  evt.preventDefault();
  infoPopup.submitChanges();
  infoPopup.close();
})

// слушатель клика по кнопке открытия попапа редактирования инфы, выводящий
editButton.addEventListener('click', () => {
  resetInputError(popupInfoEdit);
  activateButton();
  const currentUserInfo = newUserInfoClass.getUserInfo();
  inputName.value = currentUserInfo.name;
  inputOccupation.value = currentUserInfo.occupation;
  infoPopup.setEventListeners();  
})

//Колбек сабмита формы для попапа добавления фото
const cardformSubmitHandler = () => {
  const card = new Card({name: inputCityTitle.value,link: inputlink.value},cardHandlerClick)
  gridCard.addItem(card.generateCard());
  imagePopup.close()

}

// Объявляю новый экземпляр класса для  ПОПАП ИМЕДЖб в аргшументах метод 
const imagePopup = new PopupWithForm(popupImage);

//Слшатель события нажатия кнопки открытия попапа добаления нового фото в грид
addButton.addEventListener('click', () => {
  buttonElement.disabled = true;
  buttonElement.classList.add('popup__save-btn_type_disabled');
  resetInputError(popupImage);
  imagePopup.setEventListeners();
})

// Вешаю слушатель сабмита на кнопку добавления нового фото
submitChangesImageHandler.addEventListener('submit', evt => {
  evt.preventDefault();
  cardformSubmitHandler();
  imagePopup.close()
})