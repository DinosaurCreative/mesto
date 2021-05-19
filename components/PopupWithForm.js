import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
  constructor(popupSelector, formSubmit) {
    super(popupSelector);
    this.formSubmit = formSubmit;
  }

  _getInputValues() {
    Array.from(this._popupSelector.querySelectorAll('.popup__input'));
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