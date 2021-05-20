export class FormValidator {
  constructor(config, formSelector) {
    this._config = config;
    this._formSelector = formSelector;
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

  _validateInput = (formSelector, inputElement) => {
    const errorElement = formSelector.querySelector(`.${inputElement.id}-error`);
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

  _preventDefaultSubmit = evt => evt.preventDefault();

  enableValidation = () => {
    const inputElements = Array.from(this._formSelector.querySelectorAll(this._config.inputSelector));
    const buttonElement = this._formSelector.querySelector(this._config.submitButtonSelector);

    inputElements.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        this._validateInput(this._formSelector, inputElement);
        this._toggleButtonState(buttonElement, inputElements);
      });
    });

    this._formSelector.addEventListener('submit', this._preventDefaultSubmit);
  };
}