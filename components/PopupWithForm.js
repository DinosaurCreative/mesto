import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, formSubmit) {
    super(popupSelector);
    this.formSubmit = formSubmit;
  }

  _getInputValues() {
    return  Array.from(this._popupSelector.querySelectorAll('.popup__input'));
  }
  
  close() {
    super.close();
    this._popupSelector.querySelector('.popup__form').reset();
  }
  
  setEventListeners() {
    super.setEventListeners();
    super.open();
  }
  
  submitChanges() {
    this.formSubmit(this._getInputValues())
  }
}
