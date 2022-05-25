import './index.css';


//import all classes
import Card from "../components/Card";
import FormValidator from "../components/FormValidator.js";
import Section from '../components/Section';
import PopupWithImages from '../components/PopupWithImages';
import { initialCards,formValidatorConfig, selectors } from "../utils/constants";


const cardSection =  new Section({
  renderer: (card) => {
    // const cardEl = new Card(card).render();
    const cardEl = new Card(card, selectors.cardTemplate);
    cardSection.addItem(cardEl.render());
  },
},
  //template == selector in Card.js
  // template: selectors.cardSection,
  selectors.cardSection,
);

cardSection.renderCard(initialCards);

// const profilePopup = document.querySelector("#edit-profile-popup"); //.popup__form
// const addCardPopup = document.querySelector("#add-card-popup");

// const addFormValidator = new FormValidator(formValidatorConfig, addFormEl);
// addFormValidator.enableValidation(".form-name");

// const editFormValidator = new FormValidator(formValidatorConfig, editFormEl);
// editFormValidator.enableValidation(".form-name");

// initialCards.forEach(renderCard);


