import { showPopup } from '../utils/utils.js';
import { hidePopup } from '../utils/utils.js';
import { initialCards } from '../utils/cards.js';
import { gridList } from '../utils/constants.js'

const gridCard = new Section({
  data: initialCards,
  renderer(item) {
    const card = new Card(item, showPopup, hidePopup, '#grid_item');
    const cardElement = card.generateCard();
    gridItem.addItem(cardElement);
  },
  gridList
})