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
    _this._titleElement = _this._element.querySelector(".elements-grid__text");
    _this._imageElement.src = _this._url;
    _this._imageElement.alt = _this._url;
    _this._titleElement.textContent = _this._title;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFyQixHQUVBOztBQUNBLElBQU1TLFNBQVMsR0FBR2pCLFFBQVEsQ0FBQ3BGLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBbEI7QUFDQSxJQUFNc0csVUFBVSxHQUFHbkIsV0FBVyxDQUFDbkYsYUFBWixDQUEwQixZQUExQixDQUFuQjtBQUVBLElBQU11RyxtQkFBbUIsR0FBRztBQUMxQjFFLEVBQUFBLGFBQWEsRUFBRSxtQkFEVztBQUUxQkUsRUFBQUEsb0JBQW9CLEVBQUUseUJBRkk7QUFHMUJFLEVBQUFBLG1CQUFtQixFQUFFLGlDQUhLO0FBSTFCRSxFQUFBQSxlQUFlLEVBQUUsNkJBSlM7QUFLMUJFLEVBQUFBLFVBQVUsRUFBRTtBQUxjLENBQTVCO0FBUUEsSUFBTXdELGdCQUFnQixHQUFHLElBQUlwRSxvRUFBSixDQUFrQjhFLG1CQUFsQixFQUF1Q0YsU0FBdkMsQ0FBekI7QUFDQVIsZ0JBQWdCLENBQUNXLGdCQUFqQixDQUFrQyxZQUFsQztBQUVBLElBQU1ULGlCQUFpQixHQUFHLElBQUl0RSxvRUFBSixDQUFrQjhFLG1CQUFsQixFQUF1Q0QsVUFBdkMsQ0FBMUI7QUFDQVAsaUJBQWlCLENBQUNTLGdCQUFsQixDQUFtQyxZQUFuQzs7Ozs7Ozs7Ozs7QUN6SUE7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NwcmludC04Ly4vc3JjL2NvbXBvbmVudHMvQ2FyZC5qcyIsIndlYnBhY2s6Ly9zcHJpbnQtOC8uL3NyYy9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vc3ByaW50LTgvLi9zcmMvY29tcG9uZW50cy91dGlsLmpzIiwid2VicGFjazovL3NwcmludC04Ly4vc3JjL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL3NwcmludC04Ly4vc3JjL3BhZ2VzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9zcHJpbnQtOC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zcHJpbnQtOC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc3ByaW50LTgvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zcHJpbnQtOC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3NwcmludC04L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vc3ByaW50LTgvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3NwcmludC04L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBvcGVuUG9wdXAsIGNsb3NlUG9wdXAsIGNsaWNrT3V0c2lkZU92ZXJsYXksIHByZXNzRXNjS2V5IH0gZnJvbSBcIi4vdXRpbC5qc1wiO1xuaW1wb3J0IHsgaW1hZ2VQb3B1cCwgbW9kYWxJbWFnZUVsZW1lbnQsIG1vZGFsQ2FwdGlvbiB9IGZyb20gXCIuLi9wYWdlcy9pbmRleC5qc1wiO1xuXG5jbGFzcyBDYXJkIHtcbiAgY29uc3RydWN0b3IodGVtcGxhdGUsIGRhdGEpIHtcbiAgICB0aGlzLl90ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuICAgIHRoaXMuX3RpdGxlID0gZGF0YS50aXRsZTtcbiAgICB0aGlzLl91cmwgPSBkYXRhLnVybDtcbiAgICB0aGlzLl9lbGVtZW50ID0gbnVsbDtcbiAgfVxuXG4gIF9nZXRFbGVtZW50ID0gKCkgPT4ge1xuICAgIC8vIHRoaXMuX2VsZW1lbnQgPSB0aGlzLl90ZW1wbGF0ZS5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWxlbWVudHMtZ3JpZF9fY2FyZFwiKS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgcmV0dXJuIHRoaXMuX3RlbXBsYXRlLmNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5lbGVtZW50cy1ncmlkX19jYXJkXCIpLmNsb25lTm9kZSh0cnVlKTtcbiAgfVxuXG4gIF9oYW5kbGVDYXJkUHJldmlldyA9ICgpID0+IHtcbiAgICBtb2RhbEltYWdlRWxlbWVudC5zcmMgPSB0aGlzLl91cmw7XG4gICAgbW9kYWxDYXB0aW9uLnRleHRDb250ZW50ID0gdGhpcy5fdGl0bGU7XG4gICAgbW9kYWxJbWFnZUVsZW1lbnQuYWx0ID0gdGhpcy5fZGF0YS5hbHQ7XG4gICAgb3BlblBvcHVwKGltYWdlUG9wdXApO1xuICB9O1xuXG4gIF9oYW5kbGVMaWtlSWNvbiA9ICgpID0+IHtcbiAgICB0aGlzLl9jYXJkTGlrZUJ1dHRvbi5jbGFzc0xpc3RcbiAgICAudG9nZ2xlKFwiZWxlbWVudHMtZ3JpZF9faWNvbi1hY3RpdmVcIik7XG4gIH07XG5cbiAgX2hhbmRsZURlbGV0ZUNhcmQgPSAoKSA9PiB7XG4gICAgdGhpcy5fZWxlbWVudFxuICAgIC5yZW1vdmUoKTtcbiAgfTtcblxuICBfc2V0RXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgdGhpcy5fY2FyZExpa2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldnQpID0+IHtcbiAgICAgIHRoaXMuX2hhbmRsZUxpa2VJY29uKGV2dCk7XG4gICAgfSk7XG4gICAgdGhpcy5fZGVsZXRlQ2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2dCkgPT4ge1xuICAgICAgdGhpcy5faGFuZGxlRGVsZXRlQ2FyZChldnQpO1xuICAgIH0pO1xuICAgIHRoaXMuX2ltYWdlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2dCkgPT4ge1xuICAgICAgdGhpcy5faGFuZGxlQ2FyZFByZXZpZXcoZXZ0KTtcbiAgICB9KTtcbiAgfTtcblxuICByZW5kZXIgPSAoKSA9PiB7XG4gICAgdGhpcy5fZWxlbWVudCA9IHRoaXMuX2dldEVsZW1lbnQoKTtcbiAgICB0aGlzLl9pbWFnZUVsZW1lbnQgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWxlbWVudHMtZ3JpZF9faW1hZ2VcIik7XG4gICAgdGhpcy5fdGl0bGVFbGVtZW50ID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRzLWdyaWRfX3RleHRcIik7XG4gICAgdGhpcy5faW1hZ2VFbGVtZW50LnNyYyA9IHRoaXMuX3VybDtcbiAgICB0aGlzLl9pbWFnZUVsZW1lbnQuYWx0ID0gdGhpcy5fdXJsO1xuICAgIHRoaXMuX3RpdGxlRWxlbWVudC50ZXh0Q29udGVudCA9IHRoaXMuX3RpdGxlO1xuICAgIHRoaXMuX2RlbGV0ZUNhcmQgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWxlbWVudHMtZ3JpZF9fZGVsZXRlLWJ1dHRvblwiKTtcbiAgICB0aGlzLl9jYXJkTGlrZUJ1dHRvbiA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbGVtZW50cy1ncmlkX19pY29uXCIpO1xuICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcmQ7IiwiY2xhc3MgRm9ybVZhbGlkYXRvciB7XG4gIGNvbnN0cnVjdG9yKHNldHRpbmdzLCBmb3JtRWwpIHtcbiAgICB0aGlzLl9pbnB1dFNlbGVjdG9yID0gc2V0dGluZ3MuaW5wdXRTZWxlY3RvcjtcbiAgICB0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3RvciA9IHNldHRpbmdzLnN1Ym1pdEJ1dHRvblNlbGVjdG9yO1xuICAgIHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MgPSBzZXR0aW5ncy5pbmFjdGl2ZUJ1dHRvbkNsYXNzO1xuICAgIHRoaXMuX2lucHV0RXJyb3JDbGFzcyA9IHNldHRpbmdzLmlucHV0RXJyb3JDbGFzcztcbiAgICB0aGlzLl9lcnJvckNsYXNzID0gc2V0dGluZ3MuZXJyb3JDbGFzcztcbiAgICB0aGlzLl9mb3JtRWwgPSBmb3JtRWw7XG4gIH1cblxuICBfaXNJbnZhbGlkSW5wdXQoaW5wdXRFbCkge1xuICAgIHJldHVybiAhaW5wdXRFbC52YWxpZGl0eS52YWxpZDtcbiAgfVxuXG4gIF9zaG93RXJyb3IoaW5wdXRFbCkge1xuICAgIGNvbnN0IGVycm9yRWwgPSB0aGlzLl9mb3JtRWwucXVlcnlTZWxlY3RvcihgIyR7aW5wdXRFbC5pZH1gKTtcbiAgICBlcnJvckVsLmNsYXNzTGlzdC5hZGQodGhpcy5fZXJyb3JDbGFzcyk7XG4gICAgZXJyb3JFbC50ZXh0Q29udGVudCA9IGlucHV0RWwudmFsaWRhdGlvbk1lc3NhZ2U7XG4gICAgaW5wdXRFbC5jbGFzc0xpc3QuYWRkKHRoaXMuX2lucHV0RXJyb3JDbGFzcyk7XG4gIH1cblxuICBfaGlkZUVycm9yKGlucHV0RWwpIHtcbiAgICBjb25zdCBlcnJvckVsID0gdGhpcy5fZm9ybUVsLnF1ZXJ5U2VsZWN0b3IoYCMke2lucHV0RWwuaWR9YCk7XG4gICAgZXJyb3JFbC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2Vycm9yQ2xhc3MpO1xuICAgIGVycm9yRWwudGV4dENvbnRlbnQgPSAnICc7XG4gICAgaW5wdXRFbC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2lucHV0RXJyb3JDbGFzcyk7XG4gIH1cblxuICBfdG9nZ2xlQnV0dG9uKCkge1xuICAgIGlmICh0aGlzLl9pbnB1dExpc3Quc29tZSh0aGlzLl9pc0ludmFsaWRJbnB1dCkpIHtcbiAgICAgIHRoaXMuX2J1dHRvbkVsLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuX2J1dHRvbkVsLmNsYXNzTGlzdFxuICAgICAgLmFkZCh0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fYnV0dG9uRWwuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2J1dHRvbkVsLmNsYXNzTGlzdFxuICAgICAgLnJlbW92ZSh0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcbiAgICB9XG4gIH1cblxuICBfY2hlY2tJbnB1dFZhbGlkaXR5KGlucHV0RWwpIHtcbiAgICBjb25zdCBlcnJvckVsID0gdGhpcy5fZm9ybUVsLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgIyR7aW5wdXRFbC5pZH0tZXJyb3JgKTtcbiAgICBpZiAodGhpcy5faXNJbnZhbGlkSW5wdXQoaW5wdXRFbCkpIHtcbiAgICAgIHRoaXMuX3Nob3dFcnJvcihlcnJvckVsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5faGlkZUVycm9yKGVycm9yRWwpO1xuICAgIH1cbiAgfVxuXG4gIF9zZXRFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLl9pbnB1dExpc3QgPSBBcnJheS5mcm9tKHRoaXMuX2Zvcm1FbC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX2lucHV0U2VsZWN0b3IpKTtcbiAgICB0aGlzLl9idXR0b25FbCA9IHRoaXMuX2Zvcm1FbC5xdWVyeVNlbGVjdG9yKHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yKTtcblxuICAgIHRoaXMuX2lucHV0TGlzdC5mb3JFYWNoKChpbnB1dEVsKSA9PiB7XG4gICAgICBpbnB1dEVsLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2NoZWNrSW5wdXRWYWxpZGl0eShpbnB1dEVsKTtcbiAgICAgICAgdGhpcy5fdG9nZ2xlQnV0dG9uKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlc2V0Rm9ybSgpIHtcbiAgICB0aGlzLl9mb3JtRWwucmVzZXQoKTtcbiAgICB0aGlzLl90b2dnbGVCdXR0b24oKTtcbiAgfVxuXG4gIGVuYWJsZVZhbGlkYXRpb24oKSB7XG4gICAgdGhpcy5fZm9ybUVsLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycygpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1WYWxpZGF0b3I7XG4iLCJmdW5jdGlvbiBvcGVuUG9wdXAocG9wdXApIHtcbiAgcG9wdXAuY2xhc3NMaXN0LmFkZChcIm1vZGFsX29wZW5lZFwiKTtcbiAgcG9wdXAuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBjbGlja091dHNpZGVPdmVybGF5KTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgcHJlc3NFc2NLZXkpO1xufVxuXG5mdW5jdGlvbiBjbG9zZVBvcHVwKHBvcHVwKSB7XG4gIHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoXCJtb2RhbF9vcGVuZWRcIik7XG4gIHBvcHVwLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgY2xpY2tPdXRzaWRlT3ZlcmxheSk7XG4gIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHByZXNzRXNjS2V5KTtcbn1cblxuZnVuY3Rpb24gY2xpY2tPdXRzaWRlT3ZlcmxheShlKSB7XG4gIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJtb2RhbFwiKSkge1xuICAgIGNsb3NlUG9wdXAoZS50YXJnZXQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHByZXNzRXNjS2V5KGUpIHtcbiAgaWYgKGUua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgY2xvc2VQb3B1cChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX29wZW5lZFwiKSk7XG4gIH1cbn1cblxuZXhwb3J0IHsgb3BlblBvcHVwLCBjbG9zZVBvcHVwLCBjbGlja091dHNpZGVPdmVybGF5LCBwcmVzc0VzY0tleSB9OyIsImltcG9ydCAnLi9pbmRleC5jc3MnO1xuXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkLmpzXCI7XG5pbXBvcnQgRm9ybVZhbGlkYXRvciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzXCI7XG5pbXBvcnQgeyBvcGVuUG9wdXAsIGNsb3NlUG9wdXAsIGNsaWNrT3V0c2lkZU92ZXJsYXksIHByZXNzRXNjS2V5IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvdXRpbC5qc1wiO1xuXG5jb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsaXN0LXRpdGxlXCIpO1xuY29uc3Qgc3VidGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbGlzdC1zdWJ0aXRsZVwiKTtcbmNvbnN0IGxpc3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fdGl0bGVcIik7XG5jb25zdCBsaXN0U3VidGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX3N1YnRpdGxlXCIpO1xuY29uc3QgZWRpdEZvcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2VkaXQtYnV0dG9uXCIpO1xuY29uc3QgY2xvc2VQcm9maWxlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbG9zZS1wcm9maWxlLXBvcHVwXCIpO1xuY29uc3QgY2xvc2VDYXJkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbG9zZS1jYXJkLXBvcHVwXCIpO1xuY29uc3QgY2xvc2VJbWFnZVByZXZpZXdCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nsb3NlLWltYWdlLXBvcHVwXCIpO1xuY29uc3QgYWRkQ2FyZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fcGx1cy1idXR0b25cIik7XG5jb25zdCBjYXJkQ3JlYXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjcmVhdGUtY2FyZC1idXR0b25cIik7XG5cbmNvbnN0IHByb2ZpbGVQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdC1wcm9maWxlLXBvcHVwXCIpOyAvLy5wb3B1cF9fZm9ybVxuY29uc3QgYWRkQ2FyZFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtY2FyZC1wb3B1cFwiKTtcblxuY29uc3QgY2FyZFRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYXJkLXRlbXBsYXRlXCIpO1xuY29uc3QgY2FyZExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRzLWdyaWRfX2NhcmRzXCIpO1xuY29uc3QgY2FyZExpa2VCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhY3RpdmUtbGlrZS1idXR0b25cIik7XG5cbmNvbnN0IGZvcm1Qcm9maWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0LXByb2ZpbGUtcG9wdXBcIik7XG5jb25zdCBmb3JtQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLWNhcmQtcG9wdXBcIik7XG5cbi8vYWRkaW5nIGNsYXNzIC5mb3JtLW5hbWUgYXMgYSBzZWNvbmQgYXJndW1lbnQgb2YgdmFsaWRhdG9yID9cbi8vIGNvbnN0IGZvcm1Qcm9maWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0LXByb2ZpbGUtcG9wdXAgLmZvcm0tbmFtZVwiKTtcbi8vIGNvbnN0IGZvcm1DYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtY2FyZC1wb3B1cCAuZm9ybS1uYW1lXCIpO1xuXG5jb25zdCBjYXJkVGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FyZC10aXRsZVwiKTtcbmNvbnN0IGNhcmRVcmxJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FyZC11cmxcIik7XG5cbmV4cG9ydCBjb25zdCBpbWFnZVBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbWFnZS1wb3B1cFwiKTtcbmV4cG9ydCBjb25zdCBtb2RhbEltYWdlRWxlbWVudCA9IGltYWdlUG9wdXAucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fcG9wdXAtaW1hZ2VcIik7XG5leHBvcnQgY29uc3QgbW9kYWxDYXB0aW9uID0gaW1hZ2VQb3B1cC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19wb3B1cC1jYXB0aW9uXCIpO1xuXG5mdW5jdGlvbiBvcGVuUHJvZmlsZVBvcHVwKHBvcHVwKSB7XG4gIHRpdGxlSW5wdXQudmFsdWUgPSBsaXN0VGl0bGUudGV4dENvbnRlbnQ7XG4gIHN1YnRpdGxlSW5wdXQudmFsdWUgPSBsaXN0U3VidGl0bGUudGV4dENvbnRlbnQ7XG4gIG9wZW5Qb3B1cChwb3B1cCk7XG59XG5cbmZ1bmN0aW9uIGVkaXRQcm9maWxlUmVmcmVzaEZvcm0oZXZlbnQpIHtcbiAgY29uc3QgcHJvZmlsZVBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0LXByb2ZpbGUtcG9wdXBcIik7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGxpc3RUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlSW5wdXQudmFsdWU7XG4gIGxpc3RTdWJ0aXRsZS50ZXh0Q29udGVudCA9IHN1YnRpdGxlSW5wdXQudmFsdWU7XG4gIGNsb3NlUG9wdXAocHJvZmlsZVBvcHVwKTtcbn1cblxuZnVuY3Rpb24gZWRpdENhcmRSZWZyZXNoRm9ybShldnQpIHtcbiAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IGRhdGEgPSB7XG4gICAgdGl0bGU6IGNhcmRUaXRsZUlucHV0LnZhbHVlLFxuICAgIHVybDogY2FyZFVybElucHV0LnZhbHVlLFxuICB9O1xuXG4gIHJlbmRlckNhcmQoZGF0YSk7XG4gIGFkZEZvcm1WYWxpZGF0b3IucmVzZXRGb3JtKCk7XG4gIGVkaXRGb3JtVmFsaWRhdG9yLnJlc2V0Rm9ybSgpO1xuICBjbG9zZVBvcHVwKGFkZENhcmRQb3B1cCk7XG59XG5cbmZvcm1Qcm9maWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZWRpdFByb2ZpbGVSZWZyZXNoRm9ybSk7XG5lZGl0Rm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBvcGVuUHJvZmlsZVBvcHVwKHByb2ZpbGVQb3B1cCk7XG59KTtcblxuZm9ybUNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBlZGl0Q2FyZFJlZnJlc2hGb3JtKTtcbmFkZENhcmRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgb3BlblBvcHVwKGFkZENhcmRQb3B1cCk7XG59KTtcblxuY2xvc2VQcm9maWxlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBjbG9zZVBvcHVwKHByb2ZpbGVQb3B1cCkpO1xuY2xvc2VDYXJkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBjbG9zZVBvcHVwKGFkZENhcmRQb3B1cCkpO1xuY2xvc2VJbWFnZVByZXZpZXdCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGNsb3NlUG9wdXAoaW1hZ2VQb3B1cCkpO1xuXG5mdW5jdGlvbiBhZGRDYXJkVG9QYWdlKGNhcmQpIHtcbiAgY2FyZExpc3QucHJlcGVuZChjYXJkKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQ2FyZChkYXRhKSB7XG4gIGNvbnN0IGNhcmQgPSBuZXcgQ2FyZChjYXJkVGVtcGxhdGUsIGRhdGEpO1xuICBhZGRDYXJkVG9QYWdlKGNhcmQucmVuZGVyKGRhdGEpKTtcbn1cblxuY29uc3QgaW5pdGlhbENhcmRzID0gW1xuICB7XG4gICAgdGl0bGU6IFwiTGFrZSAmIE1vdW50YWluXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNjM4ODAyNDIyNjMzLTY5NDA4ODY4MDM1OT9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9Njg3JnE9ODBcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkxha2UgTG91aXNlXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL2xha2UtbG91aXNlLmpwZ1wiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiQmFsZCBNb3VudGFpbnNcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUvYmFsZC1tb3VudGFpbnMuanBnXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJMYXRlbWFyXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL2xhdGVtYXIuanBnXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJWYW5vaXNlIE5hdGlvbmFsIFBhcmtcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUvdmFub2lzZS5qcGdcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkxhZ28gZGkgYnJhaWVzXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL2xhZ28uanBnXCIsXG4gIH0sXG5dO1xuXG4vL0NhcmRzIHJlbmRlcmluZ1xuLy8gaW5pdGlhbENhcmRzLmZvckVhY2goKGRhdGEpID0+IHtcbi8vICAgcmVuZGVyQ2FyZChkYXRhLCBmb3JtQ2FyZCk7XG4vLyB9KTtcbmluaXRpYWxDYXJkcy5mb3JFYWNoKHJlbmRlckNhcmQpO1xuXG4vLyBWYWxpZGF0b3JzXG5jb25zdCBhZGRGb3JtRWwgPSBmb3JtQ2FyZC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tbmFtZVwiKTtcbmNvbnN0IGVkaXRGb3JtRWwgPSBmb3JtUHJvZmlsZS5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tbmFtZVwiKTtcblxuY29uc3QgZm9ybVZhbGlkYXRvckNvbmZpZyA9IHtcbiAgaW5wdXRTZWxlY3RvcjogXCIuZm9ybS1uYW1lX19pbnB1dFwiLFxuICBzdWJtaXRCdXR0b25TZWxlY3RvcjogXCIuZm9ybS1uYW1lX19zYXZlLWJ1dHRvblwiLFxuICBpbmFjdGl2ZUJ1dHRvbkNsYXNzOiBcImZvcm0tbmFtZV9fc2F2ZS1idXR0b25fZGlzYWJsZWRcIixcbiAgaW5wdXRFcnJvckNsYXNzOiBcImZvcm0tbmFtZV9fbW9kYWwtdHlwZV9lcnJvclwiLFxuICBlcnJvckNsYXNzOiBcIm1vZGFsX19wb3B1cF9fZXJyb3JfdmlzaWJsZVwiLFxufTtcblxuY29uc3QgYWRkRm9ybVZhbGlkYXRvciA9IG5ldyBGb3JtVmFsaWRhdG9yKGZvcm1WYWxpZGF0b3JDb25maWcsIGFkZEZvcm1FbCk7XG5hZGRGb3JtVmFsaWRhdG9yLmVuYWJsZVZhbGlkYXRpb24oXCIuZm9ybS1uYW1lXCIpO1xuXG5jb25zdCBlZGl0Rm9ybVZhbGlkYXRvciA9IG5ldyBGb3JtVmFsaWRhdG9yKGZvcm1WYWxpZGF0b3JDb25maWcsIGVkaXRGb3JtRWwpO1xuZWRpdEZvcm1WYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbihcIi5mb3JtLW5hbWVcIik7XG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvcGFnZXMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOlsib3BlblBvcHVwIiwiY2xvc2VQb3B1cCIsImNsaWNrT3V0c2lkZU92ZXJsYXkiLCJwcmVzc0VzY0tleSIsImltYWdlUG9wdXAiLCJtb2RhbEltYWdlRWxlbWVudCIsIm1vZGFsQ2FwdGlvbiIsIkNhcmQiLCJ0ZW1wbGF0ZSIsImRhdGEiLCJfdGVtcGxhdGUiLCJjb250ZW50IiwicXVlcnlTZWxlY3RvciIsImNsb25lTm9kZSIsInNyYyIsIl91cmwiLCJ0ZXh0Q29udGVudCIsIl90aXRsZSIsImFsdCIsIl9kYXRhIiwiX2NhcmRMaWtlQnV0dG9uIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiX2VsZW1lbnQiLCJyZW1vdmUiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZ0IiwiX2hhbmRsZUxpa2VJY29uIiwiX2RlbGV0ZUNhcmQiLCJfaGFuZGxlRGVsZXRlQ2FyZCIsIl9pbWFnZUVsZW1lbnQiLCJfaGFuZGxlQ2FyZFByZXZpZXciLCJfZ2V0RWxlbWVudCIsIl90aXRsZUVsZW1lbnQiLCJfc2V0RXZlbnRMaXN0ZW5lcnMiLCJ0aXRsZSIsInVybCIsIkZvcm1WYWxpZGF0b3IiLCJzZXR0aW5ncyIsImZvcm1FbCIsIl9pbnB1dFNlbGVjdG9yIiwiaW5wdXRTZWxlY3RvciIsIl9zdWJtaXRCdXR0b25TZWxlY3RvciIsInN1Ym1pdEJ1dHRvblNlbGVjdG9yIiwiX2luYWN0aXZlQnV0dG9uQ2xhc3MiLCJpbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiX2lucHV0RXJyb3JDbGFzcyIsImlucHV0RXJyb3JDbGFzcyIsIl9lcnJvckNsYXNzIiwiZXJyb3JDbGFzcyIsIl9mb3JtRWwiLCJpbnB1dEVsIiwidmFsaWRpdHkiLCJ2YWxpZCIsImVycm9yRWwiLCJpZCIsImFkZCIsInZhbGlkYXRpb25NZXNzYWdlIiwiX2lucHV0TGlzdCIsInNvbWUiLCJfaXNJbnZhbGlkSW5wdXQiLCJfYnV0dG9uRWwiLCJkaXNhYmxlZCIsIl9zaG93RXJyb3IiLCJfaGlkZUVycm9yIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJfY2hlY2tJbnB1dFZhbGlkaXR5IiwiX3RvZ2dsZUJ1dHRvbiIsInJlc2V0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicG9wdXAiLCJkb2N1bWVudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0YXJnZXQiLCJjb250YWlucyIsImtleSIsInRpdGxlSW5wdXQiLCJzdWJ0aXRsZUlucHV0IiwibGlzdFRpdGxlIiwibGlzdFN1YnRpdGxlIiwiZWRpdEZvcm1CdG4iLCJjbG9zZVByb2ZpbGVCdXR0b24iLCJjbG9zZUNhcmRCdXR0b24iLCJjbG9zZUltYWdlUHJldmlld0J1dHRvbiIsImFkZENhcmRCdG4iLCJjYXJkQ3JlYXRlQnRuIiwicHJvZmlsZVBvcHVwIiwiYWRkQ2FyZFBvcHVwIiwiY2FyZFRlbXBsYXRlIiwiY2FyZExpc3QiLCJjYXJkTGlrZUJ1dHRvbnMiLCJmb3JtUHJvZmlsZSIsImZvcm1DYXJkIiwiY2FyZFRpdGxlSW5wdXQiLCJjYXJkVXJsSW5wdXQiLCJvcGVuUHJvZmlsZVBvcHVwIiwidmFsdWUiLCJlZGl0UHJvZmlsZVJlZnJlc2hGb3JtIiwiZXZlbnQiLCJlZGl0Q2FyZFJlZnJlc2hGb3JtIiwicmVuZGVyQ2FyZCIsImFkZEZvcm1WYWxpZGF0b3IiLCJyZXNldEZvcm0iLCJlZGl0Rm9ybVZhbGlkYXRvciIsImFkZENhcmRUb1BhZ2UiLCJjYXJkIiwicHJlcGVuZCIsInJlbmRlciIsImluaXRpYWxDYXJkcyIsImFkZEZvcm1FbCIsImVkaXRGb3JtRWwiLCJmb3JtVmFsaWRhdG9yQ29uZmlnIiwiZW5hYmxlVmFsaWRhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=