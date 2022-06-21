export default class UserInfo {
  constructor({userName, userDetail}) {
    this._userName = userName;
    this._userDetail = userDetail;
  };

  getUserInfo() {
    console.log("get--User---Info");
    console.log(this._userName.textContent);
    console.log(this._userDetail.textContent);
    return {
      userProfileName: this._userName.textContent,
      userProfileDetail: this._userDetail.textContent
    };
  }

  setUserInfo( userName, userDetail) {
    console.log("set--User---Info");
    console.log(this._userName.textContent);
    console.log(this._userDetail.textContent);
    this._userName.textContent = userName;
    this._userDetail.textContent = userDetail;
  }
}