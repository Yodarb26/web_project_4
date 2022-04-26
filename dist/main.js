/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Card.js":
/*!********************************!*\
  !*** ./src/components/Card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ "./src/components/util.js");
/* harmony import */ var _pages_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/index.js */ "./src/pages/index.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import { openPopup, closePopup, clickOutsideOverlay, pressEscKey } from "./util.js";
// import { imagePopup, modalImageElement, modalCaption } from "./index.js";



var Card = /*#__PURE__*/_createClass(function Card(template, data) {
  var _this = this;

  _classCallCheck(this, Card);

  _defineProperty(this, "_getElement", function () {
    // this._element = this._template.content.querySelector(".elements-grid__card").cloneNode(true);
    return _this._template.content.querySelector(".elements-grid__card").cloneNode(true);
  });

  _defineProperty(this, "_handleCardPreview", function () {
    _pages_index_js__WEBPACK_IMPORTED_MODULE_1__.modalImageElement.src = _this._url;
    _pages_index_js__WEBPACK_IMPORTED_MODULE_1__.modalCaption.textContent = _this._title;
    _pages_index_js__WEBPACK_IMPORTED_MODULE_1__.modalImageElement.alt = _this._data.alt;
    (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.openPopup)(_pages_index_js__WEBPACK_IMPORTED_MODULE_1__.imagePopup);
  });

  _defineProperty(this, "_handleLikeIcon", function () {
    _this._cardLikeButton.classList.toggle("elements-grid__icon-active");
  });

  _defineProperty(this, "_handleDeleteCard", function () {
    _this._element.remove();
  });

  _defineProperty(this, "_setEventListeners", function () {
    _this._cardLikeButton.addEventListener("click", function (evt) {
      _this._handleLikeIcon(evt);
    });

    _this._deleteCard.addEventListener("click", function (evt) {
      _this._handleDeleteCard(evt);
    });

    _this._imageElement.addEventListener("click", function (evt) {
      _this._handleCardPreview(evt);
    });
  });

  _defineProperty(this, "render", function () {
    _this._element = _this._getElement();
    _this._imageElement = _this._element.querySelector(".elements-grid__image");
    _this._titleElement = _this._element.querySelector(".elements-grid__text"); // const titleElement = this._element.querySelector(".elements-grid__text");
    // imageElement.src = this._url;

    _this._imageElement.src = _this._url;
    _this._imageElement.alt = _this._url; // imageElement.alt = this._url;
    // titleElement.textContent = this._title;

    _this._titleElement.textContent = _this._title; // this._imageElement = this._element.querySelector(".elements-grid__image");
    // this._titleElement = this._element.querySelector(".elements-grid__text");

    _this._deleteCard = _this._element.querySelector(".elements-grid__delete-button");
    _this._cardLikeButton = _this._element.querySelector(".elements-grid__icon");

    _this._setEventListeners();

    return _this._element;
  });

  this._template = template;
  this._data = data;
  this._title = data.title;
  this._url = data.url;
  this._element = null;
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);

/***/ }),

/***/ "./src/components/FormValidator.js":
/*!*****************************************!*\
  !*** ./src/components/FormValidator.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var FormValidator = /*#__PURE__*/function () {
  function FormValidator(settings, formEl) {
    _classCallCheck(this, FormValidator);

    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    this._formEl = formEl;
  }

  _createClass(FormValidator, [{
    key: "_isInvalidInput",
    value: function _isInvalidInput(inputEl) {
      return !inputEl.validity.valid;
    }
  }, {
    key: "_showError",
    value: function _showError(inputEl) {
      var errorEl = this._formEl.querySelector("#".concat(inputEl.id));

      errorEl.classList.add(this._errorClass);
      errorEl.textContent = inputEl.validationMessage;
      inputEl.classList.add(this._inputErrorClass);
    }
  }, {
    key: "_hideError",
    value: function _hideError(inputEl) {
      var errorEl = this._formEl.querySelector("#".concat(inputEl.id));

      errorEl.classList.remove(this._errorClass);
      errorEl.textContent = ' ';
      inputEl.classList.remove(this._inputErrorClass);
    }
  }, {
    key: "_toggleButton",
    value: function _toggleButton() {
      if (this._inputList.some(this._isInvalidInput)) {
        this._buttonEl.disabled = true;

        this._buttonEl.classList.add(this._inactiveButtonClass);
      } else {
        this._buttonEl.disabled = false;

        this._buttonEl.classList.remove(this._inactiveButtonClass);
      }
    }
  }, {
    key: "_checkInputValidity",
    value: function _checkInputValidity(inputEl) {
      var errorEl = this._formEl.querySelector("#".concat(inputEl.id, "-error"));

      if (this._isInvalidInput(inputEl)) {
        this._showError(errorEl);
      } else {
        this._hideError(errorEl);
      }
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this = this;

      this._inputList = Array.from(this._formEl.querySelectorAll(this._inputSelector));
      this._buttonEl = this._formEl.querySelector(this._submitButtonSelector);

      this._inputList.forEach(function (inputEl) {
        inputEl.addEventListener("input", function () {
          _this._checkInputValidity(inputEl);

          _this._toggleButton();
        });
      });
    }
  }, {
    key: "resetForm",
    value: function resetForm() {
      this._formEl.reset();

      this._toggleButton();
    }
  }, {
    key: "enableValidation",
    value: function enableValidation() {
      this._formEl.addEventListener("submit", function (e) {
        e.preventDefault();
      });

      this._setEventListeners();
    }
  }]);

  return FormValidator;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormValidator);

