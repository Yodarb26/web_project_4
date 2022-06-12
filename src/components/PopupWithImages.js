import Popup from "./Popup";

export default class PopupWithImages extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._modalImageElement = this._popupElement.querySelector(".modal__popup-image");
    this._modalCaption = this._popupElement.querySelector(".modal__popup-caption");
 }


open(data) {
  this._modalImageElement.src = data.url;
  this._modalImageElement.alt =`image of${data.url}`;
  this._modalCaption.textContent = data.title;
  super.open();
 }
}


