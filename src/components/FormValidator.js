export class FormValidator {
  constructor(config, formSelector) {
    this._config = config;
    this._formSelector = formSelector;
    this._inputList = Array.from(this._formSelector.querySelectorAll(this._config.inputSelector));
    this._errorList = Array.from(this._formSelector.querySelectorAll(config.errorSpan));
    this._buttonElement = this._formSelector.querySelector(this._config.submitButtonSelector);
  };

  _hideInputError = (errorElement, inputElement) => {
    inputElement.classList.remove(this._config.inputErrorClass);
    errorElement.classList.remove(this._config.errorClass);
    errorElement.textContent = '';
  };

  resetInputError = () => {
    this._errorList.forEach(errorElement => {
      errorElement.classList.remove(this._config.errorClass);
      errorElement.textContent = '';
    });
    this._inputList.forEach(inputElement => {
      inputElement.classList.remove(this._config.inputErrorClass);
    })
  }

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

  activateButton = (buttonElement) => {
    buttonElement.classList.remove(this._config.inactiveButtonClass);
    buttonElement.disabled = false;
  }

  disactivateButton = (buttonElement) => {
    buttonElement.classList.add(this._config.inactiveButtonClass);
    buttonElement.disabled = true;
  }

  _toggleButtonState = (buttonElement, inputElements) => {
    if (!this._checkInputValidity(inputElements)) {
      this.disactivateButton(buttonElement);
    } else {
      this.activateButton(buttonElement);
    };
  };

  enableValidation = () => {
    this._inputList.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        this._validateInput(this._formSelector, inputElement);
        this._toggleButtonState(this._buttonElement, this._inputList);
      });
    });
  };
}