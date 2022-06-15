import './index.css';

//import all classes
import Card from "../components/Card";
import FormValidator from "../components/FormValidator";
import PopupWithImages from '../components/PopupWithImages';
import PopupWithForm from '../components/PopupWithForm';
import Section from "../components/Section";
import UserInfo from '../components/UserInfo';
import {
  initialCards,
  formValidatorConfig,
  selectors,
  profilePopup,
  addCardPopup,
  formProfile,
  formCard,
  addCardBtn,
  editFormBtn,
  closeCardButton,
  closeImagePreviewButton,
  closeProfileButton,
  proTitle,
  proSubTitle,
  addFormEl,
  editFormEl,
  imagePopup,
  modalImageElement,
  modalCaption,
} from "../utils/constants";

const formProfileDetail = new UserInfo({userName:proTitle, userDetail: proSubTitle});

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

//Profile modal
const formProfileName = new PopupWithForm({
  formSubmit: ({userName, userDetail}) => {
    formProfileDetail.setUserInfo(userName, userDetail);
  }
},  "#edit-profile-popup");
formProfileName.setEventListeners();

//Card modal
const formProfileCard = new PopupWithForm({
  formSubmit: ({userName, userDetail}) => {
    formProfileDetail.setUserInfo(userName, userDetail);
  }
},  "#add-card-popup");
formProfileCard.setEventListeners();

///profile edit button
editFormBtn.addEventListener('click', () => {
 formProfileName.open();
  });

//add card button
addCardBtn.addEventListener('click', () => {
  formProfileCard.open();
});

