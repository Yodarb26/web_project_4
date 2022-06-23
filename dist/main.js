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
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import Popup from "./Popup";
//deconstruct
// export default class Card extends Popup {
var Card = /*#__PURE__*/_createClass(function Card(_ref, template) {
  var _this = this;

  var data = _ref.data,
      handleCardPreview = _ref.handleCardPreview;

  _classCallCheck(this, Card);

  _defineProperty(this, "_getElement", function () {
    return _this._template.content.querySelector(".elements-grid__card").cloneNode(true);
  });

  _defineProperty(this, "_handleLikeIcon", function () {
    _this._cardLikeButton.classList.toggle("elements-grid__icon-active");
  });

  _defineProperty(this, "_handleDeleteCard", function () {
    _this._element.remove();

    _this.element = null;
  });

  _defineProperty(this, "_setEventListeners", function () {
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
      _this._handleCardPreview({
        url: _this._data.url,
        title: _this._data.title
      });
    });
  });

  _defineProperty(this, "render", function () {
    _this._element = _this._getElement();
    _this._imageElement = _this._element.querySelector(".elements-grid__image");
    _this._titleElement = _this._element.querySelector(".elements-grid__text");
    _this._deleteCard = _this._element.querySelector(".elements-grid__delete-button");
    _this._cardLikeButton = _this._element.querySelector(".elements-grid__icon");
    _this._imageElement.src = _this._url;
    _this._imageElement.alt = _this._url;
    _this._titleElement.textContent = _this._title;

    _this._setEventListeners();

    return _this._element;
  });

  // constructor({data, handleCardPreview}, template, popupSelector) {
  // constructor({data, handleCardPreview, handleCardClick}, template, popupSelector) {
  // super(popupSelector);
  this._data = data;
  this._title = data.title;
  this._url = data.url;
  this._element = null;
  this._handleCardPreview = handleCardPreview;
  this._template = template;
} // Card template
);



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
      // this._formEl.reset();
      console.log(333333);
      console.log(4444444);

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


;

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

    this._popupElement = document.querySelector(popupSelector);
    this._handleEscUp = this._handleEscUp.bind(this);
  }

  _createClass(Popup, [{
    key: "_handleEscUp",
    value: function _handleEscUp(evt) {
      //evt.preventDefault();
      if (evt.key === "Escape") {
        evt.preventDefault();
        this.close();
      }
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this = this;

      this._popupElement.addEventListener("click", function (evt) {
        if (evt.target.classList.contains("modal__popup-btn") || evt.target.classList.contains("modal__popup")) {
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

/***/ "./src/components/PopupWithForm.js":
/*!*****************************************!*\
  !*** ./src/components/PopupWithForm.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopupWithForm)
/* harmony export */ });
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var PopupWithForm = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithForm, _Popup);

  var _super = _createSuper(PopupWithForm);

  function PopupWithForm(_ref, popupSelector) {
    var _this;

    var formSubmit = _ref.formSubmit;

    _classCallCheck(this, PopupWithForm);

    _this = _super.call(this, popupSelector);
    _this._formSubmit = formSubmit;
    _this._formEl = _this._popupElement.querySelector(".form-name"); //.popup__form

    return _this;
  } //private method


  _createClass(PopupWithForm, [{
    key: "_getInputValues",
    value: function _getInputValues() {
      var _this2 = this;

      this._allInputFields = this._popupElement.querySelectorAll(".form-name__input");
      this._allInputEl = {};

      this._allInputFields.forEach(function (inputEl) {
        _this2._allInputEl[inputEl.name] = inputEl.value; // this._allInputEl.name = inputEl.name,
        // this._allInputEl.value = inputEl.value,
        // return this._allInputEl;
      });

      return this._allInputEl;
    } //public method

  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this3 = this;

      this._formEl.addEventListener("submit", function (evt) {
        evt.preventDefault();

        _this3._formSubmit(_this3._getInputValues());

        _this3.close();
      });

      _get(_getPrototypeOf(PopupWithForm.prototype), "setEventListeners", this).call(this);
    }
  }, {
    key: "close",
    value: //public method
    function close() {
      this._formEl.reset();

      _get(_getPrototypeOf(PopupWithForm.prototype), "close", this).call(this);
    }
  }]);

  return PopupWithForm;
}(_Popup__WEBPACK_IMPORTED_MODULE_0__["default"]);


;

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

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var PopupWithImages = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithImages, _Popup);

  var _super = _createSuper(PopupWithImages);

  function PopupWithImages(popupSelector) {
    var _this;

    _classCallCheck(this, PopupWithImages);

    _this = _super.call(this, popupSelector);
    _this._modalImageElement = _this._popupElement.querySelector(".modal__popup-image");
    _this._modalCaption = _this._popupElement.querySelector(".modal__popup-caption");
    return _this;
  }

  _createClass(PopupWithImages, [{
    key: "open",
    value: function open(data) {
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
  function Section(_ref, containerSelector) {
    var items = _ref.items,
        renderer = _ref.renderer;

    _classCallCheck(this, Section);

    this._items = items;
    this._renderer = renderer;
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
      this._element.prepend(element);
    }
  }]);

  return Section;
}(); // // function renderCard(data) {
// //   const card = new Card(cardTemplate, data);
// //   addCardToPage(card.render(data));
// }




/***/ }),

/***/ "./src/components/UserInfo.js":
/*!************************************!*\
  !*** ./src/components/UserInfo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserInfo)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var UserInfo = /*#__PURE__*/function () {
  function UserInfo(_ref) {
    var userName = _ref.userName,
        userDetail = _ref.userDetail;

    _classCallCheck(this, UserInfo);

    this._userName = userName;
    this._userDetail = userDetail;
  }

  _createClass(UserInfo, [{
    key: "getUserInfo",
    value: function getUserInfo() {
      return {
        userProfileName: this._userName.textContent,
        userProfileDetail: this._userDetail.textContent
      };
    }
  }, {
    key: "setUserInfo",
    value: function setUserInfo(userName, userDetail) {
      this._userName.textContent = userName;
      this._userDetail.textContent = userDetail;
    }
  }]);

  return UserInfo;
}();



/***/ }),

/***/ "./src/utils/constants.js":
/*!********************************!*\
  !*** ./src/utils/constants.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addCardBtn": () => (/* binding */ addCardBtn),
