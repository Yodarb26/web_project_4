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
        url: _this._url,
        title: _this._title
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
      errorEl.textContent = " ";
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

      this._popupElement.addEventListener("mousedown", function (evt) {
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

    var handleFormSubmit = _ref.handleFormSubmit;

    _classCallCheck(this, PopupWithForm);

    _this = _super.call(this, popupSelector);
    _this._handleFormSubmit = handleFormSubmit;
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

        _this3._handleFormSubmit(_this3._getInputValues());

        _this3.close();
      });

      _get(_getPrototypeOf(PopupWithForm.prototype), "setEventListeners", this).call(this);
    } //public method

  }, {
    key: "close",
    value: function close() {
      this._formEl.reset();

      _get(_getPrototypeOf(PopupWithForm.prototype), "close", this).call(this);
    }
  }]);

  return PopupWithForm;
}(_Popup__WEBPACK_IMPORTED_MODULE_0__["default"]);



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

var Section = /*#__PURE__*/function () {
  function Section(_ref, containerSelector) {
    var renderer = _ref.renderer;

    _classCallCheck(this, Section);

    this._renderer = renderer;
    this._element = document.querySelector("".concat(containerSelector));
  }

  _createClass(Section, [{
    key: "renderItems",
    value: function renderItems(itemsArrayData) {
      var _this = this;

      itemsArrayData.forEach(function (data) {
        _this._renderer(data);
      });
    }
  }, {
    key: "addItem",
    value: function addItem(itemsArrayData) {
      this._element.prepend(itemsArrayData);
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
    var userNameSelector = _ref.userNameSelector,
        userDetailSelector = _ref.userDetailSelector;

    _classCallCheck(this, UserInfo);

    this._userName = document.querySelector(userNameSelector);
    this._userDetail = document.querySelector(userDetailSelector);
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
var proTitle = ".profile__title";
var proSubTitle = ".profile__subtitle";
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
  userNameSelector: _utils_constants__WEBPACK_IMPORTED_MODULE_7__.proTitle,
  userDetailSelector: _utils_constants__WEBPACK_IMPORTED_MODULE_7__.proSubTitle
});

function renderCard(data, cardTemplate) {
  var cardEl = new _components_Card__WEBPACK_IMPORTED_MODULE_1__["default"]({
    data: data,
    handleCardPreview: function handleCardPreview(imgData) {
      cardPreviewPopup.open(imgData);
    }
  }, cardDisplay);
  cardListSections.addItem(cardEl.render(data, cardTemplate));
}

var cardListSections = new _components_Section__WEBPACK_IMPORTED_MODULE_5__["default"]({
  renderer: function renderer(data) {
    renderCard(data);
  }
}, _utils_constants__WEBPACK_IMPORTED_MODULE_7__.selectors.cardSection);
var cardPreviewPopup = new _components_PopupWithImages__WEBPACK_IMPORTED_MODULE_3__["default"](_utils_constants__WEBPACK_IMPORTED_MODULE_7__.selectors.previewPopup);
var cardDisplay = document.querySelector(_utils_constants__WEBPACK_IMPORTED_MODULE_7__.selectors.cardTemplate); /////////////////////////////////////////////////////////////////////////Profile modal

var formProfileName = new _components_PopupWithForm__WEBPACK_IMPORTED_MODULE_4__["default"]({
  handleFormSubmit: function handleFormSubmit(_ref) {
    var userName = _ref.userName,
        userDetail = _ref.userDetail;
    formProfileDetail.setUserInfo(userName, userDetail);
  }
}, "#edit-profile-popup"); ///////////////////////////////////////////////////////////////////////////Card modal

var formProfileCard = new _components_PopupWithForm__WEBPACK_IMPORTED_MODULE_4__["default"]({
  handleFormSubmit: function handleFormSubmit(data, cardTemplate) {
    renderCard(data, cardTemplate);
  }
}, "#add-card-popup");
formProfileName.setEventListeners();
formProfileCard.setEventListeners();
cardPreviewPopup.setEventListeners();
cardListSections.renderItems(_utils_constants__WEBPACK_IMPORTED_MODULE_7__.initialCards); //add card button

_utils_constants__WEBPACK_IMPORTED_MODULE_7__.addCardBtn.addEventListener("click", function () {
  formProfileCard.open();
  addFormValidator.resetForm();
}); ///profile edit button

_utils_constants__WEBPACK_IMPORTED_MODULE_7__.editFormBtn.addEventListener("click", function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFqQjtBQUNELENBSEQsR0FLQTs7QUFDQS9CLDBFQUFBLENBQTZCLE9BQTdCLEVBQXNDLFlBQU07RUFDMUN5QixlQUFlLENBQUNMLElBQWhCO0VBQ0EsSUFBTVksVUFBVSxHQUFHakIsaUJBQWlCLENBQUNrQixXQUFsQixFQUFuQjtFQUNBeEIsZ0VBQUEsR0FBcUJ1QixVQUFVLENBQUMzQyxlQUFoQztFQUNBcUIsZ0VBQUEsR0FBcUJzQixVQUFVLENBQUMxQyxpQkFBaEM7RUFDQTRDLGlCQUFpQixDQUFDSCxTQUFsQjtBQUNELENBTkQ7QUFRQSxJQUFNRCxnQkFBZ0IsR0FBRyxJQUFJL0csaUVBQUosQ0FBa0IyRSxpRUFBbEIsRUFBdUNtQix1REFBdkMsQ0FBekI7QUFDQWlCLGdCQUFnQixDQUFDSyxnQkFBakI7QUFDQSxJQUFNRCxpQkFBaUIsR0FBRyxJQUFJbkgsaUVBQUosQ0FBa0IyRSxpRUFBbEIsRUFBdUNvQix3REFBdkMsQ0FBMUI7QUFDQW9CLGlCQUFpQixDQUFDQyxnQkFBbEIsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3NwcmludC04Ly4vc3JjL2NvbXBvbmVudHMvQ2FyZC5qcyIsIndlYnBhY2s6Ly9zcHJpbnQtOC8uL3NyYy9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vc3ByaW50LTgvLi9zcmMvY29tcG9uZW50cy9Qb3B1cC5qcyIsIndlYnBhY2s6Ly9zcHJpbnQtOC8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm0uanMiLCJ3ZWJwYWNrOi8vc3ByaW50LTgvLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhJbWFnZXMuanMiLCJ3ZWJwYWNrOi8vc3ByaW50LTgvLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uLmpzIiwid2VicGFjazovL3NwcmludC04Ly4vc3JjL2NvbXBvbmVudHMvVXNlckluZm8uanMiLCJ3ZWJwYWNrOi8vc3ByaW50LTgvLi9zcmMvdXRpbHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL3NwcmludC04Ly4vc3JjL3BhZ2VzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9zcHJpbnQtOC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zcHJpbnQtOC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc3ByaW50LTgvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zcHJpbnQtOC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3NwcmludC04Ly4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCB7XG4gICAgY29uc3RydWN0b3IoZGF0YSwgdGVtcGxhdGUpIHtcbiAgICAgIHRoaXMuX3RpdGxlID0gZGF0YS5kYXRhLnRpdGxlO1xuICAgICAgdGhpcy5fdXJsID0gZGF0YS5kYXRhLnVybDtcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsO1xuICAgICAgdGhpcy5faGFuZGxlQ2FyZFByZXZpZXcgPSBkYXRhLmhhbmRsZUNhcmRQcmV2aWV3O1xuICAgICAgdGhpcy5fdGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgICB9XG5cbiAgICAvLyBDYXJkIHRlbXBsYXRlXG4gICAgX2dldEVsZW1lbnQgPSAoKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5fdGVtcGxhdGUuY29udGVudFxuICAgICAgICAucXVlcnlTZWxlY3RvcihcIi5lbGVtZW50cy1ncmlkX19jYXJkXCIpXG4gICAgICAgIC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgfTtcblxuICAgIC8vQ2FyZCBsaWtlIGhhbmRsZXIvdG9nZ2xlclxuICAgIF9oYW5kbGVMaWtlSWNvbiA9ICgpID0+IHtcbiAgICAgIHRoaXMuX2NhcmRMaWtlQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJlbGVtZW50cy1ncmlkX19pY29uLWFjdGl2ZVwiKTtcbiAgICB9O1xuXG4gICAgLy9DYXJkIHJlbW92YWwgaGFuZGxlclxuICAgIF9oYW5kbGVEZWxldGVDYXJkID0gKCkgPT4ge1xuICAgICAgdGhpcy5fZWxlbWVudC5yZW1vdmUoKTtcbiAgICB9O1xuXG4gICAgLy9FdmVudCBsaXN0ZW5lcnNcbiAgICBfc2V0RXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgICB0aGlzLl9jYXJkTGlrZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2dCkgPT4ge1xuICAgICAgICAvL2NhcmQgbGlrZSBldmVudCBsaXN0ZW5lclxuICAgICAgICB0aGlzLl9oYW5kbGVMaWtlSWNvbihldnQpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLl9kZWxldGVDYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZ0KSA9PiB7XG4gICAgICAgIC8vY2FyZCBkZWxldGUgZXZlbnQgbGlzdGVuZXJcbiAgICAgICAgdGhpcy5faGFuZGxlRGVsZXRlQ2FyZChldnQpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLl9pbWFnZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldnQpID0+IHtcbiAgICAgICAgLy9jYXJkIHByZXZpZXcgZXZlbnQgbGlzdGVuZXJcbiAgICAgICAgdGhpcy5faGFuZGxlQ2FyZFByZXZpZXcoeyB1cmw6IHRoaXMuX3VybCwgdGl0bGU6IHRoaXMuX3RpdGxlIH0pO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8vVGVtcGxhdGUgZGlzcGxheWluZ1xuICAgIHJlbmRlciA9ICgpID0+IHtcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSB0aGlzLl9nZXRFbGVtZW50KCk7XG4gICAgICB0aGlzLl9pbWFnZUVsZW1lbnQgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWxlbWVudHMtZ3JpZF9faW1hZ2VcIik7XG4gICAgICB0aGlzLl90aXRsZUVsZW1lbnQgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWxlbWVudHMtZ3JpZF9fdGV4dFwiKTtcbiAgICAgIHRoaXMuX2RlbGV0ZUNhcmQgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIFwiLmVsZW1lbnRzLWdyaWRfX2RlbGV0ZS1idXR0b25cIlxuICAgICAgKTtcbiAgICAgIHRoaXMuX2NhcmRMaWtlQnV0dG9uID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRzLWdyaWRfX2ljb25cIik7XG4gICAgICB0aGlzLl9pbWFnZUVsZW1lbnQuc3JjID0gdGhpcy5fdXJsO1xuICAgICAgdGhpcy5faW1hZ2VFbGVtZW50LmFsdCA9IHRoaXMuX3VybDtcbiAgICAgIHRoaXMuX3RpdGxlRWxlbWVudC50ZXh0Q29udGVudCA9IHRoaXMuX3RpdGxlO1xuICAgICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgIHJldHVybiB0aGlzLl9lbGVtZW50O1xuICAgIH07XG4gIH0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtVmFsaWRhdG9yIHtcbiAgY29uc3RydWN0b3Ioc2V0dGluZ3MsIGZvcm1FbCkge1xuICAgIHRoaXMuX2lucHV0U2VsZWN0b3IgPSBzZXR0aW5ncy5pbnB1dFNlbGVjdG9yO1xuICAgIHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yID0gc2V0dGluZ3Muc3VibWl0QnV0dG9uU2VsZWN0b3I7XG4gICAgdGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyA9IHNldHRpbmdzLmluYWN0aXZlQnV0dG9uQ2xhc3M7XG4gICAgdGhpcy5faW5wdXRFcnJvckNsYXNzID0gc2V0dGluZ3MuaW5wdXRFcnJvckNsYXNzO1xuICAgIHRoaXMuX2Vycm9yQ2xhc3MgPSBzZXR0aW5ncy5lcnJvckNsYXNzO1xuICAgIHRoaXMuX2Zvcm1FbCA9IGZvcm1FbDtcbiAgfVxuXG4gIF9pc0ludmFsaWRJbnB1dChpbnB1dEVsKSB7XG4gICAgcmV0dXJuICFpbnB1dEVsLnZhbGlkaXR5LnZhbGlkO1xuICB9XG5cbiAgX3Nob3dFcnJvcihpbnB1dEVsKSB7XG4gICAgY29uc3QgZXJyb3JFbCA9IHRoaXMuX2Zvcm1FbC5xdWVyeVNlbGVjdG9yKGAjJHtpbnB1dEVsLmlkfWApO1xuICAgIGVycm9yRWwuY2xhc3NMaXN0LmFkZCh0aGlzLl9lcnJvckNsYXNzKTtcbiAgICBlcnJvckVsLnRleHRDb250ZW50ID0gaW5wdXRFbC52YWxpZGF0aW9uTWVzc2FnZTtcbiAgICBpbnB1dEVsLmNsYXNzTGlzdC5hZGQodGhpcy5faW5wdXRFcnJvckNsYXNzKTtcbiAgfVxuXG4gIF9oaWRlRXJyb3IoaW5wdXRFbCkge1xuICAgIGNvbnN0IGVycm9yRWwgPSB0aGlzLl9mb3JtRWwucXVlcnlTZWxlY3RvcihgIyR7aW5wdXRFbC5pZH1gKTtcbiAgICBlcnJvckVsLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fZXJyb3JDbGFzcyk7XG4gICAgZXJyb3JFbC50ZXh0Q29udGVudCA9IFwiIFwiO1xuICAgIGlucHV0RWwuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9pbnB1dEVycm9yQ2xhc3MpO1xuICB9XG5cbiAgX3RvZ2dsZUJ1dHRvbigpIHtcbiAgICBpZiAodGhpcy5faW5wdXRMaXN0LnNvbWUodGhpcy5faXNJbnZhbGlkSW5wdXQpKSB7XG4gICAgICB0aGlzLl9idXR0b25FbC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICB0aGlzLl9idXR0b25FbC5jbGFzc0xpc3QuYWRkKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9idXR0b25FbC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5fYnV0dG9uRWwuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcbiAgICB9XG4gIH1cblxuICBfY2hlY2tJbnB1dFZhbGlkaXR5KGlucHV0RWwpIHtcbiAgICBjb25zdCBlcnJvckVsID0gdGhpcy5fZm9ybUVsLnF1ZXJ5U2VsZWN0b3IoYCMke2lucHV0RWwuaWR9LWVycm9yYCk7XG4gICAgaWYgKHRoaXMuX2lzSW52YWxpZElucHV0KGlucHV0RWwpKSB7XG4gICAgICB0aGlzLl9zaG93RXJyb3IoZXJyb3JFbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2hpZGVFcnJvcihlcnJvckVsKTtcbiAgICB9XG4gIH1cblxuICBfc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy5faW5wdXRMaXN0ID0gQXJyYXkuZnJvbShcbiAgICAgIHRoaXMuX2Zvcm1FbC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX2lucHV0U2VsZWN0b3IpXG4gICAgKTtcbiAgICB0aGlzLl9idXR0b25FbCA9IHRoaXMuX2Zvcm1FbC5xdWVyeVNlbGVjdG9yKHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yKTtcblxuICAgIHRoaXMuX2lucHV0TGlzdC5mb3JFYWNoKChpbnB1dEVsKSA9PiB7XG4gICAgICBpbnB1dEVsLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2NoZWNrSW5wdXRWYWxpZGl0eShpbnB1dEVsKTtcbiAgICAgICAgdGhpcy5fdG9nZ2xlQnV0dG9uKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlc2V0Rm9ybSgpIHtcbiAgICB0aGlzLl90b2dnbGVCdXR0b24oKTtcbiAgfVxuXG4gIGVuYWJsZVZhbGlkYXRpb24oKSB7XG4gICAgdGhpcy5fZm9ybUVsLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycygpO1xuICB9XG59XG5cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwIHtcbiAgY29uc3RydWN0b3IocG9wdXBTZWxlY3Rvcikge1xuICAgIHRoaXMuX3BvcHVwRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocG9wdXBTZWxlY3Rvcik7XG4gICAgdGhpcy5faGFuZGxlRXNjVXAgPSB0aGlzLl9oYW5kbGVFc2NVcC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgX2hhbmRsZUVzY1VwKGV2dCkge1xuICAgIGlmIChldnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG4gIH1cblxuICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLl9wb3B1cEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZXZ0KSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGV2dC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibW9kYWxfX3BvcHVwLWJ0blwiKSB8fFxuICAgICAgICBldnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIm1vZGFsX19wb3B1cFwiKVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG9wZW4oKSB7XG4gICAgdGhpcy5fcG9wdXBFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJtb2RhbF9vcGVuZWRcIik7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5faGFuZGxlRXNjVXApO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5fcG9wdXBFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJtb2RhbF9vcGVuZWRcIik7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5faGFuZGxlRXNjVXApO1xuICB9XG59IiwiaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aEZvcm0gZXh0ZW5kcyBQb3B1cCB7XG4gIGNvbnN0cnVjdG9yKHsgaGFuZGxlRm9ybVN1Ym1pdCB9LCBwb3B1cFNlbGVjdG9yKSB7XG4gICAgc3VwZXIocG9wdXBTZWxlY3Rvcik7XG4gICAgdGhpcy5faGFuZGxlRm9ybVN1Ym1pdCA9IGhhbmRsZUZvcm1TdWJtaXQ7XG4gICAgdGhpcy5fZm9ybUVsID0gdGhpcy5fcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1uYW1lXCIpOyAvLy5wb3B1cF9fZm9ybVxuICB9XG5cbiAgLy9wcml2YXRlIG1ldGhvZFxuICBfZ2V0SW5wdXRWYWx1ZXMoKSB7XG4gICAgdGhpcy5fYWxsSW5wdXRGaWVsZHMgPVxuICAgICAgdGhpcy5fcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZm9ybS1uYW1lX19pbnB1dFwiKTtcbiAgICB0aGlzLl9hbGxJbnB1dEVsID0ge307XG4gICAgdGhpcy5fYWxsSW5wdXRGaWVsZHMuZm9yRWFjaCgoaW5wdXRFbCkgPT4ge1xuICAgICAgdGhpcy5fYWxsSW5wdXRFbFtpbnB1dEVsLm5hbWVdID0gaW5wdXRFbC52YWx1ZTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5fYWxsSW5wdXRFbDtcbiAgfVxuXG4gIC8vcHVibGljIG1ldGhvZFxuICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLl9mb3JtRWwuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZ0KSA9PiB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuX2hhbmRsZUZvcm1TdWJtaXQodGhpcy5fZ2V0SW5wdXRWYWx1ZXMoKSk7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfSk7XG4gICAgc3VwZXIuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIC8vcHVibGljIG1ldGhvZFxuICBjbG9zZSgpIHtcbiAgICB0aGlzLl9mb3JtRWwucmVzZXQoKTtcbiAgICBzdXBlci5jbG9zZSgpO1xuICB9XG59IiwiaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aEltYWdlcyBleHRlbmRzIFBvcHVwIHtcbiAgY29uc3RydWN0b3IocG9wdXBTZWxlY3Rvcikge1xuICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpO1xuICAgIHRoaXMuX21vZGFsSW1hZ2VFbGVtZW50ID0gdGhpcy5fcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcIi5tb2RhbF9fcG9wdXAtaW1hZ2VcIlxuICAgICk7XG4gICAgdGhpcy5fbW9kYWxDYXB0aW9uID0gdGhpcy5fcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcIi5tb2RhbF9fcG9wdXAtY2FwdGlvblwiXG4gICAgKTtcbiAgfVxuXG4gIG9wZW4oZGF0YSkge1xuICAgIHRoaXMuX21vZGFsSW1hZ2VFbGVtZW50LnNyYyA9IGRhdGEudXJsO1xuICAgIHRoaXMuX21vZGFsSW1hZ2VFbGVtZW50LmFsdCA9IGBpbWFnZSBvZiR7ZGF0YS51cmx9YDtcbiAgICB0aGlzLl9tb2RhbENhcHRpb24udGV4dENvbnRlbnQgPSBkYXRhLnRpdGxlO1xuICAgIHN1cGVyLm9wZW4oKTtcbiAgfVxufVxuXG5cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlY3Rpb24ge1xuICAgIGNvbnN0cnVjdG9yKHsgcmVuZGVyZXIgfSwgY29udGFpbmVyU2VsZWN0b3IpIHtcbiAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyO1xuICAgIHRoaXMuX2VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAke2NvbnRhaW5lclNlbGVjdG9yfWApO1xuICB9XG5cbiAgcmVuZGVySXRlbXMoaXRlbXNBcnJheURhdGEpIHtcbiAgICBpdGVtc0FycmF5RGF0YS5mb3JFYWNoKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLl9yZW5kZXJlcihkYXRhKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZEl0ZW0oaXRlbXNBcnJheURhdGEpIHtcbiAgICB0aGlzLl9lbGVtZW50LnByZXBlbmQoaXRlbXNBcnJheURhdGEpO1xuICB9XG5cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJJbmZvIHtcbiAgY29uc3RydWN0b3Ioe3VzZXJOYW1lU2VsZWN0b3IsIHVzZXJEZXRhaWxTZWxlY3Rvcn0pIHtcbiAgICB0aGlzLl91c2VyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodXNlck5hbWVTZWxlY3Rvcik7XG4gICAgdGhpcy5fdXNlckRldGFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodXNlckRldGFpbFNlbGVjdG9yKTtcbiAgfTtcblxuICBnZXRVc2VySW5mbygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXNlclByb2ZpbGVOYW1lOiB0aGlzLl91c2VyTmFtZS50ZXh0Q29udGVudCxcbiAgICAgIHVzZXJQcm9maWxlRGV0YWlsOiB0aGlzLl91c2VyRGV0YWlsLnRleHRDb250ZW50LFxuICAgIH07XG4gIH1cblxuICBzZXRVc2VySW5mbyh1c2VyTmFtZSwgdXNlckRldGFpbCkge1xuICAgIHRoaXMuX3VzZXJOYW1lLnRleHRDb250ZW50ID0gdXNlck5hbWU7XG4gICAgdGhpcy5fdXNlckRldGFpbC50ZXh0Q29udGVudCA9IHVzZXJEZXRhaWw7XG4gIH1cbn1cbiIsIlxuZXhwb3J0IGNvbnN0IGluaXRpYWxDYXJkcyA9IFtcbiAge1xuICAgIC8vTkFNRVxuICAgIHRpdGxlOiBcIkxha2UgJiBNb3VudGFpblwiLFxuICAgIC8vTElOS1xuICAgIHVybDogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTYzODgwMjQyMjYzMy02OTQwODg2ODAzNTk/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTY4NyZxPTgwXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJMYWtlIExvdWlzZVwiLFxuICAgIHVybDogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS9sYWtlLWxvdWlzZS5qcGdcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkJhbGQgTW91bnRhaW5zXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL2JhbGQtbW91bnRhaW5zLmpwZ1wiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiTGF0ZW1hclwiLFxuICAgIHVybDogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS9sYXRlbWFyLmpwZ1wiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiVmFub2lzZSBOYXRpb25hbCBQYXJrXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL3Zhbm9pc2UuanBnXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJMYWdvIGRpIGJyYWllc1wiLFxuICAgIHVybDogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS9sYWdvLmpwZ1wiLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IGZvcm1WYWxpZGF0b3JDb25maWcgPSB7XG4gIGlucHV0U2VsZWN0b3I6IFwiLmZvcm0tbmFtZV9faW5wdXRcIixcbiAgc3VibWl0QnV0dG9uU2VsZWN0b3I6IFwiLmZvcm0tbmFtZV9fc2F2ZS1idXR0b25cIixcbiAgaW5hY3RpdmVCdXR0b25DbGFzczogXCJmb3JtLW5hbWVfX3NhdmUtYnV0dG9uX2Rpc2FibGVkXCIsXG4gIGlucHV0RXJyb3JDbGFzczogXCJmb3JtLW5hbWVfX21vZGFsLXR5cGVfZXJyb3JcIixcbiAgZXJyb3JDbGFzczogXCJtb2RhbF9fcG9wdXBfX2Vycm9yX3Zpc2libGVcIixcbn07XG5cbmV4cG9ydCBjb25zdCBzZWxlY3RvcnMgPSB7XG4gIGNhcmRTZWN0aW9uOiBcIi5lbGVtZW50cy1ncmlkX19jYXJkc1wiLCAvL2NhcmQgbGlzdFxuICBjYXJkVGVtcGxhdGU6IFwiI2NhcmQtdGVtcGxhdGVcIiwgLy9jYXJkIHRlbXBsYXRlXG4gIHByZXZpZXdQb3B1cDogXCIjaW1hZ2UtcG9wdXBcIiwgLy8gY2FyZCBpbWFnZSBwb3B1cCBwcmV2aWV3XG59O1xuXG5leHBvcnQgY29uc3QgYWRkQ2FyZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fcGx1cy1idXR0b25cIik7XG5leHBvcnQgY29uc3QgZWRpdEZvcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2VkaXQtYnV0dG9uXCIpO1xuZXhwb3J0IGNvbnN0IGNsb3NlQ2FyZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvc2UtY2FyZC1wb3B1cFwiKTtcbmV4cG9ydCBjb25zdCBjbG9zZUltYWdlUHJldmlld0J1dHRvbiA9XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvc2UtaW1hZ2UtcG9wdXBcIik7XG5leHBvcnQgY29uc3QgY2xvc2VQcm9maWxlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgXCIjY2xvc2UtcHJvZmlsZS1wb3B1cFwiXG4pO1xuZXhwb3J0IGNvbnN0IHByb1RpdGxlID0gXCIucHJvZmlsZV9fdGl0bGVcIjtcbmV4cG9ydCBjb25zdCBwcm9TdWJUaXRsZSA9IFwiLnByb2ZpbGVfX3N1YnRpdGxlXCI7XG5cbmV4cG9ydCBjb25zdCBpbWFnZVBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbWFnZS1wb3B1cFwiKTtcbmV4cG9ydCBjb25zdCBtb2RhbEltYWdlRWxlbWVudCA9IGltYWdlUG9wdXAucXVlcnlTZWxlY3RvcihcbiAgXCIubW9kYWxfX3BvcHVwLWltYWdlXCJcbik7XG5leHBvcnQgY29uc3QgbW9kYWxDYXB0aW9uID0gaW1hZ2VQb3B1cC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19wb3B1cC1jYXB0aW9uXCIpO1xuXG5leHBvcnQgY29uc3QgcHJvTW9kYWxOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsaXN0LXRpdGxlXCIpO1xuZXhwb3J0IGNvbnN0IHByb01vZGFsV29yayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbGlzdC1zdWJ0aXRsZVwiKTtcblxuZXhwb3J0IGNvbnN0IG1vZGFsQ2FyZFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYXJkLXRpdGxlXCIpO1xuZXhwb3J0IGNvbnN0IG1vZGFsQ2FyZFVybCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FyZC11cmxcIik7XG5cbmV4cG9ydCBjb25zdCBhZGRGb3JtRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1jYXJkLXBvcHVwXCIpO1xuZXhwb3J0IGNvbnN0IGVkaXRGb3JtRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXQtcHJvZmlsZS1wb3B1cFwiKTtcblxuXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlxuaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcblxuLy9pbXBvcnQgYWxsIGNsYXNzZXNcbmltcG9ydCBDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmRcIjtcbmltcG9ydCBGb3JtVmFsaWRhdG9yIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3JcIjtcbmltcG9ydCBQb3B1cFdpdGhJbWFnZXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2VzXCI7XG5pbXBvcnQgUG9wdXBXaXRoRm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtXCI7XG5pbXBvcnQgU2VjdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWN0aW9uXCI7XG5pbXBvcnQgVXNlckluZm8gZnJvbSBcIi4uL2NvbXBvbmVudHMvVXNlckluZm9cIjtcbmltcG9ydCB7XG4gIGluaXRpYWxDYXJkcyxcbiAgZm9ybVZhbGlkYXRvckNvbmZpZyxcbiAgc2VsZWN0b3JzLFxuICBhZGRDYXJkQnRuLFxuICBlZGl0Rm9ybUJ0bixcbiAgcHJvVGl0bGUsXG4gIHByb1N1YlRpdGxlLFxuICBwcm9Nb2RhbFdvcmssXG4gIHByb01vZGFsTmFtZSxcbiAgYWRkRm9ybUVsLFxuICBlZGl0Rm9ybUVsLFxufSBmcm9tIFwiLi4vdXRpbHMvY29uc3RhbnRzXCI7XG5cbmNvbnN0IGZvcm1Qcm9maWxlRGV0YWlsID0gbmV3IFVzZXJJbmZvKHtcbiAgdXNlck5hbWVTZWxlY3RvcjogcHJvVGl0bGUsXG4gIHVzZXJEZXRhaWxTZWxlY3RvcjogcHJvU3ViVGl0bGUsXG59KTtcblxuZnVuY3Rpb24gcmVuZGVyQ2FyZChkYXRhLCBjYXJkVGVtcGxhdGUpIHtcbiAgY29uc3QgY2FyZEVsID0gbmV3IENhcmQoXG4gICAge1xuICAgICAgZGF0YSxcbiAgICAgIGhhbmRsZUNhcmRQcmV2aWV3OiAoaW1nRGF0YSkgPT4ge1xuICAgICAgICBjYXJkUHJldmlld1BvcHVwLm9wZW4oaW1nRGF0YSk7XG4gICAgICB9LFxuICAgIH0sXG4gICAgY2FyZERpc3BsYXlcbiAgKTtcbiAgY2FyZExpc3RTZWN0aW9ucy5hZGRJdGVtKGNhcmRFbC5yZW5kZXIoZGF0YSwgY2FyZFRlbXBsYXRlKSk7XG59XG5cbmNvbnN0IGNhcmRMaXN0U2VjdGlvbnMgPSBuZXcgU2VjdGlvbihcbiAge1xuICAgIHJlbmRlcmVyOiAoZGF0YSkgPT4ge1xuICAgICAgcmVuZGVyQ2FyZChkYXRhKVxuICAgIH0sXG4gIH0sXG4gIHNlbGVjdG9ycy5jYXJkU2VjdGlvblxuKTtcblxuY29uc3QgY2FyZFByZXZpZXdQb3B1cCA9IG5ldyBQb3B1cFdpdGhJbWFnZXMoc2VsZWN0b3JzLnByZXZpZXdQb3B1cCk7XG5jb25zdCBjYXJkRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JzLmNhcmRUZW1wbGF0ZSk7XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9Qcm9maWxlIG1vZGFsXG5jb25zdCBmb3JtUHJvZmlsZU5hbWUgPSBuZXcgUG9wdXBXaXRoRm9ybShcbiAge1xuICAgIGhhbmRsZUZvcm1TdWJtaXQ6ICh7dXNlck5hbWUsIHVzZXJEZXRhaWx9KSA9PiB7XG4gICAgICBmb3JtUHJvZmlsZURldGFpbC5zZXRVc2VySW5mbyh1c2VyTmFtZSwgdXNlckRldGFpbCk7XG4gICAgfSxcbiAgfSxcbiAgXCIjZWRpdC1wcm9maWxlLXBvcHVwXCJcbik7XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL0NhcmQgbW9kYWxcbmNvbnN0IGZvcm1Qcm9maWxlQ2FyZCA9IG5ldyBQb3B1cFdpdGhGb3JtKFxuICB7XG4gICAgaGFuZGxlRm9ybVN1Ym1pdDogKGRhdGEsIGNhcmRUZW1wbGF0ZSkgPT4ge1xuICAgICAgcmVuZGVyQ2FyZChkYXRhLCBjYXJkVGVtcGxhdGUpO1xuICAgIH0sXG4gIH0sXG4gIFwiI2FkZC1jYXJkLXBvcHVwXCJcbik7XG5cbmZvcm1Qcm9maWxlTmFtZS5zZXRFdmVudExpc3RlbmVycygpO1xuZm9ybVByb2ZpbGVDYXJkLnNldEV2ZW50TGlzdGVuZXJzKCk7XG5jYXJkUHJldmlld1BvcHVwLnNldEV2ZW50TGlzdGVuZXJzKCk7XG5jYXJkTGlzdFNlY3Rpb25zLnJlbmRlckl0ZW1zKGluaXRpYWxDYXJkcyk7XG5cbi8vYWRkIGNhcmQgYnV0dG9uXG5hZGRDYXJkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGZvcm1Qcm9maWxlQ2FyZC5vcGVuKCk7XG4gIGFkZEZvcm1WYWxpZGF0b3IucmVzZXRGb3JtKCk7XG59KTtcblxuLy8vcHJvZmlsZSBlZGl0IGJ1dHRvblxuZWRpdEZvcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgZm9ybVByb2ZpbGVOYW1lLm9wZW4oKTtcbiAgY29uc3QgYWN0aXZlVXNlciA9IGZvcm1Qcm9maWxlRGV0YWlsLmdldFVzZXJJbmZvKCk7XG4gIHByb01vZGFsTmFtZS52YWx1ZSA9IGFjdGl2ZVVzZXIudXNlclByb2ZpbGVOYW1lO1xuICBwcm9Nb2RhbFdvcmsudmFsdWUgPSBhY3RpdmVVc2VyLnVzZXJQcm9maWxlRGV0YWlsO1xuICBlZGl0Rm9ybVZhbGlkYXRvci5yZXNldEZvcm0oKTtcbn0pO1xuXG5jb25zdCBhZGRGb3JtVmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3IoZm9ybVZhbGlkYXRvckNvbmZpZywgYWRkRm9ybUVsKTtcbmFkZEZvcm1WYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xuY29uc3QgZWRpdEZvcm1WYWxpZGF0b3IgPSBuZXcgRm9ybVZhbGlkYXRvcihmb3JtVmFsaWRhdG9yQ29uZmlnLCBlZGl0Rm9ybUVsKTtcbmVkaXRGb3JtVmFsaWRhdG9yLmVuYWJsZVZhbGlkYXRpb24oKTsiXSwibmFtZXMiOlsiQ2FyZCIsImRhdGEiLCJ0ZW1wbGF0ZSIsIl90ZW1wbGF0ZSIsImNvbnRlbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xvbmVOb2RlIiwiX2NhcmRMaWtlQnV0dG9uIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiX2VsZW1lbnQiLCJyZW1vdmUiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZ0IiwiX2hhbmRsZUxpa2VJY29uIiwiX2RlbGV0ZUNhcmQiLCJfaGFuZGxlRGVsZXRlQ2FyZCIsIl9pbWFnZUVsZW1lbnQiLCJfaGFuZGxlQ2FyZFByZXZpZXciLCJ1cmwiLCJfdXJsIiwidGl0bGUiLCJfdGl0bGUiLCJfZ2V0RWxlbWVudCIsIl90aXRsZUVsZW1lbnQiLCJzcmMiLCJhbHQiLCJ0ZXh0Q29udGVudCIsIl9zZXRFdmVudExpc3RlbmVycyIsImhhbmRsZUNhcmRQcmV2aWV3IiwiRm9ybVZhbGlkYXRvciIsInNldHRpbmdzIiwiZm9ybUVsIiwiX2lucHV0U2VsZWN0b3IiLCJpbnB1dFNlbGVjdG9yIiwiX3N1Ym1pdEJ1dHRvblNlbGVjdG9yIiwic3VibWl0QnV0dG9uU2VsZWN0b3IiLCJfaW5hY3RpdmVCdXR0b25DbGFzcyIsImluYWN0aXZlQnV0dG9uQ2xhc3MiLCJfaW5wdXRFcnJvckNsYXNzIiwiaW5wdXRFcnJvckNsYXNzIiwiX2Vycm9yQ2xhc3MiLCJlcnJvckNsYXNzIiwiX2Zvcm1FbCIsImlucHV0RWwiLCJ2YWxpZGl0eSIsInZhbGlkIiwiZXJyb3JFbCIsImlkIiwiYWRkIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJfaW5wdXRMaXN0Iiwic29tZSIsIl9pc0ludmFsaWRJbnB1dCIsIl9idXR0b25FbCIsImRpc2FibGVkIiwiX3Nob3dFcnJvciIsIl9oaWRlRXJyb3IiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsIl9jaGVja0lucHV0VmFsaWRpdHkiLCJfdG9nZ2xlQnV0dG9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwiUG9wdXAiLCJwb3B1cFNlbGVjdG9yIiwiX3BvcHVwRWxlbWVudCIsImRvY3VtZW50IiwiX2hhbmRsZUVzY1VwIiwiYmluZCIsImtleSIsImNsb3NlIiwidGFyZ2V0IiwiY29udGFpbnMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiUG9wdXBXaXRoRm9ybSIsImhhbmRsZUZvcm1TdWJtaXQiLCJfaGFuZGxlRm9ybVN1Ym1pdCIsIl9hbGxJbnB1dEZpZWxkcyIsIl9hbGxJbnB1dEVsIiwibmFtZSIsInZhbHVlIiwiX2dldElucHV0VmFsdWVzIiwicmVzZXQiLCJQb3B1cFdpdGhJbWFnZXMiLCJfbW9kYWxJbWFnZUVsZW1lbnQiLCJfbW9kYWxDYXB0aW9uIiwiU2VjdGlvbiIsImNvbnRhaW5lclNlbGVjdG9yIiwicmVuZGVyZXIiLCJfcmVuZGVyZXIiLCJpdGVtc0FycmF5RGF0YSIsInByZXBlbmQiLCJVc2VySW5mbyIsInVzZXJOYW1lU2VsZWN0b3IiLCJ1c2VyRGV0YWlsU2VsZWN0b3IiLCJfdXNlck5hbWUiLCJfdXNlckRldGFpbCIsInVzZXJQcm9maWxlTmFtZSIsInVzZXJQcm9maWxlRGV0YWlsIiwidXNlck5hbWUiLCJ1c2VyRGV0YWlsIiwiaW5pdGlhbENhcmRzIiwiZm9ybVZhbGlkYXRvckNvbmZpZyIsInNlbGVjdG9ycyIsImNhcmRTZWN0aW9uIiwiY2FyZFRlbXBsYXRlIiwicHJldmlld1BvcHVwIiwiYWRkQ2FyZEJ0biIsImVkaXRGb3JtQnRuIiwiY2xvc2VDYXJkQnV0dG9uIiwiY2xvc2VJbWFnZVByZXZpZXdCdXR0b24iLCJjbG9zZVByb2ZpbGVCdXR0b24iLCJwcm9UaXRsZSIsInByb1N1YlRpdGxlIiwiaW1hZ2VQb3B1cCIsIm1vZGFsSW1hZ2VFbGVtZW50IiwibW9kYWxDYXB0aW9uIiwicHJvTW9kYWxOYW1lIiwicHJvTW9kYWxXb3JrIiwibW9kYWxDYXJkVGl0bGUiLCJtb2RhbENhcmRVcmwiLCJhZGRGb3JtRWwiLCJlZGl0Rm9ybUVsIiwiZm9ybVByb2ZpbGVEZXRhaWwiLCJyZW5kZXJDYXJkIiwiY2FyZEVsIiwiaW1nRGF0YSIsImNhcmRQcmV2aWV3UG9wdXAiLCJvcGVuIiwiY2FyZERpc3BsYXkiLCJjYXJkTGlzdFNlY3Rpb25zIiwiYWRkSXRlbSIsInJlbmRlciIsImZvcm1Qcm9maWxlTmFtZSIsInNldFVzZXJJbmZvIiwiZm9ybVByb2ZpbGVDYXJkIiwic2V0RXZlbnRMaXN0ZW5lcnMiLCJyZW5kZXJJdGVtcyIsImFkZEZvcm1WYWxpZGF0b3IiLCJyZXNldEZvcm0iLCJhY3RpdmVVc2VyIiwiZ2V0VXNlckluZm8iLCJlZGl0Rm9ybVZhbGlkYXRvciIsImVuYWJsZVZhbGlkYXRpb24iXSwic291cmNlUm9vdCI6IiJ9