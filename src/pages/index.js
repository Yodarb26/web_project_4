
import "./index.css";

//import all classes
import Card from "../components/Card";
import FormValidator from "../components/FormValidator";
import PopupWithImages from "../components/PopupWithImages";
import PopupWithForm from "../components/PopupWithForm";
import Section from "../components/Section";
import UserInfo from "../components/UserInfo";
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
} from "../utils/constants";

const formProfileDetail = new UserInfo({
  userName: proTitle,
  userDetail: proSubTitle,
});

function renderCard(data, cardTemplate) {
  const cardEl = new Card(
    {
      data,
      handleCardPreview: (imgData) => {
        cardPreviewPopup.open(imgData);
      },
    },
    cardDisplay
  );
  cardListSections.addItem(cardEl.render(data, cardTemplate));
}

const cardListSections = new Section(
  {
    renderer: (data) => {
      renderCard(data)
    },
  },
  selectors.cardSection
);

const cardPreviewPopup = new PopupWithImages(selectors.previewPopup);
const cardDisplay = document.querySelector(selectors.cardTemplate);

/////////////////////////////////////////////////////////////////////////Profile modal
const formProfileName = new PopupWithForm(
  {
    handleFormSubmit: ({userName, userDetail}) => {
      formProfileDetail.setUserInfo(userName, userDetail);
    },
  },
  "#edit-profile-popup"
);

///////////////////////////////////////////////////////////////////////////Card modal
const formProfileCard = new PopupWithForm(
  {
    handleFormSubmit: (data, cardTemplate) => {
      renderCard(data, cardTemplate);
    },
  },
  "#add-card-popup"
);

formProfileName.setEventListeners();
formProfileCard.setEventListeners();
cardPreviewPopup.setEventListeners();
cardListSections.renderItems(initialCards);

//add card button
addCardBtn.addEventListener("click", () => {
  formProfileCard.open();
  addFormValidator.resetForm();
});

///profile edit button
editFormBtn.addEventListener("click", () => {
  formProfileName.open();
  const activeUser = formProfileDetail.getUserInfo();
  proModalName.value = activeUser.userProfileName;
  proModalWork.value = activeUser.userProfileDetail;
  editFormValidator.resetForm();
});

const addFormValidator = new FormValidator(formValidatorConfig, addFormEl);
addFormValidator.enableValidation();
const editFormValidator = new FormValidator(formValidatorConfig, editFormEl);
editFormValidator.enableValidation();