import { Popup } from './Popup.js';

export class PopupWithConfirm extends Popup{
  constructor(popupSelector, api) {
    super(popupSelector);
    this._form = this._popupSelector.querySelector('.popup__form');
    this._saveButton = this._popupSelector.querySelector('.popup__save-btn');
    this._api = api;
  }  

  submitHandler = (handleDeleteButton, cardElement, id) => {
    this.open()
    this._cardElement = cardElement;
    this._id = id;
    this._handleDeleteButton = handleDeleteButton;
  }

  _showTextWhileSaving(condition) {
    if(condition) {
      this._saveButton.value = 'Удаляю...'
    } else {
      this._saveButton.value = 'Да'
    }
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', evt => {
      evt.preventDefault();
      this._showTextWhileSaving(true)
      this._api.deleteImage(this._id)
        .then(res => this._handleDeleteButton(this._cardElement))
        .catch(err => console.log(`Ошибка: ${err}`))
        .finally(() => this._showTextWhileSaving(false))
      this.close();
    })
  }
}