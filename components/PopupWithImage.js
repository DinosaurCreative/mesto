import {
  Popup
} from './Popup.js';

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(data) {
    this._popupSelector.querySelector('.popup__image').src = data.link;
    this._popupSelector.querySelector('.popup__image').alt = data.name;
    this._popupSelector.querySelector('.popup__image-title').innerHTML = data.name;
    super.open()
  }
}