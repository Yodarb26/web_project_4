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

  setUserInfo(userName, userDetail) {
    this._userName.textContent = userName;
    this._userDetail.textContent = userDetail;
  }
}
