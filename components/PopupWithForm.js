import Popup from './Popup.js';

class PopupWithForm extends Popup {
  constructor(popupSelector, formSubmit) {
    super(popupSelector);
    this._formSubmit = formSubmit;
  }

  _getInputValues() {
    const formValues =  Array.from(document.querySelector(super._popup).querySelectorAll('.popup__input'));
  
    return formValues
  }
  
  _close() {
    super.close();
    
  }

  setEventListeners() {
    super.open();
    super.setEventListeners();
    document.addEventListener('submit', evt => {
      evt.preventDefault();
      const formValues = this._getInputValues();
      this._formSubmit(formValues);
      this._close();
    });
  }
}
