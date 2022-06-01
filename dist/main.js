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
      return _this._template.content.querySelector(".elements-grid__card").cloneNode(true); // this._element = this._template.content.querySelector(".elements-grid__card").cloneNode(true);
      // return this._element;
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

// import Popup from "./Popup";
var Section = /*#__PURE__*/function () {
  // const addCardPopup = document.querySelector("#add-card-popup");
  // constructor({items, renderer}, template){
  function Section(_ref, containerSelector) {
    var items = _ref.items,
        renderer = _ref.renderer;

    _classCallCheck(this, Section);

    // super(popupSelector);
    this._items = items;
    this._renderer = renderer; // this._containerSelector = document.querySelector(containerSelector);

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
      this._element.prepend(element); // this._element.append(element);

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

};

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
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/constants */ "./src/utils/constants.js");
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

var cardDisplay = document.querySelector(_utils_constants__WEBPACK_IMPORTED_MODULE_4__.selectors.cardTemplate);
var CardSection = new _components_Section__WEBPACK_IMPORTED_MODULE_3__["default"]({
  renderer: function renderer(item) {
    var cardEl = new _components_Card__WEBPACK_IMPORTED_MODULE_1__["default"](item, cardDisplay);
    CardSection.addItem(cardEl.render()); // const cardEl = new Card(item, selectors.cardTemplate);
    // const cardEl = renderCard(data).render();
    // const cardEl = new Card(items, selectors.cardTemplate);
    // cardSection.addItem(cardEl.render());
  }
}, // selector: selectors.cardSection,
_utils_constants__WEBPACK_IMPORTED_MODULE_4__.selectors.cardSection);
CardSection.renderItems(_utils_constants__WEBPACK_IMPORTED_MODULE_4__.initialCards); // selector:  selectors.cardSection,}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUMsV0FBVyxHQUFHdEIsUUFBUSxDQUFDbkUsYUFBVCxDQUF1QnNGLG9FQUF2QixDQUFwQjtBQUVBLElBQU1JLFdBQVcsR0FBSSxJQUFJZiwyREFBSixDQUFhO0FBQ2hDRyxFQUFBQSxRQUFRLEVBQUUsa0JBQUNhLElBQUQsRUFBVTtBQUNsQixRQUFNQyxNQUFNLEdBQUcsSUFBSW5HLHdEQUFKLENBQVNrRyxJQUFULEVBQWVGLFdBQWYsQ0FBZjtBQUNBQyxJQUFBQSxXQUFXLENBQUNHLE9BQVosQ0FBb0JELE1BQU0sQ0FBQ0UsTUFBUCxFQUFwQixFQUZrQixDQUdsQjtBQUNBO0FBQ0E7QUFDQTtBQUNEO0FBUitCLENBQWIsRUFVbkI7QUFDQVIsbUVBWG1CLENBQXJCO0FBY0FJLFdBQVcsQ0FBQ0ssV0FBWixDQUF3QlosMERBQXhCLEdBRUU7QUFDRjtBQUNFO0FBQ0Y7QUFDRTtBQUNBO0FBQ0E7QUFHRiw0QiIsInNvdXJjZXMiOlsid2VicGFjazovL3NwcmludC04Ly4vc3JjL2NvbXBvbmVudHMvQ2FyZC5qcyIsIndlYnBhY2s6Ly9zcHJpbnQtOC8uL3NyYy9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vc3ByaW50LTgvLi9zcmMvY29tcG9uZW50cy9Qb3B1cC5qcyIsIndlYnBhY2s6Ly9zcHJpbnQtOC8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vc3ByaW50LTgvLi9zcmMvdXRpbHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL3NwcmludC04Ly4vc3JjL3BhZ2VzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9zcHJpbnQtOC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zcHJpbnQtOC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc3ByaW50LTgvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zcHJpbnQtOC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3NwcmludC04Ly4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkIGV4dGVuZHMgUG9wdXAge1xuICBjb25zdHJ1Y3Rvcih7ZGF0YSwgaGFuZGxlQ2FyZFByZXZpZXd9LCB0ZW1wbGF0ZSwgcG9wdXBTZWxlY3Rvcikge1xuICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpO1xuICAgIHRoaXMuX3RlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgdGhpcy5fZGF0YSA9IGRhdGE7XG4gICAgLy8gdGhpcy5fdGl0bGUgPSBkYXRhLnRpdGxlO1xuICAgIC8vIHRoaXMuX3VybCA9IGRhdGEudXJsO1xuICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsO1xuICAgIHRoaXMuX2hhbmRsZUNhcmRQcmV2aWV3ID0gaGFuZGxlQ2FyZFByZXZpZXc7XG4gICAgLy8gdGhpcy5faGFuZGxlQ2FyZENsaWNrID0gaGFuZGxlQ2FyZENsaWNrO1xuICB9XG5cbiAgLy8gQ2FyZCB0ZW1wbGF0ZVxuICBfZ2V0RWxlbWVudCA9ICgpID0+IHtcbiAgICAgcmV0dXJuIHRoaXMuX3RlbXBsYXRlLmNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5lbGVtZW50cy1ncmlkX19jYXJkXCIpLmNsb25lTm9kZSh0cnVlKTtcbiAgICAvLyB0aGlzLl9lbGVtZW50ID0gdGhpcy5fdGVtcGxhdGUuY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRzLWdyaWRfX2NhcmRcIikuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICAvLyByZXR1cm4gdGhpcy5fZWxlbWVudDtcbiAgfVxuXG4gIC8vQ2FyZCBwcmV2aWV3IGhhbmRsZXIgd2hlbiBjbGlja2VkIG9uXG4gIF9oYW5kbGVDYXJkUHJldmlldyA9ICgpID0+IHtcbiAgICBtb2RhbEltYWdlRWxlbWVudC5zcmMgPSB0aGlzLl91cmw7XG4gICAgbW9kYWxDYXB0aW9uLnRleHRDb250ZW50ID0gdGhpcy5fdGl0bGU7XG4gICAgbW9kYWxJbWFnZUVsZW1lbnQuYWx0ID1gaW1hZ2Ugb2Yke3VybH1gO1xuXG4gICAgb3BlblBvcHVwKGltYWdlUG9wdXApO1xuICB9O1xuXG4gIC8vQ2FyZCBsaWtlIGhhbmRsZXIvdG9nZ2xlclxuICBfaGFuZGxlTGlrZUljb24gPSAoKSA9PiB7XG4gICAgdGhpcy5fY2FyZExpa2VCdXR0b24uY2xhc3NMaXN0XG4gICAgLnRvZ2dsZShcImVsZW1lbnRzLWdyaWRfX2ljb24tYWN0aXZlXCIpO1xuICB9O1xuXG4gIC8vQ2FyZCByZW1vdmFsIGhhbmRsZXJcbiAgX2hhbmRsZURlbGV0ZUNhcmQgPSAoKSA9PiB7XG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmUoKTtcbiAgICB0aGlzLmVsZW1lbnQgPSBudWxsO1xuICB9O1xuXG4gIC8vRXZlbnQgbGlzdGVuZXJzXG4gIF9zZXRFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgICB0aGlzLl9jYXJkTGlrZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2dCkgPT4geyAvL2NhcmQgbGlrZSBldmVudCBsaXN0ZW5lclxuICAgICAgdGhpcy5faGFuZGxlTGlrZUljb24oZXZ0KTtcbiAgICB9KTtcbiAgICB0aGlzLl9kZWxldGVDYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZ0KSA9PiB7IC8vY2FyZCBkZWxldGUgZXZlbnQgbGlzdGVuZXJcbiAgICAgIHRoaXMuX2hhbmRsZURlbGV0ZUNhcmQoZXZ0KTtcbiAgICB9KTtcbiAgICB0aGlzLl9pbWFnZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldnQpID0+IHsgLy9jYXJkIHByZXZpZXcgZXZlbnQgbGlzdGVuZXJcbiAgICAgIHRoaXMuX2hhbmRsZUNhcmRQcmV2aWV3KGV2dCk7XG4gICAgfSk7XG4gIH07XG5cbiAgLy9UZW1wbGF0ZSBkaXNwbGF5aW5nXG4gIHJlbmRlciA9ICgpID0+IHtcbiAgICB0aGlzLl9lbGVtZW50ID0gdGhpcy5fZ2V0RWxlbWVudCgpO1xuICAgIHRoaXMuX2ltYWdlRWxlbWVudCA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbGVtZW50cy1ncmlkX19pbWFnZVwiKTtcbiAgICB0aGlzLl90aXRsZUVsZW1lbnQgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWxlbWVudHMtZ3JpZF9fdGV4dFwiKTtcbiAgICB0aGlzLl9pbWFnZUVsZW1lbnQuc3JjID0gdGhpcy5fdXJsO1xuICAgIHRoaXMuX2ltYWdlRWxlbWVudC5hbHQgPSB0aGlzLl91cmw7XG4gICAgdGhpcy5fdGl0bGVFbGVtZW50LnRleHRDb250ZW50ID0gdGhpcy5fdGl0bGU7XG4gICAgdGhpcy5fZGVsZXRlQ2FyZCA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbGVtZW50cy1ncmlkX19kZWxldGUtYnV0dG9uXCIpO1xuICAgIHRoaXMuX2NhcmRMaWtlQnV0dG9uID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRzLWdyaWRfX2ljb25cIik7XG4gICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudDtcbiAgfTtcbn1cblxuLy8gZXhwb3J0IGRlZmF1bHQgQ2FyZDsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtVmFsaWRhdG9yIHtcbiAgY29uc3RydWN0b3Ioc2V0dGluZ3MsIGZvcm1FbCkge1xuICAgIHRoaXMuX2lucHV0U2VsZWN0b3IgPSBzZXR0aW5ncy5pbnB1dFNlbGVjdG9yO1xuICAgIHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yID0gc2V0dGluZ3Muc3VibWl0QnV0dG9uU2VsZWN0b3I7XG4gICAgdGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyA9IHNldHRpbmdzLmluYWN0aXZlQnV0dG9uQ2xhc3M7XG4gICAgdGhpcy5faW5wdXRFcnJvckNsYXNzID0gc2V0dGluZ3MuaW5wdXRFcnJvckNsYXNzO1xuICAgIHRoaXMuX2Vycm9yQ2xhc3MgPSBzZXR0aW5ncy5lcnJvckNsYXNzO1xuICAgIHRoaXMuX2Zvcm1FbCA9IGZvcm1FbDtcbiAgfVxuXG4gIF9pc0ludmFsaWRJbnB1dChpbnB1dEVsKSB7XG4gICAgcmV0dXJuICFpbnB1dEVsLnZhbGlkaXR5LnZhbGlkO1xuICB9XG5cbiAgX3Nob3dFcnJvcihpbnB1dEVsKSB7XG4gICAgY29uc3QgZXJyb3JFbCA9IHRoaXMuX2Zvcm1FbC5xdWVyeVNlbGVjdG9yKGAjJHtpbnB1dEVsLmlkfWApO1xuICAgIGVycm9yRWwuY2xhc3NMaXN0LmFkZCh0aGlzLl9lcnJvckNsYXNzKTtcbiAgICBlcnJvckVsLnRleHRDb250ZW50ID0gaW5wdXRFbC52YWxpZGF0aW9uTWVzc2FnZTtcbiAgICBpbnB1dEVsLmNsYXNzTGlzdC5hZGQodGhpcy5faW5wdXRFcnJvckNsYXNzKTtcbiAgfVxuXG4gIF9oaWRlRXJyb3IoaW5wdXRFbCkge1xuICAgIGNvbnN0IGVycm9yRWwgPSB0aGlzLl9mb3JtRWwucXVlcnlTZWxlY3RvcihgIyR7aW5wdXRFbC5pZH1gKTtcbiAgICBlcnJvckVsLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fZXJyb3JDbGFzcyk7XG4gICAgZXJyb3JFbC50ZXh0Q29udGVudCA9ICcgJztcbiAgICBpbnB1dEVsLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5faW5wdXRFcnJvckNsYXNzKTtcbiAgfVxuXG4gIF90b2dnbGVCdXR0b24oKSB7XG4gICAgaWYgKHRoaXMuX2lucHV0TGlzdC5zb21lKHRoaXMuX2lzSW52YWxpZElucHV0KSkge1xuICAgICAgdGhpcy5fYnV0dG9uRWwuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgdGhpcy5fYnV0dG9uRWwuY2xhc3NMaXN0XG4gICAgICAuYWRkKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9idXR0b25FbC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5fYnV0dG9uRWwuY2xhc3NMaXN0XG4gICAgICAucmVtb3ZlKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIF9jaGVja0lucHV0VmFsaWRpdHkoaW5wdXRFbCkge1xuICAgIGNvbnN0IGVycm9yRWwgPSB0aGlzLl9mb3JtRWwucXVlcnlTZWxlY3RvcihcbiAgICAgIGAjJHtpbnB1dEVsLmlkfS1lcnJvcmApO1xuICAgIGlmICh0aGlzLl9pc0ludmFsaWRJbnB1dChpbnB1dEVsKSkge1xuICAgICAgdGhpcy5fc2hvd0Vycm9yKGVycm9yRWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9oaWRlRXJyb3IoZXJyb3JFbCk7XG4gICAgfVxuICB9XG5cbiAgX3NldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHRoaXMuX2lucHV0TGlzdCA9IEFycmF5LmZyb20odGhpcy5fZm9ybUVsLnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5faW5wdXRTZWxlY3RvcikpO1xuICAgIHRoaXMuX2J1dHRvbkVsID0gdGhpcy5fZm9ybUVsLnF1ZXJ5U2VsZWN0b3IodGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IpO1xuXG4gICAgdGhpcy5faW5wdXRMaXN0LmZvckVhY2goKGlucHV0RWwpID0+IHtcbiAgICAgIGlucHV0RWwuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcbiAgICAgICAgdGhpcy5fY2hlY2tJbnB1dFZhbGlkaXR5KGlucHV0RWwpO1xuICAgICAgICB0aGlzLl90b2dnbGVCdXR0b24oKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmVzZXRGb3JtKCkge1xuICAgIHRoaXMuX2Zvcm1FbC5yZXNldCgpO1xuICAgIHRoaXMuX3RvZ2dsZUJ1dHRvbigpO1xuICB9XG5cbiAgZW5hYmxlVmFsaWRhdGlvbigpIHtcbiAgICB0aGlzLl9mb3JtRWwuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xuICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cbn1cblxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXAge1xuICAgIGNvbnN0cnVjdG9yKHBvcHVwU2VsZWN0b3Ipe1xuICAgICAgICB0aGlzLl9wb3B1cEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtwb3B1cFNlbGVjdG9yfWApO1xuICAgICAgICB0aGlzLl9oYW5kbGVFc2NVcCA9IHRoaXMuX2hhbmRsZUVzY1VwLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgX2hhbmRsZUVzY1VwKGV2dCkge1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAoZXZ0LmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgICAvLyBjbG9zZVBvcHVwKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfb3BlbmVkXCIpKTtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgdGhpcy5fcG9wdXBFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZ0KSA9PiB7XG4gICAgICAgIGlmKFxuICAgICAgICAgICAgZXZ0LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJtb2RhbFwiKVxuICAgICAgICAgICAgLy8gfHwgZXZ0LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIG9wZW4oKXtcbiAgICAgIHRoaXMuX3BvcHVwRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibW9kYWxfb3BlbmVkXCIpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5faGFuZGxlRXNjVXApO1xuICAgIH1cblxuICAgIGNsb3NlKCl7XG4gICAgICB0aGlzLl9wb3B1cEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcIm1vZGFsX29wZW5lZFwiKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuX2hhbmRsZUVzY1VwKTtcbiAgICB9XG59XG4iLCIvLyBpbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdGlvbiB7XG4gIC8vIGNvbnN0IGFkZENhcmRQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLWNhcmQtcG9wdXBcIik7XG4gIC8vIGNvbnN0cnVjdG9yKHtpdGVtcywgcmVuZGVyZXJ9LCB0ZW1wbGF0ZSl7XG4gICAgY29uc3RydWN0b3Ioe2l0ZW1zLCByZW5kZXJlcn0sIGNvbnRhaW5lclNlbGVjdG9yKXtcbiAgICAgIC8vIHN1cGVyKHBvcHVwU2VsZWN0b3IpO1xuICAgICAgdGhpcy5faXRlbXMgPSBpdGVtcztcbiAgICAgIHRoaXMuX3JlbmRlcmVyID0gcmVuZGVyZXI7XG4gICAgICAvLyB0aGlzLl9jb250YWluZXJTZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyU2VsZWN0b3IpO1xuICAgICAgdGhpcy5fY29udGFpbmVyU2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAke2NvbnRhaW5lclNlbGVjdG9yfWApO1xuICAgICAgLy8gY29uc3QgYWRkQ2FyZFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtY2FyZC1wb3B1cFwiKTtcbiAgICAgIC8vIHRoaXMuX2FkZENhcmRQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2FkZENhcmRQb3B1cH1gKTtcbiAgICAgIC8vIHRoaXMuX2FkZENhcmRQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaXRlbXMpO1xuICAgICAgLy8gdGhpcy5fZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7Y29udGFpbmVyU2VsZWN0b3J9YCk7XG4gIH1cblxuICByZW5kZXJJdGVtcyhlbGVtZW50KSB7XG4gICAgZWxlbWVudC5mb3JFYWNoKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLl9yZW5kZXJlcihkYXRhKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZEl0ZW0oZWxlbWVudCkge1xuICAgIHRoaXMuX2VsZW1lbnQucHJlcGVuZChlbGVtZW50KTtcbiAgLy8gdGhpcy5fZWxlbWVudC5hcHBlbmQoZWxlbWVudCk7XG4gIH1cbn1cblxuIiwiXG5leHBvcnQgY29uc3QgaW5pdGlhbENhcmRzID0gW1xuICB7XG4gICAgLy9OQU1FXG4gICAgdGl0bGU6IFwiTGFrZSAmIE1vdW50YWluXCIsXG4gICAgLy9MSU5LXG4gICAgdXJsOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNjM4ODAyNDIyNjMzLTY5NDA4ODY4MDM1OT9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9Njg3JnE9ODBcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkxha2UgTG91aXNlXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL2xha2UtbG91aXNlLmpwZ1wiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiQmFsZCBNb3VudGFpbnNcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUvYmFsZC1tb3VudGFpbnMuanBnXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJMYXRlbWFyXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL2xhdGVtYXIuanBnXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJWYW5vaXNlIE5hdGlvbmFsIFBhcmtcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUvdmFub2lzZS5qcGdcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkxhZ28gZGkgYnJhaWVzXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL2xhZ28uanBnXCIsXG4gIH0sXG5dO1xuXG5cbmV4cG9ydCBjb25zdCBmb3JtVmFsaWRhdG9yQ29uZmlnID0ge1xuICBpbnB1dFNlbGVjdG9yOiBcIi5mb3JtLW5hbWVfX2lucHV0XCIsXG4gIHN1Ym1pdEJ1dHRvblNlbGVjdG9yOiBcIi5mb3JtLW5hbWVfX3NhdmUtYnV0dG9uXCIsXG4gIGluYWN0aXZlQnV0dG9uQ2xhc3M6IFwiZm9ybS1uYW1lX19zYXZlLWJ1dHRvbl9kaXNhYmxlZFwiLFxuICBpbnB1dEVycm9yQ2xhc3M6IFwiZm9ybS1uYW1lX19tb2RhbC10eXBlX2Vycm9yXCIsXG4gIGVycm9yQ2xhc3M6IFwibW9kYWxfX3BvcHVwX19lcnJvcl92aXNpYmxlXCIsXG59O1xuXG5cbmV4cG9ydCBjb25zdCBzZWxlY3RvcnMgPSB7XG4gIGNhcmRTZWN0aW9uOiBcIi5lbGVtZW50cy1ncmlkX19jYXJkc1wiLCAvL2NhcmQgbGlzdFxuICBjYXJkVGVtcGxhdGU6IFwiI2NhcmQtdGVtcGxhdGVcIiwvL2NhcmQgdGVtcGxhdGVcbiAgLy8gcHJldmlld1BvcHVwOiBcInBvcHVwX3R5cGVfaW1hZ2VcIixcbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL2luZGV4LmNzcyc7XG5cbi8vaW1wb3J0IGFsbCBjbGFzc2VzXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkXCI7XG5pbXBvcnQgRm9ybVZhbGlkYXRvciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yXCI7XG4vLyBpbXBvcnQgUG9wdXAgZnJvbSAnLi4vY29tcG9uZW50cy9Qb3B1cCc7XG4vLyBpbXBvcnQgUG9wdXBXaXRoSW1hZ2VzIGZyb20gJy4uL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2VzJztcbi8vIGltcG9ydCBQb3B1cFdpdGhGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybSc7XG5pbXBvcnQgU2VjdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWN0aW9uXCI7XG4vLyBpbXBvcnQgVXNlckluZm8gZnJvbSAnLi4vY29tcG9uZW50cy9Vc2VySW5mbyc7XG5pbXBvcnQgeyBpbml0aWFsQ2FyZHMsIHNlbGVjdG9ycyB9IGZyb20gXCIuLi91dGlscy9jb25zdGFudHNcIjtcblxuLy8gZnVuY3Rpb24gYWRkQ2FyZFRvUGFnZShjYXJkKSB7XG4vLyAgIGNhcmRMaXN0LnByZXBlbmQoY2FyZCk7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIHJlbmRlckNhcmQoZGF0YSkge1xuLy8gICBjb25zdCBjYXJkID0gbmV3IENhcmQoY2FyZFRlbXBsYXRlLCBkYXRhKTtcbi8vICAgYWRkQ2FyZFRvUGFnZShjYXJkLnJlbmRlcihkYXRhKSk7XG4vLyB9XG5cbi8vQ2FyZHMgcmVuZGVyaW5nXG4vLyBpbml0aWFsQ2FyZHMuZm9yRWFjaCgoZGF0YSkgPT4ge1xuLy8gICByZW5kZXJDYXJkKGRhdGEsIGZvcm1DYXJkKTtcbi8vIH0pO1xuLy8gaW5pdGlhbENhcmRzLmZvckVhY2gocmVuZGVyQ2FyZCk7XG5jb25zdCBjYXJkRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JzLmNhcmRUZW1wbGF0ZSk7XG5cbmNvbnN0IENhcmRTZWN0aW9uID0gIG5ldyBTZWN0aW9uICh7XG4gIHJlbmRlcmVyOiAoaXRlbSkgPT4ge1xuICAgIGNvbnN0IGNhcmRFbCA9IG5ldyBDYXJkKGl0ZW0sIGNhcmREaXNwbGF5KTtcbiAgICBDYXJkU2VjdGlvbi5hZGRJdGVtKGNhcmRFbC5yZW5kZXIoKSk7XG4gICAgLy8gY29uc3QgY2FyZEVsID0gbmV3IENhcmQoaXRlbSwgc2VsZWN0b3JzLmNhcmRUZW1wbGF0ZSk7XG4gICAgLy8gY29uc3QgY2FyZEVsID0gcmVuZGVyQ2FyZChkYXRhKS5yZW5kZXIoKTtcbiAgICAvLyBjb25zdCBjYXJkRWwgPSBuZXcgQ2FyZChpdGVtcywgc2VsZWN0b3JzLmNhcmRUZW1wbGF0ZSk7XG4gICAgLy8gY2FyZFNlY3Rpb24uYWRkSXRlbShjYXJkRWwucmVuZGVyKCkpO1xuICB9LFxufSxcbiAgLy8gc2VsZWN0b3I6IHNlbGVjdG9ycy5jYXJkU2VjdGlvbixcbiAgc2VsZWN0b3JzLmNhcmRTZWN0aW9uLFxuKTtcblxuQ2FyZFNlY3Rpb24ucmVuZGVySXRlbXMoaW5pdGlhbENhcmRzKTtcblxuICAvLyBzZWxlY3RvcjogIHNlbGVjdG9ycy5jYXJkU2VjdGlvbix9XG4vLyB9LFwiZWxlbWVudHMtZ3JpZF9fY2FyZHNcIixcbiAgLy99LFxuLy8pO1xuICAvL3RlbXBsYXRlID09IHNlbGVjdG9yIGluIENhcmQuanNcbiAgLy8gdGVtcGxhdGU6IHNlbGVjdG9ycy5jYXJkU2VjdGlvbixcbiAgLy8gc2VsZWN0b3JzLmNhcmRTZWN0aW9uXG5cblxuLy8gY2FyZFNlY3Rpb24uaW5pdGlhbENhcmRzO1xuXG5cblxuXG4iXSwibmFtZXMiOlsiUG9wdXAiLCJDYXJkIiwidGVtcGxhdGUiLCJwb3B1cFNlbGVjdG9yIiwiZGF0YSIsImhhbmRsZUNhcmRQcmV2aWV3IiwiX3RlbXBsYXRlIiwiY29udGVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbG9uZU5vZGUiLCJtb2RhbEltYWdlRWxlbWVudCIsInNyYyIsIl91cmwiLCJtb2RhbENhcHRpb24iLCJ0ZXh0Q29udGVudCIsIl90aXRsZSIsImFsdCIsInVybCIsIm9wZW5Qb3B1cCIsImltYWdlUG9wdXAiLCJfY2FyZExpa2VCdXR0b24iLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJfZWxlbWVudCIsInJlbW92ZSIsImVsZW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZ0IiwiX2hhbmRsZUxpa2VJY29uIiwiX2RlbGV0ZUNhcmQiLCJfaGFuZGxlRGVsZXRlQ2FyZCIsIl9pbWFnZUVsZW1lbnQiLCJfaGFuZGxlQ2FyZFByZXZpZXciLCJfZ2V0RWxlbWVudCIsIl90aXRsZUVsZW1lbnQiLCJfc2V0RXZlbnRMaXN0ZW5lcnMiLCJfZGF0YSIsIkZvcm1WYWxpZGF0b3IiLCJzZXR0aW5ncyIsImZvcm1FbCIsIl9pbnB1dFNlbGVjdG9yIiwiaW5wdXRTZWxlY3RvciIsIl9zdWJtaXRCdXR0b25TZWxlY3RvciIsInN1Ym1pdEJ1dHRvblNlbGVjdG9yIiwiX2luYWN0aXZlQnV0dG9uQ2xhc3MiLCJpbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiX2lucHV0RXJyb3JDbGFzcyIsImlucHV0RXJyb3JDbGFzcyIsIl9lcnJvckNsYXNzIiwiZXJyb3JDbGFzcyIsIl9mb3JtRWwiLCJpbnB1dEVsIiwidmFsaWRpdHkiLCJ2YWxpZCIsImVycm9yRWwiLCJpZCIsImFkZCIsInZhbGlkYXRpb25NZXNzYWdlIiwiX2lucHV0TGlzdCIsInNvbWUiLCJfaXNJbnZhbGlkSW5wdXQiLCJfYnV0dG9uRWwiLCJkaXNhYmxlZCIsIl9zaG93RXJyb3IiLCJfaGlkZUVycm9yIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJfY2hlY2tJbnB1dFZhbGlkaXR5IiwiX3RvZ2dsZUJ1dHRvbiIsInJlc2V0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiX3BvcHVwRWxlbWVudCIsImRvY3VtZW50IiwiX2hhbmRsZUVzY1VwIiwiYmluZCIsImtleSIsImNsb3NlIiwidGFyZ2V0IiwiY29udGFpbnMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiU2VjdGlvbiIsImNvbnRhaW5lclNlbGVjdG9yIiwiaXRlbXMiLCJyZW5kZXJlciIsIl9pdGVtcyIsIl9yZW5kZXJlciIsIl9jb250YWluZXJTZWxlY3RvciIsInByZXBlbmQiLCJpbml0aWFsQ2FyZHMiLCJ0aXRsZSIsImZvcm1WYWxpZGF0b3JDb25maWciLCJzZWxlY3RvcnMiLCJjYXJkU2VjdGlvbiIsImNhcmRUZW1wbGF0ZSIsImNhcmREaXNwbGF5IiwiQ2FyZFNlY3Rpb24iLCJpdGVtIiwiY2FyZEVsIiwiYWRkSXRlbSIsInJlbmRlciIsInJlbmRlckl0ZW1zIl0sInNvdXJjZVJvb3QiOiIifQ==