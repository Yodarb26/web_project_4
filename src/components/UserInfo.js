export default class UserInfo {
  constructor({userNameSelector, userDetailSelector}) {
    this._userName = document.querySelector(userNameSelector);
    this._userDetail = document.querySelector(userDetailSelector);
  };

  getUserInfo() {
    return {
      userProfileName: this._userName.textContent,
      userProfileDetail: this._userDetail.textContent,
    };
  }

  setUserInfo(userNameSelector, userDetailSelector) {
    this._userName.textContent = userNameSelector;
    this._userDetail.textContent = userDetailSelector;
  }
}
