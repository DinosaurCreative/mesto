export class UserInfo {
  constructor({nameSelector, occupationSelector}) {
    this._nameSelector = nameSelector;
    this._occupationSelector = occupationSelector;
  }
  getUserInfo() {
    return {
      name: this._nameSelector.innerHTML,
      occupation: this._occupationSelector.innerHTML
    }
  }
  
  setUserInfo = (userInfo) => {
    this._nameSelector.innerHTML = userInfo.name;
    this._occupationSelector.innerHTML = userInfo.occupation;
  }
}