/***/ }),

/***/ "./src/components/util.js":
/*!********************************!*\
  !*** ./src/components/util.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clickOutsideOverlay": () => (/* binding */ clickOutsideOverlay),
/* harmony export */   "closePopup": () => (/* binding */ closePopup),
/* harmony export */   "openPopup": () => (/* binding */ openPopup),
/* harmony export */   "pressEscKey": () => (/* binding */ pressEscKey)
/* harmony export */ });
function openPopup(popup) {
  popup.classList.add("modal_opened");
  popup.addEventListener("mousedown", clickOutsideOverlay);
  document.addEventListener("keydown", pressEscKey);
}

function closePopup(popup) {
  popup.classList.remove("modal_opened");
  popup.removeEventListener("mousedown", clickOutsideOverlay);
  document.removeEventListener("keydown", pressEscKey);
}

function clickOutsideOverlay(e) {
  if (e.target.classList.contains("modal")) {
    closePopup(e.target);
  }
}

function pressEscKey(e) {
  if (e.key === "Escape") {
    closePopup(document.querySelector(".modal_opened"));
  }
}



/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "imagePopup": () => (/* binding */ imagePopup),
/* harmony export */   "modalCaption": () => (/* binding */ modalCaption),
/* harmony export */   "modalImageElement": () => (/* binding */ modalImageElement)
/* harmony export */ });
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/pages/index.css");
/* harmony import */ var _components_Card_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Card.js */ "./src/components/Card.js");
/* harmony import */ var _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/FormValidator.js */ "./src/components/FormValidator.js");
/* harmony import */ var _components_util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/util.js */ "./src/components/util.js");
// import Card from "./Card.js";
// import FormValidator from "./FormValidator.js";
// import { openPopup, closePopup, clickOutsideOverlay, pressEscKey } from "./util.js";




var titleInput = document.querySelector("#list-title");
var subtitleInput = document.querySelector("#list-subtitle");
var listTitle = document.querySelector(".profile__title");
var listSubtitle = document.querySelector(".profile__subtitle");
var editFormBtn = document.querySelector(".profile__edit-button");
var closeProfileButton = document.querySelector("#close-profile-popup");
var closeCardButton = document.querySelector("#close-card-popup");
var closeImagePreviewButton = document.querySelector("#close-image-popup");
var addCardBtn = document.querySelector(".profile__plus-button");
var cardCreateBtn = document.querySelector("#create-card-button");
var profilePopup = document.querySelector("#edit-profile-popup"); //.popup__form

var addCardPopup = document.querySelector("#add-card-popup");
var cardTemplate = document.querySelector("#card-template");
var cardList = document.querySelector(".elements-grid__cards");
var cardLikeButtons = document.querySelector("#active-like-button");
var formProfile = document.querySelector("#edit-profile-popup");
var formCard = document.querySelector("#add-card-popup"); //adding class .form-name as a second argument of validator ?
// const formProfile = document.querySelector("#edit-profile-popup .form-name");
// const formCard = document.querySelector("#add-card-popup .form-name");

var cardTitleInput = document.querySelector("#card-title");
var cardUrlInput = document.querySelector("#card-url");
var imagePopup = document.querySelector("#image-popup");
var modalImageElement = imagePopup.querySelector(".modal__popup-image");
var modalCaption = imagePopup.querySelector(".modal__popup-caption");

function openProfilePopup(popup) {
  titleInput.value = listTitle.textContent;
  subtitleInput.value = listSubtitle.textContent;
  (0,_components_util_js__WEBPACK_IMPORTED_MODULE_3__.openPopup)(popup);
}

function editProfileRefreshForm(event) {
  var profilePopup = document.querySelector("#edit-profile-popup");
  event.preventDefault();
  listTitle.textContent = titleInput.value;
  listSubtitle.textContent = subtitleInput.value;
  (0,_components_util_js__WEBPACK_IMPORTED_MODULE_3__.closePopup)(profilePopup);
}

function editCardRefreshForm(evt) {
  evt.preventDefault();
  var data = {
    title: cardTitleInput.value,
    url: cardUrlInput.value
  };
  renderCard(data);
  addFormValidator.resetForm();
  editFormValidator.resetForm();
  (0,_components_util_js__WEBPACK_IMPORTED_MODULE_3__.closePopup)(addCardPopup);
}

