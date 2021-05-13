class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
  }
  open() {
    document.querySelector(this._popupSelector).classList.add('popup_opened');
  }

  close() {
    document.querySelector(this._popupSelector).classList.remove('popup_opened');      
  }

  _handleEscClose() {
    document.addtEventListeners('keydown', evt => {
      if(evt.key === 'Escape') {
        this.close();
      };
    })
  }

  setEventListeners() {
    this._handleEscClose();
    document.addEventListeners('click', evt => {
      if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__cross')) {
        this.close();
      };
    });
  }
}