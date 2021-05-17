import { profileOccupation } from "../utils/constants.js";
import { profileName } from "../utils/constants.js";

export default class UserInfo {
  constructor({nameSelector, occupationSelector}) {
    this._nameSelector = nameSelector;
    this._occupationSelector = occupationSelector;
  }
  getUserInfo() {
    const userInfo = {};
    userInfo.name = document.querySelector(this._nameSelector).innerHTML;
    userInfo.occupation = document.querySelector(this._occupationSelector).innerHTML;

    return userInfo;
  }
  
  setUserInfo(userInfo) {
    profileName.innerHTML = user[0].value;
    profileOccupation.innerHTML = userInfo[1].value;
  }
}