

export default class Section {
  // const addCardPopup = document.querySelector("#add-card-popup");
  // constructor({items, renderer}, template){
    constructor({items, renderer}, containerSelector){
      this._items = items;
      this._renderer = renderer;
      // const addCardPopup = document.querySelector("#add-card-popup");
      // this._addCardPopup = document.querySelector(`.${addCardPopup}`);
      // this._addCardPopup = document.querySelector(items);
      this._element = document.querySelector(`${containerSelector}`);
  }

  renderItems(element) {
    // this._renderer = this._element(data);
    // this._items.forEach((data) => {
      element.forEach((data) => {
      this._renderer(data);
    });
  }

  // renderer(data) {
  //   items.forEach((data) => {
  //       this._renderer(data);
  //   });

  // renderer(items) {
  //   items.forEach((card) => {
  //       this._renderer(items);
  //   });

// //Cards rendering
// // initialCards.forEach((data) => {
// //   renderCard(data, formCard);
// // });
// initialCards.forEach(renderCard);

//   renderer(items) {
//     this.cardContainer.forEach((card) => {
//         this.renderer(this.items);
//         return card;
//     });
// }
// 	const card = new Card(data, cardSelector);
// };

// addItem(card) {
// // this.cardContainer.prepend(card); is card ==> element ?
//   this._addCardPopup.append(card);
// }

addItem(element){
  // this.cardContainer.prepend(card); is card ==> element ?
    // this._addCardPopup.append(items)
    this._element.prepend(element);
    // this._element.append(element);

  }
}
// export default Section;