/* harmony export */   "addFormEl": () => (/* binding */ addFormEl),
/* harmony export */   "closeCardButton": () => (/* binding */ closeCardButton),
/* harmony export */   "closeImagePreviewButton": () => (/* binding */ closeImagePreviewButton),
/* harmony export */   "closeProfileButton": () => (/* binding */ closeProfileButton),
/* harmony export */   "editFormBtn": () => (/* binding */ editFormBtn),
/* harmony export */   "editFormEl": () => (/* binding */ editFormEl),
/* harmony export */   "formValidatorConfig": () => (/* binding */ formValidatorConfig),
/* harmony export */   "imagePopup": () => (/* binding */ imagePopup),
/* harmony export */   "initialCards": () => (/* binding */ initialCards),
/* harmony export */   "modalCaption": () => (/* binding */ modalCaption),
/* harmony export */   "modalCardTitle": () => (/* binding */ modalCardTitle),
/* harmony export */   "modalCardUrl": () => (/* binding */ modalCardUrl),
/* harmony export */   "modalImageElement": () => (/* binding */ modalImageElement),
/* harmony export */   "proModalName": () => (/* binding */ proModalName),
/* harmony export */   "proModalWork": () => (/* binding */ proModalWork),
/* harmony export */   "proSubTitle": () => (/* binding */ proSubTitle),
/* harmony export */   "proTitle": () => (/* binding */ proTitle),
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
  previewPopup: "#image-popup" // card image popup preview
  // modalPopUp: ".modal__popup",

}; // export const profilePopup = document.querySelector("#edit-profile-popup"); //.popup__form
// export const addCardPopup = document.querySelector("#add-card-popup");
// export const formProfile = document.querySelector("#edit-profile-popup");
// export const formCard = document.querySelector("#add-card-popup");
// export const addFormEl = formCard.querySelector(".form-name");
// export const editFormEl = formProfile.querySelector(".form-name");

var addCardBtn = document.querySelector(".profile__plus-button");
var editFormBtn = document.querySelector(".profile__edit-button");
var closeCardButton = document.querySelector("#close-card-popup");
var closeImagePreviewButton = document.querySelector("#close-image-popup");
var closeProfileButton = document.querySelector("#close-profile-popup");
var proTitle = document.querySelector(".profile__title");
var proSubTitle = document.querySelector(".profile__subtitle");
var imagePopup = document.querySelector("#image-popup");
var modalImageElement = imagePopup.querySelector(".modal__popup-image");
var modalCaption = imagePopup.querySelector(".modal__popup-caption"); //modal__popup-image

var proModalName = document.querySelector("#list-title");
var proModalWork = document.querySelector("#list-subtitle");
var modalCardTitle = document.querySelector("#card-title");
var modalCardUrl = document.querySelector("#card-url");
var addFormEl = document.querySelector("#add-card-popup");
var editFormEl = document.querySelector("#edit-profile-popup");

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
/* harmony import */ var _components_PopupWithForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PopupWithForm */ "./src/components/PopupWithForm.js");
/* harmony import */ var _components_Section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Section */ "./src/components/Section.js");
/* harmony import */ var _components_UserInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/UserInfo */ "./src/components/UserInfo.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/constants */ "./src/utils/constants.js");
 //import all classes








var formProfileDetail = new _components_UserInfo__WEBPACK_IMPORTED_MODULE_6__["default"]({
  userName: _utils_constants__WEBPACK_IMPORTED_MODULE_7__.proTitle,
  userDetail: _utils_constants__WEBPACK_IMPORTED_MODULE_7__.proSubTitle
});
var CardSection = new _components_Section__WEBPACK_IMPORTED_MODULE_5__["default"]({
  // data: initialCards,
  renderer: function renderer(item) {
    var cardEl = new _components_Card__WEBPACK_IMPORTED_MODULE_1__["default"]({
      data: item,
      handleCardPreview: function handleCardPreview(imgData) {
        CardPreviewPopup.open(imgData);
      }
    }, cardDisplay);
    CardSection.addItem(cardEl.render());
  }
}, _utils_constants__WEBPACK_IMPORTED_MODULE_7__.selectors.cardSection);
var CardPreviewPopup = new _components_PopupWithImages__WEBPACK_IMPORTED_MODULE_3__["default"](_utils_constants__WEBPACK_IMPORTED_MODULE_7__.selectors.previewPopup);
var cardDisplay = document.querySelector(_utils_constants__WEBPACK_IMPORTED_MODULE_7__.selectors.cardTemplate); //Profile modal

var formProfileName = new _components_PopupWithForm__WEBPACK_IMPORTED_MODULE_4__["default"]({
  formSubmit: function formSubmit(_ref) {
    var userName = _ref.userName,
        userDetail = _ref.userDetail;
    formProfileDetail.setUserInfo(userName, userDetail);
  }
}, "#edit-profile-popup"); //Card modal
//can't be a username +its detail when adding a card

var formProfileCard = new _components_PopupWithForm__WEBPACK_IMPORTED_MODULE_4__["default"]({
  formSubmit: function formSubmit(data, cardTemplate) {
    var cardEl = new _components_Card__WEBPACK_IMPORTED_MODULE_1__["default"](data, cardTemplate);
    CardSection.addCardToPage(cardEl.render(data, cardTemplate));
  }
}, "#add-card-popup"); // const formProfileCard = new PopupWithForm({
//   formSubmit: (data) => {
//   const cardEl = new Card(data);
//   CardSection.addCardToPage(cardEl.render(data));
//     },
// },  "#add-card-popup");

formProfileName.setEventListeners();
formProfileCard.setEventListeners();
CardPreviewPopup.setEventListeners();
CardSection.renderItems(_utils_constants__WEBPACK_IMPORTED_MODULE_7__.initialCards); //add card button

_utils_constants__WEBPACK_IMPORTED_MODULE_7__.addCardBtn.addEventListener('click', function () {
  _utils_constants__WEBPACK_IMPORTED_MODULE_7__.modalCardTitle.value = _utils_constants__WEBPACK_IMPORTED_MODULE_7__.modalImageElement.textContent;
  _utils_constants__WEBPACK_IMPORTED_MODULE_7__.modalCardUrl.value = _utils_constants__WEBPACK_IMPORTED_MODULE_7__.modalCaption.src;
  formProfileCard.open(); // console.log(imagePopup);
  // console.log(modalImageElement);
  // console.log(modalCaption);
  // console.log(modalCardTitle);
  // console.log(formProfileCard);
  // addFormValidator.resetForm();
}); ///profile edit button

