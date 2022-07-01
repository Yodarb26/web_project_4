import Popup from "./Popup";

export default class PopupWithForm extends Popup {
  constructor({ handleFormSubmit }, popupSelector) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._formEl = this._popupElement.querySelector(".form-name"); //.popup__form
  }

  //private method
  _getInputValues() {
    this._allInputFields =
      this._popupElement.querySelectorAll(".form-name__input");
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
      this._handleFormSubmit(this._getInputValues());
      this.close();
    });
    super.setEventListeners();
  }

  //public method
  close() {
    this._formEl.reset();
    super.close();
  }
}