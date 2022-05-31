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
  cardSection: '.elements-gris',
  //card list
  template: ".elements-grid__card" //card template
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
    // const cardEl = new Card(data).render();
    // const cardEl = new Card(item, selectors.cardTemplate);
    var cardEl = renderCard(data).render(); // const cardEl = new Card(items, selectors.cardTemplate);

    CardSection.addItem(cardEl); // cardSection.addItem(cardEl.render());
  } // selector:  selectors.cardSection,}

}, "elements-grid__cards"); //template == selector in Card.js
// template: selectors.cardSection,
// selectors.cardSection
// cardSection.initialCards;

CardSection.renderItems(_utils_constants_js__WEBPACK_IMPORTED_MODULE_4__.initialCards);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0NDSkE7O0FBQ0E7Q0FFQTtBQUNBO0FBQ0E7O0NBRUE7O0NBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU04RixXQUFXLEdBQUksSUFBSVosMkRBQUosQ0FBYTtBQUNoQ0csRUFBQUEsUUFBUSxFQUFFLGtCQUFDbkYsSUFBRCxFQUFVO0FBQ2xCO0FBQ0E7QUFDQSxRQUFNNkYsTUFBTSxHQUFHQyxVQUFVLENBQUM5RixJQUFELENBQVYsQ0FBaUIrRixNQUFqQixFQUFmLENBSGtCLENBSWxCOztBQUNBSCxJQUFBQSxXQUFXLENBQUNJLE9BQVosQ0FBb0JILE1BQXBCLEVBTGtCLENBTWxCO0FBQ0QsR0FSK0IsQ0FTaEM7O0FBVGdDLENBQWIsRUFVbkIsc0JBVm1CLENBQXJCLEVBYUU7QUFDQTtBQUNBO0FBR0Y7O0FBSUlELFdBQVcsQ0FBQ0ssV0FBWixDQUF3QlQsNkRBQXhCLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcHJpbnQtOC8uL3NyYy9jb21wb25lbnRzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vc3ByaW50LTgvLi9zcmMvY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzIiwid2VicGFjazovL3NwcmludC04Ly4vc3JjL2NvbXBvbmVudHMvUG9wdXAuanMiLCJ3ZWJwYWNrOi8vc3ByaW50LTgvLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uLmpzIiwid2VicGFjazovL3NwcmludC04Ly4vc3JjL3V0aWxzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9zcHJpbnQtOC8uL3NyYy9wYWdlcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vc3ByaW50LTgvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3ByaW50LTgvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NwcmludC04L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc3ByaW50LTgvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zcHJpbnQtOC8uL3NyYy9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCBleHRlbmRzIFBvcHVwIHtcbiAgY29uc3RydWN0b3Ioe2RhdGEsIGhhbmRsZUNhcmRQcmV2aWV3fSwgdGVtcGxhdGUsIHBvcHVwU2VsZWN0b3IpIHtcbiAgICBzdXBlcihwb3B1cFNlbGVjdG9yKTtcbiAgICB0aGlzLl90ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuICAgIHRoaXMuX3RpdGxlID0gZGF0YS50aXRsZTtcbiAgICB0aGlzLl91cmwgPSBkYXRhLnVybDtcbiAgICB0aGlzLl9lbGVtZW50ID0gbnVsbDtcbiAgICB0aGlzLl9oYW5kbGVDYXJkUHJldmlldyA9IGhhbmRsZUNhcmRQcmV2aWV3O1xuICAgIC8vIHRoaXMuX2hhbmRsZUNhcmRDbGljayA9IGhhbmRsZUNhcmRDbGljaztcbiAgfVxuXG4gIC8vIENhcmQgdGVtcGxhdGVcbiAgX2dldEVsZW1lbnQgPSAoKSA9PiB7XG4gICAgLy8gdGhpcy5fZWxlbWVudCA9IHRoaXMuX3RlbXBsYXRlLmNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5lbGVtZW50cy1ncmlkX19jYXJkXCIpLmNsb25lTm9kZSh0cnVlKTtcbiAgICByZXR1cm4gdGhpcy5fdGVtcGxhdGUuY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRzLWdyaWRfX2NhcmRcIikuY2xvbmVOb2RlKHRydWUpO1xuICB9XG5cbiAgLy9DYXJkIHByZXZpZXcgaGFuZGxlciB3aGVuIGNsaWNrZWQgb25cbiAgX2hhbmRsZUNhcmRQcmV2aWV3ID0gKCkgPT4ge1xuICAgIG1vZGFsSW1hZ2VFbGVtZW50LnNyYyA9IHRoaXMuX3VybDtcbiAgICBtb2RhbENhcHRpb24udGV4dENvbnRlbnQgPSB0aGlzLl90aXRsZTtcbiAgICBtb2RhbEltYWdlRWxlbWVudC5hbHQgPWBpbWFnZSBvZiR7dXJsfWA7XG5cbiAgICBvcGVuUG9wdXAoaW1hZ2VQb3B1cCk7XG4gIH07XG5cbiAgLy9DYXJkIGxpa2UgaGFuZGxlci90b2dnbGVyXG4gIF9oYW5kbGVMaWtlSWNvbiA9ICgpID0+IHtcbiAgICB0aGlzLl9jYXJkTGlrZUJ1dHRvbi5jbGFzc0xpc3RcbiAgICAudG9nZ2xlKFwiZWxlbWVudHMtZ3JpZF9faWNvbi1hY3RpdmVcIik7XG4gIH07XG5cbiAgLy9DYXJkIHJlbW92YWwgaGFuZGxlclxuICBfaGFuZGxlRGVsZXRlQ2FyZCA9ICgpID0+IHtcbiAgICB0aGlzLl9lbGVtZW50LnJlbW92ZSgpO1xuICAgIHRoaXMuZWxlbWVudCA9IG51bGw7XG4gIH07XG5cbiAgLy9FdmVudCBsaXN0ZW5lcnNcbiAgX3NldEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgIHRoaXMuX2NhcmRMaWtlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZ0KSA9PiB7IC8vY2FyZCBsaWtlIGV2ZW50IGxpc3RlbmVyXG4gICAgICB0aGlzLl9oYW5kbGVMaWtlSWNvbihldnQpO1xuICAgIH0pO1xuICAgIHRoaXMuX2RlbGV0ZUNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldnQpID0+IHsgLy9jYXJkIGRlbGV0ZSBldmVudCBsaXN0ZW5lclxuICAgICAgdGhpcy5faGFuZGxlRGVsZXRlQ2FyZChldnQpO1xuICAgIH0pO1xuICAgIHRoaXMuX2ltYWdlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2dCkgPT4geyAvL2NhcmQgcHJldmlldyBldmVudCBsaXN0ZW5lclxuICAgICAgdGhpcy5faGFuZGxlQ2FyZFByZXZpZXcoZXZ0KTtcbiAgICB9KTtcbiAgfTtcblxuICAvL1RlbXBsYXRlIGRpc3BsYXlpbmdcbiAgcmVuZGVyID0gKCkgPT4ge1xuICAgIHRoaXMuX2VsZW1lbnQgPSB0aGlzLl9nZXRFbGVtZW50KCk7XG4gICAgdGhpcy5faW1hZ2VFbGVtZW50ID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRzLWdyaWRfX2ltYWdlXCIpO1xuICAgIHRoaXMuX3RpdGxlRWxlbWVudCA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbGVtZW50cy1ncmlkX190ZXh0XCIpO1xuICAgIHRoaXMuX2ltYWdlRWxlbWVudC5zcmMgPSB0aGlzLl91cmw7XG4gICAgdGhpcy5faW1hZ2VFbGVtZW50LmFsdCA9IHRoaXMuX3VybDtcbiAgICB0aGlzLl90aXRsZUVsZW1lbnQudGV4dENvbnRlbnQgPSB0aGlzLl90aXRsZTtcbiAgICB0aGlzLl9kZWxldGVDYXJkID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRzLWdyaWRfX2RlbGV0ZS1idXR0b25cIik7XG4gICAgdGhpcy5fY2FyZExpa2VCdXR0b24gPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWxlbWVudHMtZ3JpZF9faWNvblwiKTtcbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycygpO1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50O1xuICB9O1xufVxuXG4vLyBleHBvcnQgZGVmYXVsdCBDYXJkOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1WYWxpZGF0b3Ige1xuICBjb25zdHJ1Y3RvcihzZXR0aW5ncywgZm9ybUVsKSB7XG4gICAgdGhpcy5faW5wdXRTZWxlY3RvciA9IHNldHRpbmdzLmlucHV0U2VsZWN0b3I7XG4gICAgdGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IgPSBzZXR0aW5ncy5zdWJtaXRCdXR0b25TZWxlY3RvcjtcbiAgICB0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzID0gc2V0dGluZ3MuaW5hY3RpdmVCdXR0b25DbGFzcztcbiAgICB0aGlzLl9pbnB1dEVycm9yQ2xhc3MgPSBzZXR0aW5ncy5pbnB1dEVycm9yQ2xhc3M7XG4gICAgdGhpcy5fZXJyb3JDbGFzcyA9IHNldHRpbmdzLmVycm9yQ2xhc3M7XG4gICAgdGhpcy5fZm9ybUVsID0gZm9ybUVsO1xuICB9XG5cbiAgX2lzSW52YWxpZElucHV0KGlucHV0RWwpIHtcbiAgICByZXR1cm4gIWlucHV0RWwudmFsaWRpdHkudmFsaWQ7XG4gIH1cblxuICBfc2hvd0Vycm9yKGlucHV0RWwpIHtcbiAgICBjb25zdCBlcnJvckVsID0gdGhpcy5fZm9ybUVsLnF1ZXJ5U2VsZWN0b3IoYCMke2lucHV0RWwuaWR9YCk7XG4gICAgZXJyb3JFbC5jbGFzc0xpc3QuYWRkKHRoaXMuX2Vycm9yQ2xhc3MpO1xuICAgIGVycm9yRWwudGV4dENvbnRlbnQgPSBpbnB1dEVsLnZhbGlkYXRpb25NZXNzYWdlO1xuICAgIGlucHV0RWwuY2xhc3NMaXN0LmFkZCh0aGlzLl9pbnB1dEVycm9yQ2xhc3MpO1xuICB9XG5cbiAgX2hpZGVFcnJvcihpbnB1dEVsKSB7XG4gICAgY29uc3QgZXJyb3JFbCA9IHRoaXMuX2Zvcm1FbC5xdWVyeVNlbGVjdG9yKGAjJHtpbnB1dEVsLmlkfWApO1xuICAgIGVycm9yRWwuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9lcnJvckNsYXNzKTtcbiAgICBlcnJvckVsLnRleHRDb250ZW50ID0gJyAnO1xuICAgIGlucHV0RWwuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9pbnB1dEVycm9yQ2xhc3MpO1xuICB9XG5cbiAgX3RvZ2dsZUJ1dHRvbigpIHtcbiAgICBpZiAodGhpcy5faW5wdXRMaXN0LnNvbWUodGhpcy5faXNJbnZhbGlkSW5wdXQpKSB7XG4gICAgICB0aGlzLl9idXR0b25FbC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICB0aGlzLl9idXR0b25FbC5jbGFzc0xpc3RcbiAgICAgIC5hZGQodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2J1dHRvbkVsLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICB0aGlzLl9idXR0b25FbC5jbGFzc0xpc3RcbiAgICAgIC5yZW1vdmUodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgX2NoZWNrSW5wdXRWYWxpZGl0eShpbnB1dEVsKSB7XG4gICAgY29uc3QgZXJyb3JFbCA9IHRoaXMuX2Zvcm1FbC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYCMke2lucHV0RWwuaWR9LWVycm9yYCk7XG4gICAgaWYgKHRoaXMuX2lzSW52YWxpZElucHV0KGlucHV0RWwpKSB7XG4gICAgICB0aGlzLl9zaG93RXJyb3IoZXJyb3JFbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2hpZGVFcnJvcihlcnJvckVsKTtcbiAgICB9XG4gIH1cblxuICBfc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy5faW5wdXRMaXN0ID0gQXJyYXkuZnJvbSh0aGlzLl9mb3JtRWwucXVlcnlTZWxlY3RvckFsbCh0aGlzLl9pbnB1dFNlbGVjdG9yKSk7XG4gICAgdGhpcy5fYnV0dG9uRWwgPSB0aGlzLl9mb3JtRWwucXVlcnlTZWxlY3Rvcih0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3Rvcik7XG5cbiAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaCgoaW5wdXRFbCkgPT4ge1xuICAgICAgaW5wdXRFbC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuICAgICAgICB0aGlzLl9jaGVja0lucHV0VmFsaWRpdHkoaW5wdXRFbCk7XG4gICAgICAgIHRoaXMuX3RvZ2dsZUJ1dHRvbigpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICByZXNldEZvcm0oKSB7XG4gICAgdGhpcy5fZm9ybUVsLnJlc2V0KCk7XG4gICAgdGhpcy5fdG9nZ2xlQnV0dG9uKCk7XG4gIH1cblxuICBlbmFibGVWYWxpZGF0aW9uKCkge1xuICAgIHRoaXMuX2Zvcm1FbC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG4gICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgfVxufVxuXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cCB7XG4gICAgY29uc3RydWN0b3IocG9wdXBTZWxlY3Rvcil7XG4gICAgICAgIHRoaXMuX3BvcHVwRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3BvcHVwU2VsZWN0b3J9YCk7XG4gICAgICAgIHRoaXMuX2hhbmRsZUVzY1VwID0gdGhpcy5faGFuZGxlRXNjVXAuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBfaGFuZGxlRXNjVXAoZXZ0KSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmIChldnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICAgIC8vIGNsb3NlUG9wdXAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9vcGVuZWRcIikpO1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICB0aGlzLl9wb3B1cEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldnQpID0+IHtcbiAgICAgICAgaWYoXG4gICAgICAgICAgICBldnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIm1vZGFsXCIpXG4gICAgICAgICAgICAvLyB8fCBldnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygpXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgb3Blbigpe1xuICAgICAgdGhpcy5fcG9wdXBFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJtb2RhbF9vcGVuZWRcIik7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9oYW5kbGVFc2NVcCk7XG4gICAgfVxuXG4gICAgY2xvc2UoKXtcbiAgICAgIHRoaXMuX3BvcHVwRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwibW9kYWxfb3BlbmVkXCIpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5faGFuZGxlRXNjVXApO1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlY3Rpb24ge1xuICAvLyBjb25zdCBhZGRDYXJkUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1jYXJkLXBvcHVwXCIpO1xuICAvLyBjb25zdHJ1Y3Rvcih7aXRlbXMsIHJlbmRlcmVyfSwgdGVtcGxhdGUpe1xuICAgIGNvbnN0cnVjdG9yKHtpdGVtcywgcmVuZGVyZXJ9LCBjb250YWluZXJTZWxlY3Rvcil7XG4gICAgICB0aGlzLl9pdGVtcyA9IGl0ZW1zO1xuICAgICAgdGhpcy5fcmVuZGVyZXIgPSByZW5kZXJlcjtcbiAgICAgIHRoaXMuX2NvbnRhaW5lclNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgJHtjb250YWluZXJTZWxlY3Rvcn1gKTtcbiAgICAgIC8vIGNvbnN0IGFkZENhcmRQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLWNhcmQtcG9wdXBcIik7XG4gICAgICAvLyB0aGlzLl9hZGRDYXJkUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHthZGRDYXJkUG9wdXB9YCk7XG4gICAgICAvLyB0aGlzLl9hZGRDYXJkUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGl0ZW1zKTtcbiAgICAgIC8vIHRoaXMuX2VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAke2NvbnRhaW5lclNlbGVjdG9yfWApO1xuICB9XG5cbiAgcmVuZGVySXRlbXMoZWxlbWVudCkge1xuICAgICAgZWxlbWVudC5mb3JFYWNoKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLl9yZW5kZXJlcihkYXRhKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZEl0ZW0oZWxlbWVudCkge1xuICAgIC8vIHRoaXMuX2VsZW1lbnQucHJlcGVuZChlbGVtZW50KTtcbiAgdGhpcy5fZWxlbWVudC5hcHBlbmQoZWxlbWVudCk7XG4gIH1cbn1cblxuIiwiXG5leHBvcnQgY29uc3QgaW5pdGlhbENhcmRzID0gW1xuICB7XG4gICAgLy9OQU1FXG4gICAgdGl0bGU6IFwiTGFrZSAmIE1vdW50YWluXCIsXG4gICAgLy9MSU5LXG4gICAgdXJsOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNjM4ODAyNDIyNjMzLTY5NDA4ODY4MDM1OT9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9Njg3JnE9ODBcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkxha2UgTG91aXNlXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL2xha2UtbG91aXNlLmpwZ1wiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiQmFsZCBNb3VudGFpbnNcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUvYmFsZC1tb3VudGFpbnMuanBnXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJMYXRlbWFyXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL2xhdGVtYXIuanBnXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJWYW5vaXNlIE5hdGlvbmFsIFBhcmtcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUvdmFub2lzZS5qcGdcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkxhZ28gZGkgYnJhaWVzXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL2xhZ28uanBnXCIsXG4gIH0sXG5dO1xuXG5cbmV4cG9ydCBjb25zdCBmb3JtVmFsaWRhdG9yQ29uZmlnID0ge1xuICBpbnB1dFNlbGVjdG9yOiBcIi5mb3JtLW5hbWVfX2lucHV0XCIsXG4gIHN1Ym1pdEJ1dHRvblNlbGVjdG9yOiBcIi5mb3JtLW5hbWVfX3NhdmUtYnV0dG9uXCIsXG4gIGluYWN0aXZlQnV0dG9uQ2xhc3M6IFwiZm9ybS1uYW1lX19zYXZlLWJ1dHRvbl9kaXNhYmxlZFwiLFxuICBpbnB1dEVycm9yQ2xhc3M6IFwiZm9ybS1uYW1lX19tb2RhbC10eXBlX2Vycm9yXCIsXG4gIGVycm9yQ2xhc3M6IFwibW9kYWxfX3BvcHVwX19lcnJvcl92aXNpYmxlXCIsXG59O1xuXG5cbmV4cG9ydCBjb25zdCBzZWxlY3RvcnMgPSB7XG4gIGNhcmRTZWN0aW9uOiAnLmVsZW1lbnRzLWdyaXMnLC8vY2FyZCBsaXN0XG4gIHRlbXBsYXRlOiBcIi5lbGVtZW50cy1ncmlkX19jYXJkXCIsLy9jYXJkIHRlbXBsYXRlXG4gIC8vIHByZXZpZXdQb3B1cDogXCJwb3B1cF90eXBlX2ltYWdlXCIsXG59XG5cbi8vIGV4cG9ydCBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsaXN0LXRpdGxlXCIpO1xuLy8gZXhwb3J0IGNvbnN0IHN1YnRpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xpc3Qtc3VidGl0bGVcIik7XG4vLyBleHBvcnQgY29uc3QgY2FyZFRpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhcmQtdGl0bGVcIik7XG4vLyBleHBvcnQgY29uc3QgY2FyZFVybElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYXJkLXVybFwiKTtcblxuLy8gZXhwb3J0IGNvbnN0IG1vZGFsSW1hZ2VFbGVtZW50ID0gaW1hZ2VQb3B1cC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19wb3B1cC1pbWFnZVwiKTtcbi8vIGV4cG9ydCBjb25zdCBtb2RhbENhcHRpb24gPSBpbWFnZVBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX3BvcHVwLWNhcHRpb25cIik7XG4vLyBleHBvcnQgY29uc3QgZWRpdEZvcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2VkaXQtYnV0dG9uXCIpO1xuLy8gZXhwb3J0IGNvbnN0IGFkZENhcmRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX3BsdXMtYnV0dG9uXCIpO1xuXG4vLyAvLyBjb25zdCBsaXN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX3RpdGxlXCIpO1xuLy8gLy8gY29uc3QgbGlzdFN1YnRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19zdWJ0aXRsZVwiKTtcbi8vIC8vIGNvbnN0IGNsb3NlUHJvZmlsZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvc2UtcHJvZmlsZS1wb3B1cFwiKTtcbi8vIC8vIGNvbnN0IGNsb3NlQ2FyZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvc2UtY2FyZC1wb3B1cFwiKTtcbi8vIC8vIGNvbnN0IGNsb3NlSW1hZ2VQcmV2aWV3QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbG9zZS1pbWFnZS1wb3B1cFwiKTtcblxuLy8gZXhwb3J0IGNvbnN0IGNhcmRDcmVhdGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NyZWF0ZS1jYXJkLWJ1dHRvblwiKTtcblxuLy8gZXhwb3J0IGNvbnN0IHByb2ZpbGVQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdC1wcm9maWxlLXBvcHVwXCIpOyAvLy5wb3B1cF9fZm9ybVxuLy8gZXhwb3J0IGNvbnN0IGFkZENhcmRQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLWNhcmQtcG9wdXBcIik7XG5cbi8vIGV4cG9ydCBjb25zdCBmb3JtUHJvZmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdC1wcm9maWxlLXBvcHVwXCIpO1xuLy8gZXhwb3J0IGNvbnN0IGZvcm1DYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtY2FyZC1wb3B1cFwiKTtcblxuLy8gLy9hZGRpbmcgY2xhc3MgLmZvcm0tbmFtZSBhcyBhIHNlY29uZCBhcmd1bWVudCBvZiB2YWxpZGF0b3IgP1xuLy8gZXhwb3J0IGNvbnN0IGZvcm1Qcm9maWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0LXByb2ZpbGUtcG9wdXAgLmZvcm0tbmFtZVwiKTtcbi8vIGV4cG9ydCBjb25zdCBmb3JtQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLWNhcmQtcG9wdXAgLmZvcm0tbmFtZVwiKTtcbi8vIGV4cG9ydCBjb25zdCBpbWFnZVBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbWFnZS1wb3B1cFwiKTtcblxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vaW5kZXguY3NzJztcblxuLy9pbXBvcnQgYWxsIGNsYXNzZXNcbmltcG9ydCBDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmRcIjtcbmltcG9ydCBGb3JtVmFsaWRhdG9yIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3JcIjtcbi8vIGltcG9ydCBQb3B1cCBmcm9tICcuLi9jb21wb25lbnRzL1BvcHVwJztcbi8vIGltcG9ydCBQb3B1cFdpdGhJbWFnZXMgZnJvbSAnLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhJbWFnZXMnO1xuLy8gaW1wb3J0IFBvcHVwV2l0aEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtJztcbmltcG9ydCBTZWN0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvU2VjdGlvbic7XG4vLyBpbXBvcnQgVXNlckluZm8gZnJvbSAnLi4vY29tcG9uZW50cy9Vc2VySW5mbyc7XG5pbXBvcnQgeyBpbml0aWFsQ2FyZHMsZm9ybVZhbGlkYXRvckNvbmZpZywgc2VsZWN0b3JzIH0gZnJvbSBcIi4uL3V0aWxzL2NvbnN0YW50cy5qc1wiO1xuXG4vLyBmdW5jdGlvbiBhZGRDYXJkVG9QYWdlKGNhcmQpIHtcbi8vICAgY2FyZExpc3QucHJlcGVuZChjYXJkKTtcbi8vIH1cblxuLy8gZnVuY3Rpb24gcmVuZGVyQ2FyZChkYXRhKSB7XG4vLyAgIGNvbnN0IGNhcmQgPSBuZXcgQ2FyZChjYXJkVGVtcGxhdGUsIGRhdGEpO1xuLy8gICBhZGRDYXJkVG9QYWdlKGNhcmQucmVuZGVyKGRhdGEpKTtcbi8vIH1cblxuLy9DYXJkcyByZW5kZXJpbmdcbi8vIGluaXRpYWxDYXJkcy5mb3JFYWNoKChkYXRhKSA9PiB7XG4vLyAgIHJlbmRlckNhcmQoZGF0YSwgZm9ybUNhcmQpO1xuLy8gfSk7XG4vLyBpbml0aWFsQ2FyZHMuZm9yRWFjaChyZW5kZXJDYXJkKTtcblxuY29uc3QgQ2FyZFNlY3Rpb24gPSAgbmV3IFNlY3Rpb24gKHtcbiAgcmVuZGVyZXI6IChkYXRhKSA9PiB7XG4gICAgLy8gY29uc3QgY2FyZEVsID0gbmV3IENhcmQoZGF0YSkucmVuZGVyKCk7XG4gICAgLy8gY29uc3QgY2FyZEVsID0gbmV3IENhcmQoaXRlbSwgc2VsZWN0b3JzLmNhcmRUZW1wbGF0ZSk7XG4gICAgY29uc3QgY2FyZEVsID0gcmVuZGVyQ2FyZChkYXRhKS5yZW5kZXIoKTtcbiAgICAvLyBjb25zdCBjYXJkRWwgPSBuZXcgQ2FyZChpdGVtcywgc2VsZWN0b3JzLmNhcmRUZW1wbGF0ZSk7XG4gICAgQ2FyZFNlY3Rpb24uYWRkSXRlbShjYXJkRWwpO1xuICAgIC8vIGNhcmRTZWN0aW9uLmFkZEl0ZW0oY2FyZEVsLnJlbmRlcigpKTtcbiAgfVxuICAvLyBzZWxlY3RvcjogIHNlbGVjdG9ycy5jYXJkU2VjdGlvbix9XG59LFwiZWxlbWVudHMtZ3JpZF9fY2FyZHNcIixcblxuKTtcbiAgLy90ZW1wbGF0ZSA9PSBzZWxlY3RvciBpbiBDYXJkLmpzXG4gIC8vIHRlbXBsYXRlOiBzZWxlY3RvcnMuY2FyZFNlY3Rpb24sXG4gIC8vIHNlbGVjdG9ycy5jYXJkU2VjdGlvblxuXG5cbi8vIGNhcmRTZWN0aW9uLmluaXRpYWxDYXJkcztcblxuXG5cbiAgICBDYXJkU2VjdGlvbi5yZW5kZXJJdGVtcyhpbml0aWFsQ2FyZHMpO1xuIl0sIm5hbWVzIjpbIlBvcHVwIiwiQ2FyZCIsInRlbXBsYXRlIiwicG9wdXBTZWxlY3RvciIsImRhdGEiLCJoYW5kbGVDYXJkUHJldmlldyIsIl90ZW1wbGF0ZSIsImNvbnRlbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xvbmVOb2RlIiwibW9kYWxJbWFnZUVsZW1lbnQiLCJzcmMiLCJfdXJsIiwibW9kYWxDYXB0aW9uIiwidGV4dENvbnRlbnQiLCJfdGl0bGUiLCJhbHQiLCJ1cmwiLCJvcGVuUG9wdXAiLCJpbWFnZVBvcHVwIiwiX2NhcmRMaWtlQnV0dG9uIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiX2VsZW1lbnQiLCJyZW1vdmUiLCJlbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2dCIsIl9oYW5kbGVMaWtlSWNvbiIsIl9kZWxldGVDYXJkIiwiX2hhbmRsZURlbGV0ZUNhcmQiLCJfaW1hZ2VFbGVtZW50IiwiX2hhbmRsZUNhcmRQcmV2aWV3IiwiX2dldEVsZW1lbnQiLCJfdGl0bGVFbGVtZW50IiwiX3NldEV2ZW50TGlzdGVuZXJzIiwiX2RhdGEiLCJ0aXRsZSIsIkZvcm1WYWxpZGF0b3IiLCJzZXR0aW5ncyIsImZvcm1FbCIsIl9pbnB1dFNlbGVjdG9yIiwiaW5wdXRTZWxlY3RvciIsIl9zdWJtaXRCdXR0b25TZWxlY3RvciIsInN1Ym1pdEJ1dHRvblNlbGVjdG9yIiwiX2luYWN0aXZlQnV0dG9uQ2xhc3MiLCJpbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiX2lucHV0RXJyb3JDbGFzcyIsImlucHV0RXJyb3JDbGFzcyIsIl9lcnJvckNsYXNzIiwiZXJyb3JDbGFzcyIsIl9mb3JtRWwiLCJpbnB1dEVsIiwidmFsaWRpdHkiLCJ2YWxpZCIsImVycm9yRWwiLCJpZCIsImFkZCIsInZhbGlkYXRpb25NZXNzYWdlIiwiX2lucHV0TGlzdCIsInNvbWUiLCJfaXNJbnZhbGlkSW5wdXQiLCJfYnV0dG9uRWwiLCJkaXNhYmxlZCIsIl9zaG93RXJyb3IiLCJfaGlkZUVycm9yIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJfY2hlY2tJbnB1dFZhbGlkaXR5IiwiX3RvZ2dsZUJ1dHRvbiIsInJlc2V0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiX3BvcHVwRWxlbWVudCIsImRvY3VtZW50IiwiX2hhbmRsZUVzY1VwIiwiYmluZCIsImtleSIsImNsb3NlIiwidGFyZ2V0IiwiY29udGFpbnMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiU2VjdGlvbiIsImNvbnRhaW5lclNlbGVjdG9yIiwiaXRlbXMiLCJyZW5kZXJlciIsIl9pdGVtcyIsIl9yZW5kZXJlciIsIl9jb250YWluZXJTZWxlY3RvciIsImFwcGVuZCIsImluaXRpYWxDYXJkcyIsImZvcm1WYWxpZGF0b3JDb25maWciLCJzZWxlY3RvcnMiLCJjYXJkU2VjdGlvbiIsIkNhcmRTZWN0aW9uIiwiY2FyZEVsIiwicmVuZGVyQ2FyZCIsInJlbmRlciIsImFkZEl0ZW0iLCJyZW5kZXJJdGVtcyJdLCJzb3VyY2VSb290IjoiIn0=