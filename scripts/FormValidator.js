class FormValidator{
  constructor(settings, formEl){
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    this._formEl = formEl;
  }

  _checkInputValidity(inputEl){
    const errorEl = this._formEl.querySelector(`#${inputEl.id}-error`);
    if(this._isInvalidInput(inputEl)) {
      showError(errorEl, inputEl, settings);
    } else {
      hideError(errorEl, inputEl, settings);
    };
  }

  _isInvalidInput(inputEl){
    return !inputEl.validity.valid;
  }

  _toggleButton(inputList, buttonEl){
    if (inputList.some(this._isInvalidInput)) {
      buttonEl.disabled = true;
      buttonEl.classList.add(this._inactiveButtonClass);
  } else {
      buttonEl.disabled = false;
      buttonEl.classList.remove(this._inactiveButtonClass);
  }
  }

  _showError(inputEl){
    const errorEl = this._formEl.querySelector(`#${inputEl.id}-error`);
    inputEl.classList.add(this._inputErrorClass);
    errorEl.textContent = inputEl.validationMessage;
    errorEl.classList.add(this._errorClass);

  }

  _hideError(inputEl){
    const errorEl = this._formEl.querySelector(`#${inputEl.id}-error`);
    inputEl.classList.remove(this._inputErrorClass);
    errorEl.textContent = '';
    errorEl.classList.remove(this._errorClass);
  }

  _setEventListeners(inputList, buttonEl){
    // const inputList = this._formEl.querySelectorAll(this._inputSelector);
    // const buttonEl =  this._formEl.querySelector(this._submitButtonSelector);
      inputList.forEach((inputEl) => {
        this._inputEl.addEventListener('input', () => {
          checkInputValidity(inputEl, formEl, settings);
          toggleButton(inputList, buttonEl, settings);
      });
    });
  };

  enableValidation(){
    this._formEl.addEventListener('submit', (e) => {
      e.preventDefault();
    });
    this._setEventListeners();
  }
}

// const formValidatorConfig = {
//   inputSelector: ".form-name__input",
//   submitButtonSelector: ".form-name__save-button",
//   inactiveButtonClass: "form-name__save-button_disabled",
//   inputErrorClass: "form-name__modal-type_error",
//   errorClass: "modal__popup__error_visible",
// }

// const addFormValidator =  new FormValidator(formValidatorConfig);
// addFormValidator.enableValidation();




export default FormValidator;