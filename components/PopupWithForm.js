import Popup from './Popup.js';
export default class PopupWithForm extends Popup {
  constructor(popupSelector, formSubmit) {
    super(popupSelector);
    this._formSubmit = formSubmit;
  }

  _getInputValues() {
    return Array.from(document.querySelector(super._popupSelector).querySelectorAll('.popup__input'));
  }
  
  _close() {
    super.close();
    this._popupSelector.querySelector('.popup__form').reset();
  }

  setEventListeners() {
    super.setEventListeners();
    super.open();
    document.querySelector(super._popupSelector).querySelector('.popup__form').addEventListener('submit', evt => {
      evt.preventDefault();
      const formValues = this._getInputValues();
      this._formSubmit(formValues);
      this._close();
    });
  }
}
