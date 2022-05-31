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
/* harmony export */   "default": () => (/* binding */ Card)
/* harmony export */ });
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Card = /*#__PURE__*/function (_Popup) {
  _inherits(Card, _Popup);

  var _super = _createSuper(Card);

  function Card(_ref, template, popupSelector) {
    var _this;

    var data = _ref.data,
        handleCardPreview = _ref.handleCardPreview;

    _classCallCheck(this, Card);

    _this = _super.call(this, popupSelector);

    _defineProperty(_assertThisInitialized(_this), "_getElement", function () {
      // this._element = this._template.content.querySelector(".elements-grid__card").cloneNode(true);
      return _this._template.content.querySelector(".elements-grid__card").cloneNode(true);
    });

    _defineProperty(_assertThisInitialized(_this), "_handleCardPreview", function () {
      modalImageElement.src = _this._url;
      modalCaption.textContent = _this._title;
      modalImageElement.alt = "image of".concat(url);
      openPopup(imagePopup);
    });

    _defineProperty(_assertThisInitialized(_this), "_handleLikeIcon", function () {
      _this._cardLikeButton.classList.toggle("elements-grid__icon-active");
    });

    _defineProperty(_assertThisInitialized(_this), "_handleDeleteCard", function () {
      _this._element.remove();

      _this.element = null;
    });

    _defineProperty(_assertThisInitialized(_this), "_setEventListeners", function () {
      _this._cardLikeButton.addEventListener("click", function (evt) {
        //card like event listener
        _this._handleLikeIcon(evt);
      });

      _this._deleteCard.addEventListener("click", function (evt) {
        //card delete event listener
        _this._handleDeleteCard(evt);
      });

      _this._imageElement.addEventListener("click", function (evt) {
        //card preview event listener
        _this._handleCardPreview(evt);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "render", function () {
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

    _this._template = template;
    _this._data = data; // this._title = data.title;
    // this._url = data.url;

    _this._element = null;
    _this._handleCardPreview = handleCardPreview; // this._handleCardClick = handleCardClick;

    return _this;
  } // Card template


  return _createClass(Card);
}(_Popup__WEBPACK_IMPORTED_MODULE_0__["default"]); // export default Card;




/***/ }),

/***/ "./src/components/FormValidator.js":
/*!*****************************************!*\
  !*** ./src/components/FormValidator.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FormValidator)
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



/***/ }),

/***/ "./src/components/Popup.js":
/*!*********************************!*\
  !*** ./src/components/Popup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Popup)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Popup = /*#__PURE__*/function () {
  function Popup(popupSelector) {
    _classCallCheck(this, Popup);

    this._popupElement = document.querySelector(".".concat(popupSelector));
    this._handleEscUp = this._handleEscUp.bind(this);
  }

  _createClass(Popup, [{
    key: "_handleEscUp",
    value: function _handleEscUp(evt) {
      evt.preventDefault();

      if (evt.key === "Escape") {
        // closePopup(document.querySelector(".modal_opened"));
        this.close();
      }
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this = this;

      this._popupElement.addEventListener("click", function (evt) {
        if (evt.target.classList.contains("modal") // || evt.target.classList.contains()
        ) {
          _this.close();
        }
      });
    }
  }, {
    key: "open",
    value: function open() {
      this._popupElement.classList.add("modal_opened");

      document.addEventListener("keydown", this._handleEscUp);
    }
  }, {
    key: "close",
    value: function close() {
      this._popupElement.classList.remove("modal_opened");

      document.removeEventListener("keydown", this._handleEscUp);
    }
  }]);

  return Popup;
}();



/***/ }),

/***/ "./src/components/Section.js":
/*!***********************************!*\
  !*** ./src/components/Section.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Section)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Section = /*#__PURE__*/function () {
  // const addCardPopup = document.querySelector("#add-card-popup");
  // constructor({items, renderer}, template){
  function Section(_ref, containerSelector) {
    var items = _ref.items,
        renderer = _ref.renderer;

    _classCallCheck(this, Section);

    this._items = items;
    this._renderer = renderer;
    this._containerSelector = document.querySelector("".concat(containerSelector)); // const addCardPopup = document.querySelector("#add-card-popup");
    // this._addCardPopup = document.querySelector(`.${addCardPopup}`);
    // this._addCardPopup = document.querySelector(items);
    // this._element = document.querySelector(`${containerSelector}`);
  }

  _createClass(Section, [{
    key: "renderItems",
    value: function renderItems(element) {
      var _this = this;

      element.forEach(function (data) {
        _this._renderer(data);
      });
    }
  }, {
    key: "addItem",
    value: function addItem(element) {
      // this._element.prepend(element);
      this._element.append(element);
    }
  }]);

  return Section;
}();



/***/ }),

/***/ "./src/utils/constants.js":
/*!********************************!*\
  !*** ./src/utils/constants.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formValidatorConfig": () => (/* binding */ formValidatorConfig),
