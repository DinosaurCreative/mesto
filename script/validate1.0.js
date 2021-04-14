const showInputError = (input, form) => {
  const formError = form.querySelector(`.${input.id}-error`);
  input.classList.add('popup__input_error');
  formError.textContent = input.validationMessage;
};

const hideInputError = (input, form) => {
  const formError = form.querySelector(`.${input.id}-error`);
  input.classList.remove('popup__input_error');
  formError.textContent = '';
};


const isValid = (form, input) => {
  
  if (input.validity.valid) {
    hideInputError(input, form);
  } else {
    showInputError(input, form);
  }
};

const setEventListeners = formElement => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  const buttonElement = formElement.querySelector('.popup__save-btn');
  
  inputList.forEach(inputElement => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup__form'));
  formList.forEach(formElement => {
    formElement.addEventListener('submit', evt => {
      evt.preventDefault();
    });
    setEventListeners(formElement);
  });
};

const hasInvailidInput = inputList => {
  return inputList.some(inputElement => {
    if (!inputElement.validity.valid) {
      return true;
    }
    return !inputElement.validity.valid
  });
};    

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvailidInput(inputList)) {
    buttonElement.classList.add('popup__save-btn_type_disabled');
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove('popup__save-btn_type_disabled');
    buttonElement.disabled = false;
  }
}

enableValidation();