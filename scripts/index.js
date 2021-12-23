const editFormBtn = document.querySelector(".profile__edit-button");
const closeProfileButton = document.querySelector("#close-profile-popup");
const closeCardButton = document.querySelector("#close-card-popup");
const closeImagePreviewButton = document.querySelector("#close-image-popup");
const addCardBtn = document.querySelector(".profile__plus-button");

const listTitle = document.querySelector(".profile__title");
const listSubtitle = document.querySelector(".profile__subtitle");

const editProfileModal = document.querySelector("#edit-profile-popup");
const addCardModal = document.querySelector("#add-card-popup");
const imageModal = document.querySelector("#image-popup");

const cardTemplate = document.querySelector("#card-template");
const cardList = document.querySelector(".elements-grid__cards");
const cardLikeButtons = document.querySelector("#active-like-button");

const formProfile = document.querySelector("#edit-profile-popup");
const formCard = document.querySelector("#add-card-popup");

const titleInput = document.querySelector("#list-title");
const subtitleInput = document.querySelector("#list-subtitle");

const cardTitleInput = document.querySelector("#card-title");
const cardUrlInput = document.querySelector("#card-url");

const cardCreateBtn = document.querySelector("#create-card-button");

function openModal(editProfileModal) {
  titleInput.value = listTitle.textContent;
  subtitleInput.value = listSubtitle.textContent;
  editProfileModal.classList.remove("modal_closed");
}

function closeModal() {
  editProfileModal.classList.add("modal_closed");
  addCardModal.classList.add("modal_closed");
  imageModal.classList.add("modal_closed");
}

function editProfileRefreshForm(event) {
  event.preventDefault();
  listTitle.textContent = titleInput.value;
  listSubtitle.textContent = subtitleInput.value;
  closeModal(editProfileModal);
}

function editCardRefreshForm(evt) {
  evt.preventDefault();
  const data = {
    title: cardTitleInput.value,
    url: cardUrlInput.value,
  };
  renderCard(data);
}

formProfile.addEventListener("submit", editProfileRefreshForm);
editFormBtn.addEventListener("click", () => {
  openModal(editProfileModal);
});

formCard.addEventListener("submit", editCardRefreshForm);
addCardBtn.addEventListener("click", () => {
  openModal(addCardModal);
});

closeProfileButton.addEventListener("click", closeModal, false);
closeCardButton.addEventListener("click", closeModal, false);
closeImagePreviewButton.addEventListener("click", closeModal, false);
cardCreateBtn.addEventListener("submit", closeModal, false);

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
  titleElement.textContent = data.title;

  deleteCard.addEventListener("click", () => {
    card.remove();
  });

  imageElement.addEventListener("click", () => {
    const modalImageElement = imageModal.querySelector(".modal__popup-image");
    modalImageElement.src = data.url;
    const modalCaption = imageModal.querySelector(".modal__popup-caption");
    modalCaption.textContent = data.title;
    openModal(imageModal);
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

initialCards.forEach((cardData) => {
  renderCard(cardData);
});
