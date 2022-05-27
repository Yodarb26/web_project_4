import './index.css';

//import all classes
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from '../components/Section.js';
import PopupWithImages from '../components/PopupWithImages.js';
// import { initialCards,formValidatorConfig, selectors } from "../utils/constants.js";
import { initialCards, selectors } from "../utils/constants.js";

const CardSection =  new Section ({
  renderer: (data) => {
    // const cardEl = new Card(data).render();
    // const cardEl = new Card(item, selectors.cardTemplate);
    const cardEl = new Card(data, selectors.template);
    // const cardEl = new Card(items, selectors.cardTemplate);
    CardSection.addItem(cardEl.render());
    // cardSection.addItem(cardEl.render());
  }
  // selector:  selectors.cardSection,}
}, selectors.cardSection,

);
  //template == selector in Card.js
  // template: selectors.cardSection,
  // selectors.cardSection


// cardSection.initialCards;

// const addFormEl = formCard.querySelector(".form-name");
// const editFormEl = formProfile.querySelector(".form-name");

// formProfile.addEventListener("submit", editProfileRefreshForm);
// editFormBtn.addEventListener("click", () => {
//   openProfilePopup(profilePopup);
// });

// formCard.addEventListener("submit", editCardRefreshForm);
// addCardBtn.addEventListener("click", () => {
//   openPopup(addCardPopup);
// });

// const profilePopup = document.querySelector("#edit-profile-popup"); //.popup__form
// const addCardPopup = document.querySelector("#add-card-popup");

// const addFormValidator = new FormValidator(formValidatorConfig, addFormEl);
// addFormValidator.enableValidation(".form-name");

// const editFormValidator = new FormValidator(formValidatorConfig, editFormEl);
// editFormValidator.enableValidation(".form-name");


    CardSection.renderItems(initialCards);

