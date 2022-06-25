export default class FormValidator {
  constructor(settings, formEl) {
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    this._formEl = formEl;
  }

  _isInvalidInput(inputEl) {
    return !inputEl.validity.valid;
  }

  _showError(inputEl) {
    const errorEl = this._formEl.querySelector(`#${inputEl.id}`);
    errorEl.classList.add(this._errorClass);
    errorEl.textContent = inputEl.validationMessage;
    inputEl.classList.add(this._inputErrorClass);
  }

  _hideError(inputEl) {
    const errorEl = this._formEl.querySelector(`#${inputEl.id}`);
    errorEl.classList.remove(this._errorClass);
    errorEl.textContent = " ";
    inputEl.classList.remove(this._inputErrorClass);
  }

  _toggleButton() {
    if (this._inputList.some(this._isInvalidInput)) {
      this._buttonEl.disabled = true;
      this._buttonEl.classList.add(this._inactiveButtonClass);
    } else {
      this._buttonEl.disabled = false;
      this._buttonEl.classList.remove(this._inactiveButtonClass);
    }
  }

  _checkInputValidity(inputEl) {
    const errorEl = this._formEl.querySelector(`#${inputEl.id}-error`);
    if (this._isInvalidInput(inputEl)) {
      this._showError(errorEl);
    } else {
      this._hideError(errorEl);
    }
  }

  _setEventListeners() {
    this._inputList = Array.from(
      this._formEl.querySelectorAll(this._inputSelector)
    );
    this._buttonEl = this._formEl.querySelector(this._submitButtonSelector);

    this._inputList.forEach((inputEl) => {
      inputEl.addEventListener("input", () => {
        this._checkInputValidity(inputEl);
        this._toggleButton();
      });
    });
  }

  resetForm() {
    // this._formEl.reset();
    this._toggleButton();
  }

  enableValidation() {
    this._formEl.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    this._setEventListeners();
  }
}

