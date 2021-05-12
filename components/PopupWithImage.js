import Popup from './Popup.js';

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }
 
  open() {
    super.open();
    super.setEventListeners();
    super._popup.querySelector('.popup__image').src = evt.target.src;git commi
    super._popup.querySelector('.popup__image').alt = evt.target.alt;
    super._popup.querySelector('.popup__image-title').innerHTML = evt.target.alt;
  }
} 