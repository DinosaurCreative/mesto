export default class Card {
  constructor(data, showPopup, hidePopup, templateSelector) {
    this._data = data;

    this._showPopup = showPopup;
    this._hidePopup = hidePopup;
    this._templateSelector = templateSelector;
    this._cardElement = this._getTemplate();
  }

  _getTemplate() {
    const cardElement = document.
    querySelector(this._templateSelector)
    .content
    .querySelector('.grid__item')
    .cloneNode(true);

    const imageElement = cardElement.querySelector('.grid__image');
    const cityNameElement = cardElement.querySelector('.grid__city-name');

    imageElement.src = this._data.link;
    imageElement.alt = this._data.name;
    cityNameElement.textContent = this._data.name;

    return cardElement;
  }

  _setEventListeners() {
    const likeButton = this._cardElement.querySelector('.grid__like');
    const gridImage = this._cardElement.querySelector('.grid__image');
    const deleteButton = this._cardElement.querySelector('.grid__delete-btn');
    
    likeButton.addEventListener('click', () => this._handleLikeButton());
    gridImage.addEventListener('click', () => this._handleOpenPreview());
    deleteButton.addEventListener('click', () => this._handleDeleteButton());
  }

  _handleLikeButton() {
    const likeBtn = this._cardElement.querySelector('.grid__like');

    likeBtn.classList.toggle('grid__like_type_dark')
  }

  _handleDeleteButton() {
    this._cardElement.remove();
  }

  _handleOpenPreview() {
    const popupViewer = document.querySelector('.popup_type_viewer');
    const image = popupViewer.querySelector('.popup__image');
    const name = popupViewer.querySelector('.popup__image-title');
    const closeButton = popupViewer.querySelector('.popup__cross_type_viewer');

    image.src = this._data.link;
    image.setAttribute('alt', this._data.name);
    name.textContent = this._data.name;
    this._showPopup(popupViewer);
  }

  generateCard() {
    this._setEventListeners();
    return this._cardElement;
  }
}
