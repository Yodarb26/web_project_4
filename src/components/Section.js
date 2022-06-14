// import Popup from "./Popup";

export default class Section {
    constructor({items, renderer}, containerSelector){
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

// // function renderCard(data) {
// //   const card = new Card(cardTemplate, data);
// //   addCardToPage(card.render(data));
// }