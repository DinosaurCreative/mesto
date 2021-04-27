export class FormValidator {
  constructor(config) {
    this._config = config;
  };

  _hideInputError = (errorElement, inputElement) => {
    inputElement.classList.remove(this._config.inputErrorClass);
    errorElement.classList.remove(this._config.errorClass);
    errorElement.textContent = '';
  };

  _showInputError = (errorElement, inputElement) => {
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._config.errorClass);
    inputElement.classList.add(this._config.inputErrorClass);
  };

  _validateInput = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    if (inputElement.validity.valid) {
      this._hideInputError(errorElement, inputElement);
    } else {
      this._showInputError(errorElement, inputElement);
    };
  };

  _checkInputValidity = inputElements => inputElements.every(input => input.validity.valid);

  _toggleButtonState = (buttonElement, inputElements) => {
    if (!this._checkInputValidity(inputElements)) {
      buttonElement.classList.add(this._config.inactiveButtonClass);
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.remove(this._config.inactiveButtonClass);
      buttonElement.disabled = false;
    };
  };

  _setInputListener = formElement => {
    const inputElements = Array.from(formElement.querySelectorAll(this._config.inputSelector));
    const buttonElement = formElement.querySelector(this._config.submitButtonSelector);
    
    inputElements.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        this._validateInput(formElement, inputElement);
        this._toggleButtonState(buttonElement, inputElements);
      });
    });
  };

  _preventDefaultSubmit = evt => evt.preventDefault();


  enableValidation = () => {
    const formList = Array.from(document.querySelectorAll(this._config.formSelector));
    
    formList.forEach(formElement => {
      formElement.addEventListener('submit', this._preventDefaultSubmit);
      this._setInputListener(formElement);
    });
  };
}