_utils_constants__WEBPACK_IMPORTED_MODULE_7__.editFormBtn.addEventListener('click', function () {
  formProfileName.open();
  var activeUser = formProfileDetail.getUserInfo();
  _utils_constants__WEBPACK_IMPORTED_MODULE_7__.proModalName.value = activeUser.userProfileName;
  _utils_constants__WEBPACK_IMPORTED_MODULE_7__.proModalWork.value = activeUser.userProfileDetail; //  editFormValidator.resetForm();
});
var addFormValidator = new _components_FormValidator__WEBPACK_IMPORTED_MODULE_2__["default"](_utils_constants__WEBPACK_IMPORTED_MODULE_7__.formValidatorConfig, _utils_constants__WEBPACK_IMPORTED_MODULE_7__.addFormEl);
addFormValidator.enableValidation();
var editFormValidator = new _components_FormValidator__WEBPACK_IMPORTED_MODULE_2__["default"](_utils_constants__WEBPACK_IMPORTED_MODULE_7__.formValidatorConfig, _utils_constants__WEBPACK_IMPORTED_MODULE_7__.editFormEl);
editFormValidator.enableValidation();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ly4vc3JjL2NvbXBvbmVudHMvQ2FyZC5qcyIsIndlYnBhY2s6Ly9zcHJpbnQtOC8uL3NyYy9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vc3ByaW50LTgvLi9zcmMvY29tcG9uZW50cy9Qb3B1cC5qcyIsIndlYnBhY2s6Ly9zcHJpbnQtOC8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm0uanMiLCJ3ZWJwYWNrOi8vc3ByaW50LTgvLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhJbWFnZXMuanMiLCJ3ZWJwYWNrOi8vc3ByaW50LTgvLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uLmpzIiwid2VicGFjazovL3NwcmludC04Ly4vc3JjL2NvbXBvbmVudHMvVXNlckluZm8uanMiLCJ3ZWJwYWNrOi8vc3ByaW50LTgvLi9zcmMvdXRpbHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL3NwcmludC04Ly4vc3JjL3BhZ2VzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9zcHJpbnQtOC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zcHJpbnQtOC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc3ByaW50LTgvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zcHJpbnQtOC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3NwcmludC04Ly4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cFwiO1xuXG4vL2RlY29uc3RydWN0XG4vLyBleHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkIGV4dGVuZHMgUG9wdXAge1xuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkIHtcbiAgY29uc3RydWN0b3Ioe2RhdGEsIGhhbmRsZUNhcmRQcmV2aWV3fSwgdGVtcGxhdGUpIHtcbiAgLy8gY29uc3RydWN0b3Ioe2RhdGEsIGhhbmRsZUNhcmRQcmV2aWV3fSwgdGVtcGxhdGUsIHBvcHVwU2VsZWN0b3IpIHtcbiAgICAvLyBjb25zdHJ1Y3Rvcih7ZGF0YSwgaGFuZGxlQ2FyZFByZXZpZXcsIGhhbmRsZUNhcmRDbGlja30sIHRlbXBsYXRlLCBwb3B1cFNlbGVjdG9yKSB7XG4gICAgLy8gc3VwZXIocG9wdXBTZWxlY3Rvcik7XG4gICAgdGhpcy5fZGF0YSA9IGRhdGE7XG4gICAgdGhpcy5fdGl0bGUgPSBkYXRhLnRpdGxlO1xuICAgIHRoaXMuX3VybCA9IGRhdGEudXJsO1xuICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsO1xuICAgIHRoaXMuX2hhbmRsZUNhcmRQcmV2aWV3ID0gaGFuZGxlQ2FyZFByZXZpZXc7XG4gICAgdGhpcy5fdGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgfVxuXG4gIC8vIENhcmQgdGVtcGxhdGVcbiAgX2dldEVsZW1lbnQgPSAoKSA9PiB7XG4gICAgIHJldHVybiB0aGlzLl90ZW1wbGF0ZS5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWxlbWVudHMtZ3JpZF9fY2FyZFwiKS5jbG9uZU5vZGUodHJ1ZSk7XG4gIH1cblxuICAvL0NhcmQgbGlrZSBoYW5kbGVyL3RvZ2dsZXJcbiAgX2hhbmRsZUxpa2VJY29uID0gKCkgPT4ge1xuICAgIHRoaXMuX2NhcmRMaWtlQnV0dG9uLmNsYXNzTGlzdFxuICAgIC50b2dnbGUoXCJlbGVtZW50cy1ncmlkX19pY29uLWFjdGl2ZVwiKTtcbiAgfTtcblxuICAvL0NhcmQgcmVtb3ZhbCBoYW5kbGVyXG4gIF9oYW5kbGVEZWxldGVDYXJkID0gKCkgPT4ge1xuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlKCk7XG4gICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcbiAgfTtcblxuICAvL0V2ZW50IGxpc3RlbmVyc1xuICBfc2V0RXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgdGhpcy5fY2FyZExpa2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldnQpID0+IHsgLy9jYXJkIGxpa2UgZXZlbnQgbGlzdGVuZXJcbiAgICAgIHRoaXMuX2hhbmRsZUxpa2VJY29uKGV2dCk7XG4gICAgfSk7XG4gICAgdGhpcy5fZGVsZXRlQ2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2dCkgPT4geyAvL2NhcmQgZGVsZXRlIGV2ZW50IGxpc3RlbmVyXG4gICAgICB0aGlzLl9oYW5kbGVEZWxldGVDYXJkKGV2dCk7XG4gICAgfSk7XG4gICAgdGhpcy5faW1hZ2VFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZ0KSA9PiB7IC8vY2FyZCBwcmV2aWV3IGV2ZW50IGxpc3RlbmVyXG4gICAgICB0aGlzLl9oYW5kbGVDYXJkUHJldmlldyh7dXJsOnRoaXMuX2RhdGEudXJsLCB0aXRsZTogdGhpcy5fZGF0YS50aXRsZX0pO1xuICAgIH0pO1xuICB9O1xuXG4gIC8vVGVtcGxhdGUgZGlzcGxheWluZ1xuICByZW5kZXIgPSAoKSA9PiB7XG4gICAgdGhpcy5fZWxlbWVudCA9IHRoaXMuX2dldEVsZW1lbnQoKTtcbiAgICB0aGlzLl9pbWFnZUVsZW1lbnQgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWxlbWVudHMtZ3JpZF9faW1hZ2VcIik7XG4gICAgdGhpcy5fdGl0bGVFbGVtZW50ID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRzLWdyaWRfX3RleHRcIik7XG4gICAgdGhpcy5fZGVsZXRlQ2FyZCA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbGVtZW50cy1ncmlkX19kZWxldGUtYnV0dG9uXCIpO1xuICAgIHRoaXMuX2NhcmRMaWtlQnV0dG9uID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRzLWdyaWRfX2ljb25cIik7XG4gICAgdGhpcy5faW1hZ2VFbGVtZW50LnNyYyA9IHRoaXMuX3VybDtcbiAgICB0aGlzLl9pbWFnZUVsZW1lbnQuYWx0ID0gdGhpcy5fdXJsO1xuICAgIHRoaXMuX3RpdGxlRWxlbWVudC50ZXh0Q29udGVudCA9IHRoaXMuX3RpdGxlO1xuICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7XG4gIH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtVmFsaWRhdG9yIHtcbiAgY29uc3RydWN0b3Ioc2V0dGluZ3MsIGZvcm1FbCkge1xuICAgIHRoaXMuX2lucHV0U2VsZWN0b3IgPSBzZXR0aW5ncy5pbnB1dFNlbGVjdG9yO1xuICAgIHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yID0gc2V0dGluZ3Muc3VibWl0QnV0dG9uU2VsZWN0b3I7XG4gICAgdGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyA9IHNldHRpbmdzLmluYWN0aXZlQnV0dG9uQ2xhc3M7XG4gICAgdGhpcy5faW5wdXRFcnJvckNsYXNzID0gc2V0dGluZ3MuaW5wdXRFcnJvckNsYXNzO1xuICAgIHRoaXMuX2Vycm9yQ2xhc3MgPSBzZXR0aW5ncy5lcnJvckNsYXNzO1xuICAgIHRoaXMuX2Zvcm1FbCA9IGZvcm1FbDtcbiAgfVxuXG4gIF9pc0ludmFsaWRJbnB1dChpbnB1dEVsKSB7XG4gICAgcmV0dXJuICFpbnB1dEVsLnZhbGlkaXR5LnZhbGlkO1xuICB9XG5cbiAgX3Nob3dFcnJvcihpbnB1dEVsKSB7XG4gICAgY29uc3QgZXJyb3JFbCA9IHRoaXMuX2Zvcm1FbC5xdWVyeVNlbGVjdG9yKGAjJHtpbnB1dEVsLmlkfWApO1xuICAgIGVycm9yRWwuY2xhc3NMaXN0LmFkZCh0aGlzLl9lcnJvckNsYXNzKTtcbiAgICBlcnJvckVsLnRleHRDb250ZW50ID0gaW5wdXRFbC52YWxpZGF0aW9uTWVzc2FnZTtcbiAgICBpbnB1dEVsLmNsYXNzTGlzdC5hZGQodGhpcy5faW5wdXRFcnJvckNsYXNzKTtcbiAgfVxuXG4gIF9oaWRlRXJyb3IoaW5wdXRFbCkge1xuICAgIGNvbnN0IGVycm9yRWwgPSB0aGlzLl9mb3JtRWwucXVlcnlTZWxlY3RvcihgIyR7aW5wdXRFbC5pZH1gKTtcbiAgICBlcnJvckVsLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fZXJyb3JDbGFzcyk7XG4gICAgZXJyb3JFbC50ZXh0Q29udGVudCA9ICcgJztcbiAgICBpbnB1dEVsLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5faW5wdXRFcnJvckNsYXNzKTtcbiAgfVxuXG4gIF90b2dnbGVCdXR0b24oKSB7XG4gICAgaWYgKHRoaXMuX2lucHV0TGlzdC5zb21lKHRoaXMuX2lzSW52YWxpZElucHV0KSkge1xuICAgICAgdGhpcy5fYnV0dG9uRWwuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgdGhpcy5fYnV0dG9uRWwuY2xhc3NMaXN0XG4gICAgICAuYWRkKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9idXR0b25FbC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5fYnV0dG9uRWwuY2xhc3NMaXN0XG4gICAgICAucmVtb3ZlKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIF9jaGVja0lucHV0VmFsaWRpdHkoaW5wdXRFbCkge1xuICAgIGNvbnN0IGVycm9yRWwgPSB0aGlzLl9mb3JtRWwucXVlcnlTZWxlY3RvcihcbiAgICAgIGAjJHtpbnB1dEVsLmlkfS1lcnJvcmApO1xuICAgIGlmICh0aGlzLl9pc0ludmFsaWRJbnB1dChpbnB1dEVsKSkge1xuICAgICAgdGhpcy5fc2hvd0Vycm9yKGVycm9yRWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9oaWRlRXJyb3IoZXJyb3JFbCk7XG4gICAgfVxuICB9XG5cbiAgX3NldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHRoaXMuX2lucHV0TGlzdCA9IEFycmF5LmZyb20odGhpcy5fZm9ybUVsLnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5faW5wdXRTZWxlY3RvcikpO1xuICAgIHRoaXMuX2J1dHRvbkVsID0gdGhpcy5fZm9ybUVsLnF1ZXJ5U2VsZWN0b3IodGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IpO1xuXG4gICAgdGhpcy5faW5wdXRMaXN0LmZvckVhY2goKGlucHV0RWwpID0+IHtcbiAgICAgIGlucHV0RWwuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcbiAgICAgICAgdGhpcy5fY2hlY2tJbnB1dFZhbGlkaXR5KGlucHV0RWwpO1xuICAgICAgICB0aGlzLl90b2dnbGVCdXR0b24oKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmVzZXRGb3JtKCkge1xuICAgIC8vIHRoaXMuX2Zvcm1FbC5yZXNldCgpO1xuICAgIGNvbnNvbGUubG9nKDMzMzMzMyk7XG4gICAgY29uc29sZS5sb2coNDQ0NDQ0NCk7XG4gICAgdGhpcy5fdG9nZ2xlQnV0dG9uKCk7XG4gIH1cblxuICBlbmFibGVWYWxpZGF0aW9uKCkge1xuICAgIHRoaXMuX2Zvcm1FbC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG4gICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgfVxufTtcblxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXAge1xuICAgIGNvbnN0cnVjdG9yKHBvcHVwU2VsZWN0b3Ipe1xuICAgICAgICB0aGlzLl9wb3B1cEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBvcHVwU2VsZWN0b3IpO1xuICAgICAgICB0aGlzLl9oYW5kbGVFc2NVcCA9IHRoaXMuX2hhbmRsZUVzY1VwLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgX2hhbmRsZUVzY1VwKGV2dCkge1xuICAgICAgLy9ldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmIChldnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICB0aGlzLl9wb3B1cEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldnQpID0+IHtcbiAgICAgICAgaWYoXG4gICAgICAgICAgZXZ0LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJtb2RhbF9fcG9wdXAtYnRuXCIpIHx8ICBldnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIm1vZGFsX19wb3B1cFwiKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIG9wZW4oKXtcbiAgICAgIHRoaXMuX3BvcHVwRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibW9kYWxfb3BlbmVkXCIpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5faGFuZGxlRXNjVXApO1xuICAgIH1cblxuICAgIGNsb3NlKCl7XG4gICAgICB0aGlzLl9wb3B1cEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcIm1vZGFsX29wZW5lZFwiKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuX2hhbmRsZUVzY1VwKTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFdpdGhGb3JtIGV4dGVuZHMgUG9wdXAge1xuICBjb25zdHJ1Y3Rvcih7Zm9ybVN1Ym1pdH0sIHBvcHVwU2VsZWN0b3Ipe1xuICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpO1xuICAgIHRoaXMuX2Zvcm1TdWJtaXQgPSBmb3JtU3VibWl0O1xuICAgIHRoaXMuX2Zvcm1FbCA9IHRoaXMuX3BvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tbmFtZVwiKTsgLy8ucG9wdXBfX2Zvcm1cbiAgfVxuXG4gIC8vcHJpdmF0ZSBtZXRob2RcbiAgX2dldElucHV0VmFsdWVzKCl7XG4gICAgdGhpcy5fYWxsSW5wdXRGaWVsZHMgPSB0aGlzLl9wb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mb3JtLW5hbWVfX2lucHV0XCIpO1xuICAgIHRoaXMuX2FsbElucHV0RWwgPSB7fTtcbiAgICB0aGlzLl9hbGxJbnB1dEZpZWxkcy5mb3JFYWNoKChpbnB1dEVsKSA9PiB7XG4gICAgICAgICAgdGhpcy5fYWxsSW5wdXRFbFtpbnB1dEVsLm5hbWVdID0gaW5wdXRFbC52YWx1ZTtcbiAgICAgICAgICAvLyB0aGlzLl9hbGxJbnB1dEVsLm5hbWUgPSBpbnB1dEVsLm5hbWUsXG4gICAgICAgICAgLy8gdGhpcy5fYWxsSW5wdXRFbC52YWx1ZSA9IGlucHV0RWwudmFsdWUsXG4gICAgICAgICAgLy8gcmV0dXJuIHRoaXMuX2FsbElucHV0RWw7XG4gIH0pO1xuICAgIHJldHVybiB0aGlzLl9hbGxJbnB1dEVsO1xuICB9XG5cbiAgLy9wdWJsaWMgbWV0aG9kXG4gIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHRoaXMuX2Zvcm1FbC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldnQpID0+IHtcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLl9mb3JtU3VibWl0KHRoaXMuX2dldElucHV0VmFsdWVzKCkpO1xuICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9KTtcbiAgICBzdXBlci5zZXRFdmVudExpc3RlbmVycygpO1xuICB9O1xuXG4gIC8vcHVibGljIG1ldGhvZFxuICBjbG9zZSgpe1xuICAgIHRoaXMuX2Zvcm1FbC5yZXNldCgpO1xuICAgIHN1cGVyLmNsb3NlKCk7XG4gIH07XG59O1xuXG4iLCJpbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBXaXRoSW1hZ2VzIGV4dGVuZHMgUG9wdXAge1xuICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yKSB7XG4gICAgc3VwZXIocG9wdXBTZWxlY3Rvcik7XG4gICAgdGhpcy5fbW9kYWxJbWFnZUVsZW1lbnQgPSB0aGlzLl9wb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fcG9wdXAtaW1hZ2VcIik7XG4gICAgdGhpcy5fbW9kYWxDYXB0aW9uID0gdGhpcy5fcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX3BvcHVwLWNhcHRpb25cIik7XG4gfVxuXG5cbm9wZW4oZGF0YSkge1xuICB0aGlzLl9tb2RhbEltYWdlRWxlbWVudC5zcmMgPSBkYXRhLnVybDtcbiAgdGhpcy5fbW9kYWxJbWFnZUVsZW1lbnQuYWx0ID1gaW1hZ2Ugb2Yke2RhdGEudXJsfWA7XG4gIHRoaXMuX21vZGFsQ2FwdGlvbi50ZXh0Q29udGVudCA9IGRhdGEudGl0bGU7XG4gIHN1cGVyLm9wZW4oKTtcbiB9XG59XG5cblxuIiwiLy8gaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlY3Rpb24ge1xuICAgIGNvbnN0cnVjdG9yKHtpdGVtcywgcmVuZGVyZXJ9LCBjb250YWluZXJTZWxlY3Rvcil7XG4gICAgICB0aGlzLl9pdGVtcyA9IGl0ZW1zO1xuICAgICAgdGhpcy5fcmVuZGVyZXIgPSByZW5kZXJlcjtcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAke2NvbnRhaW5lclNlbGVjdG9yfWApO1xuICB9XG5cbiAgcmVuZGVySXRlbXMoZWxlbWVudCkge1xuICAgIGVsZW1lbnQuZm9yRWFjaCgoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5fcmVuZGVyZXIoZGF0YSk7XG4gICAgfSk7XG4gIH1cblxuICBhZGRJdGVtKGVsZW1lbnQpIHtcbiAgICB0aGlzLl9lbGVtZW50LnByZXBlbmQoZWxlbWVudCk7XG4gIH1cbn1cblxuLy8gLy8gZnVuY3Rpb24gcmVuZGVyQ2FyZChkYXRhKSB7XG4vLyAvLyAgIGNvbnN0IGNhcmQgPSBuZXcgQ2FyZChjYXJkVGVtcGxhdGUsIGRhdGEpO1xuLy8gLy8gICBhZGRDYXJkVG9QYWdlKGNhcmQucmVuZGVyKGRhdGEpKTtcbi8vIH0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VySW5mbyB7XG4gIGNvbnN0cnVjdG9yKHt1c2VyTmFtZSwgdXNlckRldGFpbH0pIHtcbiAgICB0aGlzLl91c2VyTmFtZSA9IHVzZXJOYW1lO1xuICAgIHRoaXMuX3VzZXJEZXRhaWwgPSB1c2VyRGV0YWlsO1xuICB9O1xuXG4gIGdldFVzZXJJbmZvKCkge1xuICAgIHJldHVybiB7XG4gICAgICB1c2VyUHJvZmlsZU5hbWU6IHRoaXMuX3VzZXJOYW1lLnRleHRDb250ZW50LFxuICAgICAgdXNlclByb2ZpbGVEZXRhaWw6IHRoaXMuX3VzZXJEZXRhaWwudGV4dENvbnRlbnRcbiAgICB9O1xuICB9XG5cbiAgc2V0VXNlckluZm8oIHVzZXJOYW1lLCB1c2VyRGV0YWlsKSB7XG4gICAgdGhpcy5fdXNlck5hbWUudGV4dENvbnRlbnQgPSB1c2VyTmFtZTtcbiAgICB0aGlzLl91c2VyRGV0YWlsLnRleHRDb250ZW50ID0gdXNlckRldGFpbDtcbiAgfVxufSIsIlxuZXhwb3J0IGNvbnN0IGluaXRpYWxDYXJkcyA9IFtcbiAge1xuICAgIC8vTkFNRVxuICAgIHRpdGxlOiBcIkxha2UgJiBNb3VudGFpblwiLFxuICAgIC8vTElOS1xuICAgIHVybDogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTYzODgwMjQyMjYzMy02OTQwODg2ODAzNTk/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTY4NyZxPTgwXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJMYWtlIExvdWlzZVwiLFxuICAgIHVybDogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS9sYWtlLWxvdWlzZS5qcGdcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkJhbGQgTW91bnRhaW5zXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL2JhbGQtbW91bnRhaW5zLmpwZ1wiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiTGF0ZW1hclwiLFxuICAgIHVybDogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS9sYXRlbWFyLmpwZ1wiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiVmFub2lzZSBOYXRpb25hbCBQYXJrXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL3Zhbm9pc2UuanBnXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJMYWdvIGRpIGJyYWllc1wiLFxuICAgIHVybDogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS9sYWdvLmpwZ1wiLFxuICB9LFxuXTtcblxuXG5leHBvcnQgY29uc3QgZm9ybVZhbGlkYXRvckNvbmZpZyA9IHtcbiAgaW5wdXRTZWxlY3RvcjogXCIuZm9ybS1uYW1lX19pbnB1dFwiLFxuICBzdWJtaXRCdXR0b25TZWxlY3RvcjogXCIuZm9ybS1uYW1lX19zYXZlLWJ1dHRvblwiLFxuICBpbmFjdGl2ZUJ1dHRvbkNsYXNzOiBcImZvcm0tbmFtZV9fc2F2ZS1idXR0b25fZGlzYWJsZWRcIixcbiAgaW5wdXRFcnJvckNsYXNzOiBcImZvcm0tbmFtZV9fbW9kYWwtdHlwZV9lcnJvclwiLFxuICBlcnJvckNsYXNzOiBcIm1vZGFsX19wb3B1cF9fZXJyb3JfdmlzaWJsZVwiLFxufTtcblxuXG5leHBvcnQgY29uc3Qgc2VsZWN0b3JzID0ge1xuICBjYXJkU2VjdGlvbjogXCIuZWxlbWVudHMtZ3JpZF9fY2FyZHNcIiwgLy9jYXJkIGxpc3RcbiAgY2FyZFRlbXBsYXRlOiBcIiNjYXJkLXRlbXBsYXRlXCIsLy9jYXJkIHRlbXBsYXRlXG4gIHByZXZpZXdQb3B1cDogXCIjaW1hZ2UtcG9wdXBcIiwvLyBjYXJkIGltYWdlIHBvcHVwIHByZXZpZXdcbiAgLy8gbW9kYWxQb3BVcDogXCIubW9kYWxfX3BvcHVwXCIsXG59XG5cbi8vIGV4cG9ydCBjb25zdCBwcm9maWxlUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXQtcHJvZmlsZS1wb3B1cFwiKTsgLy8ucG9wdXBfX2Zvcm1cbi8vIGV4cG9ydCBjb25zdCBhZGRDYXJkUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1jYXJkLXBvcHVwXCIpO1xuLy8gZXhwb3J0IGNvbnN0IGZvcm1Qcm9maWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0LXByb2ZpbGUtcG9wdXBcIik7XG4vLyBleHBvcnQgY29uc3QgZm9ybUNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1jYXJkLXBvcHVwXCIpO1xuLy8gZXhwb3J0IGNvbnN0IGFkZEZvcm1FbCA9IGZvcm1DYXJkLnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1uYW1lXCIpO1xuLy8gZXhwb3J0IGNvbnN0IGVkaXRGb3JtRWwgPSBmb3JtUHJvZmlsZS5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tbmFtZVwiKTtcblxuZXhwb3J0IGNvbnN0IGFkZENhcmRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX3BsdXMtYnV0dG9uXCIpO1xuZXhwb3J0IGNvbnN0IGVkaXRGb3JtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19lZGl0LWJ1dHRvblwiKTtcbmV4cG9ydCBjb25zdCBjbG9zZUNhcmRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nsb3NlLWNhcmQtcG9wdXBcIik7XG5leHBvcnQgY29uc3QgY2xvc2VJbWFnZVByZXZpZXdCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nsb3NlLWltYWdlLXBvcHVwXCIpO1xuZXhwb3J0IGNvbnN0IGNsb3NlUHJvZmlsZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvc2UtcHJvZmlsZS1wb3B1cFwiKTtcblxuZXhwb3J0IGNvbnN0IHByb1RpdGxlID0gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fdGl0bGVcIik7XG5leHBvcnQgY29uc3QgcHJvU3ViVGl0bGUgPSAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19zdWJ0aXRsZVwiKTtcblxuZXhwb3J0IGNvbnN0IGltYWdlUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ltYWdlLXBvcHVwXCIpO1xuZXhwb3J0IGNvbnN0IG1vZGFsSW1hZ2VFbGVtZW50ID0gaW1hZ2VQb3B1cC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19wb3B1cC1pbWFnZVwiKTtcbmV4cG9ydCBjb25zdCBtb2RhbENhcHRpb24gPSBpbWFnZVBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX3BvcHVwLWNhcHRpb25cIik7XG4vL21vZGFsX19wb3B1cC1pbWFnZVxuXG5leHBvcnQgY29uc3QgcHJvTW9kYWxOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsaXN0LXRpdGxlXCIpO1xuZXhwb3J0IGNvbnN0IHByb01vZGFsV29yayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbGlzdC1zdWJ0aXRsZVwiKTtcblxuZXhwb3J0IGNvbnN0IG1vZGFsQ2FyZFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYXJkLXRpdGxlXCIpO1xuZXhwb3J0IGNvbnN0IG1vZGFsQ2FyZFVybCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FyZC11cmxcIik7XG5cbmV4cG9ydCBjb25zdCBhZGRGb3JtRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1jYXJkLXBvcHVwXCIpO1xuZXhwb3J0IGNvbnN0IGVkaXRGb3JtRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXQtcHJvZmlsZS1wb3B1cFwiKTtcblxuXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9pbmRleC5jc3MnO1xuXG4vL2ltcG9ydCBhbGwgY2xhc3Nlc1xuaW1wb3J0IENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZFwiO1xuaW1wb3J0IEZvcm1WYWxpZGF0b3IgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvclwiO1xuaW1wb3J0IFBvcHVwV2l0aEltYWdlcyBmcm9tICcuLi9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlcyc7XG5pbXBvcnQgUG9wdXBXaXRoRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm0nO1xuaW1wb3J0IFNlY3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VjdGlvblwiO1xuaW1wb3J0IFVzZXJJbmZvIGZyb20gJy4uL2NvbXBvbmVudHMvVXNlckluZm8nO1xuaW1wb3J0IHtcbiAgaW5pdGlhbENhcmRzLFxuICBmb3JtVmFsaWRhdG9yQ29uZmlnLFxuICBzZWxlY3RvcnMsXG4gIGFkZENhcmRCdG4sXG4gIGVkaXRGb3JtQnRuLFxuICBwcm9UaXRsZSxcbiAgcHJvU3ViVGl0bGUsXG4gIHByb01vZGFsV29yayxcbiAgcHJvTW9kYWxOYW1lLFxuICBhZGRGb3JtRWwsXG4gIGVkaXRGb3JtRWwsXG4gIG1vZGFsQ2FyZFRpdGxlLFxuICBtb2RhbENhcmRVcmwsXG4gIGltYWdlUG9wdXAsXG4gIG1vZGFsSW1hZ2VFbGVtZW50LFxuICBtb2RhbENhcHRpb24sXG4gIC8vIGNsb3NlQ2FyZEJ1dHRvbixcbiAgLy8gY2xvc2VJbWFnZVByZXZpZXdCdXR0b24sXG4gIC8vIGNsb3NlUHJvZmlsZUJ1dHRvbixcbiAgLy8gaW1hZ2VQb3B1cCxcbiAgLy8gbW9kYWxJbWFnZUVsZW1lbnQsXG4gIC8vIG1vZGFsQ2FwdGlvbixcbn0gZnJvbSBcIi4uL3V0aWxzL2NvbnN0YW50c1wiO1xuXG5jb25zdCBmb3JtUHJvZmlsZURldGFpbCA9IG5ldyBVc2VySW5mbyh7XG4gIHVzZXJOYW1lOiBwcm9UaXRsZSxcbiAgdXNlckRldGFpbDogcHJvU3ViVGl0bGUsXG59KTtcblxuY29uc3QgQ2FyZFNlY3Rpb24gPSAgbmV3IFNlY3Rpb24gKHtcbiAgLy8gZGF0YTogaW5pdGlhbENhcmRzLFxuICByZW5kZXJlcjogKGl0ZW0pID0+IHtcbiAgICBjb25zdCBjYXJkRWwgPSBuZXcgQ2FyZCh7IGRhdGE6aXRlbSwgaGFuZGxlQ2FyZFByZXZpZXc6IChpbWdEYXRhKSA9PiB7XG4gICAgICAgICAgQ2FyZFByZXZpZXdQb3B1cC5vcGVuKGltZ0RhdGEpO1xuICAgIH1cbiAgfSwgY2FyZERpc3BsYXkpO1xuICAgIENhcmRTZWN0aW9uLmFkZEl0ZW0oY2FyZEVsLnJlbmRlcigpKTtcbiAgfSxcbn0sXG4gIHNlbGVjdG9ycy5jYXJkU2VjdGlvbixcbik7XG5cbmNvbnN0IENhcmRQcmV2aWV3UG9wdXAgPSBuZXcgUG9wdXBXaXRoSW1hZ2VzKHNlbGVjdG9ycy5wcmV2aWV3UG9wdXApO1xuY29uc3QgY2FyZERpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9ycy5jYXJkVGVtcGxhdGUpO1xuXG4vL1Byb2ZpbGUgbW9kYWxcbmNvbnN0IGZvcm1Qcm9maWxlTmFtZSA9IG5ldyBQb3B1cFdpdGhGb3JtKHtcbiAgZm9ybVN1Ym1pdDogKHt1c2VyTmFtZSwgdXNlckRldGFpbH0pID0+IHtcbiAgICBmb3JtUHJvZmlsZURldGFpbC5zZXRVc2VySW5mbyh1c2VyTmFtZSwgdXNlckRldGFpbCk7XG4gIH1cbn0sICBcIiNlZGl0LXByb2ZpbGUtcG9wdXBcIik7XG5cbi8vQ2FyZCBtb2RhbFxuLy9jYW4ndCBiZSBhIHVzZXJuYW1lICtpdHMgZGV0YWlsIHdoZW4gYWRkaW5nIGEgY2FyZFxuY29uc3QgZm9ybVByb2ZpbGVDYXJkID0gbmV3IFBvcHVwV2l0aEZvcm0oe1xuICBmb3JtU3VibWl0OiAoZGF0YSwgY2FyZFRlbXBsYXRlKSA9PiB7XG4gIGNvbnN0IGNhcmRFbCA9IG5ldyBDYXJkKGRhdGEsIGNhcmRUZW1wbGF0ZSk7XG4gIENhcmRTZWN0aW9uLmFkZENhcmRUb1BhZ2UoY2FyZEVsLnJlbmRlcihkYXRhLCBjYXJkVGVtcGxhdGUpKTtcbiAgICB9LFxufSwgIFwiI2FkZC1jYXJkLXBvcHVwXCIpO1xuXG4vLyBjb25zdCBmb3JtUHJvZmlsZUNhcmQgPSBuZXcgUG9wdXBXaXRoRm9ybSh7XG4vLyAgIGZvcm1TdWJtaXQ6IChkYXRhKSA9PiB7XG4vLyAgIGNvbnN0IGNhcmRFbCA9IG5ldyBDYXJkKGRhdGEpO1xuLy8gICBDYXJkU2VjdGlvbi5hZGRDYXJkVG9QYWdlKGNhcmRFbC5yZW5kZXIoZGF0YSkpO1xuLy8gICAgIH0sXG4vLyB9LCAgXCIjYWRkLWNhcmQtcG9wdXBcIik7XG5cblxuZm9ybVByb2ZpbGVOYW1lLnNldEV2ZW50TGlzdGVuZXJzKCk7XG5mb3JtUHJvZmlsZUNhcmQuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbkNhcmRQcmV2aWV3UG9wdXAuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbkNhcmRTZWN0aW9uLnJlbmRlckl0ZW1zKGluaXRpYWxDYXJkcyk7XG5cblxuLy9hZGQgY2FyZCBidXR0b25cbmFkZENhcmRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIG1vZGFsQ2FyZFRpdGxlLnZhbHVlID0gbW9kYWxJbWFnZUVsZW1lbnQudGV4dENvbnRlbnQ7XG4gIG1vZGFsQ2FyZFVybC52YWx1ZSA9IG1vZGFsQ2FwdGlvbi5zcmM7XG4gIGZvcm1Qcm9maWxlQ2FyZC5vcGVuKCk7XG4gIC8vIGNvbnNvbGUubG9nKGltYWdlUG9wdXApO1xuICAvLyBjb25zb2xlLmxvZyhtb2RhbEltYWdlRWxlbWVudCk7XG4gIC8vIGNvbnNvbGUubG9nKG1vZGFsQ2FwdGlvbik7XG4gIC8vIGNvbnNvbGUubG9nKG1vZGFsQ2FyZFRpdGxlKTtcbiAgLy8gY29uc29sZS5sb2coZm9ybVByb2ZpbGVDYXJkKTtcbiAgLy8gYWRkRm9ybVZhbGlkYXRvci5yZXNldEZvcm0oKTtcbn0pO1xuXG4vLy9wcm9maWxlIGVkaXQgYnV0dG9uXG5lZGl0Rm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgZm9ybVByb2ZpbGVOYW1lLm9wZW4oKTtcbiAgY29uc3QgYWN0aXZlVXNlciA9IGZvcm1Qcm9maWxlRGV0YWlsLmdldFVzZXJJbmZvKCk7XG4gIHByb01vZGFsTmFtZS52YWx1ZSA9IGFjdGl2ZVVzZXIudXNlclByb2ZpbGVOYW1lO1xuICBwcm9Nb2RhbFdvcmsudmFsdWUgPSBhY3RpdmVVc2VyLnVzZXJQcm9maWxlRGV0YWlsO1xuIC8vICBlZGl0Rm9ybVZhbGlkYXRvci5yZXNldEZvcm0oKTtcbiAgIH0pO1xuXG4gIGNvbnN0IGFkZEZvcm1WYWxpZGF0b3IgPSBuZXcgRm9ybVZhbGlkYXRvcihmb3JtVmFsaWRhdG9yQ29uZmlnLCBhZGRGb3JtRWwpO1xuICBhZGRGb3JtVmFsaWRhdG9yLmVuYWJsZVZhbGlkYXRpb24oKTtcbiAgY29uc3QgZWRpdEZvcm1WYWxpZGF0b3IgPSBuZXcgRm9ybVZhbGlkYXRvcihmb3JtVmFsaWRhdG9yQ29uZmlnLCBlZGl0Rm9ybUVsKTtcbiAgZWRpdEZvcm1WYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xuXG4iXSwibmFtZXMiOlsiQ2FyZCIsInRlbXBsYXRlIiwiZGF0YSIsImhhbmRsZUNhcmRQcmV2aWV3IiwiX3RlbXBsYXRlIiwiY29udGVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbG9uZU5vZGUiLCJfY2FyZExpa2VCdXR0b24iLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJfZWxlbWVudCIsInJlbW92ZSIsImVsZW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZ0IiwiX2hhbmRsZUxpa2VJY29uIiwiX2RlbGV0ZUNhcmQiLCJfaGFuZGxlRGVsZXRlQ2FyZCIsIl9pbWFnZUVsZW1lbnQiLCJfaGFuZGxlQ2FyZFByZXZpZXciLCJ1cmwiLCJfZGF0YSIsInRpdGxlIiwiX2dldEVsZW1lbnQiLCJfdGl0bGVFbGVtZW50Iiwic3JjIiwiX3VybCIsImFsdCIsInRleHRDb250ZW50IiwiX3RpdGxlIiwiX3NldEV2ZW50TGlzdGVuZXJzIiwiRm9ybVZhbGlkYXRvciIsInNldHRpbmdzIiwiZm9ybUVsIiwiX2lucHV0U2VsZWN0b3IiLCJpbnB1dFNlbGVjdG9yIiwiX3N1Ym1pdEJ1dHRvblNlbGVjdG9yIiwic3VibWl0QnV0dG9uU2VsZWN0b3IiLCJfaW5hY3RpdmVCdXR0b25DbGFzcyIsImluYWN0aXZlQnV0dG9uQ2xhc3MiLCJfaW5wdXRFcnJvckNsYXNzIiwiaW5wdXRFcnJvckNsYXNzIiwiX2Vycm9yQ2xhc3MiLCJlcnJvckNsYXNzIiwiX2Zvcm1FbCIsImlucHV0RWwiLCJ2YWxpZGl0eSIsInZhbGlkIiwiZXJyb3JFbCIsImlkIiwiYWRkIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJfaW5wdXRMaXN0Iiwic29tZSIsIl9pc0ludmFsaWRJbnB1dCIsIl9idXR0b25FbCIsImRpc2FibGVkIiwiX3Nob3dFcnJvciIsIl9oaWRlRXJyb3IiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsIl9jaGVja0lucHV0VmFsaWRpdHkiLCJfdG9nZ2xlQnV0dG9uIiwiY29uc29sZSIsImxvZyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIlBvcHVwIiwicG9wdXBTZWxlY3RvciIsIl9wb3B1cEVsZW1lbnQiLCJkb2N1bWVudCIsIl9oYW5kbGVFc2NVcCIsImJpbmQiLCJrZXkiLCJjbG9zZSIsInRhcmdldCIsImNvbnRhaW5zIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIlBvcHVwV2l0aEZvcm0iLCJmb3JtU3VibWl0IiwiX2Zvcm1TdWJtaXQiLCJfYWxsSW5wdXRGaWVsZHMiLCJfYWxsSW5wdXRFbCIsIm5hbWUiLCJ2YWx1ZSIsIl9nZXRJbnB1dFZhbHVlcyIsInJlc2V0IiwiUG9wdXBXaXRoSW1hZ2VzIiwiX21vZGFsSW1hZ2VFbGVtZW50IiwiX21vZGFsQ2FwdGlvbiIsIlNlY3Rpb24iLCJjb250YWluZXJTZWxlY3RvciIsIml0ZW1zIiwicmVuZGVyZXIiLCJfaXRlbXMiLCJfcmVuZGVyZXIiLCJwcmVwZW5kIiwiVXNlckluZm8iLCJ1c2VyTmFtZSIsInVzZXJEZXRhaWwiLCJfdXNlck5hbWUiLCJfdXNlckRldGFpbCIsInVzZXJQcm9maWxlTmFtZSIsInVzZXJQcm9maWxlRGV0YWlsIiwiaW5pdGlhbENhcmRzIiwiZm9ybVZhbGlkYXRvckNvbmZpZyIsInNlbGVjdG9ycyIsImNhcmRTZWN0aW9uIiwiY2FyZFRlbXBsYXRlIiwicHJldmlld1BvcHVwIiwiYWRkQ2FyZEJ0biIsImVkaXRGb3JtQnRuIiwiY2xvc2VDYXJkQnV0dG9uIiwiY2xvc2VJbWFnZVByZXZpZXdCdXR0b24iLCJjbG9zZVByb2ZpbGVCdXR0b24iLCJwcm9UaXRsZSIsInByb1N1YlRpdGxlIiwiaW1hZ2VQb3B1cCIsIm1vZGFsSW1hZ2VFbGVtZW50IiwibW9kYWxDYXB0aW9uIiwicHJvTW9kYWxOYW1lIiwicHJvTW9kYWxXb3JrIiwibW9kYWxDYXJkVGl0bGUiLCJtb2RhbENhcmRVcmwiLCJhZGRGb3JtRWwiLCJlZGl0Rm9ybUVsIiwiZm9ybVByb2ZpbGVEZXRhaWwiLCJDYXJkU2VjdGlvbiIsIml0ZW0iLCJjYXJkRWwiLCJpbWdEYXRhIiwiQ2FyZFByZXZpZXdQb3B1cCIsIm9wZW4iLCJjYXJkRGlzcGxheSIsImFkZEl0ZW0iLCJyZW5kZXIiLCJmb3JtUHJvZmlsZU5hbWUiLCJzZXRVc2VySW5mbyIsImZvcm1Qcm9maWxlQ2FyZCIsImFkZENhcmRUb1BhZ2UiLCJzZXRFdmVudExpc3RlbmVycyIsInJlbmRlckl0ZW1zIiwiYWN0aXZlVXNlciIsImdldFVzZXJJbmZvIiwiYWRkRm9ybVZhbGlkYXRvciIsImVuYWJsZVZhbGlkYXRpb24iLCJlZGl0Rm9ybVZhbGlkYXRvciJdLCJzb3VyY2VSb290IjoiIn0=