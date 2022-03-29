function openPopup(popup) {
  popup.classList.add("modal_opened");
  popup.addEventListener("mousedown", clickOutsideOverlay);
  document.addEventListener("keydown", pressEscKey);
}

function closePopup(popup) {
  popup.classList.remove("modal_opened");
  popup.removeEventListener("mousedown", clickOutsideOverlay);
  document.removeEventListener("keydown", pressEscKey);
}

function clickOutsideOverlay(e) {
  if (e.target.classList.contains("modal")) {
    closePopup(e.target);
  }
}

function pressEscKey(e) {
  if (e.key === "Escape") {
    closePopup(document.querySelector(".modal_opened"));
  }
}

export { openPopup, closePopup, clickOutsideOverlay, pressEscKey };