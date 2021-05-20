import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
  constructor(popupSelector, formSubmit) {
    super(popupSelector);
    this.formSubmit = formSubmit;
  }

  _getInputValues() {
    const obj = {}
    Array.from(this._popupSelector.querySelectorAll('.popup__input')).forEach(item => obj[item.name] = item.value);
    return obj;
  }
  
  close() {
    super.close();
    this._popupSelector.querySelector('.popup__form').reset();
  }
  
  setEventListeners() {
    super.setEventListeners();
  }
  
  submitChanges() {
    this.formSubmit(this._getInputValues())
  }
}