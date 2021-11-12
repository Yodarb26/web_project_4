const editFormBtn = document.querySelector(".profile__edit-button");
const listTitle = document.querySelector(".profile__title");
const listSubtitle = document.querySelector(".profile__subtitle");

const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".modal__popup-btn");
const saveBtn = document.querySelector(".form-name__save-button");

const form = document.querySelector(".form-name");
const titleInput = document.querySelector("#list-title");
const subtitleInput = document.querySelector("#list-subtitle");

titleInput.value = listTitle.textContent;
subtitleInput.value = listSubtitle.textContent;

function toggleModal() {
    modal.classList.toggle("modal_closed");

    if(modal.classList.contains('modal_closed')) {
      modal.classList.remove('modal_closed');
    } else {
      modal.classList.add('modal_closed');
    }
}

function refreshForm(event) {
    event.preventDefault();
    listTitle.textContent = titleInput.value;
    listSubtitle.textContent = subtitleInput.value;
    toggleModal();
}

form.addEventListener("submit", refreshForm, false);
editFormBtn.addEventListener("click", toggleModal, false);
closeBtn.addEventListener("click", toggleModal, false);
saveBtn.addEventListener("click", refreshForm, false);



