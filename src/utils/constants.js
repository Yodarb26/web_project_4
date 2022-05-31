
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
  cardSection: '.elements-gris',//card list
  template: ".elements-grid__card",//card template
  // previewPopup: "popup_type_image",
}

// export const titleInput = document.querySelector("#list-title");
// export const subtitleInput = document.querySelector("#list-subtitle");
// export const cardTitleInput = document.querySelector("#card-title");
// export const cardUrlInput = document.querySelector("#card-url");

// export const modalImageElement = imagePopup.querySelector(".modal__popup-image");
// export const modalCaption = imagePopup.querySelector(".modal__popup-caption");
// export const editFormBtn = document.querySelector(".profile__edit-button");
// export const addCardBtn = document.querySelector(".profile__plus-button");

// // const listTitle = document.querySelector(".profile__title");
// // const listSubtitle = document.querySelector(".profile__subtitle");
// // const closeProfileButton = document.querySelector("#close-profile-popup");
// // const closeCardButton = document.querySelector("#close-card-popup");
// // const closeImagePreviewButton = document.querySelector("#close-image-popup");

// export const cardCreateBtn = document.querySelector("#create-card-button");

// export const profilePopup = document.querySelector("#edit-profile-popup"); //.popup__form
// export const addCardPopup = document.querySelector("#add-card-popup");

// export const formProfile = document.querySelector("#edit-profile-popup");
// export const formCard = document.querySelector("#add-card-popup");

// //adding class .form-name as a second argument of validator ?
// export const formProfile = document.querySelector("#edit-profile-popup .form-name");
// export const formCard = document.querySelector("#add-card-popup .form-name");
// export const imagePopup = document.querySelector("#image-popup");

