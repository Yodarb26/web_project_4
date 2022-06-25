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
  modalCardTitle,
  modalCardUrl,
  modalImageElement,
  modalCaption,
} from "../utils/constants";

const formProfileDetail = new UserInfo({
  userName: proTitle,
  userDetail: proSubTitle,
});

const CardSection = new Section(
  {
    data: initialCards,
    renderer: (item) => {
      const cardEl = new Card(
        {
          data: item,
          handleCardPreview: (imgData) => {
            CardPreviewPopup.open(imgData);
          },
        },
        cardDisplay
      );
      CardSection.addItem(cardEl.render());
    },
  },
  selectors.cardSection
);

const CardPreviewPopup = new PopupWithImages(selectors.previewPopup);
const cardDisplay = document.querySelector(selectors.cardTemplate);

//Profile modal
const formProfileName = new PopupWithForm(
  {
    formSubmit: ({ userName, userDetail }) => {
      formProfileDetail.setUserInfo(userName, userDetail);
    },
  },
  "#edit-profile-popup"
);

//Card modal
const formProfileCard = new PopupWithForm(
  {
    formSubmit: (data, cardTemplate) => {
      const cardEl = new Card(
        {
          data: data,
          handleCardPreview: (imgData) => {
            CardPreviewPopup.open(imgData);
          },
        },
        cardDisplay
      );
      CardSection.addItem(cardEl.render(data, cardTemplate));
    },
  },
  "#add-card-popup"
);

formProfileName.setEventListeners();
formProfileCard.setEventListeners();
CardPreviewPopup.setEventListeners();
CardSection.renderItems(initialCards);

//add card button
addCardBtn.addEventListener("click", () => {
  modalCardTitle.value = modalImageElement.textContent;
  modalCardUrl.value = modalCaption.src;
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

