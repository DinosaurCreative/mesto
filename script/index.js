let page = document.querySelector('.page');

let popupContainer = page.querySelector('.popup__container');

let popup = page.querySelector('.popup');



let addButton = popupContainer.querySelector('.popup__save-btn');

let closeButton = popupContainer.querySelector('.popup__cross');

let profile = page.querySelector('.profile');

let profileInfo = profile.querySelector('.profile__info');

let profileName = profile.querySelector('.profile__name');

let profileOccupation = profile.querySelector('.profile__occupation');

let editButton = profile.querySelector('.profile__edit-button');




function showOrHidePopup() {
  popup.classList.toggle('popup_opened');
}

editButton.addEventListener('click', showOrHidePopup);


closeButton.addEventListener('click', showOrHidePopup);


function applyInfoChanges(evt) {
  evt.preventDefault()
  let inputName = popupContainer.querySelector('.popup__input_name');

  let inputOccupation = popupContainer.querySelector('.popup__input_occupation');

  profileInfo.innerHTML = `<div class="profile__info">
                            <h1 class="profile__name">${inputName.value}</h1>
                            <p class="profile__occupation">${inputOccupation.value}</p>
                          </div>`;
  
  showOrHidePopup();
}


addButton.addEventListener('click', applyInfoChanges);


