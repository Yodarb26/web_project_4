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
      // this._formEl.reset();
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
    CardSection.addItem(cardEl.render(data, cardTemplate));
  }
}, "#add-card-popup");
formProfileName.setEventListeners();
formProfileCard.setEventListeners();
CardPreviewPopup.setEventListeners();
CardSection.renderItems(_utils_constants__WEBPACK_IMPORTED_MODULE_7__.initialCards); //add card button

_utils_constants__WEBPACK_IMPORTED_MODULE_7__.addCardBtn.addEventListener("click", function () {
  _utils_constants__WEBPACK_IMPORTED_MODULE_7__.modalCardTitle.value = _utils_constants__WEBPACK_IMPORTED_MODULE_7__.modalImageElement.textContent;
  _utils_constants__WEBPACK_IMPORTED_MODULE_7__.modalCardUrl.value = _utils_constants__WEBPACK_IMPORTED_MODULE_7__.modalCaption.src;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NEcsWUFBcEIsQ0FBcEI7RUFDRDtBQVpILENBRHNCLEVBZXRCLGlCQWZzQixDQUF4QjtBQWtCQTRCLGVBQWUsQ0FBQ0csaUJBQWhCO0FBQ0FELGVBQWUsQ0FBQ0MsaUJBQWhCO0FBQ0FSLGdCQUFnQixDQUFDUSxpQkFBakI7QUFDQVosV0FBVyxDQUFDYSxXQUFaLENBQXdCcEMsMERBQXhCLEdBRUE7O0FBQ0FNLHlFQUFBLENBQTRCLE9BQTVCLEVBQXFDLFlBQU07RUFDekNZLGtFQUFBLEdBQXVCSiwyRUFBdkI7RUFDQUssZ0VBQUEsR0FBcUJKLDhEQUFyQjtFQUNBbUIsZUFBZSxDQUFDTixJQUFoQjtFQUNBUyxnQkFBZ0IsQ0FBQ0MsU0FBakI7QUFDRCxDQUxELEdBT0E7O0FBQ0EvQiwwRUFBQSxDQUE2QixPQUE3QixFQUFzQyxZQUFNO0VBQzFDeUIsZUFBZSxDQUFDSixJQUFoQjtFQUNBLElBQU1XLFVBQVUsR0FBR2pCLGlCQUFpQixDQUFDa0IsV0FBbEIsRUFBbkI7RUFDQXhCLGdFQUFBLEdBQXFCdUIsVUFBVSxDQUFDekMsZUFBaEM7RUFDQW1CLGdFQUFBLEdBQXFCc0IsVUFBVSxDQUFDeEMsaUJBQWhDO0VBQ0EwQyxpQkFBaUIsQ0FBQ0gsU0FBbEI7QUFDRCxDQU5EO0FBUUEsSUFBTUQsZ0JBQWdCLEdBQUcsSUFBSTlHLGlFQUFKLENBQWtCMEUsaUVBQWxCLEVBQXVDbUIsdURBQXZDLENBQXpCO0FBQ0FpQixnQkFBZ0IsQ0FBQ0ssZ0JBQWpCO0FBQ0EsSUFBTUQsaUJBQWlCLEdBQUcsSUFBSWxILGlFQUFKLENBQWtCMEUsaUVBQWxCLEVBQXVDb0Isd0RBQXZDLENBQTFCO0FBQ0FvQixpQkFBaUIsQ0FBQ0MsZ0JBQWxCLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcHJpbnQtOC8uL3NyYy9jb21wb25lbnRzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vc3ByaW50LTgvLi9zcmMvY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzIiwid2VicGFjazovL3NwcmludC04Ly4vc3JjL2NvbXBvbmVudHMvUG9wdXAuanMiLCJ3ZWJwYWNrOi8vc3ByaW50LTgvLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtLmpzIiwid2VicGFjazovL3NwcmludC04Ly4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2VzLmpzIiwid2VicGFjazovL3NwcmludC04Ly4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9zcHJpbnQtOC8uL3NyYy9jb21wb25lbnRzL1VzZXJJbmZvLmpzIiwid2VicGFjazovL3NwcmludC04Ly4vc3JjL3V0aWxzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9zcHJpbnQtOC8uL3NyYy9wYWdlcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vc3ByaW50LTgvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3ByaW50LTgvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NwcmludC04L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc3ByaW50LTgvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zcHJpbnQtOC8uL3NyYy9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmQge1xuICAgIGNvbnN0cnVjdG9yKGRhdGEsIHRlbXBsYXRlKSB7XG4gICAgICB0aGlzLl9kYXRhID0gZGF0YS5kYXRhO1xuICAgICAgdGhpcy5fdGl0bGUgPSBkYXRhLmRhdGEudGl0bGU7XG4gICAgICB0aGlzLl91cmwgPSBkYXRhLmRhdGEudXJsO1xuICAgICAgdGhpcy5fZWxlbWVudCA9IG51bGw7XG4gICAgICB0aGlzLl9oYW5kbGVDYXJkUHJldmlldyA9IGRhdGEuaGFuZGxlQ2FyZFByZXZpZXc7XG4gICAgICB0aGlzLl90ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgIH1cblxuICAgIC8vIENhcmQgdGVtcGxhdGVcbiAgICBfZ2V0RWxlbWVudCA9ICgpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLl90ZW1wbGF0ZS5jb250ZW50XG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRzLWdyaWRfX2NhcmRcIilcbiAgICAgICAgLmNsb25lTm9kZSh0cnVlKTtcbiAgICB9O1xuXG4gICAgLy9DYXJkIGxpa2UgaGFuZGxlci90b2dnbGVyXG4gICAgX2hhbmRsZUxpa2VJY29uID0gKCkgPT4ge1xuICAgICAgdGhpcy5fY2FyZExpa2VCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcImVsZW1lbnRzLWdyaWRfX2ljb24tYWN0aXZlXCIpO1xuICAgIH07XG5cbiAgICAvL0NhcmQgcmVtb3ZhbCBoYW5kbGVyXG4gICAgX2hhbmRsZURlbGV0ZUNhcmQgPSAoKSA9PiB7XG4gICAgICB0aGlzLl9lbGVtZW50LnJlbW92ZSgpO1xuICAgICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy9FdmVudCBsaXN0ZW5lcnNcbiAgICBfc2V0RXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgICB0aGlzLl9jYXJkTGlrZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2dCkgPT4ge1xuICAgICAgICAvL2NhcmQgbGlrZSBldmVudCBsaXN0ZW5lclxuICAgICAgICB0aGlzLl9oYW5kbGVMaWtlSWNvbihldnQpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLl9kZWxldGVDYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZ0KSA9PiB7XG4gICAgICAgIC8vY2FyZCBkZWxldGUgZXZlbnQgbGlzdGVuZXJcbiAgICAgICAgdGhpcy5faGFuZGxlRGVsZXRlQ2FyZChldnQpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLl9pbWFnZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldnQpID0+IHtcbiAgICAgICAgLy9jYXJkIHByZXZpZXcgZXZlbnQgbGlzdGVuZXJcbiAgICAgICAgdGhpcy5faGFuZGxlQ2FyZFByZXZpZXcoeyB1cmw6IHRoaXMuX2RhdGEudXJsLCB0aXRsZTogdGhpcy5fZGF0YS50aXRsZSB9KTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvL1RlbXBsYXRlIGRpc3BsYXlpbmdcbiAgICByZW5kZXIgPSAoKSA9PiB7XG4gICAgICB0aGlzLl9lbGVtZW50ID0gdGhpcy5fZ2V0RWxlbWVudCgpO1xuICAgICAgdGhpcy5faW1hZ2VFbGVtZW50ID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRzLWdyaWRfX2ltYWdlXCIpO1xuICAgICAgdGhpcy5fdGl0bGVFbGVtZW50ID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRzLWdyaWRfX3RleHRcIik7XG4gICAgICB0aGlzLl9kZWxldGVDYXJkID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBcIi5lbGVtZW50cy1ncmlkX19kZWxldGUtYnV0dG9uXCJcbiAgICAgICk7XG4gICAgICB0aGlzLl9jYXJkTGlrZUJ1dHRvbiA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbGVtZW50cy1ncmlkX19pY29uXCIpO1xuICAgICAgdGhpcy5faW1hZ2VFbGVtZW50LnNyYyA9IHRoaXMuX3VybDtcbiAgICAgIHRoaXMuX2ltYWdlRWxlbWVudC5hbHQgPSB0aGlzLl91cmw7XG4gICAgICB0aGlzLl90aXRsZUVsZW1lbnQudGV4dENvbnRlbnQgPSB0aGlzLl90aXRsZTtcbiAgICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICByZXR1cm4gdGhpcy5fZWxlbWVudDtcbiAgICB9O1xuICB9IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybVZhbGlkYXRvciB7XG4gIGNvbnN0cnVjdG9yKHNldHRpbmdzLCBmb3JtRWwpIHtcbiAgICB0aGlzLl9pbnB1dFNlbGVjdG9yID0gc2V0dGluZ3MuaW5wdXRTZWxlY3RvcjtcbiAgICB0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3RvciA9IHNldHRpbmdzLnN1Ym1pdEJ1dHRvblNlbGVjdG9yO1xuICAgIHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MgPSBzZXR0aW5ncy5pbmFjdGl2ZUJ1dHRvbkNsYXNzO1xuICAgIHRoaXMuX2lucHV0RXJyb3JDbGFzcyA9IHNldHRpbmdzLmlucHV0RXJyb3JDbGFzcztcbiAgICB0aGlzLl9lcnJvckNsYXNzID0gc2V0dGluZ3MuZXJyb3JDbGFzcztcbiAgICB0aGlzLl9mb3JtRWwgPSBmb3JtRWw7XG4gIH1cblxuICBfaXNJbnZhbGlkSW5wdXQoaW5wdXRFbCkge1xuICAgIHJldHVybiAhaW5wdXRFbC52YWxpZGl0eS52YWxpZDtcbiAgfVxuXG4gIF9zaG93RXJyb3IoaW5wdXRFbCkge1xuICAgIGNvbnN0IGVycm9yRWwgPSB0aGlzLl9mb3JtRWwucXVlcnlTZWxlY3RvcihgIyR7aW5wdXRFbC5pZH1gKTtcbiAgICBlcnJvckVsLmNsYXNzTGlzdC5hZGQodGhpcy5fZXJyb3JDbGFzcyk7XG4gICAgZXJyb3JFbC50ZXh0Q29udGVudCA9IGlucHV0RWwudmFsaWRhdGlvbk1lc3NhZ2U7XG4gICAgaW5wdXRFbC5jbGFzc0xpc3QuYWRkKHRoaXMuX2lucHV0RXJyb3JDbGFzcyk7XG4gIH1cblxuICBfaGlkZUVycm9yKGlucHV0RWwpIHtcbiAgICBjb25zdCBlcnJvckVsID0gdGhpcy5fZm9ybUVsLnF1ZXJ5U2VsZWN0b3IoYCMke2lucHV0RWwuaWR9YCk7XG4gICAgZXJyb3JFbC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2Vycm9yQ2xhc3MpO1xuICAgIGVycm9yRWwudGV4dENvbnRlbnQgPSBcIiBcIjtcbiAgICBpbnB1dEVsLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5faW5wdXRFcnJvckNsYXNzKTtcbiAgfVxuXG4gIF90b2dnbGVCdXR0b24oKSB7XG4gICAgaWYgKHRoaXMuX2lucHV0TGlzdC5zb21lKHRoaXMuX2lzSW52YWxpZElucHV0KSkge1xuICAgICAgdGhpcy5fYnV0dG9uRWwuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgdGhpcy5fYnV0dG9uRWwuY2xhc3NMaXN0LmFkZCh0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fYnV0dG9uRWwuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2J1dHRvbkVsLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgX2NoZWNrSW5wdXRWYWxpZGl0eShpbnB1dEVsKSB7XG4gICAgY29uc3QgZXJyb3JFbCA9IHRoaXMuX2Zvcm1FbC5xdWVyeVNlbGVjdG9yKGAjJHtpbnB1dEVsLmlkfS1lcnJvcmApO1xuICAgIGlmICh0aGlzLl9pc0ludmFsaWRJbnB1dChpbnB1dEVsKSkge1xuICAgICAgdGhpcy5fc2hvd0Vycm9yKGVycm9yRWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9oaWRlRXJyb3IoZXJyb3JFbCk7XG4gICAgfVxuICB9XG5cbiAgX3NldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHRoaXMuX2lucHV0TGlzdCA9IEFycmF5LmZyb20oXG4gICAgICB0aGlzLl9mb3JtRWwucXVlcnlTZWxlY3RvckFsbCh0aGlzLl9pbnB1dFNlbGVjdG9yKVxuICAgICk7XG4gICAgdGhpcy5fYnV0dG9uRWwgPSB0aGlzLl9mb3JtRWwucXVlcnlTZWxlY3Rvcih0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3Rvcik7XG5cbiAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaCgoaW5wdXRFbCkgPT4ge1xuICAgICAgaW5wdXRFbC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuICAgICAgICB0aGlzLl9jaGVja0lucHV0VmFsaWRpdHkoaW5wdXRFbCk7XG4gICAgICAgIHRoaXMuX3RvZ2dsZUJ1dHRvbigpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICByZXNldEZvcm0oKSB7XG4gICAgLy8gdGhpcy5fZm9ybUVsLnJlc2V0KCk7XG4gICAgdGhpcy5fdG9nZ2xlQnV0dG9uKCk7XG4gIH1cblxuICBlbmFibGVWYWxpZGF0aW9uKCkge1xuICAgIHRoaXMuX2Zvcm1FbC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG4gICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgfVxufVxuXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cCB7XG4gIGNvbnN0cnVjdG9yKHBvcHVwU2VsZWN0b3IpIHtcbiAgICB0aGlzLl9wb3B1cEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBvcHVwU2VsZWN0b3IpO1xuICAgIHRoaXMuX2hhbmRsZUVzY1VwID0gdGhpcy5faGFuZGxlRXNjVXAuYmluZCh0aGlzKTtcbiAgfVxuXG4gIF9oYW5kbGVFc2NVcChldnQpIHtcbiAgICBpZiAoZXZ0LmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy5fcG9wdXBFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZ0KSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGV2dC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibW9kYWxfX3BvcHVwLWJ0blwiKSB8fFxuICAgICAgICBldnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIm1vZGFsX19wb3B1cFwiKVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG9wZW4oKSB7XG4gICAgdGhpcy5fcG9wdXBFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJtb2RhbF9vcGVuZWRcIik7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5faGFuZGxlRXNjVXApO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5fcG9wdXBFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJtb2RhbF9vcGVuZWRcIik7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5faGFuZGxlRXNjVXApO1xuICB9XG59IiwiaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aEZvcm0gZXh0ZW5kcyBQb3B1cCB7XG4gIGNvbnN0cnVjdG9yKHsgZm9ybVN1Ym1pdCB9LCBwb3B1cFNlbGVjdG9yKSB7XG4gICAgc3VwZXIocG9wdXBTZWxlY3Rvcik7XG4gICAgdGhpcy5fZm9ybVN1Ym1pdCA9IGZvcm1TdWJtaXQ7XG4gICAgdGhpcy5fZm9ybUVsID0gdGhpcy5fcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1uYW1lXCIpOyAvLy5wb3B1cF9fZm9ybVxuICB9XG5cbiAgLy9wcml2YXRlIG1ldGhvZFxuICBfZ2V0SW5wdXRWYWx1ZXMoKSB7XG4gICAgdGhpcy5fYWxsSW5wdXRGaWVsZHMgPVxuICAgICAgdGhpcy5fcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZm9ybS1uYW1lX19pbnB1dFwiKTtcbiAgICB0aGlzLl9hbGxJbnB1dEVsID0ge307XG4gICAgdGhpcy5fYWxsSW5wdXRGaWVsZHMuZm9yRWFjaCgoaW5wdXRFbCkgPT4ge1xuICAgICAgdGhpcy5fYWxsSW5wdXRFbFtpbnB1dEVsLm5hbWVdID0gaW5wdXRFbC52YWx1ZTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5fYWxsSW5wdXRFbDtcbiAgfVxuXG4gIC8vcHVibGljIG1ldGhvZFxuICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLl9mb3JtRWwuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZ0KSA9PiB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuX2Zvcm1TdWJtaXQodGhpcy5fZ2V0SW5wdXRWYWx1ZXMoKSk7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfSk7XG4gICAgc3VwZXIuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIC8vcHVibGljIG1ldGhvZFxuICBjbG9zZSgpIHtcbiAgICB0aGlzLl9mb3JtRWwucmVzZXQoKTtcbiAgICBzdXBlci5jbG9zZSgpO1xuICB9XG59XG4iLCJpbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBXaXRoSW1hZ2VzIGV4dGVuZHMgUG9wdXAge1xuICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yKSB7XG4gICAgc3VwZXIocG9wdXBTZWxlY3Rvcik7XG4gICAgdGhpcy5fbW9kYWxJbWFnZUVsZW1lbnQgPSB0aGlzLl9wb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIFwiLm1vZGFsX19wb3B1cC1pbWFnZVwiXG4gICAgKTtcbiAgICB0aGlzLl9tb2RhbENhcHRpb24gPSB0aGlzLl9wb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIFwiLm1vZGFsX19wb3B1cC1jYXB0aW9uXCJcbiAgICApO1xuICB9XG5cbiAgb3BlbihkYXRhKSB7XG4gICAgdGhpcy5fbW9kYWxJbWFnZUVsZW1lbnQuc3JjID0gZGF0YS51cmw7XG4gICAgdGhpcy5fbW9kYWxJbWFnZUVsZW1lbnQuYWx0ID0gYGltYWdlIG9mJHtkYXRhLnVybH1gO1xuICAgIHRoaXMuX21vZGFsQ2FwdGlvbi50ZXh0Q29udGVudCA9IGRhdGEudGl0bGU7XG4gICAgc3VwZXIub3BlbigpO1xuICB9XG59XG5cblxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHsgaXRlbXMsIHJlbmRlcmVyIH0sIGNvbnRhaW5lclNlbGVjdG9yKSB7XG4gICAgdGhpcy5faXRlbXMgPSBpdGVtcztcbiAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyO1xuICAgIHRoaXMuX2VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAke2NvbnRhaW5lclNlbGVjdG9yfWApO1xuICB9XG5cbiAgcmVuZGVySXRlbXMoZWxlbWVudCkge1xuICAgIGVsZW1lbnQuZm9yRWFjaCgoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5fcmVuZGVyZXIoZGF0YSk7XG4gICAgfSk7XG4gIH1cblxuICBhZGRJdGVtKGVsZW1lbnQpIHtcbiAgICB0aGlzLl9lbGVtZW50LnByZXBlbmQoZWxlbWVudCk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJJbmZvIHtcbiAgY29uc3RydWN0b3Ioe3VzZXJOYW1lLCB1c2VyRGV0YWlsfSkge1xuICAgIHRoaXMuX3VzZXJOYW1lID0gdXNlck5hbWU7XG4gICAgdGhpcy5fdXNlckRldGFpbCA9IHVzZXJEZXRhaWw7XG4gIH07XG5cbiAgZ2V0VXNlckluZm8oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVzZXJQcm9maWxlTmFtZTogdGhpcy5fdXNlck5hbWUudGV4dENvbnRlbnQsXG4gICAgICB1c2VyUHJvZmlsZURldGFpbDogdGhpcy5fdXNlckRldGFpbC50ZXh0Q29udGVudFxuICAgIH07XG4gIH1cblxuICBzZXRVc2VySW5mbyggdXNlck5hbWUsIHVzZXJEZXRhaWwpIHtcbiAgICB0aGlzLl91c2VyTmFtZS50ZXh0Q29udGVudCA9IHVzZXJOYW1lO1xuICAgIHRoaXMuX3VzZXJEZXRhaWwudGV4dENvbnRlbnQgPSB1c2VyRGV0YWlsO1xuICB9XG59XG4iLCJcbmV4cG9ydCBjb25zdCBpbml0aWFsQ2FyZHMgPSBbXG4gIHtcbiAgICAvL05BTUVcbiAgICB0aXRsZTogXCJMYWtlICYgTW91bnRhaW5cIixcbiAgICAvL0xJTktcbiAgICB1cmw6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE2Mzg4MDI0MjI2MzMtNjk0MDg4NjgwMzU5P2l4bGliPXJiLTEuMi4xJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz02ODcmcT04MFwiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiTGFrZSBMb3Vpc2VcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUvbGFrZS1sb3Vpc2UuanBnXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJCYWxkIE1vdW50YWluc1wiLFxuICAgIHVybDogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS9iYWxkLW1vdW50YWlucy5qcGdcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkxhdGVtYXJcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUvbGF0ZW1hci5qcGdcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIlZhbm9pc2UgTmF0aW9uYWwgUGFya1wiLFxuICAgIHVybDogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS92YW5vaXNlLmpwZ1wiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiTGFnbyBkaSBicmFpZXNcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUvbGFnby5qcGdcIixcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBmb3JtVmFsaWRhdG9yQ29uZmlnID0ge1xuICBpbnB1dFNlbGVjdG9yOiBcIi5mb3JtLW5hbWVfX2lucHV0XCIsXG4gIHN1Ym1pdEJ1dHRvblNlbGVjdG9yOiBcIi5mb3JtLW5hbWVfX3NhdmUtYnV0dG9uXCIsXG4gIGluYWN0aXZlQnV0dG9uQ2xhc3M6IFwiZm9ybS1uYW1lX19zYXZlLWJ1dHRvbl9kaXNhYmxlZFwiLFxuICBpbnB1dEVycm9yQ2xhc3M6IFwiZm9ybS1uYW1lX19tb2RhbC10eXBlX2Vycm9yXCIsXG4gIGVycm9yQ2xhc3M6IFwibW9kYWxfX3BvcHVwX19lcnJvcl92aXNpYmxlXCIsXG59O1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0b3JzID0ge1xuICBjYXJkU2VjdGlvbjogXCIuZWxlbWVudHMtZ3JpZF9fY2FyZHNcIiwgLy9jYXJkIGxpc3RcbiAgY2FyZFRlbXBsYXRlOiBcIiNjYXJkLXRlbXBsYXRlXCIsIC8vY2FyZCB0ZW1wbGF0ZVxuICBwcmV2aWV3UG9wdXA6IFwiI2ltYWdlLXBvcHVwXCIsIC8vIGNhcmQgaW1hZ2UgcG9wdXAgcHJldmlld1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZENhcmRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX3BsdXMtYnV0dG9uXCIpO1xuZXhwb3J0IGNvbnN0IGVkaXRGb3JtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19lZGl0LWJ1dHRvblwiKTtcbmV4cG9ydCBjb25zdCBjbG9zZUNhcmRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nsb3NlLWNhcmQtcG9wdXBcIik7XG5leHBvcnQgY29uc3QgY2xvc2VJbWFnZVByZXZpZXdCdXR0b24gPVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nsb3NlLWltYWdlLXBvcHVwXCIpO1xuZXhwb3J0IGNvbnN0IGNsb3NlUHJvZmlsZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gIFwiI2Nsb3NlLXByb2ZpbGUtcG9wdXBcIlxuKTtcblxuZXhwb3J0IGNvbnN0IHByb1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX190aXRsZVwiKTtcbmV4cG9ydCBjb25zdCBwcm9TdWJUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fc3VidGl0bGVcIik7XG5cbmV4cG9ydCBjb25zdCBpbWFnZVBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbWFnZS1wb3B1cFwiKTtcbmV4cG9ydCBjb25zdCBtb2RhbEltYWdlRWxlbWVudCA9IGltYWdlUG9wdXAucXVlcnlTZWxlY3RvcihcbiAgXCIubW9kYWxfX3BvcHVwLWltYWdlXCJcbik7XG5leHBvcnQgY29uc3QgbW9kYWxDYXB0aW9uID0gaW1hZ2VQb3B1cC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19wb3B1cC1jYXB0aW9uXCIpO1xuXG5leHBvcnQgY29uc3QgcHJvTW9kYWxOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsaXN0LXRpdGxlXCIpO1xuZXhwb3J0IGNvbnN0IHByb01vZGFsV29yayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbGlzdC1zdWJ0aXRsZVwiKTtcblxuZXhwb3J0IGNvbnN0IG1vZGFsQ2FyZFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYXJkLXRpdGxlXCIpO1xuZXhwb3J0IGNvbnN0IG1vZGFsQ2FyZFVybCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FyZC11cmxcIik7XG5cbmV4cG9ydCBjb25zdCBhZGRGb3JtRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1jYXJkLXBvcHVwXCIpO1xuZXhwb3J0IGNvbnN0IGVkaXRGb3JtRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXQtcHJvZmlsZS1wb3B1cFwiKTtcblxuXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5cbi8vaW1wb3J0IGFsbCBjbGFzc2VzXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkXCI7XG5pbXBvcnQgRm9ybVZhbGlkYXRvciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yXCI7XG5pbXBvcnQgUG9wdXBXaXRoSW1hZ2VzIGZyb20gXCIuLi9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlc1wiO1xuaW1wb3J0IFBvcHVwV2l0aEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybVwiO1xuaW1wb3J0IFNlY3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VjdGlvblwiO1xuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCIuLi9jb21wb25lbnRzL1VzZXJJbmZvXCI7XG5pbXBvcnQge1xuICBpbml0aWFsQ2FyZHMsXG4gIGZvcm1WYWxpZGF0b3JDb25maWcsXG4gIHNlbGVjdG9ycyxcbiAgYWRkQ2FyZEJ0bixcbiAgZWRpdEZvcm1CdG4sXG4gIHByb1RpdGxlLFxuICBwcm9TdWJUaXRsZSxcbiAgcHJvTW9kYWxXb3JrLFxuICBwcm9Nb2RhbE5hbWUsXG4gIGFkZEZvcm1FbCxcbiAgZWRpdEZvcm1FbCxcbiAgbW9kYWxDYXJkVGl0bGUsXG4gIG1vZGFsQ2FyZFVybCxcbiAgbW9kYWxJbWFnZUVsZW1lbnQsXG4gIG1vZGFsQ2FwdGlvbixcbn0gZnJvbSBcIi4uL3V0aWxzL2NvbnN0YW50c1wiO1xuXG5jb25zdCBmb3JtUHJvZmlsZURldGFpbCA9IG5ldyBVc2VySW5mbyh7XG4gIHVzZXJOYW1lOiBwcm9UaXRsZSxcbiAgdXNlckRldGFpbDogcHJvU3ViVGl0bGUsXG59KTtcblxuY29uc3QgQ2FyZFNlY3Rpb24gPSBuZXcgU2VjdGlvbihcbiAge1xuICAgIGRhdGE6IGluaXRpYWxDYXJkcyxcbiAgICByZW5kZXJlcjogKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGNhcmRFbCA9IG5ldyBDYXJkKFxuICAgICAgICB7XG4gICAgICAgICAgZGF0YTogaXRlbSxcbiAgICAgICAgICBoYW5kbGVDYXJkUHJldmlldzogKGltZ0RhdGEpID0+IHtcbiAgICAgICAgICAgIENhcmRQcmV2aWV3UG9wdXAub3BlbihpbWdEYXRhKTtcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBjYXJkRGlzcGxheVxuICAgICAgKTtcbiAgICAgIENhcmRTZWN0aW9uLmFkZEl0ZW0oY2FyZEVsLnJlbmRlcigpKTtcbiAgICB9LFxuICB9LFxuICBzZWxlY3RvcnMuY2FyZFNlY3Rpb25cbik7XG5cbmNvbnN0IENhcmRQcmV2aWV3UG9wdXAgPSBuZXcgUG9wdXBXaXRoSW1hZ2VzKHNlbGVjdG9ycy5wcmV2aWV3UG9wdXApO1xuY29uc3QgY2FyZERpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9ycy5jYXJkVGVtcGxhdGUpO1xuXG4vL1Byb2ZpbGUgbW9kYWxcbmNvbnN0IGZvcm1Qcm9maWxlTmFtZSA9IG5ldyBQb3B1cFdpdGhGb3JtKFxuICB7XG4gICAgZm9ybVN1Ym1pdDogKHsgdXNlck5hbWUsIHVzZXJEZXRhaWwgfSkgPT4ge1xuICAgICAgZm9ybVByb2ZpbGVEZXRhaWwuc2V0VXNlckluZm8odXNlck5hbWUsIHVzZXJEZXRhaWwpO1xuICAgIH0sXG4gIH0sXG4gIFwiI2VkaXQtcHJvZmlsZS1wb3B1cFwiXG4pO1xuXG4vL0NhcmQgbW9kYWxcbmNvbnN0IGZvcm1Qcm9maWxlQ2FyZCA9IG5ldyBQb3B1cFdpdGhGb3JtKFxuICB7XG4gICAgZm9ybVN1Ym1pdDogKGRhdGEsIGNhcmRUZW1wbGF0ZSkgPT4ge1xuICAgICAgY29uc3QgY2FyZEVsID0gbmV3IENhcmQoXG4gICAgICAgIHtcbiAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgIGhhbmRsZUNhcmRQcmV2aWV3OiAoaW1nRGF0YSkgPT4ge1xuICAgICAgICAgICAgQ2FyZFByZXZpZXdQb3B1cC5vcGVuKGltZ0RhdGEpO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGNhcmREaXNwbGF5XG4gICAgICApO1xuICAgICAgQ2FyZFNlY3Rpb24uYWRkSXRlbShjYXJkRWwucmVuZGVyKGRhdGEsIGNhcmRUZW1wbGF0ZSkpO1xuICAgIH0sXG4gIH0sXG4gIFwiI2FkZC1jYXJkLXBvcHVwXCJcbik7XG5cbmZvcm1Qcm9maWxlTmFtZS5zZXRFdmVudExpc3RlbmVycygpO1xuZm9ybVByb2ZpbGVDYXJkLnNldEV2ZW50TGlzdGVuZXJzKCk7XG5DYXJkUHJldmlld1BvcHVwLnNldEV2ZW50TGlzdGVuZXJzKCk7XG5DYXJkU2VjdGlvbi5yZW5kZXJJdGVtcyhpbml0aWFsQ2FyZHMpO1xuXG4vL2FkZCBjYXJkIGJ1dHRvblxuYWRkQ2FyZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBtb2RhbENhcmRUaXRsZS52YWx1ZSA9IG1vZGFsSW1hZ2VFbGVtZW50LnRleHRDb250ZW50O1xuICBtb2RhbENhcmRVcmwudmFsdWUgPSBtb2RhbENhcHRpb24uc3JjO1xuICBmb3JtUHJvZmlsZUNhcmQub3BlbigpO1xuICBhZGRGb3JtVmFsaWRhdG9yLnJlc2V0Rm9ybSgpO1xufSk7XG5cbi8vL3Byb2ZpbGUgZWRpdCBidXR0b25cbmVkaXRGb3JtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGZvcm1Qcm9maWxlTmFtZS5vcGVuKCk7XG4gIGNvbnN0IGFjdGl2ZVVzZXIgPSBmb3JtUHJvZmlsZURldGFpbC5nZXRVc2VySW5mbygpO1xuICBwcm9Nb2RhbE5hbWUudmFsdWUgPSBhY3RpdmVVc2VyLnVzZXJQcm9maWxlTmFtZTtcbiAgcHJvTW9kYWxXb3JrLnZhbHVlID0gYWN0aXZlVXNlci51c2VyUHJvZmlsZURldGFpbDtcbiAgZWRpdEZvcm1WYWxpZGF0b3IucmVzZXRGb3JtKCk7XG59KTtcblxuY29uc3QgYWRkRm9ybVZhbGlkYXRvciA9IG5ldyBGb3JtVmFsaWRhdG9yKGZvcm1WYWxpZGF0b3JDb25maWcsIGFkZEZvcm1FbCk7XG5hZGRGb3JtVmFsaWRhdG9yLmVuYWJsZVZhbGlkYXRpb24oKTtcbmNvbnN0IGVkaXRGb3JtVmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3IoZm9ybVZhbGlkYXRvckNvbmZpZywgZWRpdEZvcm1FbCk7XG5lZGl0Rm9ybVZhbGlkYXRvci5lbmFibGVWYWxpZGF0aW9uKCk7XG5cbiJdLCJuYW1lcyI6WyJDYXJkIiwiZGF0YSIsInRlbXBsYXRlIiwiX3RlbXBsYXRlIiwiY29udGVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbG9uZU5vZGUiLCJfY2FyZExpa2VCdXR0b24iLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJfZWxlbWVudCIsInJlbW92ZSIsImVsZW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZ0IiwiX2hhbmRsZUxpa2VJY29uIiwiX2RlbGV0ZUNhcmQiLCJfaGFuZGxlRGVsZXRlQ2FyZCIsIl9pbWFnZUVsZW1lbnQiLCJfaGFuZGxlQ2FyZFByZXZpZXciLCJ1cmwiLCJfZGF0YSIsInRpdGxlIiwiX2dldEVsZW1lbnQiLCJfdGl0bGVFbGVtZW50Iiwic3JjIiwiX3VybCIsImFsdCIsInRleHRDb250ZW50IiwiX3RpdGxlIiwiX3NldEV2ZW50TGlzdGVuZXJzIiwiaGFuZGxlQ2FyZFByZXZpZXciLCJGb3JtVmFsaWRhdG9yIiwic2V0dGluZ3MiLCJmb3JtRWwiLCJfaW5wdXRTZWxlY3RvciIsImlucHV0U2VsZWN0b3IiLCJfc3VibWl0QnV0dG9uU2VsZWN0b3IiLCJzdWJtaXRCdXR0b25TZWxlY3RvciIsIl9pbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiaW5hY3RpdmVCdXR0b25DbGFzcyIsIl9pbnB1dEVycm9yQ2xhc3MiLCJpbnB1dEVycm9yQ2xhc3MiLCJfZXJyb3JDbGFzcyIsImVycm9yQ2xhc3MiLCJfZm9ybUVsIiwiaW5wdXRFbCIsInZhbGlkaXR5IiwidmFsaWQiLCJlcnJvckVsIiwiaWQiLCJhZGQiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsIl9pbnB1dExpc3QiLCJzb21lIiwiX2lzSW52YWxpZElucHV0IiwiX2J1dHRvbkVsIiwiZGlzYWJsZWQiLCJfc2hvd0Vycm9yIiwiX2hpZGVFcnJvciIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiX2NoZWNrSW5wdXRWYWxpZGl0eSIsIl90b2dnbGVCdXR0b24iLCJlIiwicHJldmVudERlZmF1bHQiLCJQb3B1cCIsInBvcHVwU2VsZWN0b3IiLCJfcG9wdXBFbGVtZW50IiwiZG9jdW1lbnQiLCJfaGFuZGxlRXNjVXAiLCJiaW5kIiwia2V5IiwiY2xvc2UiLCJ0YXJnZXQiLCJjb250YWlucyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJQb3B1cFdpdGhGb3JtIiwiZm9ybVN1Ym1pdCIsIl9mb3JtU3VibWl0IiwiX2FsbElucHV0RmllbGRzIiwiX2FsbElucHV0RWwiLCJuYW1lIiwidmFsdWUiLCJfZ2V0SW5wdXRWYWx1ZXMiLCJyZXNldCIsIlBvcHVwV2l0aEltYWdlcyIsIl9tb2RhbEltYWdlRWxlbWVudCIsIl9tb2RhbENhcHRpb24iLCJTZWN0aW9uIiwiY29udGFpbmVyU2VsZWN0b3IiLCJpdGVtcyIsInJlbmRlcmVyIiwiX2l0ZW1zIiwiX3JlbmRlcmVyIiwicHJlcGVuZCIsIlVzZXJJbmZvIiwidXNlck5hbWUiLCJ1c2VyRGV0YWlsIiwiX3VzZXJOYW1lIiwiX3VzZXJEZXRhaWwiLCJ1c2VyUHJvZmlsZU5hbWUiLCJ1c2VyUHJvZmlsZURldGFpbCIsImluaXRpYWxDYXJkcyIsImZvcm1WYWxpZGF0b3JDb25maWciLCJzZWxlY3RvcnMiLCJjYXJkU2VjdGlvbiIsImNhcmRUZW1wbGF0ZSIsInByZXZpZXdQb3B1cCIsImFkZENhcmRCdG4iLCJlZGl0Rm9ybUJ0biIsImNsb3NlQ2FyZEJ1dHRvbiIsImNsb3NlSW1hZ2VQcmV2aWV3QnV0dG9uIiwiY2xvc2VQcm9maWxlQnV0dG9uIiwicHJvVGl0bGUiLCJwcm9TdWJUaXRsZSIsImltYWdlUG9wdXAiLCJtb2RhbEltYWdlRWxlbWVudCIsIm1vZGFsQ2FwdGlvbiIsInByb01vZGFsTmFtZSIsInByb01vZGFsV29yayIsIm1vZGFsQ2FyZFRpdGxlIiwibW9kYWxDYXJkVXJsIiwiYWRkRm9ybUVsIiwiZWRpdEZvcm1FbCIsImZvcm1Qcm9maWxlRGV0YWlsIiwiQ2FyZFNlY3Rpb24iLCJpdGVtIiwiY2FyZEVsIiwiaW1nRGF0YSIsIkNhcmRQcmV2aWV3UG9wdXAiLCJvcGVuIiwiY2FyZERpc3BsYXkiLCJhZGRJdGVtIiwicmVuZGVyIiwiZm9ybVByb2ZpbGVOYW1lIiwic2V0VXNlckluZm8iLCJmb3JtUHJvZmlsZUNhcmQiLCJzZXRFdmVudExpc3RlbmVycyIsInJlbmRlckl0ZW1zIiwiYWRkRm9ybVZhbGlkYXRvciIsInJlc2V0Rm9ybSIsImFjdGl2ZVVzZXIiLCJnZXRVc2VySW5mbyIsImVkaXRGb3JtVmFsaWRhdG9yIiwiZW5hYmxlVmFsaWRhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=