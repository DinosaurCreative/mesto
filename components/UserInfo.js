class UserInfo {
  constructor({selectors}) {
    this._nameSelector = selectors.name;
    this._occupationSelector = selectors.ocupation;
  }
  getUserInfo(userData) {
    const userInfo = {};
    userInfo.name = userData.name;
    userInfo.occupation = userData.occupation;

    return userInfo;
  }

  setUserInfo(userData){
    document.querySelector(this._nameSelector).innerHTML = userData.name ;
    document.querySelector(this._occupationSelector).innerHTML = userData.occupation;
  }
}