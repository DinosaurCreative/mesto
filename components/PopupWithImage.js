import Popup from './Popup.js';

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }
 
  open(data) {
    super.open();
    super.setEventListeners();
    
    super._popup.querySelector('.popup__image').src = data.link;
    super._popup.querySelector('.popup__image').alt = datra.name;
    super._popup.querySelector('.popup__image-title').innerHTML = datra.name;
  }
}

