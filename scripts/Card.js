import {openPopup, closePopup, clickOutsideOverlay, pressEscKey} from './util.js';

const imagePopup = document.querySelector("#image-popup");
const modalImageElement = imagePopup.querySelector(".modal__popup-image");
const modalCaption = imagePopup.querySelector(".modal__popup-caption");

class Card{
  constructor(template, data){
    this._template = template;
    this._data = data;
    this._title =  data.title;
    this._url = data.url;
    this._element = null;
  }

  _handlePop = () => {
      modalImageElement.addEventListener("click", () => {
      modalImageElement.src = this._url;
      modalCaption.textContent = this._title;
      modalImageElement.alt = data.alt;
    });
  }

  _handleLikeIcon = () => {
    this._cardLikeButton.classList.toggle("elements-grid__icon-active");
  }

  // _handleDeleteCard(evt){
  _handleDeleteCard = () => {
    // evt.target.closest(".elements-grid__card").remove();
    this._element.remove();
  }

  _setEventListeners = () => {
    this._cardLikeButton.addEventListener("click", (evt) => {this._handleLikeIcon(evt)});
    this._deleteCard.addEventListener("click", (evt) => {this._handleDeleteCard(evt)});
    // this._imageElement.addEventListener("click", (evt) => {this._handleCardPreview(evt)});
    this._handlePop(this._template);
  }

  render = () => {
    this._element = this._template.content.querySelector(".elements-grid__card").cloneNode(true);
    this._element.querySelector(".elements-grid__image").src = this._url;
    this._element.querySelector(".elements-grid__image").alt = this._url;
    this._element.querySelector(".elements-grid__text").textContent =  this._title;

    // this._imageElement = this._element.querySelector(".elements-grid__image");
    // this._titleElement = this._element.querySelector(".elements-grid__text");
    this._deleteCard = this._element.querySelector(".elements-grid__delete-button");
    this._cardLikeButton = this._element.querySelector(".elements-grid__icon");
    this._setEventListeners(this._element);
    return this._element;
  }
}

export default Card;