formProfile.addEventListener("submit", editProfileRefreshForm);
editFormBtn.addEventListener("click", function () {
  openProfilePopup(profilePopup);
});
formCard.addEventListener("submit", editCardRefreshForm);
addCardBtn.addEventListener("click", function () {
  (0,_components_util_js__WEBPACK_IMPORTED_MODULE_3__.openPopup)(addCardPopup);
});
closeProfileButton.addEventListener("click", function () {
  return (0,_components_util_js__WEBPACK_IMPORTED_MODULE_3__.closePopup)(profilePopup);
});
closeCardButton.addEventListener("click", function () {
  return (0,_components_util_js__WEBPACK_IMPORTED_MODULE_3__.closePopup)(addCardPopup);
});
closeImagePreviewButton.addEventListener("click", function () {
  return (0,_components_util_js__WEBPACK_IMPORTED_MODULE_3__.closePopup)(imagePopup);
});

function addCardToPage(card) {
  cardList.prepend(card);
}

function renderCard(data) {
  var card = new _components_Card_js__WEBPACK_IMPORTED_MODULE_1__["default"](cardTemplate, data);
  addCardToPage(card.render(data));
}

var initialCards = [{
  title: "Lake & Mountain",
  url: "https://images.unsplash.com/photo-1638802422633-694088680359?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
}, {
  title: "Lake Louise",
  url: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
}, {
  title: "Bald Mountains",
  url: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
}, {
  title: "Latemar",
  url: "https://code.s3.yandex.net/web-code/latemar.jpg"
}, {
  title: "Vanoise National Park",
  url: "https://code.s3.yandex.net/web-code/vanoise.jpg"
}, {
  title: "Lago di braies",
  url: "https://code.s3.yandex.net/web-code/lago.jpg"
}]; //Cards rendering
// initialCards.forEach((data) => {
//   renderCard(data, formCard);
// });

initialCards.forEach(renderCard); // Validators

var addFormEl = formCard.querySelector(".form-name");
var editFormEl = formProfile.querySelector(".form-name");
var formValidatorConfig = {
  inputSelector: ".form-name__input",
  submitButtonSelector: ".form-name__save-button",
  inactiveButtonClass: "form-name__save-button_disabled",
  inputErrorClass: "form-name__modal-type_error",
  errorClass: "modal__popup__error_visible"
};
var addFormValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__["default"](formValidatorConfig, addFormEl);
addFormValidator.enableValidation(".form-name");
var editFormValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__["default"](formValidatorConfig, editFormEl);
editFormValidator.enableValidation(".form-name");

