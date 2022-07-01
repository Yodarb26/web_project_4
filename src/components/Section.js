export default class Section {
    constructor({ renderer }, containerSelector) {
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
