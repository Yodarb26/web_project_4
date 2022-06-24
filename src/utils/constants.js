
export const initialCards = [
  {
    //NAME
    title: "Lake & Mountain",
    //LINK
    url: "https://images.unsplash.com/photo-1638802422633-694088680359?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    title: "Lake Louise",
    url: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    title: "Bald Mountains",
    url: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    title: "Latemar",
    url: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    title: "Vanoise National Park",
    url: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    title: "Lago di braies",
    url: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];

export const formValidatorConfig = {
  inputSelector: ".form-name__input",
  submitButtonSelector: ".form-name__save-button",
  inactiveButtonClass: "form-name__save-button_disabled",
  inputErrorClass: "form-name__modal-type_error",
  errorClass: "modal__popup__error_visible",
};

export const selectors = {
  cardSection: ".elements-grid__cards", //card list
  cardTemplate: "#card-template",//card template
  previewPopup: "#image-popup",// card image popup preview
}

export const addCardBtn = document.querySelector(".profile__plus-button");
export const editFormBtn = document.querySelector(".profile__edit-button");
export const closeCardButton = document.querySelector("#close-card-popup");
export const closeImagePreviewButton = document.querySelector("#close-image-popup");
export const closeProfileButton = document.querySelector("#close-profile-popup");

export const proTitle =  document.querySelector(".profile__title");
export const proSubTitle =  document.querySelector(".profile__subtitle");

export const imagePopup = document.querySelector("#image-popup");
export const modalImageElement = imagePopup.querySelector(".modal__popup-image");
export const modalCaption = imagePopup.querySelector(".modal__popup-caption");

export const proModalName = document.querySelector("#list-title");
export const proModalWork = document.querySelector("#list-subtitle");

export const modalCardTitle = document.querySelector("#card-title");
export const modalCardUrl = document.querySelector("#card-url");

export const addFormEl = document.querySelector("#add-card-popup");
export const editFormEl = document.querySelector("#edit-profile-popup");


