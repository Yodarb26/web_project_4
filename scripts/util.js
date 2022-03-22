const titleInput = document.querySelector("#list-title");
const subtitleInput = document.querySelector("#list-subtitle");
const listTitle = document.querySelector(".profile__title");
const listSubtitle = document.querySelector(".profile__subtitle");

function editProfileRefreshForm(event) {
  const profilePopup= document.querySelector("#edit-profile-popup");
  event.preventDefault();
  listTitle.textContent = titleInput.value;
  listSubtitle.textContent = subtitleInput.value;
  closePopup(profilePopup);
}

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

function openProfilePopup(popup) {
  titleInput.value = listTitle.textContent;
  subtitleInput.value = listSubtitle.textContent;
  openPopup(popup);
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

export {titleInput, subtitleInput,listTitle,listSubtitle, editProfileRefreshForm, openPopup, closePopup, openProfilePopup, clickOutsideOverlay, pressEscKey};