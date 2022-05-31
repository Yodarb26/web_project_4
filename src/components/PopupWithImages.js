import Popup from "./Popup";

export default class PopupWithImages extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._modalImageElement = this._imagePopup.querySelector(".modal__popup-image");
    this._modalCaption = this._imagePopup.querySelector(".modal__popup-caption");
 }

 open({url, title}) {
    const image = this._popupElement.querySelector(".modal__popup-image");
    this._modalImageElement.src = url;
    this._modalImageElement.alt =`image of${url}`;
    this._modalCaption = title;
    super.open();
  }
}
