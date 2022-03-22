class Card{
  constructor(template, data){
    this._template = template;
    this._data = data;
    this._title =  data.title;
    this._url = data.url;
  }

  render(){
    this._element = this._template.content.querySelector(".elements-grid__card").cloneNode(true);
    this._element.querySelector(".elements-grid__image").src = this._url;
    this._element.querySelector(".elements-grid__text").textContent =  this._title;
    this._deleteCard = this._element.querySelector(".elements-grid__delete-button");
    this._cardLikeButton = this._element.querySelector(".elements-grid__icon");

    this._setEventListeners(this._element);

    return this._element;
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
  }

}

export default Card;