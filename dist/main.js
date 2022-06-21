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

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

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
        _this._handleCardPreview({
          url: _this._data.url,
          title: _this._data.title
        });
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
}(_Popup__WEBPACK_IMPORTED_MODULE_0__["default"]);



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
        _this2._allInputEl[inputEl.name] = _this2._allInputEl[inputEl.value]; // this._allInputEl.name = inputEl.name,
        // this._allInputEl.value = inputEl.value,
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
      console.log("get--User---Info");
      console.log(this._userName.textContent);
      console.log(this._userDetail.textContent);
      return {
        userProfileName: this._userName.textContent,
        userProfileDetail: this._userDetail.textContent
      };
    }
  }, {
    key: "setUserInfo",
    value: function setUserInfo(userName, userDetail) {
      console.log("set--User---Info");
      console.log(this._userName.textContent);
      console.log(this._userDetail.textContent);
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
}); // const newCard = (data) => {
//   const cardEls = new Card(
//     {
//       data,
//       handleCardPreview: () => {
//         CardPreviewPopup.open(imgData);
//       },
//     },
//     selectors.cardTemplate,
//   );
//   return cardEls.render();
// }

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
  formSubmit: function formSubmit(cardTemplate, data) {
    var cardEl = new _components_Card__WEBPACK_IMPORTED_MODULE_1__["default"](cardTemplate, data);
    CardSection.addCardToPage(cardEl.render(data));
  }
}, "#add-card-popup"); // const editFormValidator = new FormValidator(
//   formValidatorConfig,
//   selectors.previewPopup
//   );
// const addFormValidator = new FormValidator(
//   formValidatorConfig,
//   selectors.previewPopup
//   );

formProfileName.setEventListeners();
formProfileCard.setEventListeners();
CardPreviewPopup.setEventListeners();
CardSection.renderItems(_utils_constants__WEBPACK_IMPORTED_MODULE_7__.initialCards); //add card button

_utils_constants__WEBPACK_IMPORTED_MODULE_7__.addCardBtn.addEventListener('click', function () {
  formProfileCard.open(); // addFormValidator.resetForm();
}); ///profile edit button