/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/pages/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2s6Ly9zcHJpbnQtOC8uL3NyYy9jb21wb25lbnRzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vc3ByaW50LTgvLi9zcmMvY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzIiwid2VicGFjazovL3NwcmludC04Ly4vc3JjL2NvbXBvbmVudHMvdXRpbC5qcyIsIndlYnBhY2s6Ly9zcHJpbnQtOC8uL3NyYy9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9zcHJpbnQtOC8uL3NyYy9wYWdlcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vc3ByaW50LTgvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3ByaW50LTgvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NwcmludC04L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc3ByaW50LTgvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zcHJpbnQtOC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3NwcmludC04L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9zcHJpbnQtOC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgb3BlblBvcHVwLCBjbG9zZVBvcHVwLCBjbGlja091dHNpZGVPdmVybGF5LCBwcmVzc0VzY0tleSB9IGZyb20gXCIuL3V0aWwuanNcIjtcbi8vIGltcG9ydCB7IGltYWdlUG9wdXAsIG1vZGFsSW1hZ2VFbGVtZW50LCBtb2RhbENhcHRpb24gfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuXG5pbXBvcnQgeyBvcGVuUG9wdXAsIGNsb3NlUG9wdXAsIGNsaWNrT3V0c2lkZU92ZXJsYXksIHByZXNzRXNjS2V5IH0gZnJvbSBcIi4vdXRpbC5qc1wiO1xuaW1wb3J0IHsgaW1hZ2VQb3B1cCwgbW9kYWxJbWFnZUVsZW1lbnQsIG1vZGFsQ2FwdGlvbiB9IGZyb20gXCIuLi9wYWdlcy9pbmRleC5qc1wiO1xuXG5jbGFzcyBDYXJkIHtcbiAgY29uc3RydWN0b3IodGVtcGxhdGUsIGRhdGEpIHtcbiAgICB0aGlzLl90ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuICAgIHRoaXMuX3RpdGxlID0gZGF0YS50aXRsZTtcbiAgICB0aGlzLl91cmwgPSBkYXRhLnVybDtcbiAgICB0aGlzLl9lbGVtZW50ID0gbnVsbDtcbiAgfVxuXG4gIF9nZXRFbGVtZW50ID0gKCkgPT4ge1xuICAgIC8vIHRoaXMuX2VsZW1lbnQgPSB0aGlzLl90ZW1wbGF0ZS5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWxlbWVudHMtZ3JpZF9fY2FyZFwiKS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgcmV0dXJuIHRoaXMuX3RlbXBsYXRlLmNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5lbGVtZW50cy1ncmlkX19jYXJkXCIpLmNsb25lTm9kZSh0cnVlKTtcbiAgfVxuXG4gIF9oYW5kbGVDYXJkUHJldmlldyA9ICgpID0+IHtcbiAgICBtb2RhbEltYWdlRWxlbWVudC5zcmMgPSB0aGlzLl91cmw7XG4gICAgbW9kYWxDYXB0aW9uLnRleHRDb250ZW50ID0gdGhpcy5fdGl0bGU7XG4gICAgbW9kYWxJbWFnZUVsZW1lbnQuYWx0ID0gdGhpcy5fZGF0YS5hbHQ7XG4gICAgb3BlblBvcHVwKGltYWdlUG9wdXApO1xuICB9O1xuXG4gIF9oYW5kbGVMaWtlSWNvbiA9ICgpID0+IHtcbiAgICB0aGlzLl9jYXJkTGlrZUJ1dHRvbi5jbGFzc0xpc3RcbiAgICAudG9nZ2xlKFwiZWxlbWVudHMtZ3JpZF9faWNvbi1hY3RpdmVcIik7XG4gIH07XG5cbiAgX2hhbmRsZURlbGV0ZUNhcmQgPSAoKSA9PiB7XG4gICAgdGhpcy5fZWxlbWVudFxuICAgIC5yZW1vdmUoKTtcbiAgfTtcblxuICBfc2V0RXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgdGhpcy5fY2FyZExpa2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldnQpID0+IHtcbiAgICAgIHRoaXMuX2hhbmRsZUxpa2VJY29uKGV2dCk7XG4gICAgfSk7XG4gICAgdGhpcy5fZGVsZXRlQ2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2dCkgPT4ge1xuICAgICAgdGhpcy5faGFuZGxlRGVsZXRlQ2FyZChldnQpO1xuICAgIH0pO1xuICAgIHRoaXMuX2ltYWdlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2dCkgPT4ge1xuICAgICAgdGhpcy5faGFuZGxlQ2FyZFByZXZpZXcoZXZ0KTtcbiAgICB9KTtcbiAgfTtcblxuICByZW5kZXIgPSAoKSA9PiB7XG4gICAgdGhpcy5fZWxlbWVudCA9IHRoaXMuX2dldEVsZW1lbnQoKTtcbiAgICB0aGlzLl9pbWFnZUVsZW1lbnQgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWxlbWVudHMtZ3JpZF9faW1hZ2VcIik7XG4gICAgdGhpcy5fdGl0bGVFbGVtZW50ID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRzLWdyaWRfX3RleHRcIik7XG4gICAgLy8gY29uc3QgdGl0bGVFbGVtZW50ID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRzLWdyaWRfX3RleHRcIik7XG4gICAgLy8gaW1hZ2VFbGVtZW50LnNyYyA9IHRoaXMuX3VybDtcbiAgICB0aGlzLl9pbWFnZUVsZW1lbnQuc3JjID0gdGhpcy5fdXJsO1xuICAgIHRoaXMuX2ltYWdlRWxlbWVudC5hbHQgPSB0aGlzLl91cmw7XG4gICAgLy8gaW1hZ2VFbGVtZW50LmFsdCA9IHRoaXMuX3VybDtcbiAgICAvLyB0aXRsZUVsZW1lbnQudGV4dENvbnRlbnQgPSB0aGlzLl90aXRsZTtcbiAgICB0aGlzLl90aXRsZUVsZW1lbnQudGV4dENvbnRlbnQgPSB0aGlzLl90aXRsZTtcbiAgICAvLyB0aGlzLl9pbWFnZUVsZW1lbnQgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWxlbWVudHMtZ3JpZF9faW1hZ2VcIik7XG4gICAgLy8gdGhpcy5fdGl0bGVFbGVtZW50ID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRzLWdyaWRfX3RleHRcIik7XG4gICAgdGhpcy5fZGVsZXRlQ2FyZCA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbGVtZW50cy1ncmlkX19kZWxldGUtYnV0dG9uXCIpO1xuICAgIHRoaXMuX2NhcmRMaWtlQnV0dG9uID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRzLWdyaWRfX2ljb25cIik7XG4gICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudDtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDsiLCJjbGFzcyBGb3JtVmFsaWRhdG9yIHtcbiAgY29uc3RydWN0b3Ioc2V0dGluZ3MsIGZvcm1FbCkge1xuICAgIHRoaXMuX2lucHV0U2VsZWN0b3IgPSBzZXR0aW5ncy5pbnB1dFNlbGVjdG9yO1xuICAgIHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yID0gc2V0dGluZ3Muc3VibWl0QnV0dG9uU2VsZWN0b3I7XG4gICAgdGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyA9IHNldHRpbmdzLmluYWN0aXZlQnV0dG9uQ2xhc3M7XG4gICAgdGhpcy5faW5wdXRFcnJvckNsYXNzID0gc2V0dGluZ3MuaW5wdXRFcnJvckNsYXNzO1xuICAgIHRoaXMuX2Vycm9yQ2xhc3MgPSBzZXR0aW5ncy5lcnJvckNsYXNzO1xuICAgIHRoaXMuX2Zvcm1FbCA9IGZvcm1FbDtcbiAgfVxuXG4gIF9pc0ludmFsaWRJbnB1dChpbnB1dEVsKSB7XG4gICAgcmV0dXJuICFpbnB1dEVsLnZhbGlkaXR5LnZhbGlkO1xuICB9XG5cbiAgX3Nob3dFcnJvcihpbnB1dEVsKSB7XG4gICAgY29uc3QgZXJyb3JFbCA9IHRoaXMuX2Zvcm1FbC5xdWVyeVNlbGVjdG9yKGAjJHtpbnB1dEVsLmlkfWApO1xuICAgIGVycm9yRWwuY2xhc3NMaXN0LmFkZCh0aGlzLl9lcnJvckNsYXNzKTtcbiAgICBlcnJvckVsLnRleHRDb250ZW50ID0gaW5wdXRFbC52YWxpZGF0aW9uTWVzc2FnZTtcbiAgICBpbnB1dEVsLmNsYXNzTGlzdC5hZGQodGhpcy5faW5wdXRFcnJvckNsYXNzKTtcbiAgfVxuXG4gIF9oaWRlRXJyb3IoaW5wdXRFbCkge1xuICAgIGNvbnN0IGVycm9yRWwgPSB0aGlzLl9mb3JtRWwucXVlcnlTZWxlY3RvcihgIyR7aW5wdXRFbC5pZH1gKTtcbiAgICBlcnJvckVsLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fZXJyb3JDbGFzcyk7XG4gICAgZXJyb3JFbC50ZXh0Q29udGVudCA9ICcgJztcbiAgICBpbnB1dEVsLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5faW5wdXRFcnJvckNsYXNzKTtcbiAgfVxuXG4gIF90b2dnbGVCdXR0b24oKSB7XG4gICAgaWYgKHRoaXMuX2lucHV0TGlzdC5zb21lKHRoaXMuX2lzSW52YWxpZElucHV0KSkge1xuICAgICAgdGhpcy5fYnV0dG9uRWwuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgdGhpcy5fYnV0dG9uRWwuY2xhc3NMaXN0XG4gICAgICAuYWRkKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9idXR0b25FbC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5fYnV0dG9uRWwuY2xhc3NMaXN0XG4gICAgICAucmVtb3ZlKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIF9jaGVja0lucHV0VmFsaWRpdHkoaW5wdXRFbCkge1xuICAgIGNvbnN0IGVycm9yRWwgPSB0aGlzLl9mb3JtRWwucXVlcnlTZWxlY3RvcihcbiAgICAgIGAjJHtpbnB1dEVsLmlkfS1lcnJvcmApO1xuICAgIGlmICh0aGlzLl9pc0ludmFsaWRJbnB1dChpbnB1dEVsKSkge1xuICAgICAgdGhpcy5fc2hvd0Vycm9yKGVycm9yRWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9oaWRlRXJyb3IoZXJyb3JFbCk7XG4gICAgfVxuICB9XG5cbiAgX3NldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHRoaXMuX2lucHV0TGlzdCA9IEFycmF5LmZyb20odGhpcy5fZm9ybUVsLnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5faW5wdXRTZWxlY3RvcikpO1xuICAgIHRoaXMuX2J1dHRvbkVsID0gdGhpcy5fZm9ybUVsLnF1ZXJ5U2VsZWN0b3IodGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IpO1xuXG4gICAgdGhpcy5faW5wdXRMaXN0LmZvckVhY2goKGlucHV0RWwpID0+IHtcbiAgICAgIGlucHV0RWwuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcbiAgICAgICAgdGhpcy5fY2hlY2tJbnB1dFZhbGlkaXR5KGlucHV0RWwpO1xuICAgICAgICB0aGlzLl90b2dnbGVCdXR0b24oKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmVzZXRGb3JtKCkge1xuICAgIHRoaXMuX2Zvcm1FbC5yZXNldCgpO1xuICAgIHRoaXMuX3RvZ2dsZUJ1dHRvbigpO1xuICB9XG5cbiAgZW5hYmxlVmFsaWRhdGlvbigpIHtcbiAgICB0aGlzLl9mb3JtRWwuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xuICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybVZhbGlkYXRvcjtcbiIsImZ1bmN0aW9uIG9wZW5Qb3B1cChwb3B1cCkge1xuICBwb3B1cC5jbGFzc0xpc3QuYWRkKFwibW9kYWxfb3BlbmVkXCIpO1xuICBwb3B1cC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGNsaWNrT3V0c2lkZU92ZXJsYXkpO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBwcmVzc0VzY0tleSk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlUG9wdXAocG9wdXApIHtcbiAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcIm1vZGFsX29wZW5lZFwiKTtcbiAgcG9wdXAucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBjbGlja091dHNpZGVPdmVybGF5KTtcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgcHJlc3NFc2NLZXkpO1xufVxuXG5mdW5jdGlvbiBjbGlja091dHNpZGVPdmVybGF5KGUpIHtcbiAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIm1vZGFsXCIpKSB7XG4gICAgY2xvc2VQb3B1cChlLnRhcmdldCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlc3NFc2NLZXkoZSkge1xuICBpZiAoZS5rZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICBjbG9zZVBvcHVwKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfb3BlbmVkXCIpKTtcbiAgfVxufVxuXG5leHBvcnQgeyBvcGVuUG9wdXAsIGNsb3NlUG9wdXAsIGNsaWNrT3V0c2lkZU92ZXJsYXksIHByZXNzRXNjS2V5IH07IiwiLy8gaW1wb3J0IENhcmQgZnJvbSBcIi4vQ2FyZC5qc1wiO1xuLy8gaW1wb3J0IEZvcm1WYWxpZGF0b3IgZnJvbSBcIi4vRm9ybVZhbGlkYXRvci5qc1wiO1xuLy8gaW1wb3J0IHsgb3BlblBvcHVwLCBjbG9zZVBvcHVwLCBjbGlja091dHNpZGVPdmVybGF5LCBwcmVzc0VzY0tleSB9IGZyb20gXCIuL3V0aWwuanNcIjtcbmltcG9ydCAnLi9pbmRleC5jc3MnO1xuXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkLmpzXCI7XG5pbXBvcnQgRm9ybVZhbGlkYXRvciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzXCI7XG5pbXBvcnQgeyBvcGVuUG9wdXAsIGNsb3NlUG9wdXAsIGNsaWNrT3V0c2lkZU92ZXJsYXksIHByZXNzRXNjS2V5IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvdXRpbC5qc1wiO1xuXG5jb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsaXN0LXRpdGxlXCIpO1xuY29uc3Qgc3VidGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbGlzdC1zdWJ0aXRsZVwiKTtcbmNvbnN0IGxpc3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fdGl0bGVcIik7XG5jb25zdCBsaXN0U3VidGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX3N1YnRpdGxlXCIpO1xuY29uc3QgZWRpdEZvcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2VkaXQtYnV0dG9uXCIpO1xuY29uc3QgY2xvc2VQcm9maWxlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbG9zZS1wcm9maWxlLXBvcHVwXCIpO1xuY29uc3QgY2xvc2VDYXJkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbG9zZS1jYXJkLXBvcHVwXCIpO1xuY29uc3QgY2xvc2VJbWFnZVByZXZpZXdCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nsb3NlLWltYWdlLXBvcHVwXCIpO1xuY29uc3QgYWRkQ2FyZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fcGx1cy1idXR0b25cIik7XG5jb25zdCBjYXJkQ3JlYXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjcmVhdGUtY2FyZC1idXR0b25cIik7XG5cbmNvbnN0IHByb2ZpbGVQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdC1wcm9maWxlLXBvcHVwXCIpOyAvLy5wb3B1cF9fZm9ybVxuY29uc3QgYWRkQ2FyZFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtY2FyZC1wb3B1cFwiKTtcblxuY29uc3QgY2FyZFRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYXJkLXRlbXBsYXRlXCIpO1xuY29uc3QgY2FyZExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRzLWdyaWRfX2NhcmRzXCIpO1xuY29uc3QgY2FyZExpa2VCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhY3RpdmUtbGlrZS1idXR0b25cIik7XG5cbmNvbnN0IGZvcm1Qcm9maWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0LXByb2ZpbGUtcG9wdXBcIik7XG5jb25zdCBmb3JtQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLWNhcmQtcG9wdXBcIik7XG5cbi8vYWRkaW5nIGNsYXNzIC5mb3JtLW5hbWUgYXMgYSBzZWNvbmQgYXJndW1lbnQgb2YgdmFsaWRhdG9yID9cbi8vIGNvbnN0IGZvcm1Qcm9maWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0LXByb2ZpbGUtcG9wdXAgLmZvcm0tbmFtZVwiKTtcbi8vIGNvbnN0IGZvcm1DYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtY2FyZC1wb3B1cCAuZm9ybS1uYW1lXCIpO1xuXG5jb25zdCBjYXJkVGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FyZC10aXRsZVwiKTtcbmNvbnN0IGNhcmRVcmxJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FyZC11cmxcIik7XG5cbmV4cG9ydCBjb25zdCBpbWFnZVBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbWFnZS1wb3B1cFwiKTtcbmV4cG9ydCBjb25zdCBtb2RhbEltYWdlRWxlbWVudCA9IGltYWdlUG9wdXAucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fcG9wdXAtaW1hZ2VcIik7XG5leHBvcnQgY29uc3QgbW9kYWxDYXB0aW9uID0gaW1hZ2VQb3B1cC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19wb3B1cC1jYXB0aW9uXCIpO1xuXG5mdW5jdGlvbiBvcGVuUHJvZmlsZVBvcHVwKHBvcHVwKSB7XG4gIHRpdGxlSW5wdXQudmFsdWUgPSBsaXN0VGl0bGUudGV4dENvbnRlbnQ7XG4gIHN1YnRpdGxlSW5wdXQudmFsdWUgPSBsaXN0U3VidGl0bGUudGV4dENvbnRlbnQ7XG4gIG9wZW5Qb3B1cChwb3B1cCk7XG59XG5cbmZ1bmN0aW9uIGVkaXRQcm9maWxlUmVmcmVzaEZvcm0oZXZlbnQpIHtcbiAgY29uc3QgcHJvZmlsZVBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0LXByb2ZpbGUtcG9wdXBcIik7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGxpc3RUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlSW5wdXQudmFsdWU7XG4gIGxpc3RTdWJ0aXRsZS50ZXh0Q29udGVudCA9IHN1YnRpdGxlSW5wdXQudmFsdWU7XG4gIGNsb3NlUG9wdXAocHJvZmlsZVBvcHVwKTtcbn1cblxuZnVuY3Rpb24gZWRpdENhcmRSZWZyZXNoRm9ybShldnQpIHtcbiAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IGRhdGEgPSB7XG4gICAgdGl0bGU6IGNhcmRUaXRsZUlucHV0LnZhbHVlLFxuICAgIHVybDogY2FyZFVybElucHV0LnZhbHVlLFxuICB9O1xuXG4gIHJlbmRlckNhcmQoZGF0YSk7XG4gIGFkZEZvcm1WYWxpZGF0b3IucmVzZXRGb3JtKCk7XG4gIGVkaXRGb3JtVmFsaWRhdG9yLnJlc2V0Rm9ybSgpO1xuICBjbG9zZVBvcHVwKGFkZENhcmRQb3B1cCk7XG59XG5cbmZvcm1Qcm9maWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZWRpdFByb2ZpbGVSZWZyZXNoRm9ybSk7XG5lZGl0Rm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBvcGVuUHJvZmlsZVBvcHVwKHByb2ZpbGVQb3B1cCk7XG59KTtcblxuZm9ybUNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBlZGl0Q2FyZFJlZnJlc2hGb3JtKTtcbmFkZENhcmRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgb3BlblBvcHVwKGFkZENhcmRQb3B1cCk7XG59KTtcblxuY2xvc2VQcm9maWxlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBjbG9zZVBvcHVwKHByb2ZpbGVQb3B1cCkpO1xuY2xvc2VDYXJkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBjbG9zZVBvcHVwKGFkZENhcmRQb3B1cCkpO1xuY2xvc2VJbWFnZVByZXZpZXdCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGNsb3NlUG9wdXAoaW1hZ2VQb3B1cCkpO1xuXG5mdW5jdGlvbiBhZGRDYXJkVG9QYWdlKGNhcmQpIHtcbiAgY2FyZExpc3QucHJlcGVuZChjYXJkKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQ2FyZChkYXRhKSB7XG4gIGNvbnN0IGNhcmQgPSBuZXcgQ2FyZChjYXJkVGVtcGxhdGUsIGRhdGEpO1xuICBhZGRDYXJkVG9QYWdlKGNhcmQucmVuZGVyKGRhdGEpKTtcbn1cblxuY29uc3QgaW5pdGlhbENhcmRzID0gW1xuICB7XG4gICAgdGl0bGU6IFwiTGFrZSAmIE1vdW50YWluXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNjM4ODAyNDIyNjMzLTY5NDA4ODY4MDM1OT9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9Njg3JnE9ODBcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkxha2UgTG91aXNlXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL2xha2UtbG91aXNlLmpwZ1wiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiQmFsZCBNb3VudGFpbnNcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUvYmFsZC1tb3VudGFpbnMuanBnXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJMYXRlbWFyXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL2xhdGVtYXIuanBnXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJWYW5vaXNlIE5hdGlvbmFsIFBhcmtcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUvdmFub2lzZS5qcGdcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkxhZ28gZGkgYnJhaWVzXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL2xhZ28uanBnXCIsXG4gIH0sXG5dO1xuXG4vL0NhcmRzIHJlbmRlcmluZ1xuLy8gaW5pdGlhbENhcmRzLmZvckVhY2goKGRhdGEpID0+IHtcbi8vICAgcmVuZGVyQ2FyZChkYXRhLCBmb3JtQ2FyZCk7XG4vLyB9KTtcbmluaXRpYWxDYXJkcy5mb3JFYWNoKHJlbmRlckNhcmQpO1xuXG4vLyBWYWxpZGF0b3JzXG5jb25zdCBhZGRGb3JtRWwgPSBmb3JtQ2FyZC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tbmFtZVwiKTtcbmNvbnN0IGVkaXRGb3JtRWwgPSBmb3JtUHJvZmlsZS5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tbmFtZVwiKTtcblxuY29uc3QgZm9ybVZhbGlkYXRvckNvbmZpZyA9IHtcbiAgaW5wdXRTZWxlY3RvcjogXCIuZm9ybS1uYW1lX19pbnB1dFwiLFxuICBzdWJtaXRCdXR0b25TZWxlY3RvcjogXCIuZm9ybS1uYW1lX19zYXZlLWJ1dHRvblwiLFxuICBpbmFjdGl2ZUJ1dHRvbkNsYXNzOiBcImZvcm0tbmFtZV9fc2F2ZS1idXR0b25fZGlzYWJsZWRcIixcbiAgaW5wdXRFcnJvckNsYXNzOiBcImZvcm0tbmFtZV9fbW9kYWwtdHlwZV9lcnJvclwiLFxuICBlcnJvckNsYXNzOiBcIm1vZGFsX19wb3B1cF9fZXJyb3JfdmlzaWJsZVwiLFxufTtcblxuY29uc3QgYWRkRm9ybVZhbGlkYXRvciA9IG5ldyBGb3JtVmFsaWRhdG9yKGZvcm1WYWxpZGF0b3JDb25maWcsIGFkZEZvcm1FbCk7XG5hZGRGb3JtVmFsaWRhdG9yLmVuYWJsZVZhbGlkYXRpb24oXCIuZm9ybS1uYW1lXCIpO1xuXG5jb25zdCBlZGl0Rm9ybVZhbGlkYXRvciA9IG5ldyBGb3JtVmFsaWRhdG9yKGZvcm1WYWxpZGF0b3JDb25maWcsIGVkaXRGb3JtRWwpO1xuZWRpdEZvcm1WYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbihcIi5mb3JtLW5hbWVcIik7XG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvcGFnZXMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOlsib3BlblBvcHVwIiwiY2xvc2VQb3B1cCIsImNsaWNrT3V0c2lkZU92ZXJsYXkiLCJwcmVzc0VzY0tleSIsImltYWdlUG9wdXAiLCJtb2RhbEltYWdlRWxlbWVudCIsIm1vZGFsQ2FwdGlvbiIsIkNhcmQiLCJ0ZW1wbGF0ZSIsImRhdGEiLCJfdGVtcGxhdGUiLCJjb250ZW50IiwicXVlcnlTZWxlY3RvciIsImNsb25lTm9kZSIsInNyYyIsIl91cmwiLCJ0ZXh0Q29udGVudCIsIl90aXRsZSIsImFsdCIsIl9kYXRhIiwiX2NhcmRMaWtlQnV0dG9uIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiX2VsZW1lbnQiLCJyZW1vdmUiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZ0IiwiX2hhbmRsZUxpa2VJY29uIiwiX2RlbGV0ZUNhcmQiLCJfaGFuZGxlRGVsZXRlQ2FyZCIsIl9pbWFnZUVsZW1lbnQiLCJfaGFuZGxlQ2FyZFByZXZpZXciLCJfZ2V0RWxlbWVudCIsIl90aXRsZUVsZW1lbnQiLCJfc2V0RXZlbnRMaXN0ZW5lcnMiLCJ0aXRsZSIsInVybCIsIkZvcm1WYWxpZGF0b3IiLCJzZXR0aW5ncyIsImZvcm1FbCIsIl9pbnB1dFNlbGVjdG9yIiwiaW5wdXRTZWxlY3RvciIsIl9zdWJtaXRCdXR0b25TZWxlY3RvciIsInN1Ym1pdEJ1dHRvblNlbGVjdG9yIiwiX2luYWN0aXZlQnV0dG9uQ2xhc3MiLCJpbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiX2lucHV0RXJyb3JDbGFzcyIsImlucHV0RXJyb3JDbGFzcyIsIl9lcnJvckNsYXNzIiwiZXJyb3JDbGFzcyIsIl9mb3JtRWwiLCJpbnB1dEVsIiwidmFsaWRpdHkiLCJ2YWxpZCIsImVycm9yRWwiLCJpZCIsImFkZCIsInZhbGlkYXRpb25NZXNzYWdlIiwiX2lucHV0TGlzdCIsInNvbWUiLCJfaXNJbnZhbGlkSW5wdXQiLCJfYnV0dG9uRWwiLCJkaXNhYmxlZCIsIl9zaG93RXJyb3IiLCJfaGlkZUVycm9yIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJfY2hlY2tJbnB1dFZhbGlkaXR5IiwiX3RvZ2dsZUJ1dHRvbiIsInJlc2V0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicG9wdXAiLCJkb2N1bWVudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0YXJnZXQiLCJjb250YWlucyIsImtleSIsInRpdGxlSW5wdXQiLCJzdWJ0aXRsZUlucHV0IiwibGlzdFRpdGxlIiwibGlzdFN1YnRpdGxlIiwiZWRpdEZvcm1CdG4iLCJjbG9zZVByb2ZpbGVCdXR0b24iLCJjbG9zZUNhcmRCdXR0b24iLCJjbG9zZUltYWdlUHJldmlld0J1dHRvbiIsImFkZENhcmRCdG4iLCJjYXJkQ3JlYXRlQnRuIiwicHJvZmlsZVBvcHVwIiwiYWRkQ2FyZFBvcHVwIiwiY2FyZFRlbXBsYXRlIiwiY2FyZExpc3QiLCJjYXJkTGlrZUJ1dHRvbnMiLCJmb3JtUHJvZmlsZSIsImZvcm1DYXJkIiwiY2FyZFRpdGxlSW5wdXQiLCJjYXJkVXJsSW5wdXQiLCJvcGVuUHJvZmlsZVBvcHVwIiwidmFsdWUiLCJlZGl0UHJvZmlsZVJlZnJlc2hGb3JtIiwiZXZlbnQiLCJlZGl0Q2FyZFJlZnJlc2hGb3JtIiwicmVuZGVyQ2FyZCIsImFkZEZvcm1WYWxpZGF0b3IiLCJyZXNldEZvcm0iLCJlZGl0Rm9ybVZhbGlkYXRvciIsImFkZENhcmRUb1BhZ2UiLCJjYXJkIiwicHJlcGVuZCIsInJlbmRlciIsImluaXRpYWxDYXJkcyIsImFkZEZvcm1FbCIsImVkaXRGb3JtRWwiLCJmb3JtVmFsaWRhdG9yQ29uZmlnIiwiZW5hYmxlVmFsaWRhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=