let page = document.querySelector('.page');
let popup = page.querySelector('.popup');
let addButton = page.querySelector('.popup__save-btn');
let closeButton = page.querySelector('.popup__cross');
let editButton = page.querySelector('.profile__edit-button');
let profileName = page.querySelector('.profile__name');
let profileOccupation = page.querySelector('.profile__occupation');
let inputName = page.querySelector('.popup__input_type_name');
let inputOccupation = page.querySelector('.popup__input_type_occupation');
let inputForm = page.querySelector('.popup__input-form');

function showOrHidePopup() {
  popup.classList.toggle('popup_opened');
  inputName.value = profileName.textContent;
  inputOccupation.value = profileOccupation.textContent;
}

editButton.addEventListener('click', showOrHidePopup);
closeButton.addEventListener('click', showOrHidePopup);

function applyInfoChanges(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileOccupation.textContent = inputOccupation.value;
  showOrHidePopup();
}

inputForm.addEventListener('submit', applyInfoChanges);