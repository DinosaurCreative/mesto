let page = document.querySelector('.page');
let popup = page.querySelector('.popup');
let closeButton = page.querySelector('.popup__cross');
let editButton = page.querySelector('.profile__edit-button');
let profileName = page.querySelector('.profile__name');
let profileOccupation = page.querySelector('.profile__occupation');
let inputName = page.querySelector('.popup__input_type_name');
let inputOccupation = page.querySelector('.popup__input_type_occupation');
let inputForm = page.querySelector('.popup__form');

function showPopup() {
  popup.classList.add('popup_opened');
  inputName.value = profileName.textContent;
  inputOccupation.value = profileOccupation.textContent;
}

function hidePopup() {
  popup.classList.remove('popup_opened');
}

function applyInfoChanges(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileOccupation.textContent = inputOccupation.value;
  hidePopup();
}

editButton.addEventListener('click', showPopup);
closeButton.addEventListener('click', hidePopup);
inputForm.addEventListener('submit', applyInfoChanges);