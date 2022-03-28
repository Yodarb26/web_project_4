import Card from './Card.js';
import FormValidator from './FormValidator.js';
import {openPopup, closePopup, clickOutsideOverlay, pressEscKey} from './util.js';

const titleInput = document.querySelector("#list-title");
const subtitleInput = document.querySelector("#list-subtitle");
const listTitle = document.querySelector(".profile__title");
const listSubtitle = document.querySelector(".profile__subtitle");
const editFormBtn = document.querySelector(".profile__edit-button");
const closeProfileButton = document.querySelector("#close-profile-popup");
const closeCardButton = document.querySelector("#close-card-popup");
const closeImagePreviewButton = document.querySelector("#close-image-popup");
const addCardBtn = document.querySelector(".profile__plus-button");
const cardCreateBtn = document.querySelector("#create-card-button");

const profilePopup= document.querySelector("#edit-profile-popup");//.popup__form
const addCardPopup = document.querySelector("#add-card-popup");

const cardTemplate = document.querySelector("#card-template");
const cardList = document.querySelector(".elements-grid__cards");
const cardLikeButtons = document.querySelector("#active-like-button");

const formProfile = document.querySelector("#edit-profile-popup");
const formCard = document.querySelector("#add-card-popup");

const cardTitleInput = document.querySelector("#card-title");
const cardUrlInput = document.querySelector("#card-url");

// const imagePopup = document.querySelector("#image-popup");
// const modalImageElement = imagePopup.querySelector(".modal__popup-image");
// const modalCaption = imagePopup.querySelector(".modal__popup-caption");

function openProfilePopup(popup) {
  titleInput.value = listTitle.textContent;
  subtitleInput.value = listSubtitle.textContent;
  openPopup(popup);
}

function editProfileRefreshForm(event) {
  const profilePopup= document.querySelector("#edit-profile-popup");
  event.preventDefault();
  listTitle.textContent = titleInput.value;
  listSubtitle.textContent = subtitleInput.value;
  closePopup(profilePopup);
}

function editCardRefreshForm(evt) {
  evt.preventDefault();
  const data = {
    title: cardTitleInput.value,
    url: cardUrlInput.value,
  };

  renderCard(data);
  // evt.target.reset(data);
  addFormValidator.resetForm();
  closePopup(addCardPopup);
};

formProfile.addEventListener("submit", editProfileRefreshForm);
editFormBtn.addEventListener("click", () => {
  openProfilePopup(profilePopup);
});

formCard.addEventListener("submit", editCardRefreshForm);
addCardBtn.addEventListener("click", () => {
  openPopup(addCardPopup);
});

closeProfileButton.addEventListener("click", () =>  closePopup(profilePopup));
closeCardButton.addEventListener("click", () =>  closePopup(addCardPopup));
closeImagePreviewButton.addEventListener("click", () =>  closePopup(imagePopup));

function addCardToPage(card) {
  cardList.prepend(card);
}

function renderCard(data) {
  const card = new Card(cardTemplate, data);
  addCardToPage(card.render());
}

const initialCards = [
  {
    title: "Lake & Mountain",
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

initialCards.forEach(renderCard);

const addFormEl = formCard.querySelector(".form-name");
const editFormEl = formProfile.querySelector(".form-name");

const formValidatorConfig = {
    inputSelector: ".form-name__input",
    submitButtonSelector: ".form-name__save-button",
    inactiveButtonClass: "form-name__save-button_disabled",
    inputErrorClass: "form-name__modal-type_error",
    errorClass: "modal__popup__error_visible",
  }

  const addFormValidator =  new FormValidator(formValidatorConfig, addFormEl);
  addFormValidator.enableValidation();

  const editFormValidator =  new FormValidator(formValidatorConfig, editFormEl);
  editFormValidator.enableValidation();