import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }
 
  open(data) {
    document.querySelector('.popup__image').src = data.link;
    document.querySelector('.popup__image').alt = data.name;
    document.querySelector('.popup__image-title').innerHTML = data.name;
    super.setEventListeners();
    super.open();
  }
}

