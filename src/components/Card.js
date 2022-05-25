import Popup from "./Popup";

import { openPopup, closePopup, clickOutsideOverlay, pressEscKey } from "./util.js";
import { imagePopup, modalImageElement, modalCaption } from "../pages/index.js";

export default class Card extends Popup {
  constructor(template, data) {
    this._template = template;
    this._data = data;
    this._title = data.title;
    this._url = data.url;
    this._element = null;
  }

  _getElement = () => {
    // this._element = this._template.content.querySelector(".elements-grid__card").cloneNode(true);
    return this._template.content.querySelector(".elements-grid__card").cloneNode(true);
  }

  _handleCardPreview = () => {
    modalImageElement.src = this._url;
    modalCaption.textContent = this._title;
    modalImageElement.alt =`image of${url}`;

    openPopup(imagePopup);
  };

  _handleLikeIcon = () => {
    this._cardLikeButton.classList
    .toggle("elements-grid__icon-active");
  };

  _handleDeleteCard = () => {
    this._element.remove();
    this.element = null;
  };

  _setEventListeners = () => {
    this._cardLikeButton.addEventListener("click", (evt) => {
      this._handleLikeIcon(evt);
    });
    this._deleteCard.addEventListener("click", (evt) => {
      this._handleDeleteCard(evt);
    });
    this._imageElement.addEventListener("click", (evt) => {
      this._handleCardPreview(evt);
    });
  };

  render = () => {
    this._element = this._getElement();
    this._imageElement = this._element.querySelector(".elements-grid__image");
    this._titleElement = this._element.querySelector(".elements-grid__text");
    this._imageElement.src = this._url;
    this._imageElement.alt = this._url;
    this._titleElement.textContent = this._title;
    this._deleteCard = this._element.querySelector(".elements-grid__delete-button");
    this._cardLikeButton = this._element.querySelector(".elements-grid__icon");
    this._setEventListeners();
    return this._element;
  };
}

// export default Card;