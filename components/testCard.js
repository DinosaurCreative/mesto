export default class Card {
  constructor(data, handleCardClick) {
    this._data = data;
    this._handleCardClick = handleCardClick
    this._cardElement = this._getTemplate();
  }

  _getTemplate() {
    const cardElement = document.
    querySelector('#grid_item')
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

  generateCard() {
    this._setEventListeners();
    this._this._handleCardClick();
    return this._cardElement;
  }
}
