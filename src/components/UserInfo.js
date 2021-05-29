export class UserInfo {
  constructor({nameSelector, occupationSelector, avatarSelector}) {
    this._nameSelector = nameSelector;
    this._occupationSelector = occupationSelector;
    this._avatarSelector = avatarSelector;
  }
  getUserInfo() {
    return {
      name: this._nameSelector.textContent,
      occupation: this._occupationSelector.textContent
    }
  }
  
  setUserInfo = (data) => {
    this._nameSelector.textContent = data.name;
    this._occupationSelector.textContent = data.about;
  }

  setNewAvatar(data) {
    this._avatarSelector.style.backgroundImage = `url(${data})`;

  }
}