const editFormBtn = document.querySelector(".profile__edit-button");
const listTitle = document.querySelector(".profile__title");
const listSubtitle = document.querySelector(".profile__subtitle");

const editProfileModal = document.querySelector("#edit-profile-popup");
const addCardModal = document.querySelector("#add-card-popup");
const imageModal = document.querySelector("#image-popup");
const closeProfileButton = document.querySelector("#close-profile-popup");
const closeCardButton = document.querySelector("#close-card-popup");
const closeImagePreviewButton = document.querySelector("#close-image-popup");

const addCardBtn = document.querySelector(".profile__plus-button");

const form = document.querySelector(".form-name");
const titleInput = document.querySelector("#list-title");
const subtitleInput = document.querySelector("#list-subtitle");

const cardUrl = document.querySelector("#card-title");
const cardTitle = document.querySelector("#card-url");



function openModal(editProfileModal){
  titleInput.value = listTitle.textContent;
  subtitleInput.value = listSubtitle.textContent;
  editProfileModal.classList.remove('modal_closed');
}

function closeModal() {
  editProfileModal.classList.add('modal_closed');
  addCardModal.classList.add('modal_closed');
  imageModal.classList.add('modal_closed');
    }

function editProfileRefreshForm(event) {
    event.preventDefault();
    listTitle.textContent = titleInput.value;
    listSubtitle.textContent = subtitleInput.value;
    closeModal(editProfileModal);
}


function editCardRefreshForm(evt) {
      evt.preventDefault();
      data.url = cardUrl.value;
      data.title = cardTitle.value;
      renderCard(addCardModal);
}

// function refreshForm(event) {
//   event.preventDefault();
//   listTitle.textContent = titleInput.value;
//   listSubtitle.textContent = subtitleInput.value;
//   closeModal();
// }

form.addEventListener("submit", editProfileRefreshForm);
editFormBtn.addEventListener("click", () => {
  openModal(editProfileModal)
});

form.addEventListener("submit", editCardRefreshForm);
addCardBtn.addEventListener("click", () => {
  openModal(addCardModal)
});


closeProfileButton.addEventListener("click", closeModal, false);
closeCardButton.addEventListener("click", closeModal, false);
closeImagePreviewButton.addEventListener("click", closeModal, false);

// closeBtns.forEach((closeBtn) => {
//   closeBtn.addEventListener("click", (event) => {
//     const popup = closeBtn.closest(".modal");
//     closeModal(popup);
//   });
// });



const cardTemplate = document.querySelector("#card-template");
const cardList = document.querySelector(".elements-grid__cards")


function createCard(data) {
  const card = cardTemplate.content.querySelector(".elements-grid__card").cloneNode(true);
  const imageElement = card.querySelector(".elements-grid__image");
  const titleElement = card.querySelector(".elements-grid__text");
  imageElement.src = data.url;
  titleElement.textContent = data.title;

  imageElement.addEventListener('click', () => {
    const modalImageElement = imageModal.querySelector('.modal__popup-image');
    modalImageElement.src = data.url;
    const modalCaption = imageModal.querySelector('.modal__popup-caption')
    modalCaption.textContent = data.title;
    openModal(imageModal);
  })
  return card;
}

function addCardToPage(card){
  cardList.prepend(card);
}

function renderCard(data){
  addCardToPage(createCard(data));
}

const initialCards = [

  {
    title: "Yosemite Valley",
    url: "https://code.s3.yandex.net/web-code/yosemite.jpg",
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
  }
]

initialCards.forEach((cardData) => {
  renderCard(cardData);
})