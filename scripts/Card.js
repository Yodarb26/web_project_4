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
  }

  _handlePop(imagePopup){
    this._template.addEventListener("click", () => {
      modalImageElement.src = data.url;
      modalCaption.textContent = data.title;
      modalImageElement.alt = data.alt;
      openProfilePopup(imagePopup);
    });
  }

  _handleLikeIcon(){
    this._cardLikeButton.classList.toggle("elements-grid__icon-active");
  }

  _handleDeleteCard(evt){
    evt.target.closest(".elements-grid__card").remove();
  }

  _setEventListeners(){
    this._cardLikeButton.addEventListener("click", (evt) => {this._handleLikeIcon(evt)});
    this._deleteCard.addEventListener("click", (evt) => {this._handleDeleteCard(evt)});
    this._handlePop(this._element);
  }

  render(){
    this._element = this._template.content.querySelector(".elements-grid__card").cloneNode(true);
    this._element.querySelector(".elements-grid__image").src = this._url;
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