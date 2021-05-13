  import Popup from './Popup.js';

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }
 
  open(data) {
    super.setEventListeners();
    
    document.querySelector(super._popupSelector).querySelector('.popup__image').src = data.link;
    document.querySelector(super._popupSelector).querySelector('.popup__image').alt = data.name;
    document.querySelector(super._popupSelector).querySelector('.popup__image-title').innerHTML = data.name;
    
    super.open();
  }
}

