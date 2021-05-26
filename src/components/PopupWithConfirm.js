import { Popup } from './Popup.js';

export class PopupWithConfirm extends Popup{
  constructor(popupSelector) {
    super(popupSelector);
  }  

  setEventListeners() {
      super.setEventListeners();
      this._popupSelector.addEventListener('submit', evt => {
          evt.preventDefault()
      })
  }

  methodWhichDeletsImage( item ) {

  }
}