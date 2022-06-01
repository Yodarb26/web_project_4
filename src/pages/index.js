import './index.css';

//import all classes
import Card from "../components/Card";
import FormValidator from "../components/FormValidator";
// import Popup from '../components/Popup';
// import PopupWithImages from '../components/PopupWithImages';
// import PopupWithForm from '../components/PopupWithForm';
import Section from "../components/Section";
// import UserInfo from '../components/UserInfo';
import { initialCards, selectors } from "../utils/constants";

// function addCardToPage(card) {
//   cardList.prepend(card);
// }

// function renderCard(data) {
//   const card = new Card(cardTemplate, data);
//   addCardToPage(card.render(data));
// }

//Cards rendering
// initialCards.forEach((data) => {
//   renderCard(data, formCard);
// });
// initialCards.forEach(renderCard);
const cardDisplay = document.querySelector(selectors.cardTemplate);

const CardSection =  new Section ({
  renderer: (item) => {
    const cardEl = new Card(item, cardDisplay);
    CardSection.addItem(cardEl.render());
    // const cardEl = new Card(item, selectors.cardTemplate);
    // const cardEl = renderCard(data).render();
    // const cardEl = new Card(items, selectors.cardTemplate);
    // cardSection.addItem(cardEl.render());
  },
},
  // selector: selectors.cardSection,
  selectors.cardSection,
);

CardSection.renderItems(initialCards);

  // selector:  selectors.cardSection,}
// },"elements-grid__cards",
  //},
//);
  //template == selector in Card.js
  // template: selectors.cardSection,
  // selectors.cardSection


// cardSection.initialCards;




