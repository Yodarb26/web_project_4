export default class UserInfo {
  constructor({userName, userDetail}) {
    this._userName = userName;
    this._userDetail = userDetail;
  };

  getUserInfo() {
    return {
      userProfileName: this._userName.textContent,
      userProfileDetail: this._userDetail.textContent
    };
  }

  setUserInfo( userName, userDetail) {
    this._userName.textContent = userName;
    this._userDetail.textContent = userDetail;
  }
}