import Popup from "./Popup";

export class PopupWithForm extends Popup {
  constructor({formSubmit},popupSelector){
    super(popupSelector);
    this._formSubmit = formSubmit;
    this._formEl = this._popupElement.querySelector("#edit-profile-popup"); //.popup__form
  }

  // //private method
  // _formSubmit(){

  // }

  //private method
  _getInputValues(){
    const allInputFields = this._popupElement.querySelectorAll();
    //const inputEl =
    allInputFields.forEach((inputEl)=>{

    });
  }

  //public method
  setEventListeners() {
    super.setEventListeners();
  }

  //public method
  close(){
    this._formEl.reset();
    super.close();
  }
}

