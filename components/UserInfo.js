export class UserInfo {
  constructor({nameSelector, occupationSelector}) {
    this._nameSelector = document.querySelector(nameSelector);
    this._occupationSelector = document.querySelector(occupationSelector);
  }
  getUserInfo() {
    return {
      name: this._nameSelector.innerHTML,
      occupation: this._occupationSelector.innerHTML
    }
  }
  
  setUserInfo = (userInfo) => {
    this._nameSelector.innerHTML = userInfo[0].value;
    this._occupationSelector.innerHTML = userInfo[1].value;
  }
}