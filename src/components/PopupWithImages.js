import Popup from "./Popup";

class PopupWithImages extends Popup {
  open({url, title}) {
    this._popupElement.querySelector(".modal__popup-caption").textContent = title;
    const image = this._popupElement.querySelector(".modal__popup-image");
    image.src = url;
    image.alt =`image of${title}`;
    super.open();
  }
}