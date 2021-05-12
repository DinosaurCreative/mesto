import Popup from './Popup.js';

class PopupWithForm extends Popup {
  constructor(popupSelector, formSubmit) {
    super(popupSelector);
    this._formSubmit = formSubmit;
  }

  _getInputValues() {
    this._inputList = super._popup.querySelectorAll('.popup__input');

    this._formValues = {};

    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });
    
    return this._formValues
  }
  
  setEventListeners() {
    super.setEventListeners();
    document.addEventListener('submit', evt => {
      evt.preventDefault();
      this._close();
    })
  }

  _close() {
    super.close();
    document.querySelector('.popup__form_type_image').reset();
  }
}
