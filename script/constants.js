const page = document.querySelector('.page');
const closeButtonInfoEdit = page.querySelector('.popup__cross_info-edit');
const editButton = page.querySelector('.profile__edit-button');
const profileName = page.querySelector('.profile__name');
const profileOccupation = page.querySelector('.profile__occupation');
const inputName = page.querySelector('.popup__input_type_name');
const inputOccupation = page.querySelector('.popup__input_type_occupation');
const inputFormEditor = page.querySelector('.popup__form_type_editor');
const popupInfoEdit = page.querySelector('.popup_info-edit');
const addButton = page.querySelector('.profile__add-button');
const popupImage = page.querySelector('.popup_type_image');
const closeImagePopup = page.querySelector('.popup__cross_type_image');
const submitChangesImageHandler = page.querySelector('.popup__form_type_image');
const gridList = page.querySelector('.grid__list');
const inputCityTitle = page.querySelector('.popup__input_type_image-title');
const inputlink = page.querySelector('.popup__input_type_image-link');
const popupViewer = page.querySelector('.popup_type_viewer');
const profileEditorSubmitBtn = popupInfoEdit.querySelector('.popup__save-btn');
const buttonElement = popupImage.querySelector('.popup__save-btn');
const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-btn',
  inactiveButtonClass: 'popup__save-btn_type_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_visible'
};
