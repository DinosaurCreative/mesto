import {
  profileEditorSubmitBtn
} from '../utils/constants.js';

export const activateButton = () => {
  profileEditorSubmitBtn.classList.remove('popup__save-btn_type_disabled');
  profileEditorSubmitBtn.disabled = false;
};

export const resetInputError = className => {
  const errorList = Array.from(className.querySelectorAll('.popup__input-error'));
  const inputList = Array.from(className.querySelectorAll('.popup__input'));

  errorList.forEach(errorElement => {
    errorElement.classList.remove('popup__input-error_visible');
  });
  inputList.forEach(inputElement => {
    inputElement.classList.remove('popup__input_type_error');
  });
};