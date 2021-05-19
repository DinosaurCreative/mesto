import { profileOccupation } from "../utils/constants.js";
import { profileName } from "../utils/constants.js";

export class UserInfo {
  constructor({nameSelector, occupationSelector}) {
    this._nameSelector = nameSelector;
    this._occupationSelector = occupationSelector;
  }
  getUserInfo() {
    const userInfo = {};

    userInfo.name = this._nameSelector.textContent;
    userInfo.occupation = this._occupationSelector.innerHTML;
    
    return userInfo;
  }
  
  setUserInfo(userInfo) {
    profileName.innerHTML = userInfo[0].value;
    profileOccupation.innerHTML = userInfo[1].value;
  }
}