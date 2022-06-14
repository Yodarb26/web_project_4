export default class UserInfo {
  constructor({userName, userDetail}) {
  
    this._userName = userName;
    this._userDetail = userDetail;
  };

  getUserInfo() {
    console.log(1);
    return {
      userProfileName: this._userName.textContent,
      userProfileDetail: this._userDetail.textContent
    };
  }

  setUserInfo() {
    console.log(2);
    this._userName.textContent = userName;
    this._userDetail.textContent = userDetail;
  }
}