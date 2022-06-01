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
    _this._data = data;
    _this._title = data.title;
    _this._url = data.url;
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
    // this._containerSelector = document.querySelector(`${containerSelector}`);
    // const addCardPopup = document.querySelector("#add-card-popup");
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
    var cardEl = new _components_Card__WEBPACK_IMPORTED_MODULE_1__["default"]({
      data: item
    }, cardDisplay);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztDQ0pBOztBQUNBO0NBRUE7QUFDQTtBQUNBOztDQUVBOztDQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQyxXQUFXLEdBQUdwQixRQUFRLENBQUNwRSxhQUFULENBQXVCcUYsb0VBQXZCLENBQXBCO0FBRUEsSUFBTUksV0FBVyxHQUFJLElBQUliLDJEQUFKLENBQWE7QUFDaENHLEVBQUFBLFFBQVEsRUFBRSxrQkFBQ1csSUFBRCxFQUFVO0FBQ2xCLFFBQU1DLE1BQU0sR0FBRyxJQUFJbEcsd0RBQUosQ0FBUztBQUFFRyxNQUFBQSxJQUFJLEVBQUM4RjtBQUFQLEtBQVQsRUFBd0JGLFdBQXhCLENBQWY7QUFDQUMsSUFBQUEsV0FBVyxDQUFDRyxPQUFaLENBQW9CRCxNQUFNLENBQUNFLE1BQVAsRUFBcEIsRUFGa0IsQ0FHbEI7QUFDQTtBQUNBO0FBQ0E7QUFDRDtBQVIrQixDQUFiLEVBVW5CO0FBQ0FSLG1FQVhtQixDQUFyQjtBQWNBSSxXQUFXLENBQUNLLFdBQVosQ0FBd0JYLDBEQUF4QixHQUVFO0FBQ0Y7QUFDRTtBQUNGO0FBQ0U7QUFDQTtBQUNBO0FBR0YsNEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcHJpbnQtOC8uL3NyYy9jb21wb25lbnRzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vc3ByaW50LTgvLi9zcmMvY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzIiwid2VicGFjazovL3NwcmludC04Ly4vc3JjL2NvbXBvbmVudHMvUG9wdXAuanMiLCJ3ZWJwYWNrOi8vc3ByaW50LTgvLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uLmpzIiwid2VicGFjazovL3NwcmludC04Ly4vc3JjL3V0aWxzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9zcHJpbnQtOC8uL3NyYy9wYWdlcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vc3ByaW50LTgvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3ByaW50LTgvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NwcmludC04L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc3ByaW50LTgvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zcHJpbnQtOC8uL3NyYy9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCBleHRlbmRzIFBvcHVwIHtcbiAgY29uc3RydWN0b3Ioe2RhdGEsIGhhbmRsZUNhcmRQcmV2aWV3fSwgdGVtcGxhdGUsIHBvcHVwU2VsZWN0b3IpIHtcbiAgICBzdXBlcihwb3B1cFNlbGVjdG9yKTtcbiAgICB0aGlzLl90ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuICAgIHRoaXMuX3RpdGxlID0gZGF0YS50aXRsZTtcbiAgICB0aGlzLl91cmwgPSBkYXRhLnVybDtcbiAgICB0aGlzLl9lbGVtZW50ID0gbnVsbDtcbiAgICB0aGlzLl9oYW5kbGVDYXJkUHJldmlldyA9IGhhbmRsZUNhcmRQcmV2aWV3O1xuICAgIC8vIHRoaXMuX2hhbmRsZUNhcmRDbGljayA9IGhhbmRsZUNhcmRDbGljaztcbiAgfVxuXG4gIC8vIENhcmQgdGVtcGxhdGVcbiAgX2dldEVsZW1lbnQgPSAoKSA9PiB7XG4gICAgIHJldHVybiB0aGlzLl90ZW1wbGF0ZS5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWxlbWVudHMtZ3JpZF9fY2FyZFwiKS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgLy8gdGhpcy5fZWxlbWVudCA9IHRoaXMuX3RlbXBsYXRlLmNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5lbGVtZW50cy1ncmlkX19jYXJkXCIpLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgLy8gcmV0dXJuIHRoaXMuX2VsZW1lbnQ7XG4gIH1cblxuICAvL0NhcmQgcHJldmlldyBoYW5kbGVyIHdoZW4gY2xpY2tlZCBvblxuICBfaGFuZGxlQ2FyZFByZXZpZXcgPSAoKSA9PiB7XG4gICAgbW9kYWxJbWFnZUVsZW1lbnQuc3JjID0gdGhpcy5fdXJsO1xuICAgIG1vZGFsQ2FwdGlvbi50ZXh0Q29udGVudCA9IHRoaXMuX3RpdGxlO1xuICAgIG1vZGFsSW1hZ2VFbGVtZW50LmFsdCA9YGltYWdlIG9mJHt1cmx9YDtcblxuICAgIG9wZW5Qb3B1cChpbWFnZVBvcHVwKTtcbiAgfTtcblxuICAvL0NhcmQgbGlrZSBoYW5kbGVyL3RvZ2dsZXJcbiAgX2hhbmRsZUxpa2VJY29uID0gKCkgPT4ge1xuICAgIHRoaXMuX2NhcmRMaWtlQnV0dG9uLmNsYXNzTGlzdFxuICAgIC50b2dnbGUoXCJlbGVtZW50cy1ncmlkX19pY29uLWFjdGl2ZVwiKTtcbiAgfTtcblxuICAvL0NhcmQgcmVtb3ZhbCBoYW5kbGVyXG4gIF9oYW5kbGVEZWxldGVDYXJkID0gKCkgPT4ge1xuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlKCk7XG4gICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcbiAgfTtcblxuICAvL0V2ZW50IGxpc3RlbmVyc1xuICBfc2V0RXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgdGhpcy5fY2FyZExpa2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldnQpID0+IHsgLy9jYXJkIGxpa2UgZXZlbnQgbGlzdGVuZXJcbiAgICAgIHRoaXMuX2hhbmRsZUxpa2VJY29uKGV2dCk7XG4gICAgfSk7XG4gICAgdGhpcy5fZGVsZXRlQ2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2dCkgPT4geyAvL2NhcmQgZGVsZXRlIGV2ZW50IGxpc3RlbmVyXG4gICAgICB0aGlzLl9oYW5kbGVEZWxldGVDYXJkKGV2dCk7XG4gICAgfSk7XG4gICAgdGhpcy5faW1hZ2VFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZ0KSA9PiB7IC8vY2FyZCBwcmV2aWV3IGV2ZW50IGxpc3RlbmVyXG4gICAgICB0aGlzLl9oYW5kbGVDYXJkUHJldmlldyhldnQpO1xuICAgIH0pO1xuICB9O1xuXG4gIC8vVGVtcGxhdGUgZGlzcGxheWluZ1xuICByZW5kZXIgPSAoKSA9PiB7XG4gICAgdGhpcy5fZWxlbWVudCA9IHRoaXMuX2dldEVsZW1lbnQoKTtcbiAgICB0aGlzLl9pbWFnZUVsZW1lbnQgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWxlbWVudHMtZ3JpZF9faW1hZ2VcIik7XG4gICAgdGhpcy5fdGl0bGVFbGVtZW50ID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRzLWdyaWRfX3RleHRcIik7XG4gICAgdGhpcy5faW1hZ2VFbGVtZW50LnNyYyA9IHRoaXMuX3VybDtcbiAgICB0aGlzLl9pbWFnZUVsZW1lbnQuYWx0ID0gdGhpcy5fdXJsO1xuICAgIHRoaXMuX3RpdGxlRWxlbWVudC50ZXh0Q29udGVudCA9IHRoaXMuX3RpdGxlO1xuICAgIHRoaXMuX2RlbGV0ZUNhcmQgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWxlbWVudHMtZ3JpZF9fZGVsZXRlLWJ1dHRvblwiKTtcbiAgICB0aGlzLl9jYXJkTGlrZUJ1dHRvbiA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbGVtZW50cy1ncmlkX19pY29uXCIpO1xuICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7XG4gIH07XG59XG5cbi8vIGV4cG9ydCBkZWZhdWx0IENhcmQ7IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybVZhbGlkYXRvciB7XG4gIGNvbnN0cnVjdG9yKHNldHRpbmdzLCBmb3JtRWwpIHtcbiAgICB0aGlzLl9pbnB1dFNlbGVjdG9yID0gc2V0dGluZ3MuaW5wdXRTZWxlY3RvcjtcbiAgICB0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3RvciA9IHNldHRpbmdzLnN1Ym1pdEJ1dHRvblNlbGVjdG9yO1xuICAgIHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MgPSBzZXR0aW5ncy5pbmFjdGl2ZUJ1dHRvbkNsYXNzO1xuICAgIHRoaXMuX2lucHV0RXJyb3JDbGFzcyA9IHNldHRpbmdzLmlucHV0RXJyb3JDbGFzcztcbiAgICB0aGlzLl9lcnJvckNsYXNzID0gc2V0dGluZ3MuZXJyb3JDbGFzcztcbiAgICB0aGlzLl9mb3JtRWwgPSBmb3JtRWw7XG4gIH1cblxuICBfaXNJbnZhbGlkSW5wdXQoaW5wdXRFbCkge1xuICAgIHJldHVybiAhaW5wdXRFbC52YWxpZGl0eS52YWxpZDtcbiAgfVxuXG4gIF9zaG93RXJyb3IoaW5wdXRFbCkge1xuICAgIGNvbnN0IGVycm9yRWwgPSB0aGlzLl9mb3JtRWwucXVlcnlTZWxlY3RvcihgIyR7aW5wdXRFbC5pZH1gKTtcbiAgICBlcnJvckVsLmNsYXNzTGlzdC5hZGQodGhpcy5fZXJyb3JDbGFzcyk7XG4gICAgZXJyb3JFbC50ZXh0Q29udGVudCA9IGlucHV0RWwudmFsaWRhdGlvbk1lc3NhZ2U7XG4gICAgaW5wdXRFbC5jbGFzc0xpc3QuYWRkKHRoaXMuX2lucHV0RXJyb3JDbGFzcyk7XG4gIH1cblxuICBfaGlkZUVycm9yKGlucHV0RWwpIHtcbiAgICBjb25zdCBlcnJvckVsID0gdGhpcy5fZm9ybUVsLnF1ZXJ5U2VsZWN0b3IoYCMke2lucHV0RWwuaWR9YCk7XG4gICAgZXJyb3JFbC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2Vycm9yQ2xhc3MpO1xuICAgIGVycm9yRWwudGV4dENvbnRlbnQgPSAnICc7XG4gICAgaW5wdXRFbC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2lucHV0RXJyb3JDbGFzcyk7XG4gIH1cblxuICBfdG9nZ2xlQnV0dG9uKCkge1xuICAgIGlmICh0aGlzLl9pbnB1dExpc3Quc29tZSh0aGlzLl9pc0ludmFsaWRJbnB1dCkpIHtcbiAgICAgIHRoaXMuX2J1dHRvbkVsLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuX2J1dHRvbkVsLmNsYXNzTGlzdFxuICAgICAgLmFkZCh0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fYnV0dG9uRWwuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2J1dHRvbkVsLmNsYXNzTGlzdFxuICAgICAgLnJlbW92ZSh0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcbiAgICB9XG4gIH1cblxuICBfY2hlY2tJbnB1dFZhbGlkaXR5KGlucHV0RWwpIHtcbiAgICBjb25zdCBlcnJvckVsID0gdGhpcy5fZm9ybUVsLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgIyR7aW5wdXRFbC5pZH0tZXJyb3JgKTtcbiAgICBpZiAodGhpcy5faXNJbnZhbGlkSW5wdXQoaW5wdXRFbCkpIHtcbiAgICAgIHRoaXMuX3Nob3dFcnJvcihlcnJvckVsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5faGlkZUVycm9yKGVycm9yRWwpO1xuICAgIH1cbiAgfVxuXG4gIF9zZXRFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLl9pbnB1dExpc3QgPSBBcnJheS5mcm9tKHRoaXMuX2Zvcm1FbC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX2lucHV0U2VsZWN0b3IpKTtcbiAgICB0aGlzLl9idXR0b25FbCA9IHRoaXMuX2Zvcm1FbC5xdWVyeVNlbGVjdG9yKHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yKTtcblxuICAgIHRoaXMuX2lucHV0TGlzdC5mb3JFYWNoKChpbnB1dEVsKSA9PiB7XG4gICAgICBpbnB1dEVsLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2NoZWNrSW5wdXRWYWxpZGl0eShpbnB1dEVsKTtcbiAgICAgICAgdGhpcy5fdG9nZ2xlQnV0dG9uKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlc2V0Rm9ybSgpIHtcbiAgICB0aGlzLl9mb3JtRWwucmVzZXQoKTtcbiAgICB0aGlzLl90b2dnbGVCdXR0b24oKTtcbiAgfVxuXG4gIGVuYWJsZVZhbGlkYXRpb24oKSB7XG4gICAgdGhpcy5fZm9ybUVsLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycygpO1xuICB9XG59XG5cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwIHtcbiAgICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yKXtcbiAgICAgICAgdGhpcy5fcG9wdXBFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7cG9wdXBTZWxlY3Rvcn1gKTtcbiAgICAgICAgdGhpcy5faGFuZGxlRXNjVXAgPSB0aGlzLl9oYW5kbGVFc2NVcC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIF9oYW5kbGVFc2NVcChldnQpIHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKGV2dC5rZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICAgICAgLy8gY2xvc2VQb3B1cChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX29wZW5lZFwiKSk7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICAgIHRoaXMuX3BvcHVwRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2dCkgPT4ge1xuICAgICAgICBpZihcbiAgICAgICAgICAgIGV2dC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibW9kYWxcIilcbiAgICAgICAgICAgIC8vIHx8IGV2dC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKClcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBvcGVuKCl7XG4gICAgICB0aGlzLl9wb3B1cEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm1vZGFsX29wZW5lZFwiKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuX2hhbmRsZUVzY1VwKTtcbiAgICB9XG5cbiAgICBjbG9zZSgpe1xuICAgICAgdGhpcy5fcG9wdXBFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJtb2RhbF9vcGVuZWRcIik7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9oYW5kbGVFc2NVcCk7XG4gICAgfVxufVxuIiwiLy8gaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlY3Rpb24ge1xuICAvLyBjb25zdCBhZGRDYXJkUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1jYXJkLXBvcHVwXCIpO1xuICAvLyBjb25zdHJ1Y3Rvcih7aXRlbXMsIHJlbmRlcmVyfSwgdGVtcGxhdGUpe1xuICAgIGNvbnN0cnVjdG9yKHtpdGVtcywgcmVuZGVyZXJ9LCBjb250YWluZXJTZWxlY3Rvcil7XG4gICAgICAvLyBzdXBlcihwb3B1cFNlbGVjdG9yKTtcbiAgICAgIHRoaXMuX2l0ZW1zID0gaXRlbXM7XG4gICAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyO1xuICAgICAgLy8gdGhpcy5fY29udGFpbmVyU2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lclNlbGVjdG9yKTtcbiAgICAgIC8vIHRoaXMuX2NvbnRhaW5lclNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgJHtjb250YWluZXJTZWxlY3Rvcn1gKTtcbiAgICAgIC8vIGNvbnN0IGFkZENhcmRQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLWNhcmQtcG9wdXBcIik7XG4gICAgICAvLyB0aGlzLl9hZGRDYXJkUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHthZGRDYXJkUG9wdXB9YCk7XG4gICAgICAvLyB0aGlzLl9hZGRDYXJkUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGl0ZW1zKTtcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAke2NvbnRhaW5lclNlbGVjdG9yfWApO1xuICB9XG5cbiAgcmVuZGVySXRlbXMoZWxlbWVudCkge1xuICAgIGVsZW1lbnQuZm9yRWFjaCgoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5fcmVuZGVyZXIoZGF0YSk7XG4gICAgfSk7XG4gIH1cblxuICBhZGRJdGVtKGVsZW1lbnQpIHtcbiAgICB0aGlzLl9lbGVtZW50LnByZXBlbmQoZWxlbWVudCk7XG4gIC8vIHRoaXMuX2VsZW1lbnQuYXBwZW5kKGVsZW1lbnQpO1xuICB9XG59XG5cbiIsIlxuZXhwb3J0IGNvbnN0IGluaXRpYWxDYXJkcyA9IFtcbiAge1xuICAgIC8vTkFNRVxuICAgIHRpdGxlOiBcIkxha2UgJiBNb3VudGFpblwiLFxuICAgIC8vTElOS1xuICAgIHVybDogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTYzODgwMjQyMjYzMy02OTQwODg2ODAzNTk/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTY4NyZxPTgwXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJMYWtlIExvdWlzZVwiLFxuICAgIHVybDogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS9sYWtlLWxvdWlzZS5qcGdcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkJhbGQgTW91bnRhaW5zXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL2JhbGQtbW91bnRhaW5zLmpwZ1wiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiTGF0ZW1hclwiLFxuICAgIHVybDogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS9sYXRlbWFyLmpwZ1wiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiVmFub2lzZSBOYXRpb25hbCBQYXJrXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL3Zhbm9pc2UuanBnXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJMYWdvIGRpIGJyYWllc1wiLFxuICAgIHVybDogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS9sYWdvLmpwZ1wiLFxuICB9LFxuXTtcblxuXG5leHBvcnQgY29uc3QgZm9ybVZhbGlkYXRvckNvbmZpZyA9IHtcbiAgaW5wdXRTZWxlY3RvcjogXCIuZm9ybS1uYW1lX19pbnB1dFwiLFxuICBzdWJtaXRCdXR0b25TZWxlY3RvcjogXCIuZm9ybS1uYW1lX19zYXZlLWJ1dHRvblwiLFxuICBpbmFjdGl2ZUJ1dHRvbkNsYXNzOiBcImZvcm0tbmFtZV9fc2F2ZS1idXR0b25fZGlzYWJsZWRcIixcbiAgaW5wdXRFcnJvckNsYXNzOiBcImZvcm0tbmFtZV9fbW9kYWwtdHlwZV9lcnJvclwiLFxuICBlcnJvckNsYXNzOiBcIm1vZGFsX19wb3B1cF9fZXJyb3JfdmlzaWJsZVwiLFxufTtcblxuXG5leHBvcnQgY29uc3Qgc2VsZWN0b3JzID0ge1xuICBjYXJkU2VjdGlvbjogXCIuZWxlbWVudHMtZ3JpZF9fY2FyZHNcIiwgLy9jYXJkIGxpc3RcbiAgY2FyZFRlbXBsYXRlOiBcIiNjYXJkLXRlbXBsYXRlXCIsLy9jYXJkIHRlbXBsYXRlXG4gIC8vIHByZXZpZXdQb3B1cDogXCJwb3B1cF90eXBlX2ltYWdlXCIsXG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9pbmRleC5jc3MnO1xuXG4vL2ltcG9ydCBhbGwgY2xhc3Nlc1xuaW1wb3J0IENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZFwiO1xuaW1wb3J0IEZvcm1WYWxpZGF0b3IgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvclwiO1xuLy8gaW1wb3J0IFBvcHVwIGZyb20gJy4uL2NvbXBvbmVudHMvUG9wdXAnO1xuLy8gaW1wb3J0IFBvcHVwV2l0aEltYWdlcyBmcm9tICcuLi9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlcyc7XG4vLyBpbXBvcnQgUG9wdXBXaXRoRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm0nO1xuaW1wb3J0IFNlY3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VjdGlvblwiO1xuLy8gaW1wb3J0IFVzZXJJbmZvIGZyb20gJy4uL2NvbXBvbmVudHMvVXNlckluZm8nO1xuaW1wb3J0IHsgaW5pdGlhbENhcmRzLCBzZWxlY3RvcnMgfSBmcm9tIFwiLi4vdXRpbHMvY29uc3RhbnRzXCI7XG5cbi8vIGZ1bmN0aW9uIGFkZENhcmRUb1BhZ2UoY2FyZCkge1xuLy8gICBjYXJkTGlzdC5wcmVwZW5kKGNhcmQpO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiByZW5kZXJDYXJkKGRhdGEpIHtcbi8vICAgY29uc3QgY2FyZCA9IG5ldyBDYXJkKGNhcmRUZW1wbGF0ZSwgZGF0YSk7XG4vLyAgIGFkZENhcmRUb1BhZ2UoY2FyZC5yZW5kZXIoZGF0YSkpO1xuLy8gfVxuXG4vL0NhcmRzIHJlbmRlcmluZ1xuLy8gaW5pdGlhbENhcmRzLmZvckVhY2goKGRhdGEpID0+IHtcbi8vICAgcmVuZGVyQ2FyZChkYXRhLCBmb3JtQ2FyZCk7XG4vLyB9KTtcbi8vIGluaXRpYWxDYXJkcy5mb3JFYWNoKHJlbmRlckNhcmQpO1xuY29uc3QgY2FyZERpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9ycy5jYXJkVGVtcGxhdGUpO1xuXG5jb25zdCBDYXJkU2VjdGlvbiA9ICBuZXcgU2VjdGlvbiAoe1xuICByZW5kZXJlcjogKGl0ZW0pID0+IHtcbiAgICBjb25zdCBjYXJkRWwgPSBuZXcgQ2FyZCh7IGRhdGE6aXRlbSB9LCBjYXJkRGlzcGxheSk7XG4gICAgQ2FyZFNlY3Rpb24uYWRkSXRlbShjYXJkRWwucmVuZGVyKCkpO1xuICAgIC8vIGNvbnN0IGNhcmRFbCA9IG5ldyBDYXJkKGl0ZW0sIHNlbGVjdG9ycy5jYXJkVGVtcGxhdGUpO1xuICAgIC8vIGNvbnN0IGNhcmRFbCA9IHJlbmRlckNhcmQoZGF0YSkucmVuZGVyKCk7XG4gICAgLy8gY29uc3QgY2FyZEVsID0gbmV3IENhcmQoaXRlbXMsIHNlbGVjdG9ycy5jYXJkVGVtcGxhdGUpO1xuICAgIC8vIGNhcmRTZWN0aW9uLmFkZEl0ZW0oY2FyZEVsLnJlbmRlcigpKTtcbiAgfSxcbn0sXG4gIC8vIHNlbGVjdG9yOiBzZWxlY3RvcnMuY2FyZFNlY3Rpb24sXG4gIHNlbGVjdG9ycy5jYXJkU2VjdGlvbixcbik7XG5cbkNhcmRTZWN0aW9uLnJlbmRlckl0ZW1zKGluaXRpYWxDYXJkcyk7XG5cbiAgLy8gc2VsZWN0b3I6ICBzZWxlY3RvcnMuY2FyZFNlY3Rpb24sfVxuLy8gfSxcImVsZW1lbnRzLWdyaWRfX2NhcmRzXCIsXG4gIC8vfSxcbi8vKTtcbiAgLy90ZW1wbGF0ZSA9PSBzZWxlY3RvciBpbiBDYXJkLmpzXG4gIC8vIHRlbXBsYXRlOiBzZWxlY3RvcnMuY2FyZFNlY3Rpb24sXG4gIC8vIHNlbGVjdG9ycy5jYXJkU2VjdGlvblxuXG5cbi8vIGNhcmRTZWN0aW9uLmluaXRpYWxDYXJkcztcblxuXG5cblxuIl0sIm5hbWVzIjpbIlBvcHVwIiwiQ2FyZCIsInRlbXBsYXRlIiwicG9wdXBTZWxlY3RvciIsImRhdGEiLCJoYW5kbGVDYXJkUHJldmlldyIsIl90ZW1wbGF0ZSIsImNvbnRlbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xvbmVOb2RlIiwibW9kYWxJbWFnZUVsZW1lbnQiLCJzcmMiLCJfdXJsIiwibW9kYWxDYXB0aW9uIiwidGV4dENvbnRlbnQiLCJfdGl0bGUiLCJhbHQiLCJ1cmwiLCJvcGVuUG9wdXAiLCJpbWFnZVBvcHVwIiwiX2NhcmRMaWtlQnV0dG9uIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiX2VsZW1lbnQiLCJyZW1vdmUiLCJlbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2dCIsIl9oYW5kbGVMaWtlSWNvbiIsIl9kZWxldGVDYXJkIiwiX2hhbmRsZURlbGV0ZUNhcmQiLCJfaW1hZ2VFbGVtZW50IiwiX2hhbmRsZUNhcmRQcmV2aWV3IiwiX2dldEVsZW1lbnQiLCJfdGl0bGVFbGVtZW50IiwiX3NldEV2ZW50TGlzdGVuZXJzIiwiX2RhdGEiLCJ0aXRsZSIsIkZvcm1WYWxpZGF0b3IiLCJzZXR0aW5ncyIsImZvcm1FbCIsIl9pbnB1dFNlbGVjdG9yIiwiaW5wdXRTZWxlY3RvciIsIl9zdWJtaXRCdXR0b25TZWxlY3RvciIsInN1Ym1pdEJ1dHRvblNlbGVjdG9yIiwiX2luYWN0aXZlQnV0dG9uQ2xhc3MiLCJpbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiX2lucHV0RXJyb3JDbGFzcyIsImlucHV0RXJyb3JDbGFzcyIsIl9lcnJvckNsYXNzIiwiZXJyb3JDbGFzcyIsIl9mb3JtRWwiLCJpbnB1dEVsIiwidmFsaWRpdHkiLCJ2YWxpZCIsImVycm9yRWwiLCJpZCIsImFkZCIsInZhbGlkYXRpb25NZXNzYWdlIiwiX2lucHV0TGlzdCIsInNvbWUiLCJfaXNJbnZhbGlkSW5wdXQiLCJfYnV0dG9uRWwiLCJkaXNhYmxlZCIsIl9zaG93RXJyb3IiLCJfaGlkZUVycm9yIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJfY2hlY2tJbnB1dFZhbGlkaXR5IiwiX3RvZ2dsZUJ1dHRvbiIsInJlc2V0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiX3BvcHVwRWxlbWVudCIsImRvY3VtZW50IiwiX2hhbmRsZUVzY1VwIiwiYmluZCIsImtleSIsImNsb3NlIiwidGFyZ2V0IiwiY29udGFpbnMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiU2VjdGlvbiIsImNvbnRhaW5lclNlbGVjdG9yIiwiaXRlbXMiLCJyZW5kZXJlciIsIl9pdGVtcyIsIl9yZW5kZXJlciIsInByZXBlbmQiLCJpbml0aWFsQ2FyZHMiLCJmb3JtVmFsaWRhdG9yQ29uZmlnIiwic2VsZWN0b3JzIiwiY2FyZFNlY3Rpb24iLCJjYXJkVGVtcGxhdGUiLCJjYXJkRGlzcGxheSIsIkNhcmRTZWN0aW9uIiwiaXRlbSIsImNhcmRFbCIsImFkZEl0ZW0iLCJyZW5kZXIiLCJyZW5kZXJJdGVtcyJdLCJzb3VyY2VSb290IjoiIn0=