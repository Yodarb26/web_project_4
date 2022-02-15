const editFormBtn = document.querySelector(".profile__edit-button");
const closeProfileButton = document.querySelector("#close-profile-popup");
const closeCardButton = document.querySelector("#close-card-popup");
const closeImagePreviewButton = document.querySelector("#close-image-popup");
const addCardBtn = document.querySelector(".profile__plus-button");
const cardCreateBtn = document.querySelector("#create-card-button");

const listTitle = document.querySelector(".profile__title");
const listSubtitle = document.querySelector(".profile__subtitle");

const openProfilePopup= document.querySelector("#edit-profile-popup");//.popup__form
const addCardPopup = document.querySelector("#add-card-popup");
const imagePopup = document.querySelector("#image-popup");

const cardTemplate = document.querySelector("#card-template");
const cardList = document.querySelector(".elements-grid__cards");
const cardLikeButtons = document.querySelector("#active-like-button");

const formProfile = document.querySelector("#edit-profile-popup");
const formCard = document.querySelector("#add-card-popup");

const titleInput = document.querySelector("#list-title");
const subtitleInput = document.querySelector("#list-subtitle");

const cardTitleInput = document.querySelector("#card-title");
const cardUrlInput = document.querySelector("#card-url");

const modalImageElement = imagePopup.querySelector(".modal__popup-image");
const modalCaption = imagePopup.querySelector(".modal__popup-caption");

function openPopup(popup) {
  popup.classList.add("modal_opened");
  popup.addEventListener('click', clickOutsideOverlay);
  document.addEventListener("keydown",pressEscKey);
}

function closePopup(popup) {
  popup.classList.remove("modal_opened");
  popup.removeEventListener("click", clickOutsideOverlay);
  document.removeEventListener("keydown",pressEscKey);
}

function openModalPopup(openProfilePopup) {
  titleInput.value = listTitle.textContent;
  subtitleInput.value = listSubtitle.textContent;
  openPopup(openProfilePopup);
}

function clickOutsideOverlay(e){
    if(e.target.classList.contains("modal")){
      closePopup(e.target);
    }
}

function pressEscKey(e){
  if(e.key === "Escape"){
    closePopup(document.querySelector(".modal_opened"));
  }
}

function editProfileRefreshForm(event) {
  event.preventDefault();
  listTitle.textContent = titleInput.value;
  listSubtitle.textContent = subtitleInput.value;
  closePopup(openProfilePopup);
}

function editCardRefreshForm(evt) {
  evt.preventDefault();
  const data = {
    title: cardTitleInput.value,
    url: cardUrlInput.value,
  };
  renderCard(data);
  evt.target.reset(data);
  closePopup(addCardPopup);
  resetForm(
    evt.target, {
    submitButtonSelector: ".form-name__save-button",
    inactiveButtonClass: "form-name__save-button_disabled",
    });
};

formProfile.addEventListener("submit", editProfileRefreshForm);
editFormBtn.addEventListener("click", () => {
  openModalPopup(openProfilePopup);
});

formCard.addEventListener("submit", editCardRefreshForm);
addCardBtn.addEventListener("click", () => {
  openModalPopup(addCardPopup);
});

closeProfileButton.addEventListener("click", () =>  closePopup(openProfilePopup));
closeCardButton.addEventListener("click", () =>  closePopup(addCardPopup));
closeImagePreviewButton.addEventListener("click", () =>  closePopup(imagePopup));

function createCard(data) {
  const card = cardTemplate.content.querySelector(".elements-grid__card").cloneNode(true);
  const imageElement = card.querySelector(".elements-grid__image");
  const titleElement = card.querySelector(".elements-grid__text");
  const deleteCard = card.querySelector(".elements-grid__delete-button");
  const cardLikeButton = card.querySelector(".elements-grid__icon");

  cardLikeButton.addEventListener("click", function (evt) {
    evt.target.classList.toggle("elements-grid__icon-active");
  });

  imageElement.src = data.url;
  imageElement.alt = data.alt;
  titleElement.textContent = data.title;

  deleteCard.addEventListener("click", () => {
    card.remove();
  });

  imageElement.addEventListener("click", () => {
    modalImageElement.src = data.url;
    modalCaption.textContent = data.title;
    modalImageElement.alt = data.alt;
    openModalPopup(imagePopup);
  });

  return card;
}

function addCardToPage(card) {
  cardList.prepend(card);
}

function renderCard(data) {
  addCardToPage(createCard(data));
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

