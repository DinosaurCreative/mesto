class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }
  open() {
    this._popup.classList.add('popup_opened');
  }

  close() {
    this._popup.classList.remove('popup_opened');
      
  }

  _handleEscClose() {
    document.setEventListeners('keydown', evt => {
      if(evt.key === 'Escape') {
        this.close();
      };
    })
  }

  setEventListeners() {
    document.setEventListeners('click', evt => {
      if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__cross')) {
        this.close();
      };
      this._handleEscClose();
    });
  }
}