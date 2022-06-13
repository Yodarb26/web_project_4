import './index.css';

//import all classes
import Card from "../components/Card";
import FormValidator from "../components/FormValidator";
import PopupWithImages from '../components/PopupWithImages';
// import PopupWithForm from '../components/PopupWithForm';
import Section from "../components/Section";
// import UserInfo from '../components/UserInfo';
import { initialCards, selectors } from "../utils/constants";

// const image = this._popupElement.querySelector(".modal__popup-image");
const CardPreviewPopup = new PopupWithImages(selectors.previewPopup);

const cardDisplay = document.querySelector(selectors.cardTemplate);

const CardSection =  new Section ({
  renderer: (item) => {
    const cardEl = new Card({ data:item, handleCardPreview: (imgData) => {
          CardPreviewPopup.open(imgData);
    }
  }, cardDisplay);
    CardSection.addItem(cardEl.render());
  },
},
  selectors.cardSection,
);

CardSection.renderItems(initialCards);
CardPreviewPopup.setEventListeners();





