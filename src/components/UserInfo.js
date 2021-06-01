export class UserInfo {
  constructor({nameSelector, occupationSelector, avatarSelector}) {
    this._nameElement = nameSelector;
    this._occupationElement = occupationSelector;
    this._avatarElement = avatarSelector;
  }
  
  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      occupation: this._occupationElement.textContent,
      avatar: this._currentAvatarLink
    }
  }
  
  setUserInfo = data => {
    if(data.name){ this._nameElement.textContent = data.name}
    if(data.about){ this._occupationElement.textContent = data.about}
    if(data.avatar){ this._avatarElement.style.backgroundImage = `url(${data.avatar})`;
      this._currentAvatarLink = data.avatar;
    }
  }

  setNewAvatar = data => {
    if(data.avatar) {
      this._avatarElement.style.backgroundImage = `url(${data.avatar})`;
      this._currentAvatarLink = data.avatar;
    }
  }
}