import Popup from "./Popup";

export default class PopupWithImages extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._modalImageElement = this._popupElement.querySelector(".modal__popup-image");
    this._modalCaption = this._popupElement.querySelector(".modal__popup-caption");
    // this._modalImageElement = this._imagePopup.querySelector(".modal__popup-image");
    // this._modalCaption = this._imagePopup.querySelector(".modal__popup-caption");
 }

//  open({url, title}) {
//     this._popupElement,
//     // const image = this._popupElement.querySelector(".modal__popup-image");
//     this._modalImageElement.src = url;
//     this._modalImageElement.alt =`image of${url}`;
//     this._modalCaption = title;
//     super.open();
//   }

open(data) {
  console.log(data)
  // this._popupElement,
  // const image = this._popupElement.querySelector(".modal__popup-image");
  this._modalImageElement.src = data.url;
  this._modalImageElement.alt =`image of${data.url}`;
  this._modalCaption.textContent = data.title;
  // this._modalImageElement.src = url;
  // this._modalImageElement.alt =`image of${url}`;
  // this._modalCaption.textContent = title;
  // this._modalCaption = data.title;
  super.open();
 }
}


