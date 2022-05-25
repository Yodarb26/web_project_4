export function openPopup(popup) {
  popup.classList.add("modal_opened");
  popup.addEventListener("mousedown", clickOutsideOverlay);
  document.addEventListener("keydown", pressEscKey);
}

export function closePopup(popup) {
  popup.classList.remove("modal_opened");
  popup.removeEventListener("mousedown", clickOutsideOverlay);
  document.removeEventListener("keydown", pressEscKey);
}

export function clickOutsideOverlay(e) {
  if (e.target.classList.contains("modal")) {
    closePopup(e.target);
  }
}

export function pressEscKey(e) {
  if (e.key === "Escape") {
    closePopup(document.querySelector(".modal_opened"));
  }
}

// export { openPopup, closePopup, clickOutsideOverlay, pressEscKey };

