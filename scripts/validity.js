function showError(errorEl, inputEl, settings) {
  errorEl.classList.add(settings.errorClass);
  errorEl.textContent = inputEl.validationMessage;
  inputEl.classList.add(settings.inputErrorClass);
}

function isInvalidInput(inputEl) {
    return !inputEl.validity.valid;
}

function hideError(errorEl, inputEl, settings) {
  errorEl.classList.remove(settings.errorClass);
  errorEl.textContent = '';
  inputEl.classList.remove(settings.inputErrorClass);
}

function checkInputValidity(inputEl, formEl, settings) {
  const errorEl = formEl.querySelector(`#${inputEl.id}-error`);

  if(isInvalidInput(inputEl)) {
    showError(errorEl, inputEl, settings);
    // showErrorStyle(inputEl, settings);
  } else {
    hideError(errorEl, inputEl, settings);
    // hideErrorStyle(inputEl, settings);
  };
}

function toggleButton(inputList, buttonEl, settings) {
  if (inputList.some(isInvalidInput)) {
      buttonEl.disabled = true;
      buttonEl.classList.add(settings.inactiveButtonClass);
  } else {
      buttonEl.disabled = false;
      buttonEl.classList.remove(settings.inactiveButtonClass);
  }
}

function setEventListeners(formEl, settings){
  const inputList = Array.from(formEl.querySelectorAll(settings.inputSelector));
  const buttonEl =  formEl.querySelector(settings.submitButtonSelector);

  inputList.forEach((inputEl) => {
    inputEl.addEventListener('input', () => {
        checkInputValidity(inputEl, formEl, settings);
        toggleButton(inputList, buttonEl, settings);
    });
  });
}

function enableValidation(settings){
  const formList = Array.from(document.querySelectorAll(settings.formSelector));

  formList.forEach((formEl) => {
    formEl.addEventListener('submit', (e) => {
      e.preventDefault();
    });
    setEventListeners(formEl, settings);
  });
}

function resetForm(formEl, settings) {
  const buttonEl = formEl.querySelector(settings.submitButtonSelector);
  buttonEl.disabled = true;
  buttonEl.classList.add(settings.inactiveButtonClass);
  formEl.reset();
}

enableValidation({
  formSelector: ".form-name",
  inputSelector: ".form-name__input",
  submitButtonSelector: ".form-name__save-button",
  inactiveButtonClass: "form-name__save-button_disabled",
  inputErrorClass: "form-name__modal-type_error",
  errorClass: "modal__popup__error_visible",
});