_utils_constants__WEBPACK_IMPORTED_MODULE_7__.editFormBtn.addEventListener('click', function () {
  var activeUser = formProfileDetail.getUserInfo();
  console.log(activeUser);
  _utils_constants__WEBPACK_IMPORTED_MODULE_7__.proModalName.value = activeUser.userProfileName;
  _utils_constants__WEBPACK_IMPORTED_MODULE_7__.proModalWork.value = activeUser.userProfileDetail;
  formProfileName.open(); // proTitle.value = activeUser.userName;
  // proSubTitle.value = activeUser.userDetail;
  // proModalName.value = activeUser.userName;
  // proModalMission.value = activeUser.userDetail;
  //  editFormValidator.resetForm();
});
var addFormValidator = new _components_FormValidator__WEBPACK_IMPORTED_MODULE_2__["default"](_utils_constants__WEBPACK_IMPORTED_MODULE_7__.formValidatorConfig, _utils_constants__WEBPACK_IMPORTED_MODULE_7__.addFormEl);
addFormValidator.enableValidation();
var editFormValidator = new _components_FormValidator__WEBPACK_IMPORTED_MODULE_2__["default"](_utils_constants__WEBPACK_IMPORTED_MODULE_7__.formValidatorConfig, _utils_constants__WEBPACK_IMPORTED_MODULE_7__.editFormEl);
editFormValidator.enableValidation();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixHQUwwQyxDQU0xQztFQUNBO0VBQ0E7RUFDQTtFQUNEO0FBQ0csQ0FYSjtBQWFFLElBQU1ZLGdCQUFnQixHQUFHLElBQUlqSCxpRUFBSixDQUFrQjBFLGlFQUFsQixFQUF1Q21CLHVEQUF2QyxDQUF6QjtBQUNBb0IsZ0JBQWdCLENBQUNDLGdCQUFqQjtBQUNBLElBQU1DLGlCQUFpQixHQUFHLElBQUluSCxpRUFBSixDQUFrQjBFLGlFQUFsQixFQUF1Q29CLHdEQUF2QyxDQUExQjtBQUNBcUIsaUJBQWlCLENBQUNELGdCQUFsQixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3ByaW50LTgvLi9zcmMvY29tcG9uZW50cy9DYXJkLmpzIiwid2VicGFjazovL3NwcmludC04Ly4vc3JjL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly9zcHJpbnQtOC8uL3NyYy9jb21wb25lbnRzL1BvcHVwLmpzIiwid2VicGFjazovL3NwcmludC04Ly4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybS5qcyIsIndlYnBhY2s6Ly9zcHJpbnQtOC8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlcy5qcyIsIndlYnBhY2s6Ly9zcHJpbnQtOC8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vc3ByaW50LTgvLi9zcmMvY29tcG9uZW50cy9Vc2VySW5mby5qcyIsIndlYnBhY2s6Ly9zcHJpbnQtOC8uL3NyYy91dGlscy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vc3ByaW50LTgvLi9zcmMvcGFnZXMvaW5kZXguY3NzIiwid2VicGFjazovL3NwcmludC04L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NwcmludC04L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zcHJpbnQtOC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NwcmludC04L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc3ByaW50LTgvLi9zcmMvcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwXCI7XG5cbi8vZGVjb25zdHJ1Y3RcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmQgZXh0ZW5kcyBQb3B1cCB7XG4gIGNvbnN0cnVjdG9yKHtkYXRhLCBoYW5kbGVDYXJkUHJldmlld30sIHRlbXBsYXRlLCBwb3B1cFNlbGVjdG9yKSB7XG4gICAgLy8gY29uc3RydWN0b3Ioe2RhdGEsIGhhbmRsZUNhcmRQcmV2aWV3LCBoYW5kbGVDYXJkQ2xpY2t9LCB0ZW1wbGF0ZSwgcG9wdXBTZWxlY3Rvcikge1xuICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpO1xuICAgIHRoaXMuX3RlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgdGhpcy5fZGF0YSA9IGRhdGE7XG4gICAgdGhpcy5fdGl0bGUgPSBkYXRhLnRpdGxlO1xuICAgIHRoaXMuX3VybCA9IGRhdGEudXJsO1xuICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsO1xuICAgIHRoaXMuX2hhbmRsZUNhcmRQcmV2aWV3ID0gaGFuZGxlQ2FyZFByZXZpZXc7XG4gICAgLy8gdGhpcy5faGFuZGxlQ2FyZENsaWNrID0gaGFuZGxlQ2FyZENsaWNrO1xuICB9XG5cbiAgLy8gQ2FyZCB0ZW1wbGF0ZVxuICBfZ2V0RWxlbWVudCA9ICgpID0+IHtcbiAgICAgcmV0dXJuIHRoaXMuX3RlbXBsYXRlLmNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5lbGVtZW50cy1ncmlkX19jYXJkXCIpLmNsb25lTm9kZSh0cnVlKTtcbiAgICAvLyB0aGlzLl9lbGVtZW50ID0gdGhpcy5fdGVtcGxhdGUuY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRzLWdyaWRfX2NhcmRcIikuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICAvLyByZXR1cm4gdGhpcy5fZWxlbWVudDtcbiAgfVxuXG4gIC8vQ2FyZCBwcmV2aWV3IGhhbmRsZXIgd2hlbiBjbGlja2VkIG9uXG4gIC8vIF9oYW5kbGVDYXJkUHJldmlldyA9ICgpID0+IHtcbiAgLy8gICAvLyBtb2RhbEltYWdlRWxlbWVudC5zcmMgPSB0aGlzLl91cmw7XG4gIC8vICAgLy8gbW9kYWxDYXB0aW9uLnRleHRDb250ZW50ID0gdGhpcy5fdGl0bGU7XG4gIC8vICAgLy8gbW9kYWxJbWFnZUVsZW1lbnQuYWx0ID1gaW1hZ2Ugb2Yke3VybH1gO1xuXG4gIC8vICAgb3BlblBvcHVwKGltYWdlUG9wdXApO1xuICAvLyB9O1xuXG4gIC8vQ2FyZCBsaWtlIGhhbmRsZXIvdG9nZ2xlclxuICBfaGFuZGxlTGlrZUljb24gPSAoKSA9PiB7XG4gICAgdGhpcy5fY2FyZExpa2VCdXR0b24uY2xhc3NMaXN0XG4gICAgLnRvZ2dsZShcImVsZW1lbnRzLWdyaWRfX2ljb24tYWN0aXZlXCIpO1xuICB9O1xuXG4gIC8vQ2FyZCByZW1vdmFsIGhhbmRsZXJcbiAgX2hhbmRsZURlbGV0ZUNhcmQgPSAoKSA9PiB7XG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmUoKTtcbiAgICB0aGlzLmVsZW1lbnQgPSBudWxsO1xuICB9O1xuXG4gIC8vRXZlbnQgbGlzdGVuZXJzXG4gIF9zZXRFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgICB0aGlzLl9jYXJkTGlrZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2dCkgPT4geyAvL2NhcmQgbGlrZSBldmVudCBsaXN0ZW5lclxuICAgICAgdGhpcy5faGFuZGxlTGlrZUljb24oZXZ0KTtcbiAgICB9KTtcbiAgICB0aGlzLl9kZWxldGVDYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZ0KSA9PiB7IC8vY2FyZCBkZWxldGUgZXZlbnQgbGlzdGVuZXJcbiAgICAgIHRoaXMuX2hhbmRsZURlbGV0ZUNhcmQoZXZ0KTtcbiAgICB9KTtcbiAgICB0aGlzLl9pbWFnZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldnQpID0+IHsgLy9jYXJkIHByZXZpZXcgZXZlbnQgbGlzdGVuZXJcbiAgICAgIHRoaXMuX2hhbmRsZUNhcmRQcmV2aWV3KHt1cmw6dGhpcy5fZGF0YS51cmwsIHRpdGxlOiB0aGlzLl9kYXRhLnRpdGxlfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgLy9UZW1wbGF0ZSBkaXNwbGF5aW5nXG4gIHJlbmRlciA9ICgpID0+IHtcbiAgICB0aGlzLl9lbGVtZW50ID0gdGhpcy5fZ2V0RWxlbWVudCgpO1xuICAgIHRoaXMuX2ltYWdlRWxlbWVudCA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbGVtZW50cy1ncmlkX19pbWFnZVwiKTtcbiAgICB0aGlzLl90aXRsZUVsZW1lbnQgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWxlbWVudHMtZ3JpZF9fdGV4dFwiKTtcbiAgICB0aGlzLl9pbWFnZUVsZW1lbnQuc3JjID0gdGhpcy5fdXJsO1xuICAgIHRoaXMuX2ltYWdlRWxlbWVudC5hbHQgPSB0aGlzLl91cmw7XG4gICAgdGhpcy5fdGl0bGVFbGVtZW50LnRleHRDb250ZW50ID0gdGhpcy5fdGl0bGU7XG4gICAgdGhpcy5fZGVsZXRlQ2FyZCA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbGVtZW50cy1ncmlkX19kZWxldGUtYnV0dG9uXCIpO1xuICAgIHRoaXMuX2NhcmRMaWtlQnV0dG9uID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRzLWdyaWRfX2ljb25cIik7XG4gICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudDtcbiAgfTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1WYWxpZGF0b3Ige1xuICBjb25zdHJ1Y3RvcihzZXR0aW5ncywgZm9ybUVsKSB7XG4gICAgdGhpcy5faW5wdXRTZWxlY3RvciA9IHNldHRpbmdzLmlucHV0U2VsZWN0b3I7XG4gICAgdGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IgPSBzZXR0aW5ncy5zdWJtaXRCdXR0b25TZWxlY3RvcjtcbiAgICB0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzID0gc2V0dGluZ3MuaW5hY3RpdmVCdXR0b25DbGFzcztcbiAgICB0aGlzLl9pbnB1dEVycm9yQ2xhc3MgPSBzZXR0aW5ncy5pbnB1dEVycm9yQ2xhc3M7XG4gICAgdGhpcy5fZXJyb3JDbGFzcyA9IHNldHRpbmdzLmVycm9yQ2xhc3M7XG4gICAgdGhpcy5fZm9ybUVsID0gZm9ybUVsO1xuICB9XG5cbiAgX2lzSW52YWxpZElucHV0KGlucHV0RWwpIHtcbiAgICByZXR1cm4gIWlucHV0RWwudmFsaWRpdHkudmFsaWQ7XG4gIH1cblxuICBfc2hvd0Vycm9yKGlucHV0RWwpIHtcbiAgICBjb25zdCBlcnJvckVsID0gdGhpcy5fZm9ybUVsLnF1ZXJ5U2VsZWN0b3IoYCMke2lucHV0RWwuaWR9YCk7XG4gICAgZXJyb3JFbC5jbGFzc0xpc3QuYWRkKHRoaXMuX2Vycm9yQ2xhc3MpO1xuICAgIGVycm9yRWwudGV4dENvbnRlbnQgPSBpbnB1dEVsLnZhbGlkYXRpb25NZXNzYWdlO1xuICAgIGlucHV0RWwuY2xhc3NMaXN0LmFkZCh0aGlzLl9pbnB1dEVycm9yQ2xhc3MpO1xuICB9XG5cbiAgX2hpZGVFcnJvcihpbnB1dEVsKSB7XG4gICAgY29uc3QgZXJyb3JFbCA9IHRoaXMuX2Zvcm1FbC5xdWVyeVNlbGVjdG9yKGAjJHtpbnB1dEVsLmlkfWApO1xuICAgIGVycm9yRWwuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9lcnJvckNsYXNzKTtcbiAgICBlcnJvckVsLnRleHRDb250ZW50ID0gJyAnO1xuICAgIGlucHV0RWwuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9pbnB1dEVycm9yQ2xhc3MpO1xuICB9XG5cbiAgX3RvZ2dsZUJ1dHRvbigpIHtcbiAgICBpZiAodGhpcy5faW5wdXRMaXN0LnNvbWUodGhpcy5faXNJbnZhbGlkSW5wdXQpKSB7XG4gICAgICB0aGlzLl9idXR0b25FbC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICB0aGlzLl9idXR0b25FbC5jbGFzc0xpc3RcbiAgICAgIC5hZGQodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2J1dHRvbkVsLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICB0aGlzLl9idXR0b25FbC5jbGFzc0xpc3RcbiAgICAgIC5yZW1vdmUodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgX2NoZWNrSW5wdXRWYWxpZGl0eShpbnB1dEVsKSB7XG4gICAgY29uc3QgZXJyb3JFbCA9IHRoaXMuX2Zvcm1FbC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYCMke2lucHV0RWwuaWR9LWVycm9yYCk7XG4gICAgaWYgKHRoaXMuX2lzSW52YWxpZElucHV0KGlucHV0RWwpKSB7XG4gICAgICB0aGlzLl9zaG93RXJyb3IoZXJyb3JFbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2hpZGVFcnJvcihlcnJvckVsKTtcbiAgICB9XG4gIH1cblxuICBfc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy5faW5wdXRMaXN0ID0gQXJyYXkuZnJvbSh0aGlzLl9mb3JtRWwucXVlcnlTZWxlY3RvckFsbCh0aGlzLl9pbnB1dFNlbGVjdG9yKSk7XG4gICAgdGhpcy5fYnV0dG9uRWwgPSB0aGlzLl9mb3JtRWwucXVlcnlTZWxlY3Rvcih0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3Rvcik7XG5cbiAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaCgoaW5wdXRFbCkgPT4ge1xuICAgICAgaW5wdXRFbC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuICAgICAgICB0aGlzLl9jaGVja0lucHV0VmFsaWRpdHkoaW5wdXRFbCk7XG4gICAgICAgIHRoaXMuX3RvZ2dsZUJ1dHRvbigpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICByZXNldEZvcm0oKSB7XG4gICAgLy8gdGhpcy5fZm9ybUVsLnJlc2V0KCk7XG4gICAgY29uc29sZS5sb2coMzMzMzMzKTtcbiAgICBjb25zb2xlLmxvZyg0NDQ0NDQ0KTtcbiAgICB0aGlzLl90b2dnbGVCdXR0b24oKTtcbiAgfVxuXG4gIGVuYWJsZVZhbGlkYXRpb24oKSB7XG4gICAgdGhpcy5fZm9ybUVsLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycygpO1xuICB9XG59O1xuXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cCB7XG4gICAgY29uc3RydWN0b3IocG9wdXBTZWxlY3Rvcil7XG4gICAgICAgIHRoaXMuX3BvcHVwRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocG9wdXBTZWxlY3Rvcik7XG4gICAgICAgIHRoaXMuX2hhbmRsZUVzY1VwID0gdGhpcy5faGFuZGxlRXNjVXAuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBfaGFuZGxlRXNjVXAoZXZ0KSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmIChldnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICAgIC8vIGNsb3NlUG9wdXAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9vcGVuZWRcIikpO1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICB0aGlzLl9wb3B1cEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldnQpID0+IHtcbiAgICAgICAgaWYoXG4gICAgICAgICAgZXZ0LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJtb2RhbF9fcG9wdXAtYnRuXCIpIHx8ICBldnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIm1vZGFsX19wb3B1cFwiKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIG9wZW4oKXtcbiAgICAgIHRoaXMuX3BvcHVwRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibW9kYWxfb3BlbmVkXCIpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5faGFuZGxlRXNjVXApO1xuICAgIH1cblxuICAgIGNsb3NlKCl7XG4gICAgICB0aGlzLl9wb3B1cEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcIm1vZGFsX29wZW5lZFwiKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuX2hhbmRsZUVzY1VwKTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFdpdGhGb3JtIGV4dGVuZHMgUG9wdXAge1xuICBjb25zdHJ1Y3Rvcih7Zm9ybVN1Ym1pdH0sIHBvcHVwU2VsZWN0b3Ipe1xuICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpO1xuICAgIHRoaXMuX2Zvcm1TdWJtaXQgPSBmb3JtU3VibWl0O1xuICAgIHRoaXMuX2Zvcm1FbCA9IHRoaXMuX3BvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tbmFtZVwiKTsgLy8ucG9wdXBfX2Zvcm1cbiAgfVxuXG4gIC8vcHJpdmF0ZSBtZXRob2RcbiAgX2dldElucHV0VmFsdWVzKCl7XG4gICAgdGhpcy5fYWxsSW5wdXRGaWVsZHMgPSB0aGlzLl9wb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mb3JtLW5hbWVfX2lucHV0XCIpO1xuICAgIHRoaXMuX2FsbElucHV0RWwgPSB7fTtcbiAgICB0aGlzLl9hbGxJbnB1dEZpZWxkcy5mb3JFYWNoKChpbnB1dEVsKSA9PiB7XG4gICAgICAgICAgdGhpcy5fYWxsSW5wdXRFbFtpbnB1dEVsLm5hbWVdID0gdGhpcy5fYWxsSW5wdXRFbFtpbnB1dEVsLnZhbHVlXVxuICAgICAgICAgIC8vIHRoaXMuX2FsbElucHV0RWwubmFtZSA9IGlucHV0RWwubmFtZSxcbiAgICAgICAgICAvLyB0aGlzLl9hbGxJbnB1dEVsLnZhbHVlID0gaW5wdXRFbC52YWx1ZSxcbiAgfSk7XG4gICAgcmV0dXJuIHRoaXMuX2FsbElucHV0RWw7XG4gIH1cblxuICAvL3B1YmxpYyBtZXRob2RcbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy5fZm9ybUVsLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2dCkgPT4ge1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuX2Zvcm1TdWJtaXQodGhpcy5fZ2V0SW5wdXRWYWx1ZXMoKSk7XG4gICAgdGhpcy5jbG9zZSgpO1xuICAgIH0pO1xuICAgIHN1cGVyLnNldEV2ZW50TGlzdGVuZXJzKCk7XG4gIH07XG5cbiAgLy9wdWJsaWMgbWV0aG9kXG4gIGNsb3NlKCl7XG4gICAgdGhpcy5fZm9ybUVsLnJlc2V0KCk7XG4gICAgc3VwZXIuY2xvc2UoKTtcbiAgfTtcbn07XG5cbiIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFdpdGhJbWFnZXMgZXh0ZW5kcyBQb3B1cCB7XG4gIGNvbnN0cnVjdG9yKHBvcHVwU2VsZWN0b3IpIHtcbiAgICBzdXBlcihwb3B1cFNlbGVjdG9yKTtcbiAgICB0aGlzLl9tb2RhbEltYWdlRWxlbWVudCA9IHRoaXMuX3BvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19wb3B1cC1pbWFnZVwiKTtcbiAgICB0aGlzLl9tb2RhbENhcHRpb24gPSB0aGlzLl9wb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fcG9wdXAtY2FwdGlvblwiKTtcbiB9XG5cblxub3BlbihkYXRhKSB7XG4gIHRoaXMuX21vZGFsSW1hZ2VFbGVtZW50LnNyYyA9IGRhdGEudXJsO1xuICB0aGlzLl9tb2RhbEltYWdlRWxlbWVudC5hbHQgPWBpbWFnZSBvZiR7ZGF0YS51cmx9YDtcbiAgdGhpcy5fbW9kYWxDYXB0aW9uLnRleHRDb250ZW50ID0gZGF0YS50aXRsZTtcbiAgc3VwZXIub3BlbigpO1xuIH1cbn1cblxuXG4iLCIvLyBpbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdGlvbiB7XG4gICAgY29uc3RydWN0b3Ioe2l0ZW1zLCByZW5kZXJlcn0sIGNvbnRhaW5lclNlbGVjdG9yKXtcbiAgICAgIHRoaXMuX2l0ZW1zID0gaXRlbXM7XG4gICAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyO1xuICAgICAgdGhpcy5fZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7Y29udGFpbmVyU2VsZWN0b3J9YCk7XG4gIH1cblxuICByZW5kZXJJdGVtcyhlbGVtZW50KSB7XG4gICAgZWxlbWVudC5mb3JFYWNoKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLl9yZW5kZXJlcihkYXRhKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZEl0ZW0oZWxlbWVudCkge1xuICAgIHRoaXMuX2VsZW1lbnQucHJlcGVuZChlbGVtZW50KTtcbiAgfVxufVxuXG4vLyAvLyBmdW5jdGlvbiByZW5kZXJDYXJkKGRhdGEpIHtcbi8vIC8vICAgY29uc3QgY2FyZCA9IG5ldyBDYXJkKGNhcmRUZW1wbGF0ZSwgZGF0YSk7XG4vLyAvLyAgIGFkZENhcmRUb1BhZ2UoY2FyZC5yZW5kZXIoZGF0YSkpO1xuLy8gfSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJJbmZvIHtcbiAgY29uc3RydWN0b3Ioe3VzZXJOYW1lLCB1c2VyRGV0YWlsfSkge1xuICAgIHRoaXMuX3VzZXJOYW1lID0gdXNlck5hbWU7XG4gICAgdGhpcy5fdXNlckRldGFpbCA9IHVzZXJEZXRhaWw7XG4gIH07XG5cbiAgZ2V0VXNlckluZm8oKSB7XG4gICAgY29uc29sZS5sb2coXCJnZXQtLVVzZXItLS1JbmZvXCIpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuX3VzZXJOYW1lLnRleHRDb250ZW50KTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLl91c2VyRGV0YWlsLnRleHRDb250ZW50KTtcbiAgICByZXR1cm4ge1xuICAgICAgdXNlclByb2ZpbGVOYW1lOiB0aGlzLl91c2VyTmFtZS50ZXh0Q29udGVudCxcbiAgICAgIHVzZXJQcm9maWxlRGV0YWlsOiB0aGlzLl91c2VyRGV0YWlsLnRleHRDb250ZW50XG4gICAgfTtcbiAgfVxuXG4gIHNldFVzZXJJbmZvKCB1c2VyTmFtZSwgdXNlckRldGFpbCkge1xuICAgIGNvbnNvbGUubG9nKFwic2V0LS1Vc2VyLS0tSW5mb1wiKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLl91c2VyTmFtZS50ZXh0Q29udGVudCk7XG4gICAgY29uc29sZS5sb2codGhpcy5fdXNlckRldGFpbC50ZXh0Q29udGVudCk7XG4gICAgdGhpcy5fdXNlck5hbWUudGV4dENvbnRlbnQgPSB1c2VyTmFtZTtcbiAgICB0aGlzLl91c2VyRGV0YWlsLnRleHRDb250ZW50ID0gdXNlckRldGFpbDtcbiAgfVxufSIsIlxuZXhwb3J0IGNvbnN0IGluaXRpYWxDYXJkcyA9IFtcbiAge1xuICAgIC8vTkFNRVxuICAgIHRpdGxlOiBcIkxha2UgJiBNb3VudGFpblwiLFxuICAgIC8vTElOS1xuICAgIHVybDogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTYzODgwMjQyMjYzMy02OTQwODg2ODAzNTk/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTY4NyZxPTgwXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJMYWtlIExvdWlzZVwiLFxuICAgIHVybDogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS9sYWtlLWxvdWlzZS5qcGdcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkJhbGQgTW91bnRhaW5zXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL2JhbGQtbW91bnRhaW5zLmpwZ1wiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiTGF0ZW1hclwiLFxuICAgIHVybDogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS9sYXRlbWFyLmpwZ1wiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiVmFub2lzZSBOYXRpb25hbCBQYXJrXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL3Zhbm9pc2UuanBnXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJMYWdvIGRpIGJyYWllc1wiLFxuICAgIHVybDogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS9sYWdvLmpwZ1wiLFxuICB9LFxuXTtcblxuXG5leHBvcnQgY29uc3QgZm9ybVZhbGlkYXRvckNvbmZpZyA9IHtcbiAgaW5wdXRTZWxlY3RvcjogXCIuZm9ybS1uYW1lX19pbnB1dFwiLFxuICBzdWJtaXRCdXR0b25TZWxlY3RvcjogXCIuZm9ybS1uYW1lX19zYXZlLWJ1dHRvblwiLFxuICBpbmFjdGl2ZUJ1dHRvbkNsYXNzOiBcImZvcm0tbmFtZV9fc2F2ZS1idXR0b25fZGlzYWJsZWRcIixcbiAgaW5wdXRFcnJvckNsYXNzOiBcImZvcm0tbmFtZV9fbW9kYWwtdHlwZV9lcnJvclwiLFxuICBlcnJvckNsYXNzOiBcIm1vZGFsX19wb3B1cF9fZXJyb3JfdmlzaWJsZVwiLFxufTtcblxuXG5leHBvcnQgY29uc3Qgc2VsZWN0b3JzID0ge1xuICBjYXJkU2VjdGlvbjogXCIuZWxlbWVudHMtZ3JpZF9fY2FyZHNcIiwgLy9jYXJkIGxpc3RcbiAgY2FyZFRlbXBsYXRlOiBcIiNjYXJkLXRlbXBsYXRlXCIsLy9jYXJkIHRlbXBsYXRlXG4gIHByZXZpZXdQb3B1cDogXCIjaW1hZ2UtcG9wdXBcIiwvLyBjYXJkIGltYWdlIHBvcHVwIHByZXZpZXdcbiAgLy8gbW9kYWxQb3BVcDogXCIubW9kYWxfX3BvcHVwXCIsXG59XG5cbi8vIGV4cG9ydCBjb25zdCBwcm9maWxlUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXQtcHJvZmlsZS1wb3B1cFwiKTsgLy8ucG9wdXBfX2Zvcm1cbi8vIGV4cG9ydCBjb25zdCBhZGRDYXJkUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1jYXJkLXBvcHVwXCIpO1xuLy8gZXhwb3J0IGNvbnN0IGZvcm1Qcm9maWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0LXByb2ZpbGUtcG9wdXBcIik7XG4vLyBleHBvcnQgY29uc3QgZm9ybUNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1jYXJkLXBvcHVwXCIpO1xuLy8gZXhwb3J0IGNvbnN0IGFkZEZvcm1FbCA9IGZvcm1DYXJkLnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1uYW1lXCIpO1xuLy8gZXhwb3J0IGNvbnN0IGVkaXRGb3JtRWwgPSBmb3JtUHJvZmlsZS5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tbmFtZVwiKTtcblxuZXhwb3J0IGNvbnN0IGFkZENhcmRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX3BsdXMtYnV0dG9uXCIpO1xuZXhwb3J0IGNvbnN0IGVkaXRGb3JtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19lZGl0LWJ1dHRvblwiKTtcbmV4cG9ydCBjb25zdCBjbG9zZUNhcmRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nsb3NlLWNhcmQtcG9wdXBcIik7XG5leHBvcnQgY29uc3QgY2xvc2VJbWFnZVByZXZpZXdCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nsb3NlLWltYWdlLXBvcHVwXCIpO1xuZXhwb3J0IGNvbnN0IGNsb3NlUHJvZmlsZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvc2UtcHJvZmlsZS1wb3B1cFwiKTtcblxuZXhwb3J0IGNvbnN0IHByb1RpdGxlID0gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fdGl0bGVcIik7XG5leHBvcnQgY29uc3QgcHJvU3ViVGl0bGUgPSAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19zdWJ0aXRsZVwiKTtcblxuZXhwb3J0IGNvbnN0IGltYWdlUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ltYWdlLXBvcHVwXCIpO1xuZXhwb3J0IGNvbnN0IG1vZGFsSW1hZ2VFbGVtZW50ID0gaW1hZ2VQb3B1cC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19wb3B1cC1pbWFnZVwiKTtcbmV4cG9ydCBjb25zdCBtb2RhbENhcHRpb24gPSBpbWFnZVBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX3BvcHVwLWNhcHRpb25cIik7XG5cbmV4cG9ydCBjb25zdCBwcm9Nb2RhbE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xpc3QtdGl0bGVcIik7XG5leHBvcnQgY29uc3QgcHJvTW9kYWxXb3JrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsaXN0LXN1YnRpdGxlXCIpO1xuXG5leHBvcnQgY29uc3QgbW9kYWxDYXJkVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhcmQtdGl0bGVcIik7XG5leHBvcnQgY29uc3QgbW9kYWxDYXJkVXJsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYXJkLXVybFwiKTtcblxuZXhwb3J0IGNvbnN0IGFkZEZvcm1FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLWNhcmQtcG9wdXBcIik7XG5leHBvcnQgY29uc3QgZWRpdEZvcm1FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdC1wcm9maWxlLXBvcHVwXCIpO1xuXG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL2luZGV4LmNzcyc7XG5cbi8vaW1wb3J0IGFsbCBjbGFzc2VzXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkXCI7XG5pbXBvcnQgRm9ybVZhbGlkYXRvciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yXCI7XG5pbXBvcnQgUG9wdXBXaXRoSW1hZ2VzIGZyb20gJy4uL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2VzJztcbmltcG9ydCBQb3B1cFdpdGhGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybSc7XG5pbXBvcnQgU2VjdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWN0aW9uXCI7XG5pbXBvcnQgVXNlckluZm8gZnJvbSAnLi4vY29tcG9uZW50cy9Vc2VySW5mbyc7XG5pbXBvcnQge1xuICBpbml0aWFsQ2FyZHMsXG4gIGZvcm1WYWxpZGF0b3JDb25maWcsXG4gIHNlbGVjdG9ycyxcbiAgYWRkQ2FyZEJ0bixcbiAgZWRpdEZvcm1CdG4sXG4gIHByb1RpdGxlLFxuICBwcm9TdWJUaXRsZSxcbiAgcHJvTW9kYWxXb3JrLFxuICBwcm9Nb2RhbE5hbWUsXG4gIGFkZEZvcm1FbCxcbiAgZWRpdEZvcm1FbCxcbiAgbW9kYWxDYXJkVGl0bGUsXG4gIG1vZGFsQ2FyZFVybCxcbiAgLy8gY2xvc2VDYXJkQnV0dG9uLFxuICAvLyBjbG9zZUltYWdlUHJldmlld0J1dHRvbixcbiAgLy8gY2xvc2VQcm9maWxlQnV0dG9uLFxuICAvLyBpbWFnZVBvcHVwLFxuICAvLyBtb2RhbEltYWdlRWxlbWVudCxcbiAgLy8gbW9kYWxDYXB0aW9uLFxufSBmcm9tIFwiLi4vdXRpbHMvY29uc3RhbnRzXCI7XG5cbmNvbnN0IGZvcm1Qcm9maWxlRGV0YWlsID0gbmV3IFVzZXJJbmZvKHtcbiAgdXNlck5hbWU6IHByb1RpdGxlLFxuICB1c2VyRGV0YWlsOiBwcm9TdWJUaXRsZSxcbn0pO1xuXG5cbi8vIGNvbnN0IG5ld0NhcmQgPSAoZGF0YSkgPT4ge1xuLy8gICBjb25zdCBjYXJkRWxzID0gbmV3IENhcmQoXG4vLyAgICAge1xuLy8gICAgICAgZGF0YSxcbi8vICAgICAgIGhhbmRsZUNhcmRQcmV2aWV3OiAoKSA9PiB7XG4vLyAgICAgICAgIENhcmRQcmV2aWV3UG9wdXAub3BlbihpbWdEYXRhKTtcbi8vICAgICAgIH0sXG4vLyAgICAgfSxcbi8vICAgICBzZWxlY3RvcnMuY2FyZFRlbXBsYXRlLFxuLy8gICApO1xuLy8gICByZXR1cm4gY2FyZEVscy5yZW5kZXIoKTtcbi8vIH1cblxuXG5jb25zdCBDYXJkU2VjdGlvbiA9ICBuZXcgU2VjdGlvbiAoe1xuICAvLyBkYXRhOiBpbml0aWFsQ2FyZHMsXG4gIHJlbmRlcmVyOiAoaXRlbSkgPT4ge1xuICAgIGNvbnN0IGNhcmRFbCA9IG5ldyBDYXJkKHsgZGF0YTppdGVtLCBoYW5kbGVDYXJkUHJldmlldzogKGltZ0RhdGEpID0+IHtcbiAgICAgICAgICBDYXJkUHJldmlld1BvcHVwLm9wZW4oaW1nRGF0YSk7XG4gICAgfVxuICB9LCBjYXJkRGlzcGxheSk7XG4gICAgQ2FyZFNlY3Rpb24uYWRkSXRlbShjYXJkRWwucmVuZGVyKCkpO1xuICB9LFxufSxcbiAgc2VsZWN0b3JzLmNhcmRTZWN0aW9uLFxuKTtcblxuY29uc3QgQ2FyZFByZXZpZXdQb3B1cCA9IG5ldyBQb3B1cFdpdGhJbWFnZXMoc2VsZWN0b3JzLnByZXZpZXdQb3B1cCk7XG5jb25zdCBjYXJkRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JzLmNhcmRUZW1wbGF0ZSk7XG5cbi8vUHJvZmlsZSBtb2RhbFxuY29uc3QgZm9ybVByb2ZpbGVOYW1lID0gbmV3IFBvcHVwV2l0aEZvcm0oe1xuICBmb3JtU3VibWl0OiAoe3VzZXJOYW1lLCB1c2VyRGV0YWlsfSkgPT4ge1xuICAgIGZvcm1Qcm9maWxlRGV0YWlsLnNldFVzZXJJbmZvKHVzZXJOYW1lLCB1c2VyRGV0YWlsKTtcbiAgfVxufSwgIFwiI2VkaXQtcHJvZmlsZS1wb3B1cFwiKTtcblxuLy9DYXJkIG1vZGFsXG4vL2Nhbid0IGJlIGEgdXNlcm5hbWUgK2l0cyBkZXRhaWwgd2hlbiBhZGRpbmcgYSBjYXJkXG5jb25zdCBmb3JtUHJvZmlsZUNhcmQgPSBuZXcgUG9wdXBXaXRoRm9ybSh7XG4gIGZvcm1TdWJtaXQ6IChjYXJkVGVtcGxhdGUsIGRhdGEpID0+IHtcbiAgY29uc3QgY2FyZEVsID0gbmV3IENhcmQoY2FyZFRlbXBsYXRlLCBkYXRhKTtcbiAgQ2FyZFNlY3Rpb24uYWRkQ2FyZFRvUGFnZShjYXJkRWwucmVuZGVyKGRhdGEpKTtcbiAgICB9LFxufSwgIFwiI2FkZC1jYXJkLXBvcHVwXCIpO1xuXG5cbi8vIGNvbnN0IGVkaXRGb3JtVmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3IoXG4vLyAgIGZvcm1WYWxpZGF0b3JDb25maWcsXG4vLyAgIHNlbGVjdG9ycy5wcmV2aWV3UG9wdXBcbi8vICAgKTtcblxuLy8gY29uc3QgYWRkRm9ybVZhbGlkYXRvciA9IG5ldyBGb3JtVmFsaWRhdG9yKFxuLy8gICBmb3JtVmFsaWRhdG9yQ29uZmlnLFxuLy8gICBzZWxlY3RvcnMucHJldmlld1BvcHVwXG4vLyAgICk7XG5cbmZvcm1Qcm9maWxlTmFtZS5zZXRFdmVudExpc3RlbmVycygpO1xuZm9ybVByb2ZpbGVDYXJkLnNldEV2ZW50TGlzdGVuZXJzKCk7XG5DYXJkUHJldmlld1BvcHVwLnNldEV2ZW50TGlzdGVuZXJzKCk7XG5DYXJkU2VjdGlvbi5yZW5kZXJJdGVtcyhpbml0aWFsQ2FyZHMpO1xuXG5cbi8vYWRkIGNhcmQgYnV0dG9uXG5hZGRDYXJkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBmb3JtUHJvZmlsZUNhcmQub3BlbigpO1xuICAvLyBhZGRGb3JtVmFsaWRhdG9yLnJlc2V0Rm9ybSgpO1xuXG59KTtcblxuLy8vcHJvZmlsZSBlZGl0IGJ1dHRvblxuZWRpdEZvcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGNvbnN0IGFjdGl2ZVVzZXIgPSBmb3JtUHJvZmlsZURldGFpbC5nZXRVc2VySW5mbygpO1xuICBjb25zb2xlLmxvZyhhY3RpdmVVc2VyKTtcbiAgcHJvTW9kYWxOYW1lLnZhbHVlID0gYWN0aXZlVXNlci51c2VyUHJvZmlsZU5hbWU7XG4gIHByb01vZGFsV29yay52YWx1ZSA9IGFjdGl2ZVVzZXIudXNlclByb2ZpbGVEZXRhaWw7XG4gIGZvcm1Qcm9maWxlTmFtZS5vcGVuKCk7XG4gIC8vIHByb1RpdGxlLnZhbHVlID0gYWN0aXZlVXNlci51c2VyTmFtZTtcbiAgLy8gcHJvU3ViVGl0bGUudmFsdWUgPSBhY3RpdmVVc2VyLnVzZXJEZXRhaWw7XG4gIC8vIHByb01vZGFsTmFtZS52YWx1ZSA9IGFjdGl2ZVVzZXIudXNlck5hbWU7XG4gIC8vIHByb01vZGFsTWlzc2lvbi52YWx1ZSA9IGFjdGl2ZVVzZXIudXNlckRldGFpbDtcbiAvLyAgZWRpdEZvcm1WYWxpZGF0b3IucmVzZXRGb3JtKCk7XG4gICB9KTtcblxuICBjb25zdCBhZGRGb3JtVmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3IoZm9ybVZhbGlkYXRvckNvbmZpZywgYWRkRm9ybUVsKTtcbiAgYWRkRm9ybVZhbGlkYXRvci5lbmFibGVWYWxpZGF0aW9uKCk7XG4gIGNvbnN0IGVkaXRGb3JtVmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3IoZm9ybVZhbGlkYXRvckNvbmZpZywgZWRpdEZvcm1FbCk7XG4gIGVkaXRGb3JtVmFsaWRhdG9yLmVuYWJsZVZhbGlkYXRpb24oKTtcblxuIl0sIm5hbWVzIjpbIlBvcHVwIiwiQ2FyZCIsInRlbXBsYXRlIiwicG9wdXBTZWxlY3RvciIsImRhdGEiLCJoYW5kbGVDYXJkUHJldmlldyIsIl90ZW1wbGF0ZSIsImNvbnRlbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xvbmVOb2RlIiwiX2NhcmRMaWtlQnV0dG9uIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiX2VsZW1lbnQiLCJyZW1vdmUiLCJlbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2dCIsIl9oYW5kbGVMaWtlSWNvbiIsIl9kZWxldGVDYXJkIiwiX2hhbmRsZURlbGV0ZUNhcmQiLCJfaW1hZ2VFbGVtZW50IiwiX2hhbmRsZUNhcmRQcmV2aWV3IiwidXJsIiwiX2RhdGEiLCJ0aXRsZSIsIl9nZXRFbGVtZW50IiwiX3RpdGxlRWxlbWVudCIsInNyYyIsIl91cmwiLCJhbHQiLCJ0ZXh0Q29udGVudCIsIl90aXRsZSIsIl9zZXRFdmVudExpc3RlbmVycyIsIkZvcm1WYWxpZGF0b3IiLCJzZXR0aW5ncyIsImZvcm1FbCIsIl9pbnB1dFNlbGVjdG9yIiwiaW5wdXRTZWxlY3RvciIsIl9zdWJtaXRCdXR0b25TZWxlY3RvciIsInN1Ym1pdEJ1dHRvblNlbGVjdG9yIiwiX2luYWN0aXZlQnV0dG9uQ2xhc3MiLCJpbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiX2lucHV0RXJyb3JDbGFzcyIsImlucHV0RXJyb3JDbGFzcyIsIl9lcnJvckNsYXNzIiwiZXJyb3JDbGFzcyIsIl9mb3JtRWwiLCJpbnB1dEVsIiwidmFsaWRpdHkiLCJ2YWxpZCIsImVycm9yRWwiLCJpZCIsImFkZCIsInZhbGlkYXRpb25NZXNzYWdlIiwiX2lucHV0TGlzdCIsInNvbWUiLCJfaXNJbnZhbGlkSW5wdXQiLCJfYnV0dG9uRWwiLCJkaXNhYmxlZCIsIl9zaG93RXJyb3IiLCJfaGlkZUVycm9yIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJfY2hlY2tJbnB1dFZhbGlkaXR5IiwiX3RvZ2dsZUJ1dHRvbiIsImNvbnNvbGUiLCJsb2ciLCJlIiwicHJldmVudERlZmF1bHQiLCJfcG9wdXBFbGVtZW50IiwiZG9jdW1lbnQiLCJfaGFuZGxlRXNjVXAiLCJiaW5kIiwia2V5IiwiY2xvc2UiLCJ0YXJnZXQiLCJjb250YWlucyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJQb3B1cFdpdGhGb3JtIiwiZm9ybVN1Ym1pdCIsIl9mb3JtU3VibWl0IiwiX2FsbElucHV0RmllbGRzIiwiX2FsbElucHV0RWwiLCJuYW1lIiwidmFsdWUiLCJfZ2V0SW5wdXRWYWx1ZXMiLCJyZXNldCIsIlBvcHVwV2l0aEltYWdlcyIsIl9tb2RhbEltYWdlRWxlbWVudCIsIl9tb2RhbENhcHRpb24iLCJTZWN0aW9uIiwiY29udGFpbmVyU2VsZWN0b3IiLCJpdGVtcyIsInJlbmRlcmVyIiwiX2l0ZW1zIiwiX3JlbmRlcmVyIiwicHJlcGVuZCIsIlVzZXJJbmZvIiwidXNlck5hbWUiLCJ1c2VyRGV0YWlsIiwiX3VzZXJOYW1lIiwiX3VzZXJEZXRhaWwiLCJ1c2VyUHJvZmlsZU5hbWUiLCJ1c2VyUHJvZmlsZURldGFpbCIsImluaXRpYWxDYXJkcyIsImZvcm1WYWxpZGF0b3JDb25maWciLCJzZWxlY3RvcnMiLCJjYXJkU2VjdGlvbiIsImNhcmRUZW1wbGF0ZSIsInByZXZpZXdQb3B1cCIsImFkZENhcmRCdG4iLCJlZGl0Rm9ybUJ0biIsImNsb3NlQ2FyZEJ1dHRvbiIsImNsb3NlSW1hZ2VQcmV2aWV3QnV0dG9uIiwiY2xvc2VQcm9maWxlQnV0dG9uIiwicHJvVGl0bGUiLCJwcm9TdWJUaXRsZSIsImltYWdlUG9wdXAiLCJtb2RhbEltYWdlRWxlbWVudCIsIm1vZGFsQ2FwdGlvbiIsInByb01vZGFsTmFtZSIsInByb01vZGFsV29yayIsIm1vZGFsQ2FyZFRpdGxlIiwibW9kYWxDYXJkVXJsIiwiYWRkRm9ybUVsIiwiZWRpdEZvcm1FbCIsImZvcm1Qcm9maWxlRGV0YWlsIiwiQ2FyZFNlY3Rpb24iLCJpdGVtIiwiY2FyZEVsIiwiaW1nRGF0YSIsIkNhcmRQcmV2aWV3UG9wdXAiLCJvcGVuIiwiY2FyZERpc3BsYXkiLCJhZGRJdGVtIiwicmVuZGVyIiwiZm9ybVByb2ZpbGVOYW1lIiwic2V0VXNlckluZm8iLCJmb3JtUHJvZmlsZUNhcmQiLCJhZGRDYXJkVG9QYWdlIiwic2V0RXZlbnRMaXN0ZW5lcnMiLCJyZW5kZXJJdGVtcyIsImFjdGl2ZVVzZXIiLCJnZXRVc2VySW5mbyIsImFkZEZvcm1WYWxpZGF0b3IiLCJlbmFibGVWYWxpZGF0aW9uIiwiZWRpdEZvcm1WYWxpZGF0b3IiXSwic291cmNlUm9vdCI6IiJ9