const editFormBtn = document.querySelector(".profile__edit-button");
const listTitle = document.querySelector(".profile__title");
const listSubtitle = document.querySelector(".profile__subtitle");

const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".modal__popup-btn");

const form = document.querySelector(".form-name");
const titleInput = document.querySelector("#list-title");
const subtitleInput = document.querySelector("#list-subtitle");

function openModal(){
  titleInput.value = listTitle.textContent;
  subtitleInput.value = listSubtitle.textContent;
  modal.classList.remove('modal_closed');
}

function closeModal() {
      modal.classList.add('modal_closed');
    }

function refreshForm(event) {
    event.preventDefault();
    listTitle.textContent = titleInput.value;
    listSubtitle.textContent = subtitleInput.value;
    closeModal();
}

form.addEventListener("submit", refreshForm, false);
editFormBtn.addEventListener("click", openModal, false);
closeBtn.addEventListener("click", closeModal, false);


const cardTemplate = document.querySelector("#card-template");
const cardList = document.querySelector(".elements-grid__cards")


function createCard(data) {
  const card = cardTemplate.content.querySelector(".elements-grid__card").cloneNode(true);
  const imageElement = card.querySelector(".elements-grid__image");
  const titleElement = card.querySelector(".elements-grid__text");
  imageElement.src = data.url;
  titleElement.textContent = data.title;
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