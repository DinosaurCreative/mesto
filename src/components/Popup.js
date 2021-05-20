export class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
  }

  open() {
    this._popupSelector.classList.add('popup_opened');

  }

  close() {
    this._popupSelector.classList.remove('popup_opened');
  }

  _handleEscClose() {
    document.addEventListener('keydown', evt => {
      if (evt.key === 'Escape') {
        this.close();
      };
    })
  }

  setEventListeners() {
    console.log(1);
    this._handleEscClose();
    document.addEventListener('click', evt => {
      if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__cross')) {
        this.close();
      };
    });
  }
}