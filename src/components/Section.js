export default class Section {
  //const addCardPopup = document.querySelector("#add-card-popup");
  constructor({items, renderer}, addCardPopup){
      this._items = items;
      this._renderer = renderer;
      // this._addCardPopup = document.querySelector(`.${addCardPopup}`);
      this._addCardPopup = document.querySelector(items);
  }

  renderer(data) {
    items.forEach((data) => {
        this._renderer(data);
    });

  // renderer(items) {
  //   items.forEach((card) => {
  //       this._renderer(items);
  //   });
}

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

addItem(items) {
  // this.cardContainer.prepend(card); is card ==> element ?
    this._addCardPopup.append(items);
  }

}
// export default Section;

