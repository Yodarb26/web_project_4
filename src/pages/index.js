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
  addCardBtn,
  editFormBtn,
  proTitle,
  proSubTitle,
  proModalWork,
  proModalName,
  addFormEl,
  editFormEl,
  modalCardTitle,
  modalCardUrl,
  imagePopup,
  modalImageElement,
  modalCaption,
  // closeCardButton,
  // closeImagePreviewButton,
  // closeProfileButton,
  // imagePopup,
  // modalImageElement,
  // modalCaption,
} from "../utils/constants";

const formProfileDetail = new UserInfo({
  userName: proTitle,
  userDetail: proSubTitle,
});

const CardSection =  new Section ({
  // data: initialCards,
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

const CardPreviewPopup = new PopupWithImages(selectors.previewPopup);
const cardDisplay = document.querySelector(selectors.cardTemplate);

//Profile modal
const formProfileName = new PopupWithForm({
  formSubmit: ({userName, userDetail}) => {
    formProfileDetail.setUserInfo(userName, userDetail);
  }
},  "#edit-profile-popup");

//Card modal
//can't be a username +its detail when adding a card
const formProfileCard = new PopupWithForm({
  formSubmit: ({data, cardTemplate}) => {
  const cardEl = new Card(data, cardTemplate);
  CardSection.addCardToPage(cardEl.render(data));
    },
},  "#add-card-popup");

// const formProfileCard = new PopupWithForm({
//   formSubmit: (data) => {
//   const cardEl = new Card(data);
//   CardSection.addCardToPage(cardEl.render(data));
//     },
// },  "#add-card-popup");


formProfileName.setEventListeners();
formProfileCard.setEventListeners();
CardPreviewPopup.setEventListeners();
CardSection.renderItems(initialCards);


//add card button
addCardBtn.addEventListener('click', () => {
  modalCardTitle.value = modalImageElement.textContent;
  modalCardUrl.value = modalCaption.src;
  formProfileCard.open();
  // console.log(imagePopup);
  // console.log(modalImageElement);
  // console.log(modalCaption);
  // console.log(modalCardTitle);
  // console.log(formProfileCard);
  // addFormValidator.resetForm();
});

///profile edit button
editFormBtn.addEventListener('click', () => {
  formProfileName.open();
  const activeUser = formProfileDetail.getUserInfo();
  proModalName.value = activeUser.userProfileName;
  proModalWork.value = activeUser.userProfileDetail;
 //  editFormValidator.resetForm();
   });

  const addFormValidator = new FormValidator(formValidatorConfig, addFormEl);
  addFormValidator.enableValidation();
  const editFormValidator = new FormValidator(formValidatorConfig, editFormEl);
  editFormValidator.enableValidation();

