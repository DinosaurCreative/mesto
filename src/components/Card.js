export class Card {
  constructor(data, handleCardClick, templateSelector, api, myId) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._owner = data.owner;
    this._id = data._id;
    this._myId = myId;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._cardElement = this._getTemplate();
    this._likeContainer = this._cardElement.querySelector('.grid__like-counter');
    this._likeButton = this._cardElement.querySelector('.grid__like');
    this._gridImage = this._cardElement.querySelector('.grid__image');
    this._isLiked = false;
    this._api = api;
  }

  _getTemplate() {
    const cardElement = document.
    querySelector(this._templateSelector)
      .content
      .querySelector('.grid__item')
      .cloneNode(true);
    return cardElement;
  }

  _setUserInfoToCard() {
    this._gridImage .src = this._link;
    this._gridImage .alt = this._name;
    this._cardElement.querySelector('.grid__city-name').textContent = this._name;
    this._likeContainer.textContent = this._likes.length;
  }
  
  _countLikes() {
    this._handleLikeButton();
    if(!this._isLiked) {
      this._api.increaseLike(this._id)
        .then(res => {
          this._likeContainer.textContent = res.likes.length;
          this._isLiked = true;
        })
        .catch(err => console.log(`Ошибка при увеличении лайков ${err}`))
    } else {
      this._api.reduceLike(this._id) 
        .then(res => {
          this._likeContainer.textContent = res.likes.length;
          this._isLiked = false;
        })
        .catch(err => console.log(`Ошибка при уменьшении лайков ${err}`))
    }
  }

  _handleLikeButton() {
    this._likeButton.classList.toggle('grid__like_type_dark');
  }

  

  _handleDeleteButton() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', () => this._countLikes());
    this._gridImage .addEventListener('click', () => this._handleCardClick(this._name, this._link));
    this._cardElement.querySelector('.grid__delete-btn').addEventListener('click', () => this._handleDeleteButton());
  }

  _checkIsItLiked() {
    this._likes.forEach(like => {
      if (like._id == this._myId) {
        this._isLiked = true;
        this._handleLikeButton();
      };
    })
  }

  generateCard() {
    this._setUserInfoToCard();
    this._setEventListeners();
    this._checkIsItLiked()
    return this._cardElement;
  }
}