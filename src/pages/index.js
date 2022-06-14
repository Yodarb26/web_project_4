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

  imagePopup,
  modalImageElement,
  modalCaption,
} from "../utils/constants";

const pro = document.querySelector(".profile__title");
const sub = document.querySelector(".profile__subtitle");

const formProfileDetail = new UserInfo({userName:proTitle, userDetail: proSubTitle});

const formProfileName = new PopupWithForm({
  formSubmit: ({userName, userDetail}) => {
    formProfileDetail.setUserInfo(userName, userDetail);
  }
},  ".modal__popup");

formProfileName.setEventListeners();

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
///profile edit button
// editFormBtn.addEventListener('click', () => {console.log("profile edit button")})
editFormBtn.addEventListener('click', () => {
 formProfileName(profilePopup);
  });

//add card button
addCardBtn.addEventListener('click', () => {
  console.log("add card button")})

const addFormEl = formCard.querySelector(".form-name");
const editFormEl = formProfile.querySelector(".form-name");

const addFormValidator = new FormValidator(formValidatorConfig, addFormEl);
// addFormValidator.enableValidation(".form-name");
addFormValidator.enableValidation();
const editFormValidator = new FormValidator(formValidatorConfig, editFormEl);
// editFormValidator.enableValidation(".form-name");
editFormValidator.enableValidation();

