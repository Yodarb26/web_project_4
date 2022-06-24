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

var Card = /*#__PURE__*/_createClass(function Card(data, template) {
  var _this = this;

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

  this._data = data.data;
  this._title = data.data.title;
  this._url = data.data.url;
  this._element = null;
  this._handleCardPreview = data.handleCardPreview;
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
        _this2._allInputEl[inputEl.name] = inputEl.value;
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
}();



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

};
var addCardBtn = document.querySelector(".profile__plus-button");
var editFormBtn = document.querySelector(".profile__edit-button");
var closeCardButton = document.querySelector("#close-card-popup");
var closeImagePreviewButton = document.querySelector("#close-image-popup");
var closeProfileButton = document.querySelector("#close-profile-popup");
var proTitle = document.querySelector(".profile__title");
var proSubTitle = document.querySelector(".profile__subtitle");
var imagePopup = document.querySelector("#image-popup");
var modalImageElement = imagePopup.querySelector(".modal__popup-image");
var modalCaption = imagePopup.querySelector(".modal__popup-caption");
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
  data: _utils_constants__WEBPACK_IMPORTED_MODULE_7__.initialCards,
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

var formProfileCard = new _components_PopupWithForm__WEBPACK_IMPORTED_MODULE_4__["default"]({
  formSubmit: function formSubmit(data, cardTemplate) {
    var cardEl = new _components_Card__WEBPACK_IMPORTED_MODULE_1__["default"]({
      data: data,
      handleCardPreview: function handleCardPreview(imgData) {
        CardPreviewPopup.open(imgData);
      }
    }, cardDisplay);
    CardSection.addItem(cardEl.render(data, cardTemplate)); // CardSection.addCardToPage(cardEl.render(data, cardTemplate));
  }
}, "#add-card-popup");
formProfileName.setEventListeners();
formProfileCard.setEventListeners();
CardPreviewPopup.setEventListeners();
CardSection.renderItems(_utils_constants__WEBPACK_IMPORTED_MODULE_7__.initialCards); //add card button

_utils_constants__WEBPACK_IMPORTED_MODULE_7__.addCardBtn.addEventListener('click', function () {
  _utils_constants__WEBPACK_IMPORTED_MODULE_7__.modalCardTitle.value = _utils_constants__WEBPACK_IMPORTED_MODULE_7__.modalImageElement.textContent;
  _utils_constants__WEBPACK_IMPORTED_MODULE_7__.modalCardUrl.value = _utils_constants__WEBPACK_IMPORTED_MODULE_7__.modalCaption.src;
  formProfileCard.open();
  addFormValidator.resetForm();
}); ///profile edit button

