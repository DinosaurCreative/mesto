export class UserInfo {
  constructor({nameSelector, occupationSelector}) {
    this._nameSelector = nameSelector;
    this._occupationSelector = occupationSelector;
  }
  getUserInfo() {
    return {
      name: this._nameSelector.textContent,
      occupation: this._occupationSelector.textContent
    }
  }
  
  setUserInfo = (userInfo) => {
    this._nameSelector.textContent = userInfo.name;
    this._occupationSelector.textContent = userInfo.occupation;
  }
}