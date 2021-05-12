import { initialCards } from '../utils/cards.js';
import { gridList } from '../utils/constants.js';


const gridCard = new Section({
  data: initialCards,
  renderer(item) {
    const card = new Card(item, openPopupViewer);
    const cardElement = card.generateCard();
    gridItem.addItem(cardElement);
  }, gridList
});


// const imageViewerPopup = new Section({
//   data:/* собрать инфу от клика*/,
//   renderer(item) {
//     const popup = new PopupWithImage(popup_type_viewer);
//     const imagePopup = popup.open();
//     imageViewerPopup.addItem(imagePopup);
//   }
// })

const infoEditorPopup = new Section({
  
})

const imageAdderPopup = new Section({

})
// Функция, которую нужно прикрепить к вызову класса Card (перенести в utils по завершению)

const openPopupViewer = () => {
  document.addEventListener('click', evt => {
    if (evt.target.classList.contains('grid__image')) {
      const imageViewerPopup = new Section({
        data: [{name: evt.target.alt, link: evt.target.src}],
        renderer(item) {
          const popup = new PopupWithImage(popup_type_viewer);
          const imagePopup = popup.open(item);
          imageViewerPopup.addItem(imagePopup);
        }
      })
    }
  })
}