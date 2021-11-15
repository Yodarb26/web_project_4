const editFormBtn = document.querySelector(".profile__edit-button");
const listTitle = document.querySelector(".profile__title");
const listSubtitle = document.querySelector(".profile__subtitle");

const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".modal__popup-btn");
const saveBtn = document.querySelector(".form-name__save-button");

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
    toggleModal();
}

form.addEventListener("submit", refreshForm, false);
editFormBtn.addEventListener("click", openModal, false);
closeBtn.addEventListener("click", closeModal, false);
saveBtn.addEventListener("click", refreshForm, false);



