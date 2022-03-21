class Card{
  constructor(template, data){
    this._template = template;
    this._data = data;
    this._title =  data.title;
    this._url = data.url;
  }

  render(){
    this._element = this._template.content.querySelector(".elements-grid__card").cloneNode(true);
    const imageElement = this._element.querySelector(".elements-grid__image");
    const titleElement = this._element.querySelector(".elements-grid__text");
    this._deleteCard = this._element.querySelector(".elements-grid__delete-button");
    this._cardLikeButton = this._element.querySelector(".elements-grid__icon");

    // this._cardLikeButton.addEventListener("click", function (evt) {
    //   evt.target.classList.toggle("elements-grid__icon-active");
    // });

    // this._cardLikeButton.addEventListener("click", (evt) => {this._handleLikeIcon(evt)});

    // this._deleteCard.addEventListener("click", (evt) => {this._handleDeletCard(evt)});

    imageElement.src = this._url;
    // imageElement.alt = this._data.alt;
    titleElement.textContent = this._title;

    imageElement.addEventListener("click", (modalImageElement, modalCaption) => {
      modalImageElement.src = this._url;
      modalCaption.textContent = this._title;
      // modalImageElement.alt = this._data.alt;
      openProfilePopup(imagePopup);
    });

    this._setEventListeners(this._element);
    // return card;
    return this._element;
  }

  _handleLikeIcon(){
    this._cardLikeButton.classList.toggle("elements-grid__icon-active");
  }

  _handleDeletCard(evt){
    evt.target.closest(".elements-grid__card").remove();
    // this._template.remove();
    // this._deleteCard.remove(this._element);
  }

  _setEventListeners(){
    this._cardLikeButton.addEventListener("click", (evt) => {this._handleLikeIcon(evt)});
    this._deleteCard.addEventListener("click", (evt) => {this._handleDeletCard(evt)});
  }


  // _cardLikeButton(evt){
  //   evt.target.classList.toggle("elements-grid__icon-active");
  // }

  // _deleteCard(evt){
  //   // this._template.remove();
  //   evt.target.card.remove();
  // }

  // _setEventListeners(){
  //   const deleteCard = this._template.querySelector(".elements-grid__delete-button");
  //   const cardLikeButton = this._template.querySelector(".elements-grid__icon");
  // }

}


export default Card;