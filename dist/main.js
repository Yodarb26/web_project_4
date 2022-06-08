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

 //deconstruct

var Card = /*#__PURE__*/function (_Popup) {
  _inherits(Card, _Popup);

  var _super = _createSuper(Card);

  function Card(_ref, template, popupSelector) {
    var _this;

    var data = _ref.data,
        handleCardPreview = _ref.handleCardPreview;

    _classCallCheck(this, Card);

    // constructor({data, handleCardPreview, handleCardClick}, template, popupSelector) {
    _this = _super.call(this, popupSelector);

    _defineProperty(_assertThisInitialized(_this), "_getElement", function () {
      return _this._template.content.querySelector(".elements-grid__card").cloneNode(true); // this._element = this._template.content.querySelector(".elements-grid__card").cloneNode(true);
      // return this._element;
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
        // this._handleCardPreview();
        // this._handleCardPreview(evt);
        _this._handleCardPreview({
          url: _this._data.url,
          title: _this._data.title
        }); // console.log(evt.target)
        // this._handleCardClick({url:data.url, title: data.title})

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
      console.log(123);

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

/***/ "./src/components/PopupWithImages.js":
/*!*******************************************!*\
  !*** ./src/components/PopupWithImages.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopupWithImages)
/* harmony export */ });
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var PopupWithImages = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithImages, _Popup);

  var _super = _createSuper(PopupWithImages);

  function PopupWithImages(popupSelector) {
    var _this;

    _classCallCheck(this, PopupWithImages);

    _this = _super.call(this, popupSelector);
    _this._modalImageElement = _this._popupElement.querySelector(".modal__popup-image");
    _this._modalCaption = _this._popupElement.querySelector(".modal__popup-caption"); // this._modalImageElement = this._imagePopup.querySelector(".modal__popup-image");
    // this._modalCaption = this._imagePopup.querySelector(".modal__popup-caption");

    return _this;
  } //  open({url, title}) {
  //     this._popupElement,
  //     // const image = this._popupElement.querySelector(".modal__popup-image");
  //     this._modalImageElement.src = url;
  //     this._modalImageElement.alt =`image of${url}`;
  //     this._modalCaption = title;
  //     super.open();
  //   }


  _createClass(PopupWithImages, [{
    key: "open",
    value: function open(data) {
      console.log(data); // this._popupElement,
      // const image = this._popupElement.querySelector(".modal__popup-image");

      this._modalImageElement.src = data.url;
      this._modalImageElement.alt = "image of".concat(data.url);
      this._modalCaption.textContent = data.title;

      _get(_getPrototypeOf(PopupWithImages.prototype), "open", this).call(this);
    }
  }]);

  return PopupWithImages;
}(_Popup__WEBPACK_IMPORTED_MODULE_0__["default"]);



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
  cardTemplate: "#card-template",
  //card template
  previewPopup: "modal__popup_type_image"
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
/* harmony import */ var _components_PopupWithImages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PopupWithImages */ "./src/components/PopupWithImages.js");
/* harmony import */ var _components_Section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Section */ "./src/components/Section.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/constants */ "./src/utils/constants.js");
 //import all classes



 // import PopupWithForm from '../components/PopupWithForm';

 // import UserInfo from '../components/UserInfo';

 // const image = this._popupElement.querySelector(".modal__popup-image");

var CardPreviewPopup = new _components_PopupWithImages__WEBPACK_IMPORTED_MODULE_3__["default"](_utils_constants__WEBPACK_IMPORTED_MODULE_5__.selectors.previewPopup);
var cardDisplay = document.querySelector(_utils_constants__WEBPACK_IMPORTED_MODULE_5__.selectors.cardTemplate);
var CardSection = new _components_Section__WEBPACK_IMPORTED_MODULE_4__["default"]({
  renderer: function renderer(item) {
    var cardEl = new _components_Card__WEBPACK_IMPORTED_MODULE_1__["default"]({
      data: item,
      handleCardPreview: function handleCardPreview(imgData) {
        CardPreviewPopup.open(imgData);
      }
    }, cardDisplay);
    CardSection.addItem(cardEl.render());
  }
}, // selector: selectors.cardSection,
_utils_constants__WEBPACK_IMPORTED_MODULE_5__.selectors.cardSection);
CardSection.renderItems(_utils_constants__WEBPACK_IMPORTED_MODULE_5__.initialCards);
CardPreviewPopup.setEventListeners(); // const CardSection =  new Section ({
//   renderer: (item) => {
//     const cardEl = new Card({ data:item }, cardDisplay);
//     CardSection.addItem(cardEl.render());
//   },
// },
//   selectors.cardSection,
// );
// CardSection.renderItems(initialCards);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRSwyQkFBQ2tHLE9BQUQsRUFBYTtBQUMvREwsUUFBQUEsZ0JBQWdCLENBQUNNLElBQWpCLENBQXNCRCxPQUF0QjtBQUNMO0FBRnVCLEtBQVQsRUFHZEosV0FIYyxDQUFmO0FBSUFDLElBQUFBLFdBQVcsQ0FBQ0ssT0FBWixDQUFvQkgsTUFBTSxDQUFDSSxNQUFQLEVBQXBCO0FBQ0Q7QUFQK0IsQ0FBYixFQVNuQjtBQUNBWixtRUFWbUIsQ0FBckI7QUFhQU0sV0FBVyxDQUFDTyxXQUFaLENBQXdCZiwwREFBeEI7QUFDQU0sZ0JBQWdCLENBQUNVLGlCQUFqQixJQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSx5QyIsInNvdXJjZXMiOlsid2VicGFjazovL3NwcmludC04Ly4vc3JjL2NvbXBvbmVudHMvQ2FyZC5qcyIsIndlYnBhY2s6Ly9zcHJpbnQtOC8uL3NyYy9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vc3ByaW50LTgvLi9zcmMvY29tcG9uZW50cy9Qb3B1cC5qcyIsIndlYnBhY2s6Ly9zcHJpbnQtOC8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlcy5qcyIsIndlYnBhY2s6Ly9zcHJpbnQtOC8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vc3ByaW50LTgvLi9zcmMvdXRpbHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL3NwcmludC04Ly4vc3JjL3BhZ2VzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9zcHJpbnQtOC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zcHJpbnQtOC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc3ByaW50LTgvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zcHJpbnQtOC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3NwcmludC04Ly4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cFwiO1xuXG4vL2RlY29uc3RydWN0XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkIGV4dGVuZHMgUG9wdXAge1xuICBjb25zdHJ1Y3Rvcih7ZGF0YSwgaGFuZGxlQ2FyZFByZXZpZXd9LCB0ZW1wbGF0ZSwgcG9wdXBTZWxlY3Rvcikge1xuICAgIC8vIGNvbnN0cnVjdG9yKHtkYXRhLCBoYW5kbGVDYXJkUHJldmlldywgaGFuZGxlQ2FyZENsaWNrfSwgdGVtcGxhdGUsIHBvcHVwU2VsZWN0b3IpIHtcbiAgICBzdXBlcihwb3B1cFNlbGVjdG9yKTtcbiAgICB0aGlzLl90ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuICAgIHRoaXMuX3RpdGxlID0gZGF0YS50aXRsZTtcbiAgICB0aGlzLl91cmwgPSBkYXRhLnVybDtcbiAgICB0aGlzLl9lbGVtZW50ID0gbnVsbDtcbiAgICB0aGlzLl9oYW5kbGVDYXJkUHJldmlldyA9IGhhbmRsZUNhcmRQcmV2aWV3O1xuICAgIC8vIHRoaXMuX2hhbmRsZUNhcmRDbGljayA9IGhhbmRsZUNhcmRDbGljaztcbiAgfVxuXG4gIC8vIENhcmQgdGVtcGxhdGVcbiAgX2dldEVsZW1lbnQgPSAoKSA9PiB7XG4gICAgIHJldHVybiB0aGlzLl90ZW1wbGF0ZS5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWxlbWVudHMtZ3JpZF9fY2FyZFwiKS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgLy8gdGhpcy5fZWxlbWVudCA9IHRoaXMuX3RlbXBsYXRlLmNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5lbGVtZW50cy1ncmlkX19jYXJkXCIpLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgLy8gcmV0dXJuIHRoaXMuX2VsZW1lbnQ7XG4gIH1cblxuICAvL0NhcmQgcHJldmlldyBoYW5kbGVyIHdoZW4gY2xpY2tlZCBvblxuICAvLyBfaGFuZGxlQ2FyZFByZXZpZXcgPSAoKSA9PiB7XG4gIC8vICAgLy8gbW9kYWxJbWFnZUVsZW1lbnQuc3JjID0gdGhpcy5fdXJsO1xuICAvLyAgIC8vIG1vZGFsQ2FwdGlvbi50ZXh0Q29udGVudCA9IHRoaXMuX3RpdGxlO1xuICAvLyAgIC8vIG1vZGFsSW1hZ2VFbGVtZW50LmFsdCA9YGltYWdlIG9mJHt1cmx9YDtcblxuICAvLyAgIG9wZW5Qb3B1cChpbWFnZVBvcHVwKTtcbiAgLy8gfTtcblxuICAvL0NhcmQgbGlrZSBoYW5kbGVyL3RvZ2dsZXJcbiAgX2hhbmRsZUxpa2VJY29uID0gKCkgPT4ge1xuICAgIHRoaXMuX2NhcmRMaWtlQnV0dG9uLmNsYXNzTGlzdFxuICAgIC50b2dnbGUoXCJlbGVtZW50cy1ncmlkX19pY29uLWFjdGl2ZVwiKTtcbiAgfTtcblxuICAvL0NhcmQgcmVtb3ZhbCBoYW5kbGVyXG4gIF9oYW5kbGVEZWxldGVDYXJkID0gKCkgPT4ge1xuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlKCk7XG4gICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcbiAgfTtcblxuICAvL0V2ZW50IGxpc3RlbmVyc1xuICBfc2V0RXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgdGhpcy5fY2FyZExpa2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldnQpID0+IHsgLy9jYXJkIGxpa2UgZXZlbnQgbGlzdGVuZXJcbiAgICAgIHRoaXMuX2hhbmRsZUxpa2VJY29uKGV2dCk7XG4gICAgfSk7XG4gICAgdGhpcy5fZGVsZXRlQ2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2dCkgPT4geyAvL2NhcmQgZGVsZXRlIGV2ZW50IGxpc3RlbmVyXG4gICAgICB0aGlzLl9oYW5kbGVEZWxldGVDYXJkKGV2dCk7XG4gICAgfSk7XG4gICAgdGhpcy5faW1hZ2VFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZ0KSA9PiB7IC8vY2FyZCBwcmV2aWV3IGV2ZW50IGxpc3RlbmVyXG4gICAgICAvLyB0aGlzLl9oYW5kbGVDYXJkUHJldmlldygpO1xuICAgICAgLy8gdGhpcy5faGFuZGxlQ2FyZFByZXZpZXcoZXZ0KTtcbiAgICAgIHRoaXMuX2hhbmRsZUNhcmRQcmV2aWV3KHt1cmw6dGhpcy5fZGF0YS51cmwsIHRpdGxlOiB0aGlzLl9kYXRhLnRpdGxlfSk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhldnQudGFyZ2V0KVxuICAgICAgLy8gdGhpcy5faGFuZGxlQ2FyZENsaWNrKHt1cmw6ZGF0YS51cmwsIHRpdGxlOiBkYXRhLnRpdGxlfSlcbiAgICB9KTtcbiAgfTtcblxuICAvL1RlbXBsYXRlIGRpc3BsYXlpbmdcbiAgcmVuZGVyID0gKCkgPT4ge1xuICAgIHRoaXMuX2VsZW1lbnQgPSB0aGlzLl9nZXRFbGVtZW50KCk7XG4gICAgdGhpcy5faW1hZ2VFbGVtZW50ID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRzLWdyaWRfX2ltYWdlXCIpO1xuICAgIHRoaXMuX3RpdGxlRWxlbWVudCA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbGVtZW50cy1ncmlkX190ZXh0XCIpO1xuICAgIHRoaXMuX2ltYWdlRWxlbWVudC5zcmMgPSB0aGlzLl91cmw7XG4gICAgdGhpcy5faW1hZ2VFbGVtZW50LmFsdCA9IHRoaXMuX3VybDtcbiAgICB0aGlzLl90aXRsZUVsZW1lbnQudGV4dENvbnRlbnQgPSB0aGlzLl90aXRsZTtcbiAgICB0aGlzLl9kZWxldGVDYXJkID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRzLWdyaWRfX2RlbGV0ZS1idXR0b25cIik7XG4gICAgdGhpcy5fY2FyZExpa2VCdXR0b24gPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWxlbWVudHMtZ3JpZF9faWNvblwiKTtcbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycygpO1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50O1xuICB9O1xufVxuXG4vLyBleHBvcnQgZGVmYXVsdCBDYXJkOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1WYWxpZGF0b3Ige1xuICBjb25zdHJ1Y3RvcihzZXR0aW5ncywgZm9ybUVsKSB7XG4gICAgdGhpcy5faW5wdXRTZWxlY3RvciA9IHNldHRpbmdzLmlucHV0U2VsZWN0b3I7XG4gICAgdGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IgPSBzZXR0aW5ncy5zdWJtaXRCdXR0b25TZWxlY3RvcjtcbiAgICB0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzID0gc2V0dGluZ3MuaW5hY3RpdmVCdXR0b25DbGFzcztcbiAgICB0aGlzLl9pbnB1dEVycm9yQ2xhc3MgPSBzZXR0aW5ncy5pbnB1dEVycm9yQ2xhc3M7XG4gICAgdGhpcy5fZXJyb3JDbGFzcyA9IHNldHRpbmdzLmVycm9yQ2xhc3M7XG4gICAgdGhpcy5fZm9ybUVsID0gZm9ybUVsO1xuICB9XG5cbiAgX2lzSW52YWxpZElucHV0KGlucHV0RWwpIHtcbiAgICByZXR1cm4gIWlucHV0RWwudmFsaWRpdHkudmFsaWQ7XG4gIH1cblxuICBfc2hvd0Vycm9yKGlucHV0RWwpIHtcbiAgICBjb25zdCBlcnJvckVsID0gdGhpcy5fZm9ybUVsLnF1ZXJ5U2VsZWN0b3IoYCMke2lucHV0RWwuaWR9YCk7XG4gICAgZXJyb3JFbC5jbGFzc0xpc3QuYWRkKHRoaXMuX2Vycm9yQ2xhc3MpO1xuICAgIGVycm9yRWwudGV4dENvbnRlbnQgPSBpbnB1dEVsLnZhbGlkYXRpb25NZXNzYWdlO1xuICAgIGlucHV0RWwuY2xhc3NMaXN0LmFkZCh0aGlzLl9pbnB1dEVycm9yQ2xhc3MpO1xuICB9XG5cbiAgX2hpZGVFcnJvcihpbnB1dEVsKSB7XG4gICAgY29uc3QgZXJyb3JFbCA9IHRoaXMuX2Zvcm1FbC5xdWVyeVNlbGVjdG9yKGAjJHtpbnB1dEVsLmlkfWApO1xuICAgIGVycm9yRWwuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9lcnJvckNsYXNzKTtcbiAgICBlcnJvckVsLnRleHRDb250ZW50ID0gJyAnO1xuICAgIGlucHV0RWwuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9pbnB1dEVycm9yQ2xhc3MpO1xuICB9XG5cbiAgX3RvZ2dsZUJ1dHRvbigpIHtcbiAgICBpZiAodGhpcy5faW5wdXRMaXN0LnNvbWUodGhpcy5faXNJbnZhbGlkSW5wdXQpKSB7XG4gICAgICB0aGlzLl9idXR0b25FbC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICB0aGlzLl9idXR0b25FbC5jbGFzc0xpc3RcbiAgICAgIC5hZGQodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2J1dHRvbkVsLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICB0aGlzLl9idXR0b25FbC5jbGFzc0xpc3RcbiAgICAgIC5yZW1vdmUodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgX2NoZWNrSW5wdXRWYWxpZGl0eShpbnB1dEVsKSB7XG4gICAgY29uc3QgZXJyb3JFbCA9IHRoaXMuX2Zvcm1FbC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYCMke2lucHV0RWwuaWR9LWVycm9yYCk7XG4gICAgaWYgKHRoaXMuX2lzSW52YWxpZElucHV0KGlucHV0RWwpKSB7XG4gICAgICB0aGlzLl9zaG93RXJyb3IoZXJyb3JFbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2hpZGVFcnJvcihlcnJvckVsKTtcbiAgICB9XG4gIH1cblxuICBfc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy5faW5wdXRMaXN0ID0gQXJyYXkuZnJvbSh0aGlzLl9mb3JtRWwucXVlcnlTZWxlY3RvckFsbCh0aGlzLl9pbnB1dFNlbGVjdG9yKSk7XG4gICAgdGhpcy5fYnV0dG9uRWwgPSB0aGlzLl9mb3JtRWwucXVlcnlTZWxlY3Rvcih0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3Rvcik7XG5cbiAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaCgoaW5wdXRFbCkgPT4ge1xuICAgICAgaW5wdXRFbC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuICAgICAgICB0aGlzLl9jaGVja0lucHV0VmFsaWRpdHkoaW5wdXRFbCk7XG4gICAgICAgIHRoaXMuX3RvZ2dsZUJ1dHRvbigpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICByZXNldEZvcm0oKSB7XG4gICAgdGhpcy5fZm9ybUVsLnJlc2V0KCk7XG4gICAgdGhpcy5fdG9nZ2xlQnV0dG9uKCk7XG4gIH1cblxuICBlbmFibGVWYWxpZGF0aW9uKCkge1xuICAgIHRoaXMuX2Zvcm1FbC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG4gICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgfVxufVxuXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cCB7XG4gICAgY29uc3RydWN0b3IocG9wdXBTZWxlY3Rvcil7XG4gICAgICAgIHRoaXMuX3BvcHVwRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3BvcHVwU2VsZWN0b3J9YCk7XG4gICAgICAgIHRoaXMuX2hhbmRsZUVzY1VwID0gdGhpcy5faGFuZGxlRXNjVXAuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBfaGFuZGxlRXNjVXAoZXZ0KSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmIChldnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICAgIC8vIGNsb3NlUG9wdXAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9vcGVuZWRcIikpO1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICB0aGlzLl9wb3B1cEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldnQpID0+IHtcbiAgICAgICAgaWYoXG4gICAgICAgICAgICBldnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIm1vZGFsXCIpXG4gICAgICAgICAgICAvLyB8fCBldnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygpXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgb3Blbigpe1xuICAgICAgY29uc29sZS5sb2coMTIzKVxuICAgICAgdGhpcy5fcG9wdXBFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJtb2RhbF9vcGVuZWRcIik7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9oYW5kbGVFc2NVcCk7XG4gICAgfVxuXG4gICAgY2xvc2UoKXtcbiAgICAgIHRoaXMuX3BvcHVwRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwibW9kYWxfb3BlbmVkXCIpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5faGFuZGxlRXNjVXApO1xuICAgIH1cbn1cbiIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFdpdGhJbWFnZXMgZXh0ZW5kcyBQb3B1cCB7XG4gIGNvbnN0cnVjdG9yKHBvcHVwU2VsZWN0b3IpIHtcbiAgICBzdXBlcihwb3B1cFNlbGVjdG9yKTtcbiAgICB0aGlzLl9tb2RhbEltYWdlRWxlbWVudCA9IHRoaXMuX3BvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19wb3B1cC1pbWFnZVwiKTtcbiAgICB0aGlzLl9tb2RhbENhcHRpb24gPSB0aGlzLl9wb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fcG9wdXAtY2FwdGlvblwiKTtcbiAgICAvLyB0aGlzLl9tb2RhbEltYWdlRWxlbWVudCA9IHRoaXMuX2ltYWdlUG9wdXAucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fcG9wdXAtaW1hZ2VcIik7XG4gICAgLy8gdGhpcy5fbW9kYWxDYXB0aW9uID0gdGhpcy5faW1hZ2VQb3B1cC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19wb3B1cC1jYXB0aW9uXCIpO1xuIH1cblxuLy8gIG9wZW4oe3VybCwgdGl0bGV9KSB7XG4vLyAgICAgdGhpcy5fcG9wdXBFbGVtZW50LFxuLy8gICAgIC8vIGNvbnN0IGltYWdlID0gdGhpcy5fcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX3BvcHVwLWltYWdlXCIpO1xuLy8gICAgIHRoaXMuX21vZGFsSW1hZ2VFbGVtZW50LnNyYyA9IHVybDtcbi8vICAgICB0aGlzLl9tb2RhbEltYWdlRWxlbWVudC5hbHQgPWBpbWFnZSBvZiR7dXJsfWA7XG4vLyAgICAgdGhpcy5fbW9kYWxDYXB0aW9uID0gdGl0bGU7XG4vLyAgICAgc3VwZXIub3BlbigpO1xuLy8gICB9XG5cbm9wZW4oZGF0YSkge1xuICBjb25zb2xlLmxvZyhkYXRhKVxuICAvLyB0aGlzLl9wb3B1cEVsZW1lbnQsXG4gIC8vIGNvbnN0IGltYWdlID0gdGhpcy5fcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX3BvcHVwLWltYWdlXCIpO1xuICB0aGlzLl9tb2RhbEltYWdlRWxlbWVudC5zcmMgPSBkYXRhLnVybDtcbiAgdGhpcy5fbW9kYWxJbWFnZUVsZW1lbnQuYWx0ID1gaW1hZ2Ugb2Yke2RhdGEudXJsfWA7XG4gIHRoaXMuX21vZGFsQ2FwdGlvbi50ZXh0Q29udGVudCA9IGRhdGEudGl0bGU7XG4gIHN1cGVyLm9wZW4oKTtcbiB9XG59XG5cblxuIiwiLy8gaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlY3Rpb24ge1xuICAvLyBjb25zdCBhZGRDYXJkUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1jYXJkLXBvcHVwXCIpO1xuICAvLyBjb25zdHJ1Y3Rvcih7aXRlbXMsIHJlbmRlcmVyfSwgdGVtcGxhdGUpe1xuICAgIGNvbnN0cnVjdG9yKHtpdGVtcywgcmVuZGVyZXJ9LCBjb250YWluZXJTZWxlY3Rvcil7XG4gICAgICAvLyBzdXBlcihwb3B1cFNlbGVjdG9yKTtcbiAgICAgIHRoaXMuX2l0ZW1zID0gaXRlbXM7XG4gICAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyO1xuICAgICAgLy8gdGhpcy5fY29udGFpbmVyU2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lclNlbGVjdG9yKTtcbiAgICAgIC8vIHRoaXMuX2NvbnRhaW5lclNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgJHtjb250YWluZXJTZWxlY3Rvcn1gKTtcbiAgICAgIC8vIGNvbnN0IGFkZENhcmRQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLWNhcmQtcG9wdXBcIik7XG4gICAgICAvLyB0aGlzLl9hZGRDYXJkUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHthZGRDYXJkUG9wdXB9YCk7XG4gICAgICAvLyB0aGlzLl9hZGRDYXJkUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGl0ZW1zKTtcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAke2NvbnRhaW5lclNlbGVjdG9yfWApO1xuICB9XG5cbiAgcmVuZGVySXRlbXMoZWxlbWVudCkge1xuICAgIGVsZW1lbnQuZm9yRWFjaCgoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5fcmVuZGVyZXIoZGF0YSk7XG4gICAgfSk7XG4gIH1cblxuICBhZGRJdGVtKGVsZW1lbnQpIHtcbiAgICB0aGlzLl9lbGVtZW50LnByZXBlbmQoZWxlbWVudCk7XG4gIC8vIHRoaXMuX2VsZW1lbnQuYXBwZW5kKGVsZW1lbnQpO1xuICB9XG59XG5cbiIsIlxuZXhwb3J0IGNvbnN0IGluaXRpYWxDYXJkcyA9IFtcbiAge1xuICAgIC8vTkFNRVxuICAgIHRpdGxlOiBcIkxha2UgJiBNb3VudGFpblwiLFxuICAgIC8vTElOS1xuICAgIHVybDogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTYzODgwMjQyMjYzMy02OTQwODg2ODAzNTk/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTY4NyZxPTgwXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJMYWtlIExvdWlzZVwiLFxuICAgIHVybDogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS9sYWtlLWxvdWlzZS5qcGdcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkJhbGQgTW91bnRhaW5zXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL2JhbGQtbW91bnRhaW5zLmpwZ1wiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiTGF0ZW1hclwiLFxuICAgIHVybDogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS9sYXRlbWFyLmpwZ1wiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiVmFub2lzZSBOYXRpb25hbCBQYXJrXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL3Zhbm9pc2UuanBnXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJMYWdvIGRpIGJyYWllc1wiLFxuICAgIHVybDogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS9sYWdvLmpwZ1wiLFxuICB9LFxuXTtcblxuXG5leHBvcnQgY29uc3QgZm9ybVZhbGlkYXRvckNvbmZpZyA9IHtcbiAgaW5wdXRTZWxlY3RvcjogXCIuZm9ybS1uYW1lX19pbnB1dFwiLFxuICBzdWJtaXRCdXR0b25TZWxlY3RvcjogXCIuZm9ybS1uYW1lX19zYXZlLWJ1dHRvblwiLFxuICBpbmFjdGl2ZUJ1dHRvbkNsYXNzOiBcImZvcm0tbmFtZV9fc2F2ZS1idXR0b25fZGlzYWJsZWRcIixcbiAgaW5wdXRFcnJvckNsYXNzOiBcImZvcm0tbmFtZV9fbW9kYWwtdHlwZV9lcnJvclwiLFxuICBlcnJvckNsYXNzOiBcIm1vZGFsX19wb3B1cF9fZXJyb3JfdmlzaWJsZVwiLFxufTtcblxuXG5leHBvcnQgY29uc3Qgc2VsZWN0b3JzID0ge1xuICBjYXJkU2VjdGlvbjogXCIuZWxlbWVudHMtZ3JpZF9fY2FyZHNcIiwgLy9jYXJkIGxpc3RcbiAgY2FyZFRlbXBsYXRlOiBcIiNjYXJkLXRlbXBsYXRlXCIsLy9jYXJkIHRlbXBsYXRlXG4gIHByZXZpZXdQb3B1cDogXCJtb2RhbF9fcG9wdXBfdHlwZV9pbWFnZVwiLFxufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vaW5kZXguY3NzJztcblxuLy9pbXBvcnQgYWxsIGNsYXNzZXNcbmltcG9ydCBDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmRcIjtcbmltcG9ydCBGb3JtVmFsaWRhdG9yIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3JcIjtcbmltcG9ydCBQb3B1cFdpdGhJbWFnZXMgZnJvbSAnLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhJbWFnZXMnO1xuLy8gaW1wb3J0IFBvcHVwV2l0aEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtJztcbmltcG9ydCBTZWN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL1NlY3Rpb25cIjtcbi8vIGltcG9ydCBVc2VySW5mbyBmcm9tICcuLi9jb21wb25lbnRzL1VzZXJJbmZvJztcbmltcG9ydCB7IGluaXRpYWxDYXJkcywgc2VsZWN0b3JzIH0gZnJvbSBcIi4uL3V0aWxzL2NvbnN0YW50c1wiO1xuXG4vLyBjb25zdCBpbWFnZSA9IHRoaXMuX3BvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19wb3B1cC1pbWFnZVwiKTtcbmNvbnN0IENhcmRQcmV2aWV3UG9wdXAgPSBuZXcgUG9wdXBXaXRoSW1hZ2VzKHNlbGVjdG9ycy5wcmV2aWV3UG9wdXApO1xuXG5jb25zdCBjYXJkRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JzLmNhcmRUZW1wbGF0ZSk7XG5cbmNvbnN0IENhcmRTZWN0aW9uID0gIG5ldyBTZWN0aW9uICh7XG4gIHJlbmRlcmVyOiAoaXRlbSkgPT4ge1xuICAgIGNvbnN0IGNhcmRFbCA9IG5ldyBDYXJkKHsgZGF0YTppdGVtLCBoYW5kbGVDYXJkUHJldmlldzogKGltZ0RhdGEpID0+IHtcbiAgICAgICAgICBDYXJkUHJldmlld1BvcHVwLm9wZW4oaW1nRGF0YSk7XG4gICAgfVxuICB9LCBjYXJkRGlzcGxheSk7XG4gICAgQ2FyZFNlY3Rpb24uYWRkSXRlbShjYXJkRWwucmVuZGVyKCkpO1xuICB9LFxufSxcbiAgLy8gc2VsZWN0b3I6IHNlbGVjdG9ycy5jYXJkU2VjdGlvbixcbiAgc2VsZWN0b3JzLmNhcmRTZWN0aW9uLFxuKTtcblxuQ2FyZFNlY3Rpb24ucmVuZGVySXRlbXMoaW5pdGlhbENhcmRzKTtcbkNhcmRQcmV2aWV3UG9wdXAuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcblxuLy8gY29uc3QgQ2FyZFNlY3Rpb24gPSAgbmV3IFNlY3Rpb24gKHtcbi8vICAgcmVuZGVyZXI6IChpdGVtKSA9PiB7XG4vLyAgICAgY29uc3QgY2FyZEVsID0gbmV3IENhcmQoeyBkYXRhOml0ZW0gfSwgY2FyZERpc3BsYXkpO1xuLy8gICAgIENhcmRTZWN0aW9uLmFkZEl0ZW0oY2FyZEVsLnJlbmRlcigpKTtcbi8vICAgfSxcbi8vIH0sXG4vLyAgIHNlbGVjdG9ycy5jYXJkU2VjdGlvbixcbi8vICk7XG5cbi8vIENhcmRTZWN0aW9uLnJlbmRlckl0ZW1zKGluaXRpYWxDYXJkcyk7XG5cblxuXG5cblxuIl0sIm5hbWVzIjpbIlBvcHVwIiwiQ2FyZCIsInRlbXBsYXRlIiwicG9wdXBTZWxlY3RvciIsImRhdGEiLCJoYW5kbGVDYXJkUHJldmlldyIsIl90ZW1wbGF0ZSIsImNvbnRlbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xvbmVOb2RlIiwiX2NhcmRMaWtlQnV0dG9uIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiX2VsZW1lbnQiLCJyZW1vdmUiLCJlbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2dCIsIl9oYW5kbGVMaWtlSWNvbiIsIl9kZWxldGVDYXJkIiwiX2hhbmRsZURlbGV0ZUNhcmQiLCJfaW1hZ2VFbGVtZW50IiwiX2hhbmRsZUNhcmRQcmV2aWV3IiwidXJsIiwiX2RhdGEiLCJ0aXRsZSIsIl9nZXRFbGVtZW50IiwiX3RpdGxlRWxlbWVudCIsInNyYyIsIl91cmwiLCJhbHQiLCJ0ZXh0Q29udGVudCIsIl90aXRsZSIsIl9zZXRFdmVudExpc3RlbmVycyIsIkZvcm1WYWxpZGF0b3IiLCJzZXR0aW5ncyIsImZvcm1FbCIsIl9pbnB1dFNlbGVjdG9yIiwiaW5wdXRTZWxlY3RvciIsIl9zdWJtaXRCdXR0b25TZWxlY3RvciIsInN1Ym1pdEJ1dHRvblNlbGVjdG9yIiwiX2luYWN0aXZlQnV0dG9uQ2xhc3MiLCJpbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiX2lucHV0RXJyb3JDbGFzcyIsImlucHV0RXJyb3JDbGFzcyIsIl9lcnJvckNsYXNzIiwiZXJyb3JDbGFzcyIsIl9mb3JtRWwiLCJpbnB1dEVsIiwidmFsaWRpdHkiLCJ2YWxpZCIsImVycm9yRWwiLCJpZCIsImFkZCIsInZhbGlkYXRpb25NZXNzYWdlIiwiX2lucHV0TGlzdCIsInNvbWUiLCJfaXNJbnZhbGlkSW5wdXQiLCJfYnV0dG9uRWwiLCJkaXNhYmxlZCIsIl9zaG93RXJyb3IiLCJfaGlkZUVycm9yIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJfY2hlY2tJbnB1dFZhbGlkaXR5IiwiX3RvZ2dsZUJ1dHRvbiIsInJlc2V0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiX3BvcHVwRWxlbWVudCIsImRvY3VtZW50IiwiX2hhbmRsZUVzY1VwIiwiYmluZCIsImtleSIsImNsb3NlIiwidGFyZ2V0IiwiY29udGFpbnMiLCJjb25zb2xlIiwibG9nIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIlBvcHVwV2l0aEltYWdlcyIsIl9tb2RhbEltYWdlRWxlbWVudCIsIl9tb2RhbENhcHRpb24iLCJTZWN0aW9uIiwiY29udGFpbmVyU2VsZWN0b3IiLCJpdGVtcyIsInJlbmRlcmVyIiwiX2l0ZW1zIiwiX3JlbmRlcmVyIiwicHJlcGVuZCIsImluaXRpYWxDYXJkcyIsImZvcm1WYWxpZGF0b3JDb25maWciLCJzZWxlY3RvcnMiLCJjYXJkU2VjdGlvbiIsImNhcmRUZW1wbGF0ZSIsInByZXZpZXdQb3B1cCIsIkNhcmRQcmV2aWV3UG9wdXAiLCJjYXJkRGlzcGxheSIsIkNhcmRTZWN0aW9uIiwiaXRlbSIsImNhcmRFbCIsImltZ0RhdGEiLCJvcGVuIiwiYWRkSXRlbSIsInJlbmRlciIsInJlbmRlckl0ZW1zIiwic2V0RXZlbnRMaXN0ZW5lcnMiXSwic291cmNlUm9vdCI6IiJ9