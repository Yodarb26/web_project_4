// import Popup from "./Popup";

export default class Section {
  // const addCardPopup = document.querySelector("#add-card-popup");
  // constructor({items, renderer}, template){
    constructor({items, renderer}, containerSelector){
      // super(popupSelector);
      this._items = items;
      this._renderer = renderer;
      // this._containerSelector = document.querySelector(containerSelector);
      // this._containerSelector = document.querySelector(`${containerSelector}`);
      // const addCardPopup = document.querySelector("#add-card-popup");
      // this._addCardPopup = document.querySelector(`.${addCardPopup}`);
      // this._addCardPopup = document.querySelector(items);
      this._element = document.querySelector(`${containerSelector}`);
  }

  renderItems(element) {
    element.forEach((data) => {
      this._renderer(data);
    });
  }

  addItem(element) {
    this._element.prepend(element);
  // this._element.append(element);
  }
}

