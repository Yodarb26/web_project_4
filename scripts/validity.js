const closeCardModal = formCard;
const closeProfileModal = editProfileModal;
const closeImageModal = imageModal;

function showError(errorEl, inputEl, settings) {
  errorEl.classList.add(settings.errorClass);
  errorEl.textContent = inputEl.validationMessage;
  inputEl.classList.add(settings.inputErrorClass);
}

function showErrorStyle(input){
  input.classList.add('form-name__input-error');
}

function hideErrorStyle(input){
  input.classList.remove('form-name__input-error');
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
    showErrorStyle(inputEl, settings);
  } else {
    hideError(errorEl, inputEl, settings);
    hideErrorStyle(inputEl, settings);
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

function setEventListeners(formEl, settings) {
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

function resetForm(formEl, inactiveButtonClass) {
  const buttonEl = formEl.querySelector(settings.submitButtonSelector);
  buttonEl.disabled = true;
  buttonEl.classList.add(settings.inactiveButtonClass);
  formEl.reset();
}

function closeImageOverlay(e){
    if(e.target === closeImageModal){
      closeImageModal.style.display = "none";
    } else {
      closeImageModal.style.display = " ";
    }
}

function closeProfileOverlay(e){
  if(e.target === closeProfileModal){
    closeProfileModal.style.display = "none";
  } else {
    closeProfileModal.style.display = " ";
  }
}

function closeCardOverlay(e){
    if(e.target === closeCardModal){
      closeCardModal.style.display = "none";
    } else {
      closeCardModal.style.display = " ";
    }
};

function overlay(e){
  closeImageOverlay(e);
  closeProfileOverlay(e);
  closeCardOverlay(e);
};

window.addEventListener('click', overlay, false);

window.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeCardModal.style.display = 'none';
    closeProfileModal.style.display = 'none';
    closeImageModal.style.display = 'none';
  } else {
    closeImageModal.style.display = " ";
    closeProfileModal.style.display = " ";
    closeCardModal.style.display = " ";
  }
});

enableValidation({
  formSelector: ".form-name",
  inputSelector: ".form-name__input",
  submitButtonSelector: ".form-name__save-button",
  inactiveButtonClass: "form-name__save-button_disabled",
  inputErrorClass: "form-name__modal_type_error",
  errorClass: "modal__popup__error_visible",
});

