export class Card {
  constructor(data, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._handleCardClick = handleCardClick
    this._cardElement = this._getTemplate();
  }

  _getTemplate() {
    const cardElement = document.
    querySelector('#grid_item')
      .content
      .querySelector('.grid__item')
      .cloneNode(true);

    return cardElement;
  }

  _setUserInfoToCard() {
    this._cardElement.querySelector('.grid__image').src = this._link;
    this._cardElement.querySelector('.grid__image').alt = this._name;
    this._cardElement.querySelector('.grid__city-name').textContent = this._name;
  }

  _handleLikeButton() {
    this._cardElement.querySelector('.grid__like').classList.toggle('grid__like_type_dark')
  }

  _handleDeleteButton() {
    this._cardElement.remove();
  }

  _setEventListeners() {
    this._cardElement.querySelector('.grid__like').addEventListener('click', () => this._handleLikeButton());
    this._cardElement.querySelector('.grid__image').addEventListener('click', () => this._handleCardClick());
    this._cardElement.querySelector('.grid__delete-btn').addEventListener('click', () => this._handleDeleteButton());
  }

  generateCard() {
    this._setUserInfoToCard();
    this._setEventListeners();
    this._handleCardClick();
    return this._cardElement;
  }
}