_utils_constants__WEBPACK_IMPORTED_MODULE_7__.editFormBtn.addEventListener('click', function () {
  formProfileName.open();
  var activeUser = formProfileDetail.getUserInfo();
  _utils_constants__WEBPACK_IMPORTED_MODULE_7__.proModalName.value = activeUser.userProfileName;
  _utils_constants__WEBPACK_IMPORTED_MODULE_7__.proModalWork.value = activeUser.userProfileDetail;
  editFormValidator.resetForm();
});
var addFormValidator = new _components_FormValidator__WEBPACK_IMPORTED_MODULE_2__["default"](_utils_constants__WEBPACK_IMPORTED_MODULE_7__.formValidatorConfig, _utils_constants__WEBPACK_IMPORTED_MODULE_7__.addFormEl);
addFormValidator.enableValidation();
var editFormValidator = new _components_FormValidator__WEBPACK_IMPORTED_MODULE_2__["default"](_utils_constants__WEBPACK_IMPORTED_MODULE_7__.formValidatorConfig, _utils_constants__WEBPACK_IMPORTED_MODULE_7__.editFormEl);
editFormValidator.enableValidation();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBb0JMLE1BQU0sQ0FBQ00sTUFBUCxDQUFjdkksSUFBZCxFQUFvQjRHLFlBQXBCLENBQXBCLEVBTHdDLENBTXRDO0VBQ0c7QUFScUMsQ0FBbEIsRUFTcEIsaUJBVG9CLENBQXhCO0FBV0E0QixlQUFlLENBQUNHLGlCQUFoQjtBQUNBRCxlQUFlLENBQUNDLGlCQUFoQjtBQUNBUixnQkFBZ0IsQ0FBQ1EsaUJBQWpCO0FBQ0FaLFdBQVcsQ0FBQ2EsV0FBWixDQUF3QnBDLDBEQUF4QixHQUVBOztBQUNBTSx5RUFBQSxDQUE0QixPQUE1QixFQUFxQyxZQUFNO0VBQ3pDWSxrRUFBQSxHQUF1QkosMkVBQXZCO0VBQ0FLLGdFQUFBLEdBQXFCSiw4REFBckI7RUFDQW1CLGVBQWUsQ0FBQ04sSUFBaEI7RUFDQVMsZ0JBQWdCLENBQUNDLFNBQWpCO0FBQ0QsQ0FMRCxHQU9BOztBQUNBL0IsMEVBQUEsQ0FBNkIsT0FBN0IsRUFBc0MsWUFBTTtFQUMxQ3lCLGVBQWUsQ0FBQ0osSUFBaEI7RUFDQSxJQUFNVyxVQUFVLEdBQUdqQixpQkFBaUIsQ0FBQ2tCLFdBQWxCLEVBQW5CO0VBQ0F4QixnRUFBQSxHQUFxQnVCLFVBQVUsQ0FBQ3pDLGVBQWhDO0VBQ0FtQixnRUFBQSxHQUFxQnNCLFVBQVUsQ0FBQ3hDLGlCQUFoQztFQUNBMEMsaUJBQWlCLENBQUNILFNBQWxCO0FBQ0UsQ0FOSjtBQVFFLElBQU1ELGdCQUFnQixHQUFHLElBQUk5RyxpRUFBSixDQUFrQjBFLGlFQUFsQixFQUF1Q21CLHVEQUF2QyxDQUF6QjtBQUNBaUIsZ0JBQWdCLENBQUNLLGdCQUFqQjtBQUNBLElBQU1ELGlCQUFpQixHQUFHLElBQUlsSCxpRUFBSixDQUFrQjBFLGlFQUFsQixFQUF1Q29CLHdEQUF2QyxDQUExQjtBQUNBb0IsaUJBQWlCLENBQUNDLGdCQUFsQixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3ByaW50LTgvLi9zcmMvY29tcG9uZW50cy9DYXJkLmpzIiwid2VicGFjazovL3NwcmludC04Ly4vc3JjL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly9zcHJpbnQtOC8uL3NyYy9jb21wb25lbnRzL1BvcHVwLmpzIiwid2VicGFjazovL3NwcmludC04Ly4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybS5qcyIsIndlYnBhY2s6Ly9zcHJpbnQtOC8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlcy5qcyIsIndlYnBhY2s6Ly9zcHJpbnQtOC8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vc3ByaW50LTgvLi9zcmMvY29tcG9uZW50cy9Vc2VySW5mby5qcyIsIndlYnBhY2s6Ly9zcHJpbnQtOC8uL3NyYy91dGlscy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vc3ByaW50LTgvLi9zcmMvcGFnZXMvaW5kZXguY3NzIiwid2VicGFjazovL3NwcmludC04L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NwcmludC04L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zcHJpbnQtOC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NwcmludC04L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc3ByaW50LTgvLi9zcmMvcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmQge1xuICBjb25zdHJ1Y3RvcihkYXRhLHRlbXBsYXRlKSB7XG4gICAgdGhpcy5fZGF0YSA9IGRhdGEuZGF0YTtcbiAgICB0aGlzLl90aXRsZSA9IGRhdGEuZGF0YS50aXRsZTtcbiAgICB0aGlzLl91cmwgPSBkYXRhLmRhdGEudXJsO1xuICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsO1xuICAgIHRoaXMuX2hhbmRsZUNhcmRQcmV2aWV3ID0gZGF0YS5oYW5kbGVDYXJkUHJldmlldztcbiAgICB0aGlzLl90ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICB9XG5cbiAgLy8gQ2FyZCB0ZW1wbGF0ZVxuICBfZ2V0RWxlbWVudCA9ICgpID0+IHtcblxuICAgICByZXR1cm4gdGhpcy5fdGVtcGxhdGUuY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRzLWdyaWRfX2NhcmRcIikuY2xvbmVOb2RlKHRydWUpO1xuICB9XG5cbiAgLy9DYXJkIGxpa2UgaGFuZGxlci90b2dnbGVyXG4gIF9oYW5kbGVMaWtlSWNvbiA9ICgpID0+IHtcbiAgICB0aGlzLl9jYXJkTGlrZUJ1dHRvbi5jbGFzc0xpc3RcbiAgICAudG9nZ2xlKFwiZWxlbWVudHMtZ3JpZF9faWNvbi1hY3RpdmVcIik7XG4gIH07XG5cbiAgLy9DYXJkIHJlbW92YWwgaGFuZGxlclxuICBfaGFuZGxlRGVsZXRlQ2FyZCA9ICgpID0+IHtcbiAgICB0aGlzLl9lbGVtZW50LnJlbW92ZSgpO1xuICAgIHRoaXMuZWxlbWVudCA9IG51bGw7XG4gIH07XG5cbiAgLy9FdmVudCBsaXN0ZW5lcnNcbiAgX3NldEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgIHRoaXMuX2NhcmRMaWtlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZ0KSA9PiB7IC8vY2FyZCBsaWtlIGV2ZW50IGxpc3RlbmVyXG4gICAgICB0aGlzLl9oYW5kbGVMaWtlSWNvbihldnQpO1xuICAgIH0pO1xuICAgIHRoaXMuX2RlbGV0ZUNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldnQpID0+IHsgLy9jYXJkIGRlbGV0ZSBldmVudCBsaXN0ZW5lclxuICAgICAgdGhpcy5faGFuZGxlRGVsZXRlQ2FyZChldnQpO1xuICAgIH0pO1xuICAgIHRoaXMuX2ltYWdlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2dCkgPT4geyAvL2NhcmQgcHJldmlldyBldmVudCBsaXN0ZW5lclxuICAgICAgdGhpcy5faGFuZGxlQ2FyZFByZXZpZXcoe3VybDp0aGlzLl9kYXRhLnVybCwgdGl0bGU6IHRoaXMuX2RhdGEudGl0bGV9KTtcbiAgICB9KTtcbiAgfTtcblxuICAvL1RlbXBsYXRlIGRpc3BsYXlpbmdcbiAgcmVuZGVyID0gKCkgPT4ge1xuICAgIHRoaXMuX2VsZW1lbnQgPSB0aGlzLl9nZXRFbGVtZW50KCk7XG4gICAgdGhpcy5faW1hZ2VFbGVtZW50ID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRzLWdyaWRfX2ltYWdlXCIpO1xuICAgIHRoaXMuX3RpdGxlRWxlbWVudCA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbGVtZW50cy1ncmlkX190ZXh0XCIpO1xuICAgIHRoaXMuX2RlbGV0ZUNhcmQgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWxlbWVudHMtZ3JpZF9fZGVsZXRlLWJ1dHRvblwiKTtcbiAgICB0aGlzLl9jYXJkTGlrZUJ1dHRvbiA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbGVtZW50cy1ncmlkX19pY29uXCIpO1xuICAgIHRoaXMuX2ltYWdlRWxlbWVudC5zcmMgPSB0aGlzLl91cmw7XG4gICAgdGhpcy5faW1hZ2VFbGVtZW50LmFsdCA9IHRoaXMuX3VybDtcbiAgICB0aGlzLl90aXRsZUVsZW1lbnQudGV4dENvbnRlbnQgPSB0aGlzLl90aXRsZTtcbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycygpO1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50O1xuICB9O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybVZhbGlkYXRvciB7XG4gIGNvbnN0cnVjdG9yKHNldHRpbmdzLCBmb3JtRWwpIHtcbiAgICB0aGlzLl9pbnB1dFNlbGVjdG9yID0gc2V0dGluZ3MuaW5wdXRTZWxlY3RvcjtcbiAgICB0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3RvciA9IHNldHRpbmdzLnN1Ym1pdEJ1dHRvblNlbGVjdG9yO1xuICAgIHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MgPSBzZXR0aW5ncy5pbmFjdGl2ZUJ1dHRvbkNsYXNzO1xuICAgIHRoaXMuX2lucHV0RXJyb3JDbGFzcyA9IHNldHRpbmdzLmlucHV0RXJyb3JDbGFzcztcbiAgICB0aGlzLl9lcnJvckNsYXNzID0gc2V0dGluZ3MuZXJyb3JDbGFzcztcbiAgICB0aGlzLl9mb3JtRWwgPSBmb3JtRWw7XG4gIH1cblxuICBfaXNJbnZhbGlkSW5wdXQoaW5wdXRFbCkge1xuICAgIHJldHVybiAhaW5wdXRFbC52YWxpZGl0eS52YWxpZDtcbiAgfVxuXG4gIF9zaG93RXJyb3IoaW5wdXRFbCkge1xuICAgIGNvbnN0IGVycm9yRWwgPSB0aGlzLl9mb3JtRWwucXVlcnlTZWxlY3RvcihgIyR7aW5wdXRFbC5pZH1gKTtcbiAgICBlcnJvckVsLmNsYXNzTGlzdC5hZGQodGhpcy5fZXJyb3JDbGFzcyk7XG4gICAgZXJyb3JFbC50ZXh0Q29udGVudCA9IGlucHV0RWwudmFsaWRhdGlvbk1lc3NhZ2U7XG4gICAgaW5wdXRFbC5jbGFzc0xpc3QuYWRkKHRoaXMuX2lucHV0RXJyb3JDbGFzcyk7XG4gIH1cblxuICBfaGlkZUVycm9yKGlucHV0RWwpIHtcbiAgICBjb25zdCBlcnJvckVsID0gdGhpcy5fZm9ybUVsLnF1ZXJ5U2VsZWN0b3IoYCMke2lucHV0RWwuaWR9YCk7XG4gICAgZXJyb3JFbC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2Vycm9yQ2xhc3MpO1xuICAgIGVycm9yRWwudGV4dENvbnRlbnQgPSAnICc7XG4gICAgaW5wdXRFbC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2lucHV0RXJyb3JDbGFzcyk7XG4gIH1cblxuICBfdG9nZ2xlQnV0dG9uKCkge1xuICAgIGlmICh0aGlzLl9pbnB1dExpc3Quc29tZSh0aGlzLl9pc0ludmFsaWRJbnB1dCkpIHtcbiAgICAgIHRoaXMuX2J1dHRvbkVsLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuX2J1dHRvbkVsLmNsYXNzTGlzdFxuICAgICAgLmFkZCh0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fYnV0dG9uRWwuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2J1dHRvbkVsLmNsYXNzTGlzdFxuICAgICAgLnJlbW92ZSh0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcbiAgICB9XG4gIH1cblxuICBfY2hlY2tJbnB1dFZhbGlkaXR5KGlucHV0RWwpIHtcbiAgICBjb25zdCBlcnJvckVsID0gdGhpcy5fZm9ybUVsLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgIyR7aW5wdXRFbC5pZH0tZXJyb3JgKTtcbiAgICBpZiAodGhpcy5faXNJbnZhbGlkSW5wdXQoaW5wdXRFbCkpIHtcbiAgICAgIHRoaXMuX3Nob3dFcnJvcihlcnJvckVsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5faGlkZUVycm9yKGVycm9yRWwpO1xuICAgIH1cbiAgfVxuXG4gIF9zZXRFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLl9pbnB1dExpc3QgPSBBcnJheS5mcm9tKHRoaXMuX2Zvcm1FbC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX2lucHV0U2VsZWN0b3IpKTtcbiAgICB0aGlzLl9idXR0b25FbCA9IHRoaXMuX2Zvcm1FbC5xdWVyeVNlbGVjdG9yKHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yKTtcblxuICAgIHRoaXMuX2lucHV0TGlzdC5mb3JFYWNoKChpbnB1dEVsKSA9PiB7XG4gICAgICBpbnB1dEVsLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2NoZWNrSW5wdXRWYWxpZGl0eShpbnB1dEVsKTtcbiAgICAgICAgdGhpcy5fdG9nZ2xlQnV0dG9uKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlc2V0Rm9ybSgpIHtcbiAgICB0aGlzLl9mb3JtRWwucmVzZXQoKTtcbiAgICB0aGlzLl90b2dnbGVCdXR0b24oKTtcbiAgfVxuXG4gIGVuYWJsZVZhbGlkYXRpb24oKSB7XG4gICAgdGhpcy5fZm9ybUVsLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycygpO1xuICB9XG59O1xuXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cCB7XG4gICAgY29uc3RydWN0b3IocG9wdXBTZWxlY3Rvcil7XG4gICAgICAgIHRoaXMuX3BvcHVwRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocG9wdXBTZWxlY3Rvcik7XG4gICAgICAgIHRoaXMuX2hhbmRsZUVzY1VwID0gdGhpcy5faGFuZGxlRXNjVXAuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBfaGFuZGxlRXNjVXAoZXZ0KSB7XG4gICAgICBpZiAoZXZ0LmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgdGhpcy5fcG9wdXBFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZ0KSA9PiB7XG4gICAgICAgIGlmKFxuICAgICAgICAgIGV2dC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibW9kYWxfX3BvcHVwLWJ0blwiKSB8fCAgZXZ0LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJtb2RhbF9fcG9wdXBcIilcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBvcGVuKCl7XG4gICAgICB0aGlzLl9wb3B1cEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm1vZGFsX29wZW5lZFwiKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuX2hhbmRsZUVzY1VwKTtcbiAgICB9XG5cbiAgICBjbG9zZSgpe1xuICAgICAgdGhpcy5fcG9wdXBFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJtb2RhbF9vcGVuZWRcIik7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9oYW5kbGVFc2NVcCk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBXaXRoRm9ybSBleHRlbmRzIFBvcHVwIHtcbiAgY29uc3RydWN0b3Ioe2Zvcm1TdWJtaXR9LCBwb3B1cFNlbGVjdG9yKXtcbiAgICBzdXBlcihwb3B1cFNlbGVjdG9yKTtcbiAgICB0aGlzLl9mb3JtU3VibWl0ID0gZm9ybVN1Ym1pdDtcbiAgICB0aGlzLl9mb3JtRWwgPSB0aGlzLl9wb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLW5hbWVcIik7IC8vLnBvcHVwX19mb3JtXG4gIH1cblxuICAvL3ByaXZhdGUgbWV0aG9kXG4gIF9nZXRJbnB1dFZhbHVlcygpe1xuICAgIHRoaXMuX2FsbElucHV0RmllbGRzID0gdGhpcy5fcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZm9ybS1uYW1lX19pbnB1dFwiKTtcbiAgICB0aGlzLl9hbGxJbnB1dEVsID0ge307XG4gICAgdGhpcy5fYWxsSW5wdXRGaWVsZHMuZm9yRWFjaCgoaW5wdXRFbCkgPT4ge1xuICAgICAgICAgIHRoaXMuX2FsbElucHV0RWxbaW5wdXRFbC5uYW1lXSA9IGlucHV0RWwudmFsdWU7XG4gIH0pO1xuICAgIHJldHVybiB0aGlzLl9hbGxJbnB1dEVsO1xuICB9XG5cbiAgLy9wdWJsaWMgbWV0aG9kXG4gIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHRoaXMuX2Zvcm1FbC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldnQpID0+IHtcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLl9mb3JtU3VibWl0KHRoaXMuX2dldElucHV0VmFsdWVzKCkpO1xuICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9KTtcbiAgICBzdXBlci5zZXRFdmVudExpc3RlbmVycygpO1xuICB9O1xuXG4gIC8vcHVibGljIG1ldGhvZFxuICBjbG9zZSgpe1xuICAgIHRoaXMuX2Zvcm1FbC5yZXNldCgpO1xuICAgIHN1cGVyLmNsb3NlKCk7XG4gIH07XG59O1xuXG4iLCJpbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBXaXRoSW1hZ2VzIGV4dGVuZHMgUG9wdXAge1xuICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yKSB7XG4gICAgc3VwZXIocG9wdXBTZWxlY3Rvcik7XG4gICAgdGhpcy5fbW9kYWxJbWFnZUVsZW1lbnQgPSB0aGlzLl9wb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fcG9wdXAtaW1hZ2VcIik7XG4gICAgdGhpcy5fbW9kYWxDYXB0aW9uID0gdGhpcy5fcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX3BvcHVwLWNhcHRpb25cIik7XG4gfVxuXG5cbm9wZW4oZGF0YSkge1xuICB0aGlzLl9tb2RhbEltYWdlRWxlbWVudC5zcmMgPSBkYXRhLnVybDtcbiAgdGhpcy5fbW9kYWxJbWFnZUVsZW1lbnQuYWx0ID1gaW1hZ2Ugb2Yke2RhdGEudXJsfWA7XG4gIHRoaXMuX21vZGFsQ2FwdGlvbi50ZXh0Q29udGVudCA9IGRhdGEudGl0bGU7XG4gIHN1cGVyLm9wZW4oKTtcbiB9XG59XG5cblxuIiwiLy8gaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlY3Rpb24ge1xuICAgIGNvbnN0cnVjdG9yKHtpdGVtcywgcmVuZGVyZXJ9LCBjb250YWluZXJTZWxlY3Rvcil7XG4gICAgICB0aGlzLl9pdGVtcyA9IGl0ZW1zO1xuICAgICAgdGhpcy5fcmVuZGVyZXIgPSByZW5kZXJlcjtcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAke2NvbnRhaW5lclNlbGVjdG9yfWApO1xuICB9XG5cbiAgcmVuZGVySXRlbXMoZWxlbWVudCkge1xuICAgIGVsZW1lbnQuZm9yRWFjaCgoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5fcmVuZGVyZXIoZGF0YSk7XG4gICAgfSk7XG4gIH1cblxuICBhZGRJdGVtKGVsZW1lbnQpIHtcbiAgICB0aGlzLl9lbGVtZW50LnByZXBlbmQoZWxlbWVudCk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VySW5mbyB7XG4gIGNvbnN0cnVjdG9yKHt1c2VyTmFtZSwgdXNlckRldGFpbH0pIHtcbiAgICB0aGlzLl91c2VyTmFtZSA9IHVzZXJOYW1lO1xuICAgIHRoaXMuX3VzZXJEZXRhaWwgPSB1c2VyRGV0YWlsO1xuICB9O1xuXG4gIGdldFVzZXJJbmZvKCkge1xuICAgIHJldHVybiB7XG4gICAgICB1c2VyUHJvZmlsZU5hbWU6IHRoaXMuX3VzZXJOYW1lLnRleHRDb250ZW50LFxuICAgICAgdXNlclByb2ZpbGVEZXRhaWw6IHRoaXMuX3VzZXJEZXRhaWwudGV4dENvbnRlbnRcbiAgICB9O1xuICB9XG5cbiAgc2V0VXNlckluZm8oIHVzZXJOYW1lLCB1c2VyRGV0YWlsKSB7XG4gICAgdGhpcy5fdXNlck5hbWUudGV4dENvbnRlbnQgPSB1c2VyTmFtZTtcbiAgICB0aGlzLl91c2VyRGV0YWlsLnRleHRDb250ZW50ID0gdXNlckRldGFpbDtcbiAgfVxufSIsIlxuZXhwb3J0IGNvbnN0IGluaXRpYWxDYXJkcyA9IFtcbiAge1xuICAgIC8vTkFNRVxuICAgIHRpdGxlOiBcIkxha2UgJiBNb3VudGFpblwiLFxuICAgIC8vTElOS1xuICAgIHVybDogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTYzODgwMjQyMjYzMy02OTQwODg2ODAzNTk/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTY4NyZxPTgwXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJMYWtlIExvdWlzZVwiLFxuICAgIHVybDogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS9sYWtlLWxvdWlzZS5qcGdcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkJhbGQgTW91bnRhaW5zXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL2JhbGQtbW91bnRhaW5zLmpwZ1wiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiTGF0ZW1hclwiLFxuICAgIHVybDogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS9sYXRlbWFyLmpwZ1wiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiVmFub2lzZSBOYXRpb25hbCBQYXJrXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL3Zhbm9pc2UuanBnXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJMYWdvIGRpIGJyYWllc1wiLFxuICAgIHVybDogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS9sYWdvLmpwZ1wiLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IGZvcm1WYWxpZGF0b3JDb25maWcgPSB7XG4gIGlucHV0U2VsZWN0b3I6IFwiLmZvcm0tbmFtZV9faW5wdXRcIixcbiAgc3VibWl0QnV0dG9uU2VsZWN0b3I6IFwiLmZvcm0tbmFtZV9fc2F2ZS1idXR0b25cIixcbiAgaW5hY3RpdmVCdXR0b25DbGFzczogXCJmb3JtLW5hbWVfX3NhdmUtYnV0dG9uX2Rpc2FibGVkXCIsXG4gIGlucHV0RXJyb3JDbGFzczogXCJmb3JtLW5hbWVfX21vZGFsLXR5cGVfZXJyb3JcIixcbiAgZXJyb3JDbGFzczogXCJtb2RhbF9fcG9wdXBfX2Vycm9yX3Zpc2libGVcIixcbn07XG5cbmV4cG9ydCBjb25zdCBzZWxlY3RvcnMgPSB7XG4gIGNhcmRTZWN0aW9uOiBcIi5lbGVtZW50cy1ncmlkX19jYXJkc1wiLCAvL2NhcmQgbGlzdFxuICBjYXJkVGVtcGxhdGU6IFwiI2NhcmQtdGVtcGxhdGVcIiwvL2NhcmQgdGVtcGxhdGVcbiAgcHJldmlld1BvcHVwOiBcIiNpbWFnZS1wb3B1cFwiLC8vIGNhcmQgaW1hZ2UgcG9wdXAgcHJldmlld1xufVxuXG5leHBvcnQgY29uc3QgYWRkQ2FyZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fcGx1cy1idXR0b25cIik7XG5leHBvcnQgY29uc3QgZWRpdEZvcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2VkaXQtYnV0dG9uXCIpO1xuZXhwb3J0IGNvbnN0IGNsb3NlQ2FyZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvc2UtY2FyZC1wb3B1cFwiKTtcbmV4cG9ydCBjb25zdCBjbG9zZUltYWdlUHJldmlld0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvc2UtaW1hZ2UtcG9wdXBcIik7XG5leHBvcnQgY29uc3QgY2xvc2VQcm9maWxlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbG9zZS1wcm9maWxlLXBvcHVwXCIpO1xuXG5leHBvcnQgY29uc3QgcHJvVGl0bGUgPSAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX190aXRsZVwiKTtcbmV4cG9ydCBjb25zdCBwcm9TdWJUaXRsZSA9ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX3N1YnRpdGxlXCIpO1xuXG5leHBvcnQgY29uc3QgaW1hZ2VQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW1hZ2UtcG9wdXBcIik7XG5leHBvcnQgY29uc3QgbW9kYWxJbWFnZUVsZW1lbnQgPSBpbWFnZVBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX3BvcHVwLWltYWdlXCIpO1xuZXhwb3J0IGNvbnN0IG1vZGFsQ2FwdGlvbiA9IGltYWdlUG9wdXAucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fcG9wdXAtY2FwdGlvblwiKTtcblxuZXhwb3J0IGNvbnN0IHByb01vZGFsTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbGlzdC10aXRsZVwiKTtcbmV4cG9ydCBjb25zdCBwcm9Nb2RhbFdvcmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xpc3Qtc3VidGl0bGVcIik7XG5cbmV4cG9ydCBjb25zdCBtb2RhbENhcmRUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FyZC10aXRsZVwiKTtcbmV4cG9ydCBjb25zdCBtb2RhbENhcmRVcmwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhcmQtdXJsXCIpO1xuXG5leHBvcnQgY29uc3QgYWRkRm9ybUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtY2FyZC1wb3B1cFwiKTtcbmV4cG9ydCBjb25zdCBlZGl0Rm9ybUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0LXByb2ZpbGUtcG9wdXBcIik7XG5cblxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vaW5kZXguY3NzJztcblxuLy9pbXBvcnQgYWxsIGNsYXNzZXNcbmltcG9ydCBDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmRcIjtcbmltcG9ydCBGb3JtVmFsaWRhdG9yIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3JcIjtcbmltcG9ydCBQb3B1cFdpdGhJbWFnZXMgZnJvbSAnLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhJbWFnZXMnO1xuaW1wb3J0IFBvcHVwV2l0aEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtJztcbmltcG9ydCBTZWN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL1NlY3Rpb25cIjtcbmltcG9ydCBVc2VySW5mbyBmcm9tICcuLi9jb21wb25lbnRzL1VzZXJJbmZvJztcbmltcG9ydCB7XG4gIGluaXRpYWxDYXJkcyxcbiAgZm9ybVZhbGlkYXRvckNvbmZpZyxcbiAgc2VsZWN0b3JzLFxuICBhZGRDYXJkQnRuLFxuICBlZGl0Rm9ybUJ0bixcbiAgcHJvVGl0bGUsXG4gIHByb1N1YlRpdGxlLFxuICBwcm9Nb2RhbFdvcmssXG4gIHByb01vZGFsTmFtZSxcbiAgYWRkRm9ybUVsLFxuICBlZGl0Rm9ybUVsLFxuICBtb2RhbENhcmRUaXRsZSxcbiAgbW9kYWxDYXJkVXJsLFxuICBtb2RhbEltYWdlRWxlbWVudCxcbiAgbW9kYWxDYXB0aW9uLFxufSBmcm9tIFwiLi4vdXRpbHMvY29uc3RhbnRzXCI7XG5cblxuY29uc3QgZm9ybVByb2ZpbGVEZXRhaWwgPSBuZXcgVXNlckluZm8oe1xuICB1c2VyTmFtZTogcHJvVGl0bGUsXG4gIHVzZXJEZXRhaWw6IHByb1N1YlRpdGxlLFxufSk7XG5cbmNvbnN0IENhcmRTZWN0aW9uID0gIG5ldyBTZWN0aW9uICh7XG4gIGRhdGE6IGluaXRpYWxDYXJkcyxcbiAgcmVuZGVyZXI6IChpdGVtKSA9PiB7XG4gICAgY29uc3QgY2FyZEVsID0gbmV3IENhcmQoeyBkYXRhOml0ZW0sIGhhbmRsZUNhcmRQcmV2aWV3OiAoaW1nRGF0YSkgPT4ge1xuICAgICAgICAgIENhcmRQcmV2aWV3UG9wdXAub3BlbihpbWdEYXRhKTtcbiAgICB9XG4gIH0sIGNhcmREaXNwbGF5KTtcbiAgICBDYXJkU2VjdGlvbi5hZGRJdGVtKGNhcmRFbC5yZW5kZXIoKSk7XG4gIH0sXG59LFxuICBzZWxlY3RvcnMuY2FyZFNlY3Rpb24sXG4pO1xuXG5jb25zdCBDYXJkUHJldmlld1BvcHVwID0gbmV3IFBvcHVwV2l0aEltYWdlcyhzZWxlY3RvcnMucHJldmlld1BvcHVwKTtcbmNvbnN0IGNhcmREaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcnMuY2FyZFRlbXBsYXRlKTtcblxuLy9Qcm9maWxlIG1vZGFsXG5jb25zdCBmb3JtUHJvZmlsZU5hbWUgPSBuZXcgUG9wdXBXaXRoRm9ybSh7XG4gIGZvcm1TdWJtaXQ6ICh7dXNlck5hbWUsIHVzZXJEZXRhaWx9KSA9PiB7XG4gICAgZm9ybVByb2ZpbGVEZXRhaWwuc2V0VXNlckluZm8odXNlck5hbWUsIHVzZXJEZXRhaWwpO1xuICB9XG59LCAgXCIjZWRpdC1wcm9maWxlLXBvcHVwXCIpO1xuXG4vL0NhcmQgbW9kYWxcbmNvbnN0IGZvcm1Qcm9maWxlQ2FyZCA9IG5ldyBQb3B1cFdpdGhGb3JtKHtcbiAgICBmb3JtU3VibWl0OiAoZGF0YSwgY2FyZFRlbXBsYXRlKSA9PiB7XG4gIGNvbnN0IGNhcmRFbCA9IG5ldyBDYXJkKHtkYXRhOmRhdGEsIGhhbmRsZUNhcmRQcmV2aWV3OiAoaW1nRGF0YSkgPT4ge1xuICAgIENhcmRQcmV2aWV3UG9wdXAub3BlbihpbWdEYXRhKTtcbiAgICAgICAgfVxufSwgY2FyZERpc3BsYXkpO1xuQ2FyZFNlY3Rpb24uYWRkSXRlbShjYXJkRWwucmVuZGVyKGRhdGEsIGNhcmRUZW1wbGF0ZSkpO1xuICAvLyBDYXJkU2VjdGlvbi5hZGRDYXJkVG9QYWdlKGNhcmRFbC5yZW5kZXIoZGF0YSwgY2FyZFRlbXBsYXRlKSk7XG4gICAgfSxcbn0sICBcIiNhZGQtY2FyZC1wb3B1cFwiKTtcblxuZm9ybVByb2ZpbGVOYW1lLnNldEV2ZW50TGlzdGVuZXJzKCk7XG5mb3JtUHJvZmlsZUNhcmQuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbkNhcmRQcmV2aWV3UG9wdXAuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbkNhcmRTZWN0aW9uLnJlbmRlckl0ZW1zKGluaXRpYWxDYXJkcyk7XG5cbi8vYWRkIGNhcmQgYnV0dG9uXG5hZGRDYXJkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBtb2RhbENhcmRUaXRsZS52YWx1ZSA9IG1vZGFsSW1hZ2VFbGVtZW50LnRleHRDb250ZW50O1xuICBtb2RhbENhcmRVcmwudmFsdWUgPSBtb2RhbENhcHRpb24uc3JjO1xuICBmb3JtUHJvZmlsZUNhcmQub3BlbigpO1xuICBhZGRGb3JtVmFsaWRhdG9yLnJlc2V0Rm9ybSgpO1xufSk7XG5cbi8vL3Byb2ZpbGUgZWRpdCBidXR0b25cbmVkaXRGb3JtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBmb3JtUHJvZmlsZU5hbWUub3BlbigpO1xuICBjb25zdCBhY3RpdmVVc2VyID0gZm9ybVByb2ZpbGVEZXRhaWwuZ2V0VXNlckluZm8oKTtcbiAgcHJvTW9kYWxOYW1lLnZhbHVlID0gYWN0aXZlVXNlci51c2VyUHJvZmlsZU5hbWU7XG4gIHByb01vZGFsV29yay52YWx1ZSA9IGFjdGl2ZVVzZXIudXNlclByb2ZpbGVEZXRhaWw7XG4gIGVkaXRGb3JtVmFsaWRhdG9yLnJlc2V0Rm9ybSgpO1xuICAgfSk7XG5cbiAgY29uc3QgYWRkRm9ybVZhbGlkYXRvciA9IG5ldyBGb3JtVmFsaWRhdG9yKGZvcm1WYWxpZGF0b3JDb25maWcsIGFkZEZvcm1FbCk7XG4gIGFkZEZvcm1WYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xuICBjb25zdCBlZGl0Rm9ybVZhbGlkYXRvciA9IG5ldyBGb3JtVmFsaWRhdG9yKGZvcm1WYWxpZGF0b3JDb25maWcsIGVkaXRGb3JtRWwpO1xuICBlZGl0Rm9ybVZhbGlkYXRvci5lbmFibGVWYWxpZGF0aW9uKCk7XG5cbiJdLCJuYW1lcyI6WyJDYXJkIiwiZGF0YSIsInRlbXBsYXRlIiwiX3RlbXBsYXRlIiwiY29udGVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbG9uZU5vZGUiLCJfY2FyZExpa2VCdXR0b24iLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJfZWxlbWVudCIsInJlbW92ZSIsImVsZW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZ0IiwiX2hhbmRsZUxpa2VJY29uIiwiX2RlbGV0ZUNhcmQiLCJfaGFuZGxlRGVsZXRlQ2FyZCIsIl9pbWFnZUVsZW1lbnQiLCJfaGFuZGxlQ2FyZFByZXZpZXciLCJ1cmwiLCJfZGF0YSIsInRpdGxlIiwiX2dldEVsZW1lbnQiLCJfdGl0bGVFbGVtZW50Iiwic3JjIiwiX3VybCIsImFsdCIsInRleHRDb250ZW50IiwiX3RpdGxlIiwiX3NldEV2ZW50TGlzdGVuZXJzIiwiaGFuZGxlQ2FyZFByZXZpZXciLCJGb3JtVmFsaWRhdG9yIiwic2V0dGluZ3MiLCJmb3JtRWwiLCJfaW5wdXRTZWxlY3RvciIsImlucHV0U2VsZWN0b3IiLCJfc3VibWl0QnV0dG9uU2VsZWN0b3IiLCJzdWJtaXRCdXR0b25TZWxlY3RvciIsIl9pbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiaW5hY3RpdmVCdXR0b25DbGFzcyIsIl9pbnB1dEVycm9yQ2xhc3MiLCJpbnB1dEVycm9yQ2xhc3MiLCJfZXJyb3JDbGFzcyIsImVycm9yQ2xhc3MiLCJfZm9ybUVsIiwiaW5wdXRFbCIsInZhbGlkaXR5IiwidmFsaWQiLCJlcnJvckVsIiwiaWQiLCJhZGQiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsIl9pbnB1dExpc3QiLCJzb21lIiwiX2lzSW52YWxpZElucHV0IiwiX2J1dHRvbkVsIiwiZGlzYWJsZWQiLCJfc2hvd0Vycm9yIiwiX2hpZGVFcnJvciIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiX2NoZWNrSW5wdXRWYWxpZGl0eSIsIl90b2dnbGVCdXR0b24iLCJyZXNldCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIlBvcHVwIiwicG9wdXBTZWxlY3RvciIsIl9wb3B1cEVsZW1lbnQiLCJkb2N1bWVudCIsIl9oYW5kbGVFc2NVcCIsImJpbmQiLCJrZXkiLCJjbG9zZSIsInRhcmdldCIsImNvbnRhaW5zIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIlBvcHVwV2l0aEZvcm0iLCJmb3JtU3VibWl0IiwiX2Zvcm1TdWJtaXQiLCJfYWxsSW5wdXRGaWVsZHMiLCJfYWxsSW5wdXRFbCIsIm5hbWUiLCJ2YWx1ZSIsIl9nZXRJbnB1dFZhbHVlcyIsIlBvcHVwV2l0aEltYWdlcyIsIl9tb2RhbEltYWdlRWxlbWVudCIsIl9tb2RhbENhcHRpb24iLCJTZWN0aW9uIiwiY29udGFpbmVyU2VsZWN0b3IiLCJpdGVtcyIsInJlbmRlcmVyIiwiX2l0ZW1zIiwiX3JlbmRlcmVyIiwicHJlcGVuZCIsIlVzZXJJbmZvIiwidXNlck5hbWUiLCJ1c2VyRGV0YWlsIiwiX3VzZXJOYW1lIiwiX3VzZXJEZXRhaWwiLCJ1c2VyUHJvZmlsZU5hbWUiLCJ1c2VyUHJvZmlsZURldGFpbCIsImluaXRpYWxDYXJkcyIsImZvcm1WYWxpZGF0b3JDb25maWciLCJzZWxlY3RvcnMiLCJjYXJkU2VjdGlvbiIsImNhcmRUZW1wbGF0ZSIsInByZXZpZXdQb3B1cCIsImFkZENhcmRCdG4iLCJlZGl0Rm9ybUJ0biIsImNsb3NlQ2FyZEJ1dHRvbiIsImNsb3NlSW1hZ2VQcmV2aWV3QnV0dG9uIiwiY2xvc2VQcm9maWxlQnV0dG9uIiwicHJvVGl0bGUiLCJwcm9TdWJUaXRsZSIsImltYWdlUG9wdXAiLCJtb2RhbEltYWdlRWxlbWVudCIsIm1vZGFsQ2FwdGlvbiIsInByb01vZGFsTmFtZSIsInByb01vZGFsV29yayIsIm1vZGFsQ2FyZFRpdGxlIiwibW9kYWxDYXJkVXJsIiwiYWRkRm9ybUVsIiwiZWRpdEZvcm1FbCIsImZvcm1Qcm9maWxlRGV0YWlsIiwiQ2FyZFNlY3Rpb24iLCJpdGVtIiwiY2FyZEVsIiwiaW1nRGF0YSIsIkNhcmRQcmV2aWV3UG9wdXAiLCJvcGVuIiwiY2FyZERpc3BsYXkiLCJhZGRJdGVtIiwicmVuZGVyIiwiZm9ybVByb2ZpbGVOYW1lIiwic2V0VXNlckluZm8iLCJmb3JtUHJvZmlsZUNhcmQiLCJzZXRFdmVudExpc3RlbmVycyIsInJlbmRlckl0ZW1zIiwiYWRkRm9ybVZhbGlkYXRvciIsInJlc2V0Rm9ybSIsImFjdGl2ZVVzZXIiLCJnZXRVc2VySW5mbyIsImVkaXRGb3JtVmFsaWRhdG9yIiwiZW5hYmxlVmFsaWRhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=