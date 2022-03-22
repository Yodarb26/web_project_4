class FormValidator{
  constructor(settings, formEl){
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    this._formEl = formEl;
  }

  _isInvalidInput(inputEl){
    return !inputEl.validity.valid;
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

  _toggleButton(inputList, buttonEl){
    if (inputList.some(this._isInvalidInput)) {
      buttonEl.disabled = true;
      buttonEl.classList.add(this._inactiveButtonClass);
  } else {
      buttonEl.disabled = false;
      buttonEl.classList.remove(this._inactiveButtonClass);
    }
  }

  _checkInputValidity(inputEl){
    const errorEl = this._formEl.querySelector(`#${inputEl.id}-error`);
    if(this._isInvalidInput(inputEl)) {
      // this._showError(errorEl, inputEl, settings);
      this._showError(inputEl);
    } else {
      // this._hideError(errorEl, inputEl, settings);
      this._hideError(inputEl);
    };
  }

  _setEventListeners(){
    const inputList = Array.from(this._formEl.querySelectorAll(this._inputSelector)
    );
    const buttonEl =  this._formEl.querySelector(this._submitButtonSelector);

      inputList.forEach((inputEl) => {
        inputEl.addEventListener('input', () => {
          this._checkInputValidity(inputEl);
          this._toggleButton(inputList, buttonEl);
      });
    });
  };

  resetForm() {
    const buttonEl = this._element.querySelector(settings.submitButtonSelector);
    buttonEl.disabled = true;
    buttonEl.classList.add(settings.inactiveButtonClass);
    this._element.reset();
  }

  enableValidation(){
    this._formEl.addEventListener('submit', (e) => {
      e.preventDefault();
    });
    this._setEventListeners();
  }
}

export default FormValidator;