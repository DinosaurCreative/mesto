import { Popup } from './Popup.js';

export class PopupWithConfirm extends Popup{
  constructor(popupElement, deleteImageHandler) {
    super(popupElement);
    this._form = this._popupElement.querySelector('.popup__form');
    this._saveButton = this._popupElement.querySelector('.popup__save-btn');
    this._deleteImageHandler = deleteImageHandler;
  }  
  open() {
    super.open();
    this.showTextWhileSaving(false);
  }
  submitHandler = (handleDeleteButton, cardElement, id) => {
    this.open()
    this._cardElement = cardElement;
    this._id = id;
    this._handleDeleteButton = handleDeleteButton;
  }

  showTextWhileSaving(condition) {
    if(condition) {
      this._saveButton.textContent = 'Удаляю...'
    } else {
      this._saveButton.textContent = 'Да'
    }
  }

  setEventListeners = () => {
    super.setEventListeners();
    this._form.addEventListener('submit', evt => {
      evt.preventDefault();
      this.showTextWhileSaving(true)
      this._deleteImageHandler(this._id, this._handleDeleteButton, this._cardElement)
    })
  }
}