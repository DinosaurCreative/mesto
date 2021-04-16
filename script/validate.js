const hideInputError = (errorElement, inputElement, config) => {
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.classList.remove(config.errorClass);
  errorElement.textContent = '';
};

const showInputError = (errorElement, inputElement, config) => {
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add(config.errorClass);
  inputElement.classList.add(config.inputErrorClass);
};

const validateInput = (formElement, inputElement, config) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  if (inputElement.validity.valid) {
    hideInputError(errorElement, inputElement, config);
  } else {
    showInputError(errorElement, inputElement, config);
  };
};

const checkInputValidity = inputElements => inputElements.every(input => input.validity.valid);

const toggleButtonState = (buttonElement, inputElements, config) => {
  if (!checkInputValidity(inputElements)) {
    buttonElement.classList.add(config.inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(config.inactiveButtonClass);
    buttonElement.disabled = false;
  };
};

const setInputListener = (formElement, config) => {
  const inputElements = Array.from(formElement.querySelectorAll(config.inputSelector));
  const buttonElement = formElement.querySelector(config.submitButtonSelector);
  inputElements.forEach(inputElement => {
    inputElement.addEventListener('input', () => {
      validateInput(formElement, inputElement, config);
      toggleButtonState(buttonElement, inputElements, config);
    });
  });
};

const enableValidation = config => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  
  formList.forEach(formElement => {
    formElement.addEventListener('submit', preventDefaultSubmit);
    setInputListener(formElement, config);
  });
};

const preventDefaultSubmit = evt => evt.preventDefault();
  
enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-btn',
  inactiveButtonClass: 'popup__save-btn_type_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_visible'
});