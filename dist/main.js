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

    this._element = document.querySelector("".concat(containerSelector));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztDQ0pBOztBQUNBO0NBRUE7QUFDQTtBQUNBOztDQUVBOztDQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQyxXQUFXLEdBQUd0QixRQUFRLENBQUNuRSxhQUFULENBQXVCc0Ysb0VBQXZCLENBQXBCO0FBRUEsSUFBTUksV0FBVyxHQUFJLElBQUlmLDJEQUFKLENBQWE7QUFDaENHLEVBQUFBLFFBQVEsRUFBRSxrQkFBQ2EsSUFBRCxFQUFVO0FBQ2xCLFFBQU1DLE1BQU0sR0FBRyxJQUFJbkcsd0RBQUosQ0FBU2tHLElBQVQsRUFBZUYsV0FBZixDQUFmO0FBQ0FDLElBQUFBLFdBQVcsQ0FBQ0csT0FBWixDQUFvQkQsTUFBTSxDQUFDRSxNQUFQLEVBQXBCLEVBRmtCLENBR2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7QUFSK0IsQ0FBYixFQVVuQjtBQUNBUixtRUFYbUIsQ0FBckI7QUFjQUksV0FBVyxDQUFDSyxXQUFaLENBQXdCWiwwREFBeEIsR0FFRTtBQUNGO0FBQ0U7QUFDRjtBQUNFO0FBQ0E7QUFDQTtBQUdGLDRCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3ByaW50LTgvLi9zcmMvY29tcG9uZW50cy9DYXJkLmpzIiwid2VicGFjazovL3NwcmludC04Ly4vc3JjL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly9zcHJpbnQtOC8uL3NyYy9jb21wb25lbnRzL1BvcHVwLmpzIiwid2VicGFjazovL3NwcmludC04Ly4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9zcHJpbnQtOC8uL3NyYy91dGlscy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vc3ByaW50LTgvLi9zcmMvcGFnZXMvaW5kZXguY3NzIiwid2VicGFjazovL3NwcmludC04L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NwcmludC04L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zcHJpbnQtOC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NwcmludC04L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc3ByaW50LTgvLi9zcmMvcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmQgZXh0ZW5kcyBQb3B1cCB7XG4gIGNvbnN0cnVjdG9yKHtkYXRhLCBoYW5kbGVDYXJkUHJldmlld30sIHRlbXBsYXRlLCBwb3B1cFNlbGVjdG9yKSB7XG4gICAgc3VwZXIocG9wdXBTZWxlY3Rvcik7XG4gICAgdGhpcy5fdGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgICB0aGlzLl9kYXRhID0gZGF0YTtcbiAgICAvLyB0aGlzLl90aXRsZSA9IGRhdGEudGl0bGU7XG4gICAgLy8gdGhpcy5fdXJsID0gZGF0YS51cmw7XG4gICAgdGhpcy5fZWxlbWVudCA9IG51bGw7XG4gICAgdGhpcy5faGFuZGxlQ2FyZFByZXZpZXcgPSBoYW5kbGVDYXJkUHJldmlldztcbiAgICAvLyB0aGlzLl9oYW5kbGVDYXJkQ2xpY2sgPSBoYW5kbGVDYXJkQ2xpY2s7XG4gIH1cblxuICAvLyBDYXJkIHRlbXBsYXRlXG4gIF9nZXRFbGVtZW50ID0gKCkgPT4ge1xuICAgICByZXR1cm4gdGhpcy5fdGVtcGxhdGUuY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRzLWdyaWRfX2NhcmRcIikuY2xvbmVOb2RlKHRydWUpO1xuICAgIC8vIHRoaXMuX2VsZW1lbnQgPSB0aGlzLl90ZW1wbGF0ZS5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWxlbWVudHMtZ3JpZF9fY2FyZFwiKS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIC8vIHJldHVybiB0aGlzLl9lbGVtZW50O1xuICB9XG5cbiAgLy9DYXJkIHByZXZpZXcgaGFuZGxlciB3aGVuIGNsaWNrZWQgb25cbiAgX2hhbmRsZUNhcmRQcmV2aWV3ID0gKCkgPT4ge1xuICAgIG1vZGFsSW1hZ2VFbGVtZW50LnNyYyA9IHRoaXMuX3VybDtcbiAgICBtb2RhbENhcHRpb24udGV4dENvbnRlbnQgPSB0aGlzLl90aXRsZTtcbiAgICBtb2RhbEltYWdlRWxlbWVudC5hbHQgPWBpbWFnZSBvZiR7dXJsfWA7XG5cbiAgICBvcGVuUG9wdXAoaW1hZ2VQb3B1cCk7XG4gIH07XG5cbiAgLy9DYXJkIGxpa2UgaGFuZGxlci90b2dnbGVyXG4gIF9oYW5kbGVMaWtlSWNvbiA9ICgpID0+IHtcbiAgICB0aGlzLl9jYXJkTGlrZUJ1dHRvbi5jbGFzc0xpc3RcbiAgICAudG9nZ2xlKFwiZWxlbWVudHMtZ3JpZF9faWNvbi1hY3RpdmVcIik7XG4gIH07XG5cbiAgLy9DYXJkIHJlbW92YWwgaGFuZGxlclxuICBfaGFuZGxlRGVsZXRlQ2FyZCA9ICgpID0+IHtcbiAgICB0aGlzLl9lbGVtZW50LnJlbW92ZSgpO1xuICAgIHRoaXMuZWxlbWVudCA9IG51bGw7XG4gIH07XG5cbiAgLy9FdmVudCBsaXN0ZW5lcnNcbiAgX3NldEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgIHRoaXMuX2NhcmRMaWtlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZ0KSA9PiB7IC8vY2FyZCBsaWtlIGV2ZW50IGxpc3RlbmVyXG4gICAgICB0aGlzLl9oYW5kbGVMaWtlSWNvbihldnQpO1xuICAgIH0pO1xuICAgIHRoaXMuX2RlbGV0ZUNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldnQpID0+IHsgLy9jYXJkIGRlbGV0ZSBldmVudCBsaXN0ZW5lclxuICAgICAgdGhpcy5faGFuZGxlRGVsZXRlQ2FyZChldnQpO1xuICAgIH0pO1xuICAgIHRoaXMuX2ltYWdlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2dCkgPT4geyAvL2NhcmQgcHJldmlldyBldmVudCBsaXN0ZW5lclxuICAgICAgdGhpcy5faGFuZGxlQ2FyZFByZXZpZXcoZXZ0KTtcbiAgICB9KTtcbiAgfTtcblxuICAvL1RlbXBsYXRlIGRpc3BsYXlpbmdcbiAgcmVuZGVyID0gKCkgPT4ge1xuICAgIHRoaXMuX2VsZW1lbnQgPSB0aGlzLl9nZXRFbGVtZW50KCk7XG4gICAgdGhpcy5faW1hZ2VFbGVtZW50ID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRzLWdyaWRfX2ltYWdlXCIpO1xuICAgIHRoaXMuX3RpdGxlRWxlbWVudCA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbGVtZW50cy1ncmlkX190ZXh0XCIpO1xuICAgIHRoaXMuX2ltYWdlRWxlbWVudC5zcmMgPSB0aGlzLl91cmw7XG4gICAgdGhpcy5faW1hZ2VFbGVtZW50LmFsdCA9IHRoaXMuX3VybDtcbiAgICB0aGlzLl90aXRsZUVsZW1lbnQudGV4dENvbnRlbnQgPSB0aGlzLl90aXRsZTtcbiAgICB0aGlzLl9kZWxldGVDYXJkID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRzLWdyaWRfX2RlbGV0ZS1idXR0b25cIik7XG4gICAgdGhpcy5fY2FyZExpa2VCdXR0b24gPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWxlbWVudHMtZ3JpZF9faWNvblwiKTtcbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycygpO1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50O1xuICB9O1xufVxuXG4vLyBleHBvcnQgZGVmYXVsdCBDYXJkOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1WYWxpZGF0b3Ige1xuICBjb25zdHJ1Y3RvcihzZXR0aW5ncywgZm9ybUVsKSB7XG4gICAgdGhpcy5faW5wdXRTZWxlY3RvciA9IHNldHRpbmdzLmlucHV0U2VsZWN0b3I7XG4gICAgdGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IgPSBzZXR0aW5ncy5zdWJtaXRCdXR0b25TZWxlY3RvcjtcbiAgICB0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzID0gc2V0dGluZ3MuaW5hY3RpdmVCdXR0b25DbGFzcztcbiAgICB0aGlzLl9pbnB1dEVycm9yQ2xhc3MgPSBzZXR0aW5ncy5pbnB1dEVycm9yQ2xhc3M7XG4gICAgdGhpcy5fZXJyb3JDbGFzcyA9IHNldHRpbmdzLmVycm9yQ2xhc3M7XG4gICAgdGhpcy5fZm9ybUVsID0gZm9ybUVsO1xuICB9XG5cbiAgX2lzSW52YWxpZElucHV0KGlucHV0RWwpIHtcbiAgICByZXR1cm4gIWlucHV0RWwudmFsaWRpdHkudmFsaWQ7XG4gIH1cblxuICBfc2hvd0Vycm9yKGlucHV0RWwpIHtcbiAgICBjb25zdCBlcnJvckVsID0gdGhpcy5fZm9ybUVsLnF1ZXJ5U2VsZWN0b3IoYCMke2lucHV0RWwuaWR9YCk7XG4gICAgZXJyb3JFbC5jbGFzc0xpc3QuYWRkKHRoaXMuX2Vycm9yQ2xhc3MpO1xuICAgIGVycm9yRWwudGV4dENvbnRlbnQgPSBpbnB1dEVsLnZhbGlkYXRpb25NZXNzYWdlO1xuICAgIGlucHV0RWwuY2xhc3NMaXN0LmFkZCh0aGlzLl9pbnB1dEVycm9yQ2xhc3MpO1xuICB9XG5cbiAgX2hpZGVFcnJvcihpbnB1dEVsKSB7XG4gICAgY29uc3QgZXJyb3JFbCA9IHRoaXMuX2Zvcm1FbC5xdWVyeVNlbGVjdG9yKGAjJHtpbnB1dEVsLmlkfWApO1xuICAgIGVycm9yRWwuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9lcnJvckNsYXNzKTtcbiAgICBlcnJvckVsLnRleHRDb250ZW50ID0gJyAnO1xuICAgIGlucHV0RWwuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9pbnB1dEVycm9yQ2xhc3MpO1xuICB9XG5cbiAgX3RvZ2dsZUJ1dHRvbigpIHtcbiAgICBpZiAodGhpcy5faW5wdXRMaXN0LnNvbWUodGhpcy5faXNJbnZhbGlkSW5wdXQpKSB7XG4gICAgICB0aGlzLl9idXR0b25FbC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICB0aGlzLl9idXR0b25FbC5jbGFzc0xpc3RcbiAgICAgIC5hZGQodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2J1dHRvbkVsLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICB0aGlzLl9idXR0b25FbC5jbGFzc0xpc3RcbiAgICAgIC5yZW1vdmUodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgX2NoZWNrSW5wdXRWYWxpZGl0eShpbnB1dEVsKSB7XG4gICAgY29uc3QgZXJyb3JFbCA9IHRoaXMuX2Zvcm1FbC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYCMke2lucHV0RWwuaWR9LWVycm9yYCk7XG4gICAgaWYgKHRoaXMuX2lzSW52YWxpZElucHV0KGlucHV0RWwpKSB7XG4gICAgICB0aGlzLl9zaG93RXJyb3IoZXJyb3JFbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2hpZGVFcnJvcihlcnJvckVsKTtcbiAgICB9XG4gIH1cblxuICBfc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy5faW5wdXRMaXN0ID0gQXJyYXkuZnJvbSh0aGlzLl9mb3JtRWwucXVlcnlTZWxlY3RvckFsbCh0aGlzLl9pbnB1dFNlbGVjdG9yKSk7XG4gICAgdGhpcy5fYnV0dG9uRWwgPSB0aGlzLl9mb3JtRWwucXVlcnlTZWxlY3Rvcih0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3Rvcik7XG5cbiAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaCgoaW5wdXRFbCkgPT4ge1xuICAgICAgaW5wdXRFbC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuICAgICAgICB0aGlzLl9jaGVja0lucHV0VmFsaWRpdHkoaW5wdXRFbCk7XG4gICAgICAgIHRoaXMuX3RvZ2dsZUJ1dHRvbigpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICByZXNldEZvcm0oKSB7XG4gICAgdGhpcy5fZm9ybUVsLnJlc2V0KCk7XG4gICAgdGhpcy5fdG9nZ2xlQnV0dG9uKCk7XG4gIH1cblxuICBlbmFibGVWYWxpZGF0aW9uKCkge1xuICAgIHRoaXMuX2Zvcm1FbC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG4gICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgfVxufVxuXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cCB7XG4gICAgY29uc3RydWN0b3IocG9wdXBTZWxlY3Rvcil7XG4gICAgICAgIHRoaXMuX3BvcHVwRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3BvcHVwU2VsZWN0b3J9YCk7XG4gICAgICAgIHRoaXMuX2hhbmRsZUVzY1VwID0gdGhpcy5faGFuZGxlRXNjVXAuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBfaGFuZGxlRXNjVXAoZXZ0KSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmIChldnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICAgIC8vIGNsb3NlUG9wdXAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9vcGVuZWRcIikpO1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICB0aGlzLl9wb3B1cEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldnQpID0+IHtcbiAgICAgICAgaWYoXG4gICAgICAgICAgICBldnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIm1vZGFsXCIpXG4gICAgICAgICAgICAvLyB8fCBldnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygpXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgb3Blbigpe1xuICAgICAgdGhpcy5fcG9wdXBFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJtb2RhbF9vcGVuZWRcIik7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9oYW5kbGVFc2NVcCk7XG4gICAgfVxuXG4gICAgY2xvc2UoKXtcbiAgICAgIHRoaXMuX3BvcHVwRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwibW9kYWxfb3BlbmVkXCIpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5faGFuZGxlRXNjVXApO1xuICAgIH1cbn1cbiIsIi8vIGltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWN0aW9uIHtcbiAgLy8gY29uc3QgYWRkQ2FyZFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtY2FyZC1wb3B1cFwiKTtcbiAgLy8gY29uc3RydWN0b3Ioe2l0ZW1zLCByZW5kZXJlcn0sIHRlbXBsYXRlKXtcbiAgICBjb25zdHJ1Y3Rvcih7aXRlbXMsIHJlbmRlcmVyfSwgY29udGFpbmVyU2VsZWN0b3Ipe1xuICAgICAgLy8gc3VwZXIocG9wdXBTZWxlY3Rvcik7XG4gICAgICB0aGlzLl9pdGVtcyA9IGl0ZW1zO1xuICAgICAgdGhpcy5fcmVuZGVyZXIgPSByZW5kZXJlcjtcbiAgICAgIC8vIHRoaXMuX2NvbnRhaW5lclNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXJTZWxlY3Rvcik7XG4gICAgICB0aGlzLl9jb250YWluZXJTZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7Y29udGFpbmVyU2VsZWN0b3J9YCk7XG4gICAgICAvLyBjb25zdCBhZGRDYXJkUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1jYXJkLXBvcHVwXCIpO1xuICAgICAgLy8gdGhpcy5fYWRkQ2FyZFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7YWRkQ2FyZFBvcHVwfWApO1xuICAgICAgLy8gdGhpcy5fYWRkQ2FyZFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpdGVtcyk7XG4gICAgICB0aGlzLl9lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgJHtjb250YWluZXJTZWxlY3Rvcn1gKTtcbiAgfVxuXG4gIHJlbmRlckl0ZW1zKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmZvckVhY2goKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyKGRhdGEpO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkSXRlbShlbGVtZW50KSB7XG4gICAgdGhpcy5fZWxlbWVudC5wcmVwZW5kKGVsZW1lbnQpO1xuICAvLyB0aGlzLl9lbGVtZW50LmFwcGVuZChlbGVtZW50KTtcbiAgfVxufVxuXG4iLCJcbmV4cG9ydCBjb25zdCBpbml0aWFsQ2FyZHMgPSBbXG4gIHtcbiAgICAvL05BTUVcbiAgICB0aXRsZTogXCJMYWtlICYgTW91bnRhaW5cIixcbiAgICAvL0xJTktcbiAgICB1cmw6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE2Mzg4MDI0MjI2MzMtNjk0MDg4NjgwMzU5P2l4bGliPXJiLTEuMi4xJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz02ODcmcT04MFwiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiTGFrZSBMb3Vpc2VcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUvbGFrZS1sb3Vpc2UuanBnXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJCYWxkIE1vdW50YWluc1wiLFxuICAgIHVybDogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS9iYWxkLW1vdW50YWlucy5qcGdcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkxhdGVtYXJcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUvbGF0ZW1hci5qcGdcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIlZhbm9pc2UgTmF0aW9uYWwgUGFya1wiLFxuICAgIHVybDogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS92YW5vaXNlLmpwZ1wiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiTGFnbyBkaSBicmFpZXNcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUvbGFnby5qcGdcIixcbiAgfSxcbl07XG5cblxuZXhwb3J0IGNvbnN0IGZvcm1WYWxpZGF0b3JDb25maWcgPSB7XG4gIGlucHV0U2VsZWN0b3I6IFwiLmZvcm0tbmFtZV9faW5wdXRcIixcbiAgc3VibWl0QnV0dG9uU2VsZWN0b3I6IFwiLmZvcm0tbmFtZV9fc2F2ZS1idXR0b25cIixcbiAgaW5hY3RpdmVCdXR0b25DbGFzczogXCJmb3JtLW5hbWVfX3NhdmUtYnV0dG9uX2Rpc2FibGVkXCIsXG4gIGlucHV0RXJyb3JDbGFzczogXCJmb3JtLW5hbWVfX21vZGFsLXR5cGVfZXJyb3JcIixcbiAgZXJyb3JDbGFzczogXCJtb2RhbF9fcG9wdXBfX2Vycm9yX3Zpc2libGVcIixcbn07XG5cblxuZXhwb3J0IGNvbnN0IHNlbGVjdG9ycyA9IHtcbiAgY2FyZFNlY3Rpb246IFwiLmVsZW1lbnRzLWdyaWRfX2NhcmRzXCIsIC8vY2FyZCBsaXN0XG4gIGNhcmRUZW1wbGF0ZTogXCIjY2FyZC10ZW1wbGF0ZVwiLC8vY2FyZCB0ZW1wbGF0ZVxuICAvLyBwcmV2aWV3UG9wdXA6IFwicG9wdXBfdHlwZV9pbWFnZVwiLFxufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vaW5kZXguY3NzJztcblxuLy9pbXBvcnQgYWxsIGNsYXNzZXNcbmltcG9ydCBDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmRcIjtcbmltcG9ydCBGb3JtVmFsaWRhdG9yIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3JcIjtcbi8vIGltcG9ydCBQb3B1cCBmcm9tICcuLi9jb21wb25lbnRzL1BvcHVwJztcbi8vIGltcG9ydCBQb3B1cFdpdGhJbWFnZXMgZnJvbSAnLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhJbWFnZXMnO1xuLy8gaW1wb3J0IFBvcHVwV2l0aEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtJztcbmltcG9ydCBTZWN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL1NlY3Rpb25cIjtcbi8vIGltcG9ydCBVc2VySW5mbyBmcm9tICcuLi9jb21wb25lbnRzL1VzZXJJbmZvJztcbmltcG9ydCB7IGluaXRpYWxDYXJkcywgc2VsZWN0b3JzIH0gZnJvbSBcIi4uL3V0aWxzL2NvbnN0YW50c1wiO1xuXG4vLyBmdW5jdGlvbiBhZGRDYXJkVG9QYWdlKGNhcmQpIHtcbi8vICAgY2FyZExpc3QucHJlcGVuZChjYXJkKTtcbi8vIH1cblxuLy8gZnVuY3Rpb24gcmVuZGVyQ2FyZChkYXRhKSB7XG4vLyAgIGNvbnN0IGNhcmQgPSBuZXcgQ2FyZChjYXJkVGVtcGxhdGUsIGRhdGEpO1xuLy8gICBhZGRDYXJkVG9QYWdlKGNhcmQucmVuZGVyKGRhdGEpKTtcbi8vIH1cblxuLy9DYXJkcyByZW5kZXJpbmdcbi8vIGluaXRpYWxDYXJkcy5mb3JFYWNoKChkYXRhKSA9PiB7XG4vLyAgIHJlbmRlckNhcmQoZGF0YSwgZm9ybUNhcmQpO1xuLy8gfSk7XG4vLyBpbml0aWFsQ2FyZHMuZm9yRWFjaChyZW5kZXJDYXJkKTtcbmNvbnN0IGNhcmREaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcnMuY2FyZFRlbXBsYXRlKTtcblxuY29uc3QgQ2FyZFNlY3Rpb24gPSAgbmV3IFNlY3Rpb24gKHtcbiAgcmVuZGVyZXI6IChpdGVtKSA9PiB7XG4gICAgY29uc3QgY2FyZEVsID0gbmV3IENhcmQoaXRlbSwgY2FyZERpc3BsYXkpO1xuICAgIENhcmRTZWN0aW9uLmFkZEl0ZW0oY2FyZEVsLnJlbmRlcigpKTtcbiAgICAvLyBjb25zdCBjYXJkRWwgPSBuZXcgQ2FyZChpdGVtLCBzZWxlY3RvcnMuY2FyZFRlbXBsYXRlKTtcbiAgICAvLyBjb25zdCBjYXJkRWwgPSByZW5kZXJDYXJkKGRhdGEpLnJlbmRlcigpO1xuICAgIC8vIGNvbnN0IGNhcmRFbCA9IG5ldyBDYXJkKGl0ZW1zLCBzZWxlY3RvcnMuY2FyZFRlbXBsYXRlKTtcbiAgICAvLyBjYXJkU2VjdGlvbi5hZGRJdGVtKGNhcmRFbC5yZW5kZXIoKSk7XG4gIH0sXG59LFxuICAvLyBzZWxlY3Rvcjogc2VsZWN0b3JzLmNhcmRTZWN0aW9uLFxuICBzZWxlY3RvcnMuY2FyZFNlY3Rpb24sXG4pO1xuXG5DYXJkU2VjdGlvbi5yZW5kZXJJdGVtcyhpbml0aWFsQ2FyZHMpO1xuXG4gIC8vIHNlbGVjdG9yOiAgc2VsZWN0b3JzLmNhcmRTZWN0aW9uLH1cbi8vIH0sXCJlbGVtZW50cy1ncmlkX19jYXJkc1wiLFxuICAvL30sXG4vLyk7XG4gIC8vdGVtcGxhdGUgPT0gc2VsZWN0b3IgaW4gQ2FyZC5qc1xuICAvLyB0ZW1wbGF0ZTogc2VsZWN0b3JzLmNhcmRTZWN0aW9uLFxuICAvLyBzZWxlY3RvcnMuY2FyZFNlY3Rpb25cblxuXG4vLyBjYXJkU2VjdGlvbi5pbml0aWFsQ2FyZHM7XG5cblxuXG5cbiJdLCJuYW1lcyI6WyJQb3B1cCIsIkNhcmQiLCJ0ZW1wbGF0ZSIsInBvcHVwU2VsZWN0b3IiLCJkYXRhIiwiaGFuZGxlQ2FyZFByZXZpZXciLCJfdGVtcGxhdGUiLCJjb250ZW50IiwicXVlcnlTZWxlY3RvciIsImNsb25lTm9kZSIsIm1vZGFsSW1hZ2VFbGVtZW50Iiwic3JjIiwiX3VybCIsIm1vZGFsQ2FwdGlvbiIsInRleHRDb250ZW50IiwiX3RpdGxlIiwiYWx0IiwidXJsIiwib3BlblBvcHVwIiwiaW1hZ2VQb3B1cCIsIl9jYXJkTGlrZUJ1dHRvbiIsImNsYXNzTGlzdCIsInRvZ2dsZSIsIl9lbGVtZW50IiwicmVtb3ZlIiwiZWxlbWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldnQiLCJfaGFuZGxlTGlrZUljb24iLCJfZGVsZXRlQ2FyZCIsIl9oYW5kbGVEZWxldGVDYXJkIiwiX2ltYWdlRWxlbWVudCIsIl9oYW5kbGVDYXJkUHJldmlldyIsIl9nZXRFbGVtZW50IiwiX3RpdGxlRWxlbWVudCIsIl9zZXRFdmVudExpc3RlbmVycyIsIl9kYXRhIiwiRm9ybVZhbGlkYXRvciIsInNldHRpbmdzIiwiZm9ybUVsIiwiX2lucHV0U2VsZWN0b3IiLCJpbnB1dFNlbGVjdG9yIiwiX3N1Ym1pdEJ1dHRvblNlbGVjdG9yIiwic3VibWl0QnV0dG9uU2VsZWN0b3IiLCJfaW5hY3RpdmVCdXR0b25DbGFzcyIsImluYWN0aXZlQnV0dG9uQ2xhc3MiLCJfaW5wdXRFcnJvckNsYXNzIiwiaW5wdXRFcnJvckNsYXNzIiwiX2Vycm9yQ2xhc3MiLCJlcnJvckNsYXNzIiwiX2Zvcm1FbCIsImlucHV0RWwiLCJ2YWxpZGl0eSIsInZhbGlkIiwiZXJyb3JFbCIsImlkIiwiYWRkIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJfaW5wdXRMaXN0Iiwic29tZSIsIl9pc0ludmFsaWRJbnB1dCIsIl9idXR0b25FbCIsImRpc2FibGVkIiwiX3Nob3dFcnJvciIsIl9oaWRlRXJyb3IiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsIl9jaGVja0lucHV0VmFsaWRpdHkiLCJfdG9nZ2xlQnV0dG9uIiwicmVzZXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJfcG9wdXBFbGVtZW50IiwiZG9jdW1lbnQiLCJfaGFuZGxlRXNjVXAiLCJiaW5kIiwia2V5IiwiY2xvc2UiLCJ0YXJnZXQiLCJjb250YWlucyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJTZWN0aW9uIiwiY29udGFpbmVyU2VsZWN0b3IiLCJpdGVtcyIsInJlbmRlcmVyIiwiX2l0ZW1zIiwiX3JlbmRlcmVyIiwiX2NvbnRhaW5lclNlbGVjdG9yIiwicHJlcGVuZCIsImluaXRpYWxDYXJkcyIsInRpdGxlIiwiZm9ybVZhbGlkYXRvckNvbmZpZyIsInNlbGVjdG9ycyIsImNhcmRTZWN0aW9uIiwiY2FyZFRlbXBsYXRlIiwiY2FyZERpc3BsYXkiLCJDYXJkU2VjdGlvbiIsIml0ZW0iLCJjYXJkRWwiLCJhZGRJdGVtIiwicmVuZGVyIiwicmVuZGVySXRlbXMiXSwic291cmNlUm9vdCI6IiJ9