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
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util.js */ "./src/components/util.js");
/* harmony import */ var _pages_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/index.js */ "./src/pages/index.js");
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

  function Card(template, data) {
    var _this;

    _classCallCheck(this, Card);

    _this._template = template;
    _this._data = data;
    _this._title = data.title;
    _this._url = data.url;
    _this._element = null;
    return _possibleConstructorReturn(_this);
  }

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

/***/ "./src/components/Popup.js":
/*!*********************************!*\
  !*** ./src/components/Popup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ "./src/components/util.js");
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Popup);

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
    _this._modalImageElement = _this._imagePopup.querySelector(".modal__popup-image");
    _this._modalCaption = _this._imagePopup.querySelector(".modal__popup-caption");
    return _this;
  }

  _createClass(PopupWithImages, [{
    key: "open",
    value: function open(_ref) {
      var url = _ref.url,
          title = _ref.title;

      // this._imagePopup.querySelector(".modal__popup-caption").textContent = title;
      // this._popupElement.querySelector(".modal__popup-caption").textContent = title;
      var image = this._popupElement.querySelector(".modal__popup-image");

      this._modalImageElement.src = url;
      this._modalImageElement.alt = "image of".concat(url);
      this._modalCaption = title;

      _get(_getPrototypeOf(PopupWithImages.prototype), "open", this).call(this);
    }
  }]);

  return PopupWithImages;
}(_Popup__WEBPACK_IMPORTED_MODULE_0__["default"]); ///export default PopupWithImages;




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
  //const addCardPopup = document.querySelector("#add-card-popup");
  function Section(_ref, addCardPopup) {
    var renderer = _ref.renderer,
        selector = _ref.selector;

    _classCallCheck(this, Section);

    // this._items = items;
    this._renderer = renderer; // this._addCardPopup = document.querySelector(`.${addCardPopup}`);
    // this._addCardPopup = document.querySelector(items);

    this._element = document.querySelector(selector);
  }

  _createClass(Section, [{
    key: "renderItems",
    value: function renderItems(data) {
      this._renderer = this._element(data);
    } // renderer(data) {
    //   items.forEach((data) => {
    //       this._renderer(data);
    //   });
    // renderer(items) {
    //   items.forEach((card) => {
    //       this._renderer(items);
    //   });
    // //Cards rendering
    // // initialCards.forEach((data) => {
    // //   renderCard(data, formCard);
    // // });
    // initialCards.forEach(renderCard);
    //   renderer(items) {
    //     this.cardContainer.forEach((card) => {
    //         this.renderer(this.items);
    //         return card;
    //     });
    // }
    // 	const card = new Card(data, cardSelector);
    // };
    // addItem(card) {
    // // this.cardContainer.prepend(card); is card ==> element ?
    //   this._addCardPopup.append(card);
    // }

  }, {
    key: "addItem",
    value: function addItem(items) {
      // this.cardContainer.prepend(card); is card ==> element ?
      // this._addCardPopup.append(items)
      this._element(items);
    }
  }]);

  return Section;
}(); // export default Section;




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
} // export { openPopup, closePopup, clickOutsideOverlay, pressEscKey };

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/pages/index.css");
/* harmony import */ var _components_Card_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Card.js */ "./src/components/Card.js");
/* harmony import */ var _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/FormValidator.js */ "./src/components/FormValidator.js");
/* harmony import */ var _components_Section_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Section.js */ "./src/components/Section.js");
/* harmony import */ var _components_PopupWithImages_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PopupWithImages.js */ "./src/components/PopupWithImages.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/constants.js */ "./src/utils/constants.js");
 //import all classes






var CardSection = new _components_Section_js__WEBPACK_IMPORTED_MODULE_3__["default"]({
  renderer: function renderer(item) {
    // const cardEl = new Card(card).render();
    // const cardEl = new Card(item, selectors.cardTemplate);
    // const cardEl = new Card(item, selectors.cardTemplate).render();
    var cardEl = new _components_Card_js__WEBPACK_IMPORTED_MODULE_1__["default"](item, _utils_constants_js__WEBPACK_IMPORTED_MODULE_5__.selectors.cardTemplate);
    CardSection.addItem(cardEl.render()); // cardSection.addItem(cardEl.render());
  },
  selector: _utils_constants_js__WEBPACK_IMPORTED_MODULE_5__.selectors.cardSection
}); //template == selector in Card.js
// template: selectors.cardSection,
// selectors.cardSection
// cardSection.initialCards;
// const addFormEl = formCard.querySelector(".form-name");
// const editFormEl = formProfile.querySelector(".form-name");
// formProfile.addEventListener("submit", editProfileRefreshForm);
// editFormBtn.addEventListener("click", () => {
//   openProfilePopup(profilePopup);
// });
// formCard.addEventListener("submit", editCardRefreshForm);
// addCardBtn.addEventListener("click", () => {
//   openPopup(addCardPopup);
// });
// const profilePopup = document.querySelector("#edit-profile-popup"); //.popup__form
// const addCardPopup = document.querySelector("#add-card-popup");
// const addFormValidator = new FormValidator(formValidatorConfig, addFormEl);
// addFormValidator.enableValidation(".form-name");
// const editFormValidator = new FormValidator(formValidatorConfig, editFormEl);
// editFormValidator.enableValidation(".form-name");