/* harmony export */   "initialCards": () => (/* binding */ initialCards),
/* harmony export */   "selectors": () => (/* binding */ selectors)
/* harmony export */ });
var initialCards = [{
  //NAME
  title: "Lake & Mountain",
  //LINK
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
}];
var formValidatorConfig = {
  inputSelector: ".form-name__input",
  submitButtonSelector: ".form-name__save-button",
  inactiveButtonClass: "form-name__save-button_disabled",
  inputErrorClass: "form-name__modal-type_error",
  errorClass: "modal__popup__error_visible"
};
var selectors = {
  cardSection: ".elements-grid__cards",
  //card list
  cardTemplate: "#card-template" //card template
  // previewPopup: "popup_type_image",

}; // export const titleInput = document.querySelector("#list-title");
// export const subtitleInput = document.querySelector("#list-subtitle");
// export const cardTitleInput = document.querySelector("#card-title");
// export const cardUrlInput = document.querySelector("#card-url");
// export const modalImageElement = imagePopup.querySelector(".modal__popup-image");
// export const modalCaption = imagePopup.querySelector(".modal__popup-caption");
// export const editFormBtn = document.querySelector(".profile__edit-button");
// export const addCardBtn = document.querySelector(".profile__plus-button");
// // const listTitle = document.querySelector(".profile__title");
// // const listSubtitle = document.querySelector(".profile__subtitle");
// // const closeProfileButton = document.querySelector("#close-profile-popup");
// // const closeCardButton = document.querySelector("#close-card-popup");
// // const closeImagePreviewButton = document.querySelector("#close-image-popup");
// export const cardCreateBtn = document.querySelector("#create-card-button");
// export const profilePopup = document.querySelector("#edit-profile-popup"); //.popup__form
// export const addCardPopup = document.querySelector("#add-card-popup");
// export const formProfile = document.querySelector("#edit-profile-popup");
// export const formCard = document.querySelector("#add-card-popup");
// //adding class .form-name as a second argument of validator ?
// export const formProfile = document.querySelector("#edit-profile-popup .form-name");
// export const formCard = document.querySelector("#add-card-popup .form-name");
// export const imagePopup = document.querySelector("#image-popup");

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/pages/index.css");
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Card */ "./src/components/Card.js");
/* harmony import */ var _components_FormValidator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/FormValidator */ "./src/components/FormValidator.js");
/* harmony import */ var _components_Section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Section */ "./src/components/Section.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/constants.js */ "./src/utils/constants.js");
 //import all classes


 // import Popup from '../components/Popup';
// import PopupWithImages from '../components/PopupWithImages';
// import PopupWithForm from '../components/PopupWithForm';

 // import UserInfo from '../components/UserInfo';

 // function addCardToPage(card) {
//   cardList.prepend(card);
// }
// function renderCard(data) {
//   const card = new Card(cardTemplate, data);
//   addCardToPage(card.render(data));
// }
//Cards rendering
// initialCards.forEach((data) => {
//   renderCard(data, formCard);
// });
// initialCards.forEach(renderCard);

var CardSection = new _components_Section__WEBPACK_IMPORTED_MODULE_3__["default"]({
  renderer: function renderer(data) {
    var cardEl = new _components_Card__WEBPACK_IMPORTED_MODULE_1__["default"](data, _utils_constants_js__WEBPACK_IMPORTED_MODULE_4__.selectors.cardTemplate);
    CardSection.addItem(cardEl.render()); // const cardEl = new Card(item, selectors.cardTemplate);
    // const cardEl = renderCard(data).render();
    // const cardEl = new Card(items, selectors.cardTemplate);
    // cardSection.addItem(cardEl.render());
  }
}, // selector: selectors.cardSection,
_utils_constants_js__WEBPACK_IMPORTED_MODULE_4__.selectors.cardSection);
CardSection.renderItems(_utils_constants_js__WEBPACK_IMPORTED_MODULE_4__.initialCards); // selector:  selectors.cardSection,}
// },"elements-grid__cards",
//},
//);
//template == selector in Card.js
// template: selectors.cardSection,
// selectors.cardSection
// cardSection.initialCards;
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0NDSkE7O0FBQ0E7Q0FFQTtBQUNBO0FBQ0E7O0NBRUE7O0NBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1DLFdBQVcsR0FBSSxJQUFJZCwyREFBSixDQUFhO0FBQ2hDRyxFQUFBQSxRQUFRLEVBQUUsa0JBQUNsRixJQUFELEVBQVU7QUFDbEIsUUFBTThGLE1BQU0sR0FBRyxJQUFJakcsd0RBQUosQ0FBU0csSUFBVCxFQUFlMEYsdUVBQWYsQ0FBZjtBQUNBRyxJQUFBQSxXQUFXLENBQUNFLE9BQVosQ0FBb0JELE1BQU0sQ0FBQ0UsTUFBUCxFQUFwQixFQUZrQixDQUdsQjtBQUNBO0FBQ0E7QUFDQTtBQUNEO0FBUitCLENBQWIsRUFVbkI7QUFDQU4sc0VBWG1CLENBQXJCO0FBY0FHLFdBQVcsQ0FBQ0ksV0FBWixDQUF3QlYsNkRBQXhCLEdBRUU7QUFDRjtBQUNFO0FBQ0Y7QUFDRTtBQUNBO0FBQ0E7QUFHRiw0QiIsInNvdXJjZXMiOlsid2VicGFjazovL3NwcmludC04Ly4vc3JjL2NvbXBvbmVudHMvQ2FyZC5qcyIsIndlYnBhY2s6Ly9zcHJpbnQtOC8uL3NyYy9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vc3ByaW50LTgvLi9zcmMvY29tcG9uZW50cy9Qb3B1cC5qcyIsIndlYnBhY2s6Ly9zcHJpbnQtOC8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vc3ByaW50LTgvLi9zcmMvdXRpbHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL3NwcmludC04Ly4vc3JjL3BhZ2VzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9zcHJpbnQtOC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zcHJpbnQtOC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc3ByaW50LTgvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zcHJpbnQtOC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3NwcmludC04Ly4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkIGV4dGVuZHMgUG9wdXAge1xuICBjb25zdHJ1Y3Rvcih7ZGF0YSwgaGFuZGxlQ2FyZFByZXZpZXd9LCB0ZW1wbGF0ZSwgcG9wdXBTZWxlY3Rvcikge1xuICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpO1xuICAgIHRoaXMuX3RlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgdGhpcy5fZGF0YSA9IGRhdGE7XG4gICAgLy8gdGhpcy5fdGl0bGUgPSBkYXRhLnRpdGxlO1xuICAgIC8vIHRoaXMuX3VybCA9IGRhdGEudXJsO1xuICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsO1xuICAgIHRoaXMuX2hhbmRsZUNhcmRQcmV2aWV3ID0gaGFuZGxlQ2FyZFByZXZpZXc7XG4gICAgLy8gdGhpcy5faGFuZGxlQ2FyZENsaWNrID0gaGFuZGxlQ2FyZENsaWNrO1xuICB9XG5cbiAgLy8gQ2FyZCB0ZW1wbGF0ZVxuICBfZ2V0RWxlbWVudCA9ICgpID0+IHtcbiAgICAvLyB0aGlzLl9lbGVtZW50ID0gdGhpcy5fdGVtcGxhdGUuY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRzLWdyaWRfX2NhcmRcIikuY2xvbmVOb2RlKHRydWUpO1xuICAgIHJldHVybiB0aGlzLl90ZW1wbGF0ZS5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWxlbWVudHMtZ3JpZF9fY2FyZFwiKS5jbG9uZU5vZGUodHJ1ZSk7XG4gIH1cblxuICAvL0NhcmQgcHJldmlldyBoYW5kbGVyIHdoZW4gY2xpY2tlZCBvblxuICBfaGFuZGxlQ2FyZFByZXZpZXcgPSAoKSA9PiB7XG4gICAgbW9kYWxJbWFnZUVsZW1lbnQuc3JjID0gdGhpcy5fdXJsO1xuICAgIG1vZGFsQ2FwdGlvbi50ZXh0Q29udGVudCA9IHRoaXMuX3RpdGxlO1xuICAgIG1vZGFsSW1hZ2VFbGVtZW50LmFsdCA9YGltYWdlIG9mJHt1cmx9YDtcblxuICAgIG9wZW5Qb3B1cChpbWFnZVBvcHVwKTtcbiAgfTtcblxuICAvL0NhcmQgbGlrZSBoYW5kbGVyL3RvZ2dsZXJcbiAgX2hhbmRsZUxpa2VJY29uID0gKCkgPT4ge1xuICAgIHRoaXMuX2NhcmRMaWtlQnV0dG9uLmNsYXNzTGlzdFxuICAgIC50b2dnbGUoXCJlbGVtZW50cy1ncmlkX19pY29uLWFjdGl2ZVwiKTtcbiAgfTtcblxuICAvL0NhcmQgcmVtb3ZhbCBoYW5kbGVyXG4gIF9oYW5kbGVEZWxldGVDYXJkID0gKCkgPT4ge1xuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlKCk7XG4gICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcbiAgfTtcblxuICAvL0V2ZW50IGxpc3RlbmVyc1xuICBfc2V0RXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgdGhpcy5fY2FyZExpa2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldnQpID0+IHsgLy9jYXJkIGxpa2UgZXZlbnQgbGlzdGVuZXJcbiAgICAgIHRoaXMuX2hhbmRsZUxpa2VJY29uKGV2dCk7XG4gICAgfSk7XG4gICAgdGhpcy5fZGVsZXRlQ2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2dCkgPT4geyAvL2NhcmQgZGVsZXRlIGV2ZW50IGxpc3RlbmVyXG4gICAgICB0aGlzLl9oYW5kbGVEZWxldGVDYXJkKGV2dCk7XG4gICAgfSk7XG4gICAgdGhpcy5faW1hZ2VFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZ0KSA9PiB7IC8vY2FyZCBwcmV2aWV3IGV2ZW50IGxpc3RlbmVyXG4gICAgICB0aGlzLl9oYW5kbGVDYXJkUHJldmlldyhldnQpO1xuICAgIH0pO1xuICB9O1xuXG4gIC8vVGVtcGxhdGUgZGlzcGxheWluZ1xuICByZW5kZXIgPSAoKSA9PiB7XG4gICAgdGhpcy5fZWxlbWVudCA9IHRoaXMuX2dldEVsZW1lbnQoKTtcbiAgICB0aGlzLl9pbWFnZUVsZW1lbnQgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWxlbWVudHMtZ3JpZF9faW1hZ2VcIik7XG4gICAgdGhpcy5fdGl0bGVFbGVtZW50ID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRzLWdyaWRfX3RleHRcIik7XG4gICAgdGhpcy5faW1hZ2VFbGVtZW50LnNyYyA9IHRoaXMuX3VybDtcbiAgICB0aGlzLl9pbWFnZUVsZW1lbnQuYWx0ID0gdGhpcy5fdXJsO1xuICAgIHRoaXMuX3RpdGxlRWxlbWVudC50ZXh0Q29udGVudCA9IHRoaXMuX3RpdGxlO1xuICAgIHRoaXMuX2RlbGV0ZUNhcmQgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWxlbWVudHMtZ3JpZF9fZGVsZXRlLWJ1dHRvblwiKTtcbiAgICB0aGlzLl9jYXJkTGlrZUJ1dHRvbiA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbGVtZW50cy1ncmlkX19pY29uXCIpO1xuICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7XG4gIH07XG59XG5cbi8vIGV4cG9ydCBkZWZhdWx0IENhcmQ7IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybVZhbGlkYXRvciB7XG4gIGNvbnN0cnVjdG9yKHNldHRpbmdzLCBmb3JtRWwpIHtcbiAgICB0aGlzLl9pbnB1dFNlbGVjdG9yID0gc2V0dGluZ3MuaW5wdXRTZWxlY3RvcjtcbiAgICB0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3RvciA9IHNldHRpbmdzLnN1Ym1pdEJ1dHRvblNlbGVjdG9yO1xuICAgIHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MgPSBzZXR0aW5ncy5pbmFjdGl2ZUJ1dHRvbkNsYXNzO1xuICAgIHRoaXMuX2lucHV0RXJyb3JDbGFzcyA9IHNldHRpbmdzLmlucHV0RXJyb3JDbGFzcztcbiAgICB0aGlzLl9lcnJvckNsYXNzID0gc2V0dGluZ3MuZXJyb3JDbGFzcztcbiAgICB0aGlzLl9mb3JtRWwgPSBmb3JtRWw7XG4gIH1cblxuICBfaXNJbnZhbGlkSW5wdXQoaW5wdXRFbCkge1xuICAgIHJldHVybiAhaW5wdXRFbC52YWxpZGl0eS52YWxpZDtcbiAgfVxuXG4gIF9zaG93RXJyb3IoaW5wdXRFbCkge1xuICAgIGNvbnN0IGVycm9yRWwgPSB0aGlzLl9mb3JtRWwucXVlcnlTZWxlY3RvcihgIyR7aW5wdXRFbC5pZH1gKTtcbiAgICBlcnJvckVsLmNsYXNzTGlzdC5hZGQodGhpcy5fZXJyb3JDbGFzcyk7XG4gICAgZXJyb3JFbC50ZXh0Q29udGVudCA9IGlucHV0RWwudmFsaWRhdGlvbk1lc3NhZ2U7XG4gICAgaW5wdXRFbC5jbGFzc0xpc3QuYWRkKHRoaXMuX2lucHV0RXJyb3JDbGFzcyk7XG4gIH1cblxuICBfaGlkZUVycm9yKGlucHV0RWwpIHtcbiAgICBjb25zdCBlcnJvckVsID0gdGhpcy5fZm9ybUVsLnF1ZXJ5U2VsZWN0b3IoYCMke2lucHV0RWwuaWR9YCk7XG4gICAgZXJyb3JFbC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2Vycm9yQ2xhc3MpO1xuICAgIGVycm9yRWwudGV4dENvbnRlbnQgPSAnICc7XG4gICAgaW5wdXRFbC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2lucHV0RXJyb3JDbGFzcyk7XG4gIH1cblxuICBfdG9nZ2xlQnV0dG9uKCkge1xuICAgIGlmICh0aGlzLl9pbnB1dExpc3Quc29tZSh0aGlzLl9pc0ludmFsaWRJbnB1dCkpIHtcbiAgICAgIHRoaXMuX2J1dHRvbkVsLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuX2J1dHRvbkVsLmNsYXNzTGlzdFxuICAgICAgLmFkZCh0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fYnV0dG9uRWwuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2J1dHRvbkVsLmNsYXNzTGlzdFxuICAgICAgLnJlbW92ZSh0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcbiAgICB9XG4gIH1cblxuICBfY2hlY2tJbnB1dFZhbGlkaXR5KGlucHV0RWwpIHtcbiAgICBjb25zdCBlcnJvckVsID0gdGhpcy5fZm9ybUVsLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgIyR7aW5wdXRFbC5pZH0tZXJyb3JgKTtcbiAgICBpZiAodGhpcy5faXNJbnZhbGlkSW5wdXQoaW5wdXRFbCkpIHtcbiAgICAgIHRoaXMuX3Nob3dFcnJvcihlcnJvckVsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5faGlkZUVycm9yKGVycm9yRWwpO1xuICAgIH1cbiAgfVxuXG4gIF9zZXRFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLl9pbnB1dExpc3QgPSBBcnJheS5mcm9tKHRoaXMuX2Zvcm1FbC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX2lucHV0U2VsZWN0b3IpKTtcbiAgICB0aGlzLl9idXR0b25FbCA9IHRoaXMuX2Zvcm1FbC5xdWVyeVNlbGVjdG9yKHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yKTtcblxuICAgIHRoaXMuX2lucHV0TGlzdC5mb3JFYWNoKChpbnB1dEVsKSA9PiB7XG4gICAgICBpbnB1dEVsLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2NoZWNrSW5wdXRWYWxpZGl0eShpbnB1dEVsKTtcbiAgICAgICAgdGhpcy5fdG9nZ2xlQnV0dG9uKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlc2V0Rm9ybSgpIHtcbiAgICB0aGlzLl9mb3JtRWwucmVzZXQoKTtcbiAgICB0aGlzLl90b2dnbGVCdXR0b24oKTtcbiAgfVxuXG4gIGVuYWJsZVZhbGlkYXRpb24oKSB7XG4gICAgdGhpcy5fZm9ybUVsLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycygpO1xuICB9XG59XG5cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwIHtcbiAgICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yKXtcbiAgICAgICAgdGhpcy5fcG9wdXBFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7cG9wdXBTZWxlY3Rvcn1gKTtcbiAgICAgICAgdGhpcy5faGFuZGxlRXNjVXAgPSB0aGlzLl9oYW5kbGVFc2NVcC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIF9oYW5kbGVFc2NVcChldnQpIHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKGV2dC5rZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICAgICAgLy8gY2xvc2VQb3B1cChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX29wZW5lZFwiKSk7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICAgIHRoaXMuX3BvcHVwRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2dCkgPT4ge1xuICAgICAgICBpZihcbiAgICAgICAgICAgIGV2dC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibW9kYWxcIilcbiAgICAgICAgICAgIC8vIHx8IGV2dC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKClcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBvcGVuKCl7XG4gICAgICB0aGlzLl9wb3B1cEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm1vZGFsX29wZW5lZFwiKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuX2hhbmRsZUVzY1VwKTtcbiAgICB9XG5cbiAgICBjbG9zZSgpe1xuICAgICAgdGhpcy5fcG9wdXBFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJtb2RhbF9vcGVuZWRcIik7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9oYW5kbGVFc2NVcCk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdGlvbiB7XG4gIC8vIGNvbnN0IGFkZENhcmRQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLWNhcmQtcG9wdXBcIik7XG4gIC8vIGNvbnN0cnVjdG9yKHtpdGVtcywgcmVuZGVyZXJ9LCB0ZW1wbGF0ZSl7XG4gICAgY29uc3RydWN0b3Ioe2l0ZW1zLCByZW5kZXJlcn0sIGNvbnRhaW5lclNlbGVjdG9yKXtcbiAgICAgIHRoaXMuX2l0ZW1zID0gaXRlbXM7XG4gICAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyO1xuICAgICAgdGhpcy5fY29udGFpbmVyU2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAke2NvbnRhaW5lclNlbGVjdG9yfWApO1xuICAgICAgLy8gY29uc3QgYWRkQ2FyZFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtY2FyZC1wb3B1cFwiKTtcbiAgICAgIC8vIHRoaXMuX2FkZENhcmRQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2FkZENhcmRQb3B1cH1gKTtcbiAgICAgIC8vIHRoaXMuX2FkZENhcmRQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaXRlbXMpO1xuICAgICAgLy8gdGhpcy5fZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7Y29udGFpbmVyU2VsZWN0b3J9YCk7XG4gIH1cblxuICByZW5kZXJJdGVtcyhlbGVtZW50KSB7XG4gICAgICBlbGVtZW50LmZvckVhY2goKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyKGRhdGEpO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkSXRlbShlbGVtZW50KSB7XG4gICAgLy8gdGhpcy5fZWxlbWVudC5wcmVwZW5kKGVsZW1lbnQpO1xuICB0aGlzLl9lbGVtZW50LmFwcGVuZChlbGVtZW50KTtcbiAgfVxufVxuXG4iLCJcbmV4cG9ydCBjb25zdCBpbml0aWFsQ2FyZHMgPSBbXG4gIHtcbiAgICAvL05BTUVcbiAgICB0aXRsZTogXCJMYWtlICYgTW91bnRhaW5cIixcbiAgICAvL0xJTktcbiAgICB1cmw6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE2Mzg4MDI0MjI2MzMtNjk0MDg4NjgwMzU5P2l4bGliPXJiLTEuMi4xJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz02ODcmcT04MFwiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiTGFrZSBMb3Vpc2VcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUvbGFrZS1sb3Vpc2UuanBnXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJCYWxkIE1vdW50YWluc1wiLFxuICAgIHVybDogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS9iYWxkLW1vdW50YWlucy5qcGdcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkxhdGVtYXJcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUvbGF0ZW1hci5qcGdcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIlZhbm9pc2UgTmF0aW9uYWwgUGFya1wiLFxuICAgIHVybDogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS92YW5vaXNlLmpwZ1wiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiTGFnbyBkaSBicmFpZXNcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUvbGFnby5qcGdcIixcbiAgfSxcbl07XG5cblxuZXhwb3J0IGNvbnN0IGZvcm1WYWxpZGF0b3JDb25maWcgPSB7XG4gIGlucHV0U2VsZWN0b3I6IFwiLmZvcm0tbmFtZV9faW5wdXRcIixcbiAgc3VibWl0QnV0dG9uU2VsZWN0b3I6IFwiLmZvcm0tbmFtZV9fc2F2ZS1idXR0b25cIixcbiAgaW5hY3RpdmVCdXR0b25DbGFzczogXCJmb3JtLW5hbWVfX3NhdmUtYnV0dG9uX2Rpc2FibGVkXCIsXG4gIGlucHV0RXJyb3JDbGFzczogXCJmb3JtLW5hbWVfX21vZGFsLXR5cGVfZXJyb3JcIixcbiAgZXJyb3JDbGFzczogXCJtb2RhbF9fcG9wdXBfX2Vycm9yX3Zpc2libGVcIixcbn07XG5cblxuZXhwb3J0IGNvbnN0IHNlbGVjdG9ycyA9IHtcbiAgY2FyZFNlY3Rpb246IFwiLmVsZW1lbnRzLWdyaWRfX2NhcmRzXCIsIC8vY2FyZCBsaXN0XG4gIGNhcmRUZW1wbGF0ZTogXCIjY2FyZC10ZW1wbGF0ZVwiLC8vY2FyZCB0ZW1wbGF0ZVxuICAvLyBwcmV2aWV3UG9wdXA6IFwicG9wdXBfdHlwZV9pbWFnZVwiLFxufVxuXG4vLyBleHBvcnQgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbGlzdC10aXRsZVwiKTtcbi8vIGV4cG9ydCBjb25zdCBzdWJ0aXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsaXN0LXN1YnRpdGxlXCIpO1xuLy8gZXhwb3J0IGNvbnN0IGNhcmRUaXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYXJkLXRpdGxlXCIpO1xuLy8gZXhwb3J0IGNvbnN0IGNhcmRVcmxJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FyZC11cmxcIik7XG5cbi8vIGV4cG9ydCBjb25zdCBtb2RhbEltYWdlRWxlbWVudCA9IGltYWdlUG9wdXAucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fcG9wdXAtaW1hZ2VcIik7XG4vLyBleHBvcnQgY29uc3QgbW9kYWxDYXB0aW9uID0gaW1hZ2VQb3B1cC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19wb3B1cC1jYXB0aW9uXCIpO1xuLy8gZXhwb3J0IGNvbnN0IGVkaXRGb3JtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19lZGl0LWJ1dHRvblwiKTtcbi8vIGV4cG9ydCBjb25zdCBhZGRDYXJkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19wbHVzLWJ1dHRvblwiKTtcblxuLy8gLy8gY29uc3QgbGlzdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX190aXRsZVwiKTtcbi8vIC8vIGNvbnN0IGxpc3RTdWJ0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fc3VidGl0bGVcIik7XG4vLyAvLyBjb25zdCBjbG9zZVByb2ZpbGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nsb3NlLXByb2ZpbGUtcG9wdXBcIik7XG4vLyAvLyBjb25zdCBjbG9zZUNhcmRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nsb3NlLWNhcmQtcG9wdXBcIik7XG4vLyAvLyBjb25zdCBjbG9zZUltYWdlUHJldmlld0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvc2UtaW1hZ2UtcG9wdXBcIik7XG5cbi8vIGV4cG9ydCBjb25zdCBjYXJkQ3JlYXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjcmVhdGUtY2FyZC1idXR0b25cIik7XG5cbi8vIGV4cG9ydCBjb25zdCBwcm9maWxlUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXQtcHJvZmlsZS1wb3B1cFwiKTsgLy8ucG9wdXBfX2Zvcm1cbi8vIGV4cG9ydCBjb25zdCBhZGRDYXJkUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1jYXJkLXBvcHVwXCIpO1xuXG4vLyBleHBvcnQgY29uc3QgZm9ybVByb2ZpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXQtcHJvZmlsZS1wb3B1cFwiKTtcbi8vIGV4cG9ydCBjb25zdCBmb3JtQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLWNhcmQtcG9wdXBcIik7XG5cbi8vIC8vYWRkaW5nIGNsYXNzIC5mb3JtLW5hbWUgYXMgYSBzZWNvbmQgYXJndW1lbnQgb2YgdmFsaWRhdG9yID9cbi8vIGV4cG9ydCBjb25zdCBmb3JtUHJvZmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdC1wcm9maWxlLXBvcHVwIC5mb3JtLW5hbWVcIik7XG4vLyBleHBvcnQgY29uc3QgZm9ybUNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1jYXJkLXBvcHVwIC5mb3JtLW5hbWVcIik7XG4vLyBleHBvcnQgY29uc3QgaW1hZ2VQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW1hZ2UtcG9wdXBcIik7XG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL2luZGV4LmNzcyc7XG5cbi8vaW1wb3J0IGFsbCBjbGFzc2VzXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkXCI7XG5pbXBvcnQgRm9ybVZhbGlkYXRvciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yXCI7XG4vLyBpbXBvcnQgUG9wdXAgZnJvbSAnLi4vY29tcG9uZW50cy9Qb3B1cCc7XG4vLyBpbXBvcnQgUG9wdXBXaXRoSW1hZ2VzIGZyb20gJy4uL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2VzJztcbi8vIGltcG9ydCBQb3B1cFdpdGhGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybSc7XG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL1NlY3Rpb24nO1xuLy8gaW1wb3J0IFVzZXJJbmZvIGZyb20gJy4uL2NvbXBvbmVudHMvVXNlckluZm8nO1xuaW1wb3J0IHsgaW5pdGlhbENhcmRzLCBzZWxlY3RvcnMgfSBmcm9tIFwiLi4vdXRpbHMvY29uc3RhbnRzLmpzXCI7XG5cbi8vIGZ1bmN0aW9uIGFkZENhcmRUb1BhZ2UoY2FyZCkge1xuLy8gICBjYXJkTGlzdC5wcmVwZW5kKGNhcmQpO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiByZW5kZXJDYXJkKGRhdGEpIHtcbi8vICAgY29uc3QgY2FyZCA9IG5ldyBDYXJkKGNhcmRUZW1wbGF0ZSwgZGF0YSk7XG4vLyAgIGFkZENhcmRUb1BhZ2UoY2FyZC5yZW5kZXIoZGF0YSkpO1xuLy8gfVxuXG4vL0NhcmRzIHJlbmRlcmluZ1xuLy8gaW5pdGlhbENhcmRzLmZvckVhY2goKGRhdGEpID0+IHtcbi8vICAgcmVuZGVyQ2FyZChkYXRhLCBmb3JtQ2FyZCk7XG4vLyB9KTtcbi8vIGluaXRpYWxDYXJkcy5mb3JFYWNoKHJlbmRlckNhcmQpO1xuXG5jb25zdCBDYXJkU2VjdGlvbiA9ICBuZXcgU2VjdGlvbiAoe1xuICByZW5kZXJlcjogKGRhdGEpID0+IHtcbiAgICBjb25zdCBjYXJkRWwgPSBuZXcgQ2FyZChkYXRhLCBzZWxlY3RvcnMuY2FyZFRlbXBsYXRlKTtcbiAgICBDYXJkU2VjdGlvbi5hZGRJdGVtKGNhcmRFbC5yZW5kZXIoKSk7XG4gICAgLy8gY29uc3QgY2FyZEVsID0gbmV3IENhcmQoaXRlbSwgc2VsZWN0b3JzLmNhcmRUZW1wbGF0ZSk7XG4gICAgLy8gY29uc3QgY2FyZEVsID0gcmVuZGVyQ2FyZChkYXRhKS5yZW5kZXIoKTtcbiAgICAvLyBjb25zdCBjYXJkRWwgPSBuZXcgQ2FyZChpdGVtcywgc2VsZWN0b3JzLmNhcmRUZW1wbGF0ZSk7XG4gICAgLy8gY2FyZFNlY3Rpb24uYWRkSXRlbShjYXJkRWwucmVuZGVyKCkpO1xuICB9LFxufSxcbiAgLy8gc2VsZWN0b3I6IHNlbGVjdG9ycy5jYXJkU2VjdGlvbixcbiAgc2VsZWN0b3JzLmNhcmRTZWN0aW9uLFxuKTtcblxuQ2FyZFNlY3Rpb24ucmVuZGVySXRlbXMoaW5pdGlhbENhcmRzKTtcblxuICAvLyBzZWxlY3RvcjogIHNlbGVjdG9ycy5jYXJkU2VjdGlvbix9XG4vLyB9LFwiZWxlbWVudHMtZ3JpZF9fY2FyZHNcIixcbiAgLy99LFxuLy8pO1xuICAvL3RlbXBsYXRlID09IHNlbGVjdG9yIGluIENhcmQuanNcbiAgLy8gdGVtcGxhdGU6IHNlbGVjdG9ycy5jYXJkU2VjdGlvbixcbiAgLy8gc2VsZWN0b3JzLmNhcmRTZWN0aW9uXG5cblxuLy8gY2FyZFNlY3Rpb24uaW5pdGlhbENhcmRzO1xuXG5cblxuXG4iXSwibmFtZXMiOlsiUG9wdXAiLCJDYXJkIiwidGVtcGxhdGUiLCJwb3B1cFNlbGVjdG9yIiwiZGF0YSIsImhhbmRsZUNhcmRQcmV2aWV3IiwiX3RlbXBsYXRlIiwiY29udGVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbG9uZU5vZGUiLCJtb2RhbEltYWdlRWxlbWVudCIsInNyYyIsIl91cmwiLCJtb2RhbENhcHRpb24iLCJ0ZXh0Q29udGVudCIsIl90aXRsZSIsImFsdCIsInVybCIsIm9wZW5Qb3B1cCIsImltYWdlUG9wdXAiLCJfY2FyZExpa2VCdXR0b24iLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJfZWxlbWVudCIsInJlbW92ZSIsImVsZW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZ0IiwiX2hhbmRsZUxpa2VJY29uIiwiX2RlbGV0ZUNhcmQiLCJfaGFuZGxlRGVsZXRlQ2FyZCIsIl9pbWFnZUVsZW1lbnQiLCJfaGFuZGxlQ2FyZFByZXZpZXciLCJfZ2V0RWxlbWVudCIsIl90aXRsZUVsZW1lbnQiLCJfc2V0RXZlbnRMaXN0ZW5lcnMiLCJfZGF0YSIsIkZvcm1WYWxpZGF0b3IiLCJzZXR0aW5ncyIsImZvcm1FbCIsIl9pbnB1dFNlbGVjdG9yIiwiaW5wdXRTZWxlY3RvciIsIl9zdWJtaXRCdXR0b25TZWxlY3RvciIsInN1Ym1pdEJ1dHRvblNlbGVjdG9yIiwiX2luYWN0aXZlQnV0dG9uQ2xhc3MiLCJpbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiX2lucHV0RXJyb3JDbGFzcyIsImlucHV0RXJyb3JDbGFzcyIsIl9lcnJvckNsYXNzIiwiZXJyb3JDbGFzcyIsIl9mb3JtRWwiLCJpbnB1dEVsIiwidmFsaWRpdHkiLCJ2YWxpZCIsImVycm9yRWwiLCJpZCIsImFkZCIsInZhbGlkYXRpb25NZXNzYWdlIiwiX2lucHV0TGlzdCIsInNvbWUiLCJfaXNJbnZhbGlkSW5wdXQiLCJfYnV0dG9uRWwiLCJkaXNhYmxlZCIsIl9zaG93RXJyb3IiLCJfaGlkZUVycm9yIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJfY2hlY2tJbnB1dFZhbGlkaXR5IiwiX3RvZ2dsZUJ1dHRvbiIsInJlc2V0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiX3BvcHVwRWxlbWVudCIsImRvY3VtZW50IiwiX2hhbmRsZUVzY1VwIiwiYmluZCIsImtleSIsImNsb3NlIiwidGFyZ2V0IiwiY29udGFpbnMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiU2VjdGlvbiIsImNvbnRhaW5lclNlbGVjdG9yIiwiaXRlbXMiLCJyZW5kZXJlciIsIl9pdGVtcyIsIl9yZW5kZXJlciIsIl9jb250YWluZXJTZWxlY3RvciIsImFwcGVuZCIsImluaXRpYWxDYXJkcyIsInRpdGxlIiwiZm9ybVZhbGlkYXRvckNvbmZpZyIsInNlbGVjdG9ycyIsImNhcmRTZWN0aW9uIiwiY2FyZFRlbXBsYXRlIiwiQ2FyZFNlY3Rpb24iLCJjYXJkRWwiLCJhZGRJdGVtIiwicmVuZGVyIiwicmVuZGVySXRlbXMiXSwic291cmNlUm9vdCI6IiJ9