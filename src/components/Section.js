export default class Section {
  // constructor({ items, renderer }, containerSelector) {
    constructor({ renderer }, containerSelector) {

    // this._items = items;
    this._renderer = renderer;
    this._element = document.querySelector(`${containerSelector}`);
  }

  renderItems(itemsArrayData) {
    itemsArrayData.forEach((data) => {
      this._renderer(data);
    });
  }

  addItem(itemsArrayData) {
    this._element.prepend(itemsArrayData);
  }

}
