// import Popup from "./Popup";

export default class Section {
  // const addCardPopup = document.querySelector("#add-card-popup");
  // constructor({items, renderer}, template){
    constructor({items, renderer}, containerSelector){
      // super(popupSelector);
      this._items = items;
      this._renderer = renderer;
      this._element = document.querySelector(`${containerSelector}`);
  }

  renderItems(element) {
    element.forEach((data) => {
      this._renderer(data);
    });
  }

  addItem(element) {
    this._element.prepend(element);
  }
}

