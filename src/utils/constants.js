export const page = document.querySelector('.page');
export const closeButtonInfoEdit = page.querySelector('.popup__cross_info-edit');
export const editButton = page.querySelector('.profile__edit-button');
export const profileName = page.querySelector('.profile__name');
export const profileOccupation = page.querySelector('.profile__occupation');
export const inputName = page.querySelector('.popup__input_type_name');
export const inputOccupation = page.querySelector('.popup__input_type_occupation');
export const inputFormEditor = page.querySelector('.popup__form_type_editor');
export const popupInfoEdit = page.querySelector('.popup_info-edit');
export const addButton = page.querySelector('.profile__add-button');
export const popupImage = page.querySelector('.popup_type_image');
export const closeImagePopup = page.querySelector('.popup__cross_type_image');
export const submitChangesImageHandler = page.querySelector('.popup__form_type_image');
export const gridList = page.querySelector('.grid__list');
export const inputCityTitle = page.querySelector('.popup__input_type_image-title');
export const inputlink = page.querySelector('.popup__input_type_image-link');
export const popupViewer = page.querySelector('.popup_type_viewer');
export const profileEditorSubmitBtn = popupInfoEdit.querySelector('.popup__save-btn');
export const buttonElement = popupImage.querySelector('.popup__save-btn');
export const saveButtonInfoEditPopup = popupInfoEdit.querySelector('.popup__save-btn');
export const cardTemplate = '#grid_item';
export const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-btn',
  inactiveButtonClass: 'popup__save-btn_type_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_visible',
  errorSpan: '.popup__input-error'
};
export const popupDeletePic = page.querySelector('.popup_type_delete-confirm');
export const popupAvatarEdit = page.querySelector('.popup_type_avatar');
export const apiKeys = { address: 'https://nomoreparties.co/v1/cohort-24/', token: '1b42587b-1212-49d2-8dac-fba90d326288' }
export const avatar = page.querySelector('.profile__photo');
export const avatarInput = page.querySelector('.popup__input_type_avatar-link');
export const avatarSaveButton = page.querySelector('.popup__save-btn_type_avatar');
export const avatarForm = page.querySelector('.popup__form_type_avatar');
export const avatarEditButton = page.querySelector('.profile__edit-avatar');
export const avatarPopupSubmitButton = popupAvatarEdit.querySelector('.popup__save-btn');