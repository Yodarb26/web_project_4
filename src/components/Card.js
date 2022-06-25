  export default class Card {
    constructor(data, template) {
      this._data = data.data;
      this._title = data.data.title;
      this._url = data.data.url;
      this._element = null;
      this._handleCardPreview = data.handleCardPreview;
      this._template = template;
    }

    // Card template
    _getElement = () => {
      return this._template.content
        .querySelector(".elements-grid__card")
        .cloneNode(true);
    };

    //Card like handler/toggler
    _handleLikeIcon = () => {
      this._cardLikeButton.classList.toggle("elements-grid__icon-active");
    };

    //Card removal handler
    _handleDeleteCard = () => {
      this._element.remove();
      this.element = null;
    };

    //Event listeners
    _setEventListeners = () => {
      this._cardLikeButton.addEventListener("click", (evt) => {
        //card like event listener
        this._handleLikeIcon(evt);
      });
      this._deleteCard.addEventListener("click", (evt) => {
        //card delete event listener
        this._handleDeleteCard(evt);
      });
      this._imageElement.addEventListener("click", (evt) => {
        //card preview event listener
        this._handleCardPreview({ url: this._data.url, title: this._data.title });
      });
    };

    //Template displaying
    render = () => {
      this._element = this._getElement();
      this._imageElement = this._element.querySelector(".elements-grid__image");
      this._titleElement = this._element.querySelector(".elements-grid__text");
      this._deleteCard = this._element.querySelector(
        ".elements-grid__delete-button"
      );
      this._cardLikeButton = this._element.querySelector(".elements-grid__icon");
      this._imageElement.src = this._url;
      this._imageElement.alt = this._url;
      this._titleElement.textContent = this._title;
      this._setEventListeners();
      return this._element;
    };
  }