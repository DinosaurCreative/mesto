import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
  constructor(popupSelector, formSubmit) {
    super(popupSelector);
    this.formSubmit = formSubmit;
    this._saveButton = this._popupSelector.querySelector('.popup__save-btn');
    this._form = this._popupSelector.querySelector('.popup__form');
  }

  _getInputValues() {
    const obj = {}
    Array.from(this._popupSelector.querySelectorAll('.popup__input')).forEach(item => obj[item.name] = item.value);
    return obj;
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
      this.formSubmit(this._getInputValues());
      this.close();
    })
  }
}