import { initialCards } from '../utils/cards.js';
import { gridList } from '../utils/constants.js';
import { } from '../utils/constants.js';


const gridCard = new Section({
  data: initialCards,
  renderer(item) {
    const card = new Card(item, openPopupViewer);
    const cardElement = card.generateCard();
    gridItem.addItem(cardElement);
  }, gridList
});

const imageAdderPopup = new Section({

})
// Функция, которую нужно прикрепить к вызову класса Card (перенести в utils по завершению)

const openPopupViewer = () => {
  document.addEventListener('click', evt => {
    if (evt.target.classList.contains('grid__image')) {
      const imageViewerPopup = new Section({
        data: [{name: evt.target.alt, link: evt.target.src}],
        renderer(item) {
          const popup = new PopupWithImage(popupViewer);
          const imagePopup = popup.open(item);
        }
      }, popupViewer)
    }
  })
}

// Функция submit для попапов с данными пользователя

const applyProfileInfoChanges = (data) => {
  profileName.textContent = data.name;
  profileOccupation.textContent = data.occupation;
};

// функция для попапа содания новой карточки
const handleNewCardData (data) {

}


// Создание класса попапа с новой инфой.
const infoEditorPopup = new Section({
  data: [],
  renderer() {
    const PopupInfoForm = new PopupWithForm(popupInfoEdit, applyProfileInfoChanges/*Тут должна быть фнкция, которая добвляет новые данные пользователя вместо этой*/);
    PopupInfoForm.setEventListeners();
  }
}, popupInfoEdit);
