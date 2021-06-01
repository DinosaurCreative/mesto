import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
  constructor(popupSelector, formSubmit) {
    super(popupSelector);
    this.formSubmit = formSubmit;
    this._saveButton = this._popupElement.querySelector('.popup__save-btn');
    this._form = this._popupElement.querySelector('.popup__form');
  }

  _getInputValues() {
    const inputValues = {}
    Array.from(this._popupElement.querySelectorAll('.popup__input')).forEach(item => inputValues[item.name] = item.value);
    return inputValues;
  }
  open() {
    super.open();
    this.showTextWhileSaving(false)
  }
  close() {
    super.close();
    this._form.reset();
  }

  showTextWhileSaving(condition) {
    if(condition) {
      this._saveButton.value = 'Сохраняю...'
    } else {
      this._saveButton.value = 'Сохранить'
    }

  }
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', evt => {
      evt.preventDefault();
      this.showTextWhileSaving(true);
      this.formSubmit(this._getInputValues());
    })
  }
}