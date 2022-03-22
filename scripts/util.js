
const titleInput = document.querySelector("#list-title");
const subtitleInput = document.querySelector("#list-subtitle");
const listTitle = document.querySelector(".profile__title");
const listSubtitle = document.querySelector(".profile__subtitle");

export function editProfileRefreshForm(event) {
  event.preventDefault();
  listTitle.textContent = titleInput.value;
  listSubtitle.textContent = subtitleInput.value;
  closePopup(profilePopup);
}

export function openPopup(popup) {
  popup.classList.add("modal_opened");
  popup.addEventListener('click', clickOutsideOverlay);
  document.addEventListener("keydown",pressEscKey);
}

export function closePopup(popup) {
  popup.classList.remove("modal_opened");
  popup.removeEventListener("click", clickOutsideOverlay);
  document.removeEventListener("keydown",pressEscKey);
}

export function openProfilePopup(popup) {
  titleInput.value = listTitle.textContent;
  subtitleInput.value = listSubtitle.textContent;
  openPopup(popup);
}

export function clickOutsideOverlay(e){
    if(e.target.classList.contains("modal")){
      closePopup(e.target);
    }
}

export function pressEscKey(e){
  if(e.key === "Escape"){
    closePopup(document.querySelector(".modal_opened"));
  }
}