CardSection.renderItems(_utils_constants_js__WEBPACK_IMPORTED_MODULE_5__.initialCards);

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
// export function pressEscKey(e) {
//   if (e.key === "Escape") {
//     closePopup(document.querySelector(".modal_opened"));
//   }
// }
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
}];
var formValidatorConfig = {
  inputSelector: ".form-name__input",
  submitButtonSelector: ".form-name__save-button",
  inactiveButtonClass: "form-name__save-button_disabled",
  inputErrorClass: "form-name__modal-type_error",
  errorClass: "modal__popup__error_visible"
};
var selectors = {
  cardSection: 'elements-grid__card',
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/pages/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ25DSCxFQUFBQSxZQUFZLEVBQUUsZ0JBRlMsQ0FFUTtBQUMvQjs7QUFIdUIsQ0FBbEI7Ozs7Ozs7Ozs7O0FDN0NQOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcHJpbnQtOC8uL3NyYy9jb21wb25lbnRzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vc3ByaW50LTgvLi9zcmMvY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzIiwid2VicGFjazovL3NwcmludC04Ly4vc3JjL2NvbXBvbmVudHMvUG9wdXAuanMiLCJ3ZWJwYWNrOi8vc3ByaW50LTgvLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhJbWFnZXMuanMiLCJ3ZWJwYWNrOi8vc3ByaW50LTgvLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uLmpzIiwid2VicGFjazovL3NwcmludC04Ly4vc3JjL2NvbXBvbmVudHMvdXRpbC5qcyIsIndlYnBhY2s6Ly9zcHJpbnQtOC8uL3NyYy9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9zcHJpbnQtOC8uL3NyYy91dGlscy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vc3ByaW50LTgvLi9zcmMvcGFnZXMvaW5kZXguY3NzIiwid2VicGFjazovL3NwcmludC04L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NwcmludC04L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zcHJpbnQtOC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NwcmludC04L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc3ByaW50LTgvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9zcHJpbnQtOC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vc3ByaW50LTgvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cFwiO1xuXG5pbXBvcnQgeyBvcGVuUG9wdXAsIGNsb3NlUG9wdXAsIGNsaWNrT3V0c2lkZU92ZXJsYXksIHByZXNzRXNjS2V5IH0gZnJvbSBcIi4vdXRpbC5qc1wiO1xuaW1wb3J0IHsgaW1hZ2VQb3B1cCwgbW9kYWxJbWFnZUVsZW1lbnQsIG1vZGFsQ2FwdGlvbiB9IGZyb20gXCIuLi9wYWdlcy9pbmRleC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkIGV4dGVuZHMgUG9wdXAge1xuICBjb25zdHJ1Y3Rvcih0ZW1wbGF0ZSwgZGF0YSkge1xuICAgIHRoaXMuX3RlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgdGhpcy5fZGF0YSA9IGRhdGE7XG4gICAgdGhpcy5fdGl0bGUgPSBkYXRhLnRpdGxlO1xuICAgIHRoaXMuX3VybCA9IGRhdGEudXJsO1xuICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsO1xuICB9XG5cbiAgX2dldEVsZW1lbnQgPSAoKSA9PiB7XG4gICAgLy8gdGhpcy5fZWxlbWVudCA9IHRoaXMuX3RlbXBsYXRlLmNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5lbGVtZW50cy1ncmlkX19jYXJkXCIpLmNsb25lTm9kZSh0cnVlKTtcbiAgICByZXR1cm4gdGhpcy5fdGVtcGxhdGUuY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRzLWdyaWRfX2NhcmRcIikuY2xvbmVOb2RlKHRydWUpO1xuICB9XG5cbiAgX2hhbmRsZUNhcmRQcmV2aWV3ID0gKCkgPT4ge1xuICAgIG1vZGFsSW1hZ2VFbGVtZW50LnNyYyA9IHRoaXMuX3VybDtcbiAgICBtb2RhbENhcHRpb24udGV4dENvbnRlbnQgPSB0aGlzLl90aXRsZTtcbiAgICBtb2RhbEltYWdlRWxlbWVudC5hbHQgPWBpbWFnZSBvZiR7dXJsfWA7XG5cbiAgICBvcGVuUG9wdXAoaW1hZ2VQb3B1cCk7XG4gIH07XG5cbiAgX2hhbmRsZUxpa2VJY29uID0gKCkgPT4ge1xuICAgIHRoaXMuX2NhcmRMaWtlQnV0dG9uLmNsYXNzTGlzdFxuICAgIC50b2dnbGUoXCJlbGVtZW50cy1ncmlkX19pY29uLWFjdGl2ZVwiKTtcbiAgfTtcblxuICBfaGFuZGxlRGVsZXRlQ2FyZCA9ICgpID0+IHtcbiAgICB0aGlzLl9lbGVtZW50LnJlbW92ZSgpO1xuICAgIHRoaXMuZWxlbWVudCA9IG51bGw7XG4gIH07XG5cbiAgX3NldEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgIHRoaXMuX2NhcmRMaWtlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZ0KSA9PiB7XG4gICAgICB0aGlzLl9oYW5kbGVMaWtlSWNvbihldnQpO1xuICAgIH0pO1xuICAgIHRoaXMuX2RlbGV0ZUNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldnQpID0+IHtcbiAgICAgIHRoaXMuX2hhbmRsZURlbGV0ZUNhcmQoZXZ0KTtcbiAgICB9KTtcbiAgICB0aGlzLl9pbWFnZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldnQpID0+IHtcbiAgICAgIHRoaXMuX2hhbmRsZUNhcmRQcmV2aWV3KGV2dCk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyID0gKCkgPT4ge1xuICAgIHRoaXMuX2VsZW1lbnQgPSB0aGlzLl9nZXRFbGVtZW50KCk7XG4gICAgdGhpcy5faW1hZ2VFbGVtZW50ID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRzLWdyaWRfX2ltYWdlXCIpO1xuICAgIHRoaXMuX3RpdGxlRWxlbWVudCA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbGVtZW50cy1ncmlkX190ZXh0XCIpO1xuICAgIHRoaXMuX2ltYWdlRWxlbWVudC5zcmMgPSB0aGlzLl91cmw7XG4gICAgdGhpcy5faW1hZ2VFbGVtZW50LmFsdCA9IHRoaXMuX3VybDtcbiAgICB0aGlzLl90aXRsZUVsZW1lbnQudGV4dENvbnRlbnQgPSB0aGlzLl90aXRsZTtcbiAgICB0aGlzLl9kZWxldGVDYXJkID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRzLWdyaWRfX2RlbGV0ZS1idXR0b25cIik7XG4gICAgdGhpcy5fY2FyZExpa2VCdXR0b24gPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWxlbWVudHMtZ3JpZF9faWNvblwiKTtcbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycygpO1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50O1xuICB9O1xufVxuXG4vLyBleHBvcnQgZGVmYXVsdCBDYXJkOyIsImNsYXNzIEZvcm1WYWxpZGF0b3Ige1xuICBjb25zdHJ1Y3RvcihzZXR0aW5ncywgZm9ybUVsKSB7XG4gICAgdGhpcy5faW5wdXRTZWxlY3RvciA9IHNldHRpbmdzLmlucHV0U2VsZWN0b3I7XG4gICAgdGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IgPSBzZXR0aW5ncy5zdWJtaXRCdXR0b25TZWxlY3RvcjtcbiAgICB0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzID0gc2V0dGluZ3MuaW5hY3RpdmVCdXR0b25DbGFzcztcbiAgICB0aGlzLl9pbnB1dEVycm9yQ2xhc3MgPSBzZXR0aW5ncy5pbnB1dEVycm9yQ2xhc3M7XG4gICAgdGhpcy5fZXJyb3JDbGFzcyA9IHNldHRpbmdzLmVycm9yQ2xhc3M7XG4gICAgdGhpcy5fZm9ybUVsID0gZm9ybUVsO1xuICB9XG5cbiAgX2lzSW52YWxpZElucHV0KGlucHV0RWwpIHtcbiAgICByZXR1cm4gIWlucHV0RWwudmFsaWRpdHkudmFsaWQ7XG4gIH1cblxuICBfc2hvd0Vycm9yKGlucHV0RWwpIHtcbiAgICBjb25zdCBlcnJvckVsID0gdGhpcy5fZm9ybUVsLnF1ZXJ5U2VsZWN0b3IoYCMke2lucHV0RWwuaWR9YCk7XG4gICAgZXJyb3JFbC5jbGFzc0xpc3QuYWRkKHRoaXMuX2Vycm9yQ2xhc3MpO1xuICAgIGVycm9yRWwudGV4dENvbnRlbnQgPSBpbnB1dEVsLnZhbGlkYXRpb25NZXNzYWdlO1xuICAgIGlucHV0RWwuY2xhc3NMaXN0LmFkZCh0aGlzLl9pbnB1dEVycm9yQ2xhc3MpO1xuICB9XG5cbiAgX2hpZGVFcnJvcihpbnB1dEVsKSB7XG4gICAgY29uc3QgZXJyb3JFbCA9IHRoaXMuX2Zvcm1FbC5xdWVyeVNlbGVjdG9yKGAjJHtpbnB1dEVsLmlkfWApO1xuICAgIGVycm9yRWwuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9lcnJvckNsYXNzKTtcbiAgICBlcnJvckVsLnRleHRDb250ZW50ID0gJyAnO1xuICAgIGlucHV0RWwuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9pbnB1dEVycm9yQ2xhc3MpO1xuICB9XG5cbiAgX3RvZ2dsZUJ1dHRvbigpIHtcbiAgICBpZiAodGhpcy5faW5wdXRMaXN0LnNvbWUodGhpcy5faXNJbnZhbGlkSW5wdXQpKSB7XG4gICAgICB0aGlzLl9idXR0b25FbC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICB0aGlzLl9idXR0b25FbC5jbGFzc0xpc3RcbiAgICAgIC5hZGQodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2J1dHRvbkVsLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICB0aGlzLl9idXR0b25FbC5jbGFzc0xpc3RcbiAgICAgIC5yZW1vdmUodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgX2NoZWNrSW5wdXRWYWxpZGl0eShpbnB1dEVsKSB7XG4gICAgY29uc3QgZXJyb3JFbCA9IHRoaXMuX2Zvcm1FbC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYCMke2lucHV0RWwuaWR9LWVycm9yYCk7XG4gICAgaWYgKHRoaXMuX2lzSW52YWxpZElucHV0KGlucHV0RWwpKSB7XG4gICAgICB0aGlzLl9zaG93RXJyb3IoZXJyb3JFbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2hpZGVFcnJvcihlcnJvckVsKTtcbiAgICB9XG4gIH1cblxuICBfc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy5faW5wdXRMaXN0ID0gQXJyYXkuZnJvbSh0aGlzLl9mb3JtRWwucXVlcnlTZWxlY3RvckFsbCh0aGlzLl9pbnB1dFNlbGVjdG9yKSk7XG4gICAgdGhpcy5fYnV0dG9uRWwgPSB0aGlzLl9mb3JtRWwucXVlcnlTZWxlY3Rvcih0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3Rvcik7XG5cbiAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaCgoaW5wdXRFbCkgPT4ge1xuICAgICAgaW5wdXRFbC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuICAgICAgICB0aGlzLl9jaGVja0lucHV0VmFsaWRpdHkoaW5wdXRFbCk7XG4gICAgICAgIHRoaXMuX3RvZ2dsZUJ1dHRvbigpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICByZXNldEZvcm0oKSB7XG4gICAgdGhpcy5fZm9ybUVsLnJlc2V0KCk7XG4gICAgdGhpcy5fdG9nZ2xlQnV0dG9uKCk7XG4gIH1cblxuICBlbmFibGVWYWxpZGF0aW9uKCkge1xuICAgIHRoaXMuX2Zvcm1FbC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG4gICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtVmFsaWRhdG9yO1xuIiwiaW1wb3J0IHtwcmVzc0VzY0tleX0gZnJvbSBcIi4vdXRpbC5qc1wiXG5cblxuY2xhc3MgUG9wdXAge1xuICAgIGNvbnN0cnVjdG9yKHBvcHVwU2VsZWN0b3Ipe1xuICAgICAgICB0aGlzLl9wb3B1cEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtwb3B1cFNlbGVjdG9yfWApO1xuICAgICAgICB0aGlzLl9oYW5kbGVFc2NVcCA9IHRoaXMuX2hhbmRsZUVzY1VwLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgX2hhbmRsZUVzY1VwKGV2dCkge1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAoZXZ0LmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgICAvLyBjbG9zZVBvcHVwKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfb3BlbmVkXCIpKTtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgdGhpcy5fcG9wdXBFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZ0KSA9PiB7XG4gICAgICAgIGlmKFxuICAgICAgICAgICAgZXZ0LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJtb2RhbFwiKVxuICAgICAgICAgICAgLy8gfHwgZXZ0LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIG9wZW4oKXtcbiAgICAgIHRoaXMuX3BvcHVwRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibW9kYWxfb3BlbmVkXCIpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5faGFuZGxlRXNjVXApO1xuICAgIH1cblxuICAgIGNsb3NlKCl7XG4gICAgICB0aGlzLl9wb3B1cEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcIm1vZGFsX29wZW5lZFwiKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuX2hhbmRsZUVzY1VwKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvcHVwOyIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFdpdGhJbWFnZXMgZXh0ZW5kcyBQb3B1cCB7XG5cbiAgY29uc3RydWN0b3IocG9wdXBTZWxlY3Rvcikge1xuICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpO1xuICAgIHRoaXMuX21vZGFsSW1hZ2VFbGVtZW50ID0gdGhpcy5faW1hZ2VQb3B1cC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19wb3B1cC1pbWFnZVwiKTtcbiAgICB0aGlzLl9tb2RhbENhcHRpb24gPSB0aGlzLl9pbWFnZVBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX3BvcHVwLWNhcHRpb25cIik7XG4gfVxuXG4gb3Blbih7dXJsLCB0aXRsZX0pIHtcbiAgLy8gdGhpcy5faW1hZ2VQb3B1cC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19wb3B1cC1jYXB0aW9uXCIpLnRleHRDb250ZW50ID0gdGl0bGU7XG4gICAgLy8gdGhpcy5fcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX3BvcHVwLWNhcHRpb25cIikudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgICBjb25zdCBpbWFnZSA9IHRoaXMuX3BvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19wb3B1cC1pbWFnZVwiKTtcbiAgICB0aGlzLl9tb2RhbEltYWdlRWxlbWVudC5zcmMgPSB1cmw7XG4gICAgdGhpcy5fbW9kYWxJbWFnZUVsZW1lbnQuYWx0ID1gaW1hZ2Ugb2Yke3VybH1gO1xuICAgIHRoaXMuX21vZGFsQ2FwdGlvbiA9IHRpdGxlO1xuICAgIHN1cGVyLm9wZW4oKTtcbiAgfVxufVxuXG4vLy9leHBvcnQgZGVmYXVsdCBQb3B1cFdpdGhJbWFnZXM7IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdGlvbiB7XG4gIC8vY29uc3QgYWRkQ2FyZFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtY2FyZC1wb3B1cFwiKTtcbiAgY29uc3RydWN0b3Ioe3JlbmRlcmVyLCBzZWxlY3Rvcn0sIGFkZENhcmRQb3B1cCl7XG4gICAgICAvLyB0aGlzLl9pdGVtcyA9IGl0ZW1zO1xuICAgICAgdGhpcy5fcmVuZGVyZXIgPSByZW5kZXJlcjtcbiAgICAgIC8vIHRoaXMuX2FkZENhcmRQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2FkZENhcmRQb3B1cH1gKTtcbiAgICAgIC8vIHRoaXMuX2FkZENhcmRQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaXRlbXMpO1xuICAgICAgdGhpcy5fZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICB9XG5cbiAgcmVuZGVySXRlbXMoZGF0YSkge1xuICAgIHRoaXMuX3JlbmRlcmVyID0gdGhpcy5fZWxlbWVudChkYXRhKTtcbiAgICB9XG5cbiAgLy8gcmVuZGVyZXIoZGF0YSkge1xuICAvLyAgIGl0ZW1zLmZvckVhY2goKGRhdGEpID0+IHtcbiAgLy8gICAgICAgdGhpcy5fcmVuZGVyZXIoZGF0YSk7XG4gIC8vICAgfSk7XG5cbiAgLy8gcmVuZGVyZXIoaXRlbXMpIHtcbiAgLy8gICBpdGVtcy5mb3JFYWNoKChjYXJkKSA9PiB7XG4gIC8vICAgICAgIHRoaXMuX3JlbmRlcmVyKGl0ZW1zKTtcbiAgLy8gICB9KTtcblxuLy8gLy9DYXJkcyByZW5kZXJpbmdcbi8vIC8vIGluaXRpYWxDYXJkcy5mb3JFYWNoKChkYXRhKSA9PiB7XG4vLyAvLyAgIHJlbmRlckNhcmQoZGF0YSwgZm9ybUNhcmQpO1xuLy8gLy8gfSk7XG4vLyBpbml0aWFsQ2FyZHMuZm9yRWFjaChyZW5kZXJDYXJkKTtcblxuLy8gICByZW5kZXJlcihpdGVtcykge1xuLy8gICAgIHRoaXMuY2FyZENvbnRhaW5lci5mb3JFYWNoKChjYXJkKSA9PiB7XG4vLyAgICAgICAgIHRoaXMucmVuZGVyZXIodGhpcy5pdGVtcyk7XG4vLyAgICAgICAgIHJldHVybiBjYXJkO1xuLy8gICAgIH0pO1xuLy8gfVxuLy8gXHRjb25zdCBjYXJkID0gbmV3IENhcmQoZGF0YSwgY2FyZFNlbGVjdG9yKTtcbi8vIH07XG5cbi8vIGFkZEl0ZW0oY2FyZCkge1xuLy8gLy8gdGhpcy5jYXJkQ29udGFpbmVyLnByZXBlbmQoY2FyZCk7IGlzIGNhcmQgPT0+IGVsZW1lbnQgP1xuLy8gICB0aGlzLl9hZGRDYXJkUG9wdXAuYXBwZW5kKGNhcmQpO1xuLy8gfVxuXG5hZGRJdGVtKGl0ZW1zKXtcbiAgLy8gdGhpcy5jYXJkQ29udGFpbmVyLnByZXBlbmQoY2FyZCk7IGlzIGNhcmQgPT0+IGVsZW1lbnQgP1xuICAgIC8vIHRoaXMuX2FkZENhcmRQb3B1cC5hcHBlbmQoaXRlbXMpXG4gICAgdGhpcy5fZWxlbWVudChpdGVtcyk7XG4gIH1cbn1cbi8vIGV4cG9ydCBkZWZhdWx0IFNlY3Rpb247XG5cbiIsImV4cG9ydCBmdW5jdGlvbiBvcGVuUG9wdXAocG9wdXApIHtcbiAgcG9wdXAuY2xhc3NMaXN0LmFkZChcIm1vZGFsX29wZW5lZFwiKTtcbiAgcG9wdXAuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBjbGlja091dHNpZGVPdmVybGF5KTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgcHJlc3NFc2NLZXkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VQb3B1cChwb3B1cCkge1xuICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwibW9kYWxfb3BlbmVkXCIpO1xuICBwb3B1cC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGNsaWNrT3V0c2lkZU92ZXJsYXkpO1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBwcmVzc0VzY0tleSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGlja091dHNpZGVPdmVybGF5KGUpIHtcbiAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIm1vZGFsXCIpKSB7XG4gICAgY2xvc2VQb3B1cChlLnRhcmdldCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZXNzRXNjS2V5KGUpIHtcbiAgaWYgKGUua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgY2xvc2VQb3B1cChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX29wZW5lZFwiKSk7XG4gIH1cbn1cblxuLy8gZXhwb3J0IHsgb3BlblBvcHVwLCBjbG9zZVBvcHVwLCBjbGlja091dHNpZGVPdmVybGF5LCBwcmVzc0VzY0tleSB9O1xuXG4iLCJpbXBvcnQgJy4vaW5kZXguY3NzJztcblxuLy9pbXBvcnQgYWxsIGNsYXNzZXNcbmltcG9ydCBDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmQuanNcIjtcbmltcG9ydCBGb3JtVmFsaWRhdG9yIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanNcIjtcbmltcG9ydCBTZWN0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvU2VjdGlvbi5qcyc7XG5pbXBvcnQgUG9wdXBXaXRoSW1hZ2VzIGZyb20gJy4uL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2VzLmpzJztcbmltcG9ydCB7IGluaXRpYWxDYXJkcyxmb3JtVmFsaWRhdG9yQ29uZmlnLCBzZWxlY3RvcnMgfSBmcm9tIFwiLi4vdXRpbHMvY29uc3RhbnRzLmpzXCI7XG5cblxuY29uc3QgQ2FyZFNlY3Rpb24gPSAgbmV3IFNlY3Rpb24oe1xuICByZW5kZXJlcjogKGl0ZW0pID0+IHtcbiAgICAvLyBjb25zdCBjYXJkRWwgPSBuZXcgQ2FyZChjYXJkKS5yZW5kZXIoKTtcbiAgICAvLyBjb25zdCBjYXJkRWwgPSBuZXcgQ2FyZChpdGVtLCBzZWxlY3RvcnMuY2FyZFRlbXBsYXRlKTtcbiAgICAvLyBjb25zdCBjYXJkRWwgPSBuZXcgQ2FyZChpdGVtLCBzZWxlY3RvcnMuY2FyZFRlbXBsYXRlKS5yZW5kZXIoKTtcbiAgICBjb25zdCBjYXJkRWwgPSBuZXcgQ2FyZChpdGVtLCBzZWxlY3RvcnMuY2FyZFRlbXBsYXRlKTtcbiAgICBDYXJkU2VjdGlvbi5hZGRJdGVtKGNhcmRFbC5yZW5kZXIoKSk7XG4gICAgLy8gY2FyZFNlY3Rpb24uYWRkSXRlbShjYXJkRWwucmVuZGVyKCkpO1xuICB9LFxuICBzZWxlY3RvcjogIHNlbGVjdG9ycy5jYXJkU2VjdGlvbixcbn0pO1xuICAvL3RlbXBsYXRlID09IHNlbGVjdG9yIGluIENhcmQuanNcbiAgLy8gdGVtcGxhdGU6IHNlbGVjdG9ycy5jYXJkU2VjdGlvbixcbiAgLy8gc2VsZWN0b3JzLmNhcmRTZWN0aW9uXG5cblxuLy8gY2FyZFNlY3Rpb24uaW5pdGlhbENhcmRzO1xuXG4vLyBjb25zdCBhZGRGb3JtRWwgPSBmb3JtQ2FyZC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tbmFtZVwiKTtcbi8vIGNvbnN0IGVkaXRGb3JtRWwgPSBmb3JtUHJvZmlsZS5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tbmFtZVwiKTtcblxuLy8gZm9ybVByb2ZpbGUuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBlZGl0UHJvZmlsZVJlZnJlc2hGb3JtKTtcbi8vIGVkaXRGb3JtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4vLyAgIG9wZW5Qcm9maWxlUG9wdXAocHJvZmlsZVBvcHVwKTtcbi8vIH0pO1xuXG4vLyBmb3JtQ2FyZC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGVkaXRDYXJkUmVmcmVzaEZvcm0pO1xuLy8gYWRkQ2FyZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuLy8gICBvcGVuUG9wdXAoYWRkQ2FyZFBvcHVwKTtcbi8vIH0pO1xuXG4vLyBjb25zdCBwcm9maWxlUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXQtcHJvZmlsZS1wb3B1cFwiKTsgLy8ucG9wdXBfX2Zvcm1cbi8vIGNvbnN0IGFkZENhcmRQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLWNhcmQtcG9wdXBcIik7XG5cbi8vIGNvbnN0IGFkZEZvcm1WYWxpZGF0b3IgPSBuZXcgRm9ybVZhbGlkYXRvcihmb3JtVmFsaWRhdG9yQ29uZmlnLCBhZGRGb3JtRWwpO1xuLy8gYWRkRm9ybVZhbGlkYXRvci5lbmFibGVWYWxpZGF0aW9uKFwiLmZvcm0tbmFtZVwiKTtcblxuLy8gY29uc3QgZWRpdEZvcm1WYWxpZGF0b3IgPSBuZXcgRm9ybVZhbGlkYXRvcihmb3JtVmFsaWRhdG9yQ29uZmlnLCBlZGl0Rm9ybUVsKTtcbi8vIGVkaXRGb3JtVmFsaWRhdG9yLmVuYWJsZVZhbGlkYXRpb24oXCIuZm9ybS1uYW1lXCIpO1xuXG5cbiAgICBDYXJkU2VjdGlvbi5yZW5kZXJJdGVtcyhpbml0aWFsQ2FyZHMpO1xuXG5cbiIsIlxuLy8gZXhwb3J0IGZ1bmN0aW9uIHByZXNzRXNjS2V5KGUpIHtcbi8vICAgaWYgKGUua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4vLyAgICAgY2xvc2VQb3B1cChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX29wZW5lZFwiKSk7XG4vLyAgIH1cbi8vIH1cblxuXG5leHBvcnQgY29uc3QgaW5pdGlhbENhcmRzID0gW1xuICB7XG4gICAgdGl0bGU6IFwiTGFrZSAmIE1vdW50YWluXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNjM4ODAyNDIyNjMzLTY5NDA4ODY4MDM1OT9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9Njg3JnE9ODBcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkxha2UgTG91aXNlXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL2xha2UtbG91aXNlLmpwZ1wiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiQmFsZCBNb3VudGFpbnNcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUvYmFsZC1tb3VudGFpbnMuanBnXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJMYXRlbWFyXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL2xhdGVtYXIuanBnXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJWYW5vaXNlIE5hdGlvbmFsIFBhcmtcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUvdmFub2lzZS5qcGdcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkxhZ28gZGkgYnJhaWVzXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL2xhZ28uanBnXCIsXG4gIH0sXG5dO1xuXG5cbmV4cG9ydCBjb25zdCBmb3JtVmFsaWRhdG9yQ29uZmlnID0ge1xuICBpbnB1dFNlbGVjdG9yOiBcIi5mb3JtLW5hbWVfX2lucHV0XCIsXG4gIHN1Ym1pdEJ1dHRvblNlbGVjdG9yOiBcIi5mb3JtLW5hbWVfX3NhdmUtYnV0dG9uXCIsXG4gIGluYWN0aXZlQnV0dG9uQ2xhc3M6IFwiZm9ybS1uYW1lX19zYXZlLWJ1dHRvbl9kaXNhYmxlZFwiLFxuICBpbnB1dEVycm9yQ2xhc3M6IFwiZm9ybS1uYW1lX19tb2RhbC10eXBlX2Vycm9yXCIsXG4gIGVycm9yQ2xhc3M6IFwibW9kYWxfX3BvcHVwX19lcnJvcl92aXNpYmxlXCIsXG59O1xuXG5cbmV4cG9ydCBjb25zdCBzZWxlY3RvcnMgPSB7XG4gIGNhcmRTZWN0aW9uOiAnZWxlbWVudHMtZ3JpZF9fY2FyZCcsLy9jYXJkIGxpc3RcbiAgY2FyZFRlbXBsYXRlOiBcIiNjYXJkLXRlbXBsYXRlXCIsLy9jYXJkIHRlbXBsYXRlXG4gIC8vIHByZXZpZXdQb3B1cDogXCJwb3B1cF90eXBlX2ltYWdlXCIsXG59XG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvcGFnZXMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOlsiUG9wdXAiLCJvcGVuUG9wdXAiLCJjbG9zZVBvcHVwIiwiY2xpY2tPdXRzaWRlT3ZlcmxheSIsInByZXNzRXNjS2V5IiwiaW1hZ2VQb3B1cCIsIm1vZGFsSW1hZ2VFbGVtZW50IiwibW9kYWxDYXB0aW9uIiwiQ2FyZCIsInRlbXBsYXRlIiwiZGF0YSIsIl90ZW1wbGF0ZSIsIl9kYXRhIiwiX3RpdGxlIiwidGl0bGUiLCJfdXJsIiwidXJsIiwiX2VsZW1lbnQiLCJGb3JtVmFsaWRhdG9yIiwic2V0dGluZ3MiLCJmb3JtRWwiLCJfaW5wdXRTZWxlY3RvciIsImlucHV0U2VsZWN0b3IiLCJfc3VibWl0QnV0dG9uU2VsZWN0b3IiLCJzdWJtaXRCdXR0b25TZWxlY3RvciIsIl9pbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiaW5hY3RpdmVCdXR0b25DbGFzcyIsIl9pbnB1dEVycm9yQ2xhc3MiLCJpbnB1dEVycm9yQ2xhc3MiLCJfZXJyb3JDbGFzcyIsImVycm9yQ2xhc3MiLCJfZm9ybUVsIiwiaW5wdXRFbCIsInZhbGlkaXR5IiwidmFsaWQiLCJlcnJvckVsIiwicXVlcnlTZWxlY3RvciIsImlkIiwiY2xhc3NMaXN0IiwiYWRkIiwidGV4dENvbnRlbnQiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsInJlbW92ZSIsIl9pbnB1dExpc3QiLCJzb21lIiwiX2lzSW52YWxpZElucHV0IiwiX2J1dHRvbkVsIiwiZGlzYWJsZWQiLCJfc2hvd0Vycm9yIiwiX2hpZGVFcnJvciIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9jaGVja0lucHV0VmFsaWRpdHkiLCJfdG9nZ2xlQnV0dG9uIiwicmVzZXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJfc2V0RXZlbnRMaXN0ZW5lcnMiLCJwb3B1cFNlbGVjdG9yIiwiX3BvcHVwRWxlbWVudCIsImRvY3VtZW50IiwiX2hhbmRsZUVzY1VwIiwiYmluZCIsImV2dCIsImtleSIsImNsb3NlIiwidGFyZ2V0IiwiY29udGFpbnMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiUG9wdXBXaXRoSW1hZ2VzIiwiX21vZGFsSW1hZ2VFbGVtZW50IiwiX2ltYWdlUG9wdXAiLCJfbW9kYWxDYXB0aW9uIiwiaW1hZ2UiLCJzcmMiLCJhbHQiLCJTZWN0aW9uIiwiYWRkQ2FyZFBvcHVwIiwicmVuZGVyZXIiLCJzZWxlY3RvciIsIl9yZW5kZXJlciIsIml0ZW1zIiwicG9wdXAiLCJpbml0aWFsQ2FyZHMiLCJmb3JtVmFsaWRhdG9yQ29uZmlnIiwic2VsZWN0b3JzIiwiQ2FyZFNlY3Rpb24iLCJpdGVtIiwiY2FyZEVsIiwiY2FyZFRlbXBsYXRlIiwiYWRkSXRlbSIsInJlbmRlciIsImNhcmRTZWN0aW9uIiwicmVuZGVySXRlbXMiXSwic291cmNlUm9vdCI6IiJ9