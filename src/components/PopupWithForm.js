import Popup from "./Popup";

export default class PopupWithForm extends Popup {
  constructor({formSubmit}, popupSelector){
    super(popupSelector);
    this._formSubmit = formSubmit;
    this._formEl = this._popupElement.querySelector(".form-name"); //.popup__form
  }

  //private method
  _getInputValues(){
    this._allInputFields = this._popupElement.querySelectorAll(".form-name__input");
    this._allInputEl = {};
    this._allInputFields.forEach((inputEl) => {
          this._allInputEl[inputEl.name] = inputEl.value;
  });
    return this._allInputEl;
  }

  //public method
  setEventListeners() {
    this._formEl.addEventListener("submit", (evt) => {
    evt.preventDefault();
    this._formSubmit(this._getInputValues());
    this.close();
    });
    super.setEventListeners();
  };

  //public method
  close(){
    this._formEl.reset();
    super.close();
  };
};

