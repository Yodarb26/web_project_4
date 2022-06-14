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
        if (evt.target.classList.contains("modal__popup-btn")) {
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
      this._allInputFields = this._popupElement.querySelectorAll(".form-name__input"); // this._allInputEl = {};
      // this._allInputFields.forEach();

      return this._allInputEl;
    } //public method

  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this2 = this;

      this._formEl.addEventListener("submit", function (evt) {
        evt.preventDefault();

        _this2._formSubmit(_this2._getInputValues());

        _this2.close();
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
      console.log(1);
      return {
        userProfileName: this._userName.textContent,
        userProfileDetail: this._userDetail.textContent
      };
    }
  }, {
    key: "setUserInfo",
    value: function setUserInfo() {
      console.log(2);
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
/* harmony export */   "addCardPopup": () => (/* binding */ addCardPopup),
/* harmony export */   "closeCardButton": () => (/* binding */ closeCardButton),
/* harmony export */   "closeImagePreviewButton": () => (/* binding */ closeImagePreviewButton),
/* harmony export */   "closeProfileButton": () => (/* binding */ closeProfileButton),
/* harmony export */   "editFormBtn": () => (/* binding */ editFormBtn),
/* harmony export */   "formCard": () => (/* binding */ formCard),
/* harmony export */   "formProfile": () => (/* binding */ formProfile),
/* harmony export */   "formValidatorConfig": () => (/* binding */ formValidatorConfig),
/* harmony export */   "imagePopup": () => (/* binding */ imagePopup),
/* harmony export */   "initialCards": () => (/* binding */ initialCards),
/* harmony export */   "modalCaption": () => (/* binding */ modalCaption),
/* harmony export */   "modalImageElement": () => (/* binding */ modalImageElement),
/* harmony export */   "proSubTitle": () => (/* binding */ proSubTitle),
/* harmony export */   "proTitle": () => (/* binding */ proTitle),
/* harmony export */   "profilePopup": () => (/* binding */ profilePopup),
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

};
var profilePopup = document.querySelector("#edit-profile-popup"); //.popup__form

var addCardPopup = document.querySelector("#add-card-popup");
var formProfile = document.querySelector("#edit-profile-popup");
var formCard = document.querySelector("#add-card-popup");
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








var pro = document.querySelector(".profile__title");
var sub = document.querySelector(".profile__subtitle");
var formProfileDetail = new _components_UserInfo__WEBPACK_IMPORTED_MODULE_6__["default"]({
  userName: _utils_constants__WEBPACK_IMPORTED_MODULE_7__.proTitle,
  userDetail: _utils_constants__WEBPACK_IMPORTED_MODULE_7__.proSubTitle
});
var formProfileName = new _components_PopupWithForm__WEBPACK_IMPORTED_MODULE_4__["default"]({
  formSubmit: function formSubmit(_ref) {
    var userName = _ref.userName,
        userDetail = _ref.userDetail;
    formProfileDetail.setUserInfo(userName, userDetail);
  }
}, ".modal__popup");
formProfileName.setEventListeners();
var CardPreviewPopup = new _components_PopupWithImages__WEBPACK_IMPORTED_MODULE_3__["default"](_utils_constants__WEBPACK_IMPORTED_MODULE_7__.selectors.previewPopup);
var cardDisplay = document.querySelector(_utils_constants__WEBPACK_IMPORTED_MODULE_7__.selectors.cardTemplate);
var CardSection = new _components_Section__WEBPACK_IMPORTED_MODULE_5__["default"]({
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
CardSection.renderItems(_utils_constants__WEBPACK_IMPORTED_MODULE_7__.initialCards);
CardPreviewPopup.setEventListeners(); ///profile edit button
// editFormBtn.addEventListener('click', () => {console.log("profile edit button")})

_utils_constants__WEBPACK_IMPORTED_MODULE_7__.editFormBtn.addEventListener('click', function () {
  formProfileName(_utils_constants__WEBPACK_IMPORTED_MODULE_7__.profilePopup);
}); //add card button

_utils_constants__WEBPACK_IMPORTED_MODULE_7__.addCardBtn.addEventListener('click', function () {
  console.log("add card button");
});
var addFormEl = _utils_constants__WEBPACK_IMPORTED_MODULE_7__.formCard.querySelector(".form-name");
var editFormEl = _utils_constants__WEBPACK_IMPORTED_MODULE_7__.formProfile.querySelector(".form-name");
var addFormValidator = new _components_FormValidator__WEBPACK_IMPORTED_MODULE_2__["default"](_utils_constants__WEBPACK_IMPORTED_MODULE_7__.formValidatorConfig, addFormEl); // addFormValidator.enableValidation(".form-name");

addFormValidator.enableValidation();
var editFormValidator = new _components_FormValidator__WEBPACK_IMPORTED_MODULE_2__["default"](_utils_constants__WEBPACK_IMPORTED_MODULE_7__.formValidatorConfig, editFormEl); // editFormValidator.enableValidation(".form-name");

editFormValidator.enableValidation();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0MsZ0JBQWpCO0FBQ0EsSUFBTUMsaUJBQWlCLEdBQUcsSUFBSS9HLGlFQUFKLENBQWtCd0UsaUVBQWxCLEVBQXVDb0MsVUFBdkMsQ0FBMUIsRUFDQTs7QUFDQUcsaUJBQWlCLENBQUNELGdCQUFsQixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3ByaW50LTgvLi9zcmMvY29tcG9uZW50cy9DYXJkLmpzIiwid2VicGFjazovL3NwcmludC04Ly4vc3JjL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly9zcHJpbnQtOC8uL3NyYy9jb21wb25lbnRzL1BvcHVwLmpzIiwid2VicGFjazovL3NwcmludC04Ly4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybS5qcyIsIndlYnBhY2s6Ly9zcHJpbnQtOC8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlcy5qcyIsIndlYnBhY2s6Ly9zcHJpbnQtOC8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vc3ByaW50LTgvLi9zcmMvY29tcG9uZW50cy9Vc2VySW5mby5qcyIsIndlYnBhY2s6Ly9zcHJpbnQtOC8uL3NyYy91dGlscy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vc3ByaW50LTgvLi9zcmMvcGFnZXMvaW5kZXguY3NzIiwid2VicGFjazovL3NwcmludC04L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NwcmludC04L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zcHJpbnQtOC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NwcmludC04L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc3ByaW50LTgvLi9zcmMvcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwXCI7XG5cbi8vZGVjb25zdHJ1Y3RcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmQgZXh0ZW5kcyBQb3B1cCB7XG4gIGNvbnN0cnVjdG9yKHtkYXRhLCBoYW5kbGVDYXJkUHJldmlld30sIHRlbXBsYXRlLCBwb3B1cFNlbGVjdG9yKSB7XG4gICAgLy8gY29uc3RydWN0b3Ioe2RhdGEsIGhhbmRsZUNhcmRQcmV2aWV3LCBoYW5kbGVDYXJkQ2xpY2t9LCB0ZW1wbGF0ZSwgcG9wdXBTZWxlY3Rvcikge1xuICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpO1xuICAgIHRoaXMuX3RlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgdGhpcy5fZGF0YSA9IGRhdGE7XG4gICAgdGhpcy5fdGl0bGUgPSBkYXRhLnRpdGxlO1xuICAgIHRoaXMuX3VybCA9IGRhdGEudXJsO1xuICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsO1xuICAgIHRoaXMuX2hhbmRsZUNhcmRQcmV2aWV3ID0gaGFuZGxlQ2FyZFByZXZpZXc7XG4gICAgLy8gdGhpcy5faGFuZGxlQ2FyZENsaWNrID0gaGFuZGxlQ2FyZENsaWNrO1xuICB9XG5cbiAgLy8gQ2FyZCB0ZW1wbGF0ZVxuICBfZ2V0RWxlbWVudCA9ICgpID0+IHtcbiAgICAgcmV0dXJuIHRoaXMuX3RlbXBsYXRlLmNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5lbGVtZW50cy1ncmlkX19jYXJkXCIpLmNsb25lTm9kZSh0cnVlKTtcbiAgICAvLyB0aGlzLl9lbGVtZW50ID0gdGhpcy5fdGVtcGxhdGUuY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRzLWdyaWRfX2NhcmRcIikuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICAvLyByZXR1cm4gdGhpcy5fZWxlbWVudDtcbiAgfVxuXG4gIC8vQ2FyZCBwcmV2aWV3IGhhbmRsZXIgd2hlbiBjbGlja2VkIG9uXG4gIC8vIF9oYW5kbGVDYXJkUHJldmlldyA9ICgpID0+IHtcbiAgLy8gICAvLyBtb2RhbEltYWdlRWxlbWVudC5zcmMgPSB0aGlzLl91cmw7XG4gIC8vICAgLy8gbW9kYWxDYXB0aW9uLnRleHRDb250ZW50ID0gdGhpcy5fdGl0bGU7XG4gIC8vICAgLy8gbW9kYWxJbWFnZUVsZW1lbnQuYWx0ID1gaW1hZ2Ugb2Yke3VybH1gO1xuXG4gIC8vICAgb3BlblBvcHVwKGltYWdlUG9wdXApO1xuICAvLyB9O1xuXG4gIC8vQ2FyZCBsaWtlIGhhbmRsZXIvdG9nZ2xlclxuICBfaGFuZGxlTGlrZUljb24gPSAoKSA9PiB7XG4gICAgdGhpcy5fY2FyZExpa2VCdXR0b24uY2xhc3NMaXN0XG4gICAgLnRvZ2dsZShcImVsZW1lbnRzLWdyaWRfX2ljb24tYWN0aXZlXCIpO1xuICB9O1xuXG4gIC8vQ2FyZCByZW1vdmFsIGhhbmRsZXJcbiAgX2hhbmRsZURlbGV0ZUNhcmQgPSAoKSA9PiB7XG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmUoKTtcbiAgICB0aGlzLmVsZW1lbnQgPSBudWxsO1xuICB9O1xuXG4gIC8vRXZlbnQgbGlzdGVuZXJzXG4gIF9zZXRFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgICB0aGlzLl9jYXJkTGlrZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2dCkgPT4geyAvL2NhcmQgbGlrZSBldmVudCBsaXN0ZW5lclxuICAgICAgdGhpcy5faGFuZGxlTGlrZUljb24oZXZ0KTtcbiAgICB9KTtcbiAgICB0aGlzLl9kZWxldGVDYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZ0KSA9PiB7IC8vY2FyZCBkZWxldGUgZXZlbnQgbGlzdGVuZXJcbiAgICAgIHRoaXMuX2hhbmRsZURlbGV0ZUNhcmQoZXZ0KTtcbiAgICB9KTtcbiAgICB0aGlzLl9pbWFnZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldnQpID0+IHsgLy9jYXJkIHByZXZpZXcgZXZlbnQgbGlzdGVuZXJcbiAgICAgIC8vIHRoaXMuX2hhbmRsZUNhcmRQcmV2aWV3KCk7XG4gICAgICAvLyB0aGlzLl9oYW5kbGVDYXJkUHJldmlldyhldnQpO1xuICAgICAgdGhpcy5faGFuZGxlQ2FyZFByZXZpZXcoe3VybDp0aGlzLl9kYXRhLnVybCwgdGl0bGU6IHRoaXMuX2RhdGEudGl0bGV9KTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGV2dC50YXJnZXQpXG4gICAgICAvLyB0aGlzLl9oYW5kbGVDYXJkQ2xpY2soe3VybDpkYXRhLnVybCwgdGl0bGU6IGRhdGEudGl0bGV9KVxuICAgIH0pO1xuICB9O1xuXG4gIC8vVGVtcGxhdGUgZGlzcGxheWluZ1xuICByZW5kZXIgPSAoKSA9PiB7XG4gICAgdGhpcy5fZWxlbWVudCA9IHRoaXMuX2dldEVsZW1lbnQoKTtcbiAgICB0aGlzLl9pbWFnZUVsZW1lbnQgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWxlbWVudHMtZ3JpZF9faW1hZ2VcIik7XG4gICAgdGhpcy5fdGl0bGVFbGVtZW50ID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRzLWdyaWRfX3RleHRcIik7XG4gICAgdGhpcy5faW1hZ2VFbGVtZW50LnNyYyA9IHRoaXMuX3VybDtcbiAgICB0aGlzLl9pbWFnZUVsZW1lbnQuYWx0ID0gdGhpcy5fdXJsO1xuICAgIHRoaXMuX3RpdGxlRWxlbWVudC50ZXh0Q29udGVudCA9IHRoaXMuX3RpdGxlO1xuICAgIHRoaXMuX2RlbGV0ZUNhcmQgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWxlbWVudHMtZ3JpZF9fZGVsZXRlLWJ1dHRvblwiKTtcbiAgICB0aGlzLl9jYXJkTGlrZUJ1dHRvbiA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbGVtZW50cy1ncmlkX19pY29uXCIpO1xuICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7XG4gIH07XG59XG4vLyBleHBvcnQgZGVmYXVsdCBDYXJkOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1WYWxpZGF0b3Ige1xuICBjb25zdHJ1Y3RvcihzZXR0aW5ncywgZm9ybUVsKSB7XG4gICAgdGhpcy5faW5wdXRTZWxlY3RvciA9IHNldHRpbmdzLmlucHV0U2VsZWN0b3I7XG4gICAgdGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IgPSBzZXR0aW5ncy5zdWJtaXRCdXR0b25TZWxlY3RvcjtcbiAgICB0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzID0gc2V0dGluZ3MuaW5hY3RpdmVCdXR0b25DbGFzcztcbiAgICB0aGlzLl9pbnB1dEVycm9yQ2xhc3MgPSBzZXR0aW5ncy5pbnB1dEVycm9yQ2xhc3M7XG4gICAgdGhpcy5fZXJyb3JDbGFzcyA9IHNldHRpbmdzLmVycm9yQ2xhc3M7XG4gICAgdGhpcy5fZm9ybUVsID0gZm9ybUVsO1xuICB9XG5cbiAgX2lzSW52YWxpZElucHV0KGlucHV0RWwpIHtcbiAgICByZXR1cm4gIWlucHV0RWwudmFsaWRpdHkudmFsaWQ7XG4gIH1cblxuICBfc2hvd0Vycm9yKGlucHV0RWwpIHtcbiAgICBjb25zdCBlcnJvckVsID0gdGhpcy5fZm9ybUVsLnF1ZXJ5U2VsZWN0b3IoYCMke2lucHV0RWwuaWR9YCk7XG4gICAgZXJyb3JFbC5jbGFzc0xpc3QuYWRkKHRoaXMuX2Vycm9yQ2xhc3MpO1xuICAgIGVycm9yRWwudGV4dENvbnRlbnQgPSBpbnB1dEVsLnZhbGlkYXRpb25NZXNzYWdlO1xuICAgIGlucHV0RWwuY2xhc3NMaXN0LmFkZCh0aGlzLl9pbnB1dEVycm9yQ2xhc3MpO1xuICB9XG5cbiAgX2hpZGVFcnJvcihpbnB1dEVsKSB7XG4gICAgY29uc3QgZXJyb3JFbCA9IHRoaXMuX2Zvcm1FbC5xdWVyeVNlbGVjdG9yKGAjJHtpbnB1dEVsLmlkfWApO1xuICAgIGVycm9yRWwuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9lcnJvckNsYXNzKTtcbiAgICBlcnJvckVsLnRleHRDb250ZW50ID0gJyAnO1xuICAgIGlucHV0RWwuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9pbnB1dEVycm9yQ2xhc3MpO1xuICB9XG5cbiAgX3RvZ2dsZUJ1dHRvbigpIHtcbiAgICBpZiAodGhpcy5faW5wdXRMaXN0LnNvbWUodGhpcy5faXNJbnZhbGlkSW5wdXQpKSB7XG4gICAgICB0aGlzLl9idXR0b25FbC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICB0aGlzLl9idXR0b25FbC5jbGFzc0xpc3RcbiAgICAgIC5hZGQodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2J1dHRvbkVsLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICB0aGlzLl9idXR0b25FbC5jbGFzc0xpc3RcbiAgICAgIC5yZW1vdmUodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgX2NoZWNrSW5wdXRWYWxpZGl0eShpbnB1dEVsKSB7XG4gICAgY29uc3QgZXJyb3JFbCA9IHRoaXMuX2Zvcm1FbC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYCMke2lucHV0RWwuaWR9LWVycm9yYCk7XG4gICAgaWYgKHRoaXMuX2lzSW52YWxpZElucHV0KGlucHV0RWwpKSB7XG4gICAgICB0aGlzLl9zaG93RXJyb3IoZXJyb3JFbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2hpZGVFcnJvcihlcnJvckVsKTtcbiAgICB9XG4gIH1cblxuICBfc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy5faW5wdXRMaXN0ID0gQXJyYXkuZnJvbSh0aGlzLl9mb3JtRWwucXVlcnlTZWxlY3RvckFsbCh0aGlzLl9pbnB1dFNlbGVjdG9yKSk7XG4gICAgdGhpcy5fYnV0dG9uRWwgPSB0aGlzLl9mb3JtRWwucXVlcnlTZWxlY3Rvcih0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3Rvcik7XG5cbiAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaCgoaW5wdXRFbCkgPT4ge1xuICAgICAgaW5wdXRFbC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuICAgICAgICB0aGlzLl9jaGVja0lucHV0VmFsaWRpdHkoaW5wdXRFbCk7XG4gICAgICAgIHRoaXMuX3RvZ2dsZUJ1dHRvbigpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICByZXNldEZvcm0oKSB7XG4gICAgdGhpcy5fZm9ybUVsLnJlc2V0KCk7XG4gICAgdGhpcy5fdG9nZ2xlQnV0dG9uKCk7XG4gIH1cblxuICBlbmFibGVWYWxpZGF0aW9uKCkge1xuICAgIHRoaXMuX2Zvcm1FbC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG4gICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgfVxufVxuXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cCB7XG4gICAgY29uc3RydWN0b3IocG9wdXBTZWxlY3Rvcil7XG4gICAgICAgIHRoaXMuX3BvcHVwRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocG9wdXBTZWxlY3Rvcik7XG4gICAgICAgIHRoaXMuX2hhbmRsZUVzY1VwID0gdGhpcy5faGFuZGxlRXNjVXAuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBfaGFuZGxlRXNjVXAoZXZ0KSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmIChldnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICAgIC8vIGNsb3NlUG9wdXAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9vcGVuZWRcIikpO1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICB0aGlzLl9wb3B1cEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldnQpID0+IHtcbiAgICAgICAgaWYoXG4gICAgICAgICAgZXZ0LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJtb2RhbF9fcG9wdXAtYnRuXCIpXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgb3Blbigpe1xuICAgICAgdGhpcy5fcG9wdXBFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJtb2RhbF9vcGVuZWRcIik7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9oYW5kbGVFc2NVcCk7XG4gICAgfVxuXG4gICAgY2xvc2UoKXtcbiAgICAgIHRoaXMuX3BvcHVwRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwibW9kYWxfb3BlbmVkXCIpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5faGFuZGxlRXNjVXApO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aEZvcm0gZXh0ZW5kcyBQb3B1cCB7XG4gIGNvbnN0cnVjdG9yKHtmb3JtU3VibWl0fSwgcG9wdXBTZWxlY3Rvcil7XG4gICAgc3VwZXIocG9wdXBTZWxlY3Rvcik7XG4gICAgdGhpcy5fZm9ybVN1Ym1pdCA9IGZvcm1TdWJtaXQ7XG4gICAgdGhpcy5fZm9ybUVsID0gdGhpcy5fcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1uYW1lXCIpOyAvLy5wb3B1cF9fZm9ybVxuICB9XG5cbiAgLy9wcml2YXRlIG1ldGhvZFxuICBfZ2V0SW5wdXRWYWx1ZXMoKXtcbiAgICB0aGlzLl9hbGxJbnB1dEZpZWxkcyA9IHRoaXMuX3BvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvcm0tbmFtZV9faW5wdXRcIik7XG4gICAgLy8gdGhpcy5fYWxsSW5wdXRFbCA9IHt9O1xuICAgIC8vIHRoaXMuX2FsbElucHV0RmllbGRzLmZvckVhY2goKTtcbiAgICByZXR1cm4gdGhpcy5fYWxsSW5wdXRFbDtcbiAgfVxuXG4gIC8vcHVibGljIG1ldGhvZFxuICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLl9mb3JtRWwuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZ0KSA9PiB7XG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5fZm9ybVN1Ym1pdCh0aGlzLl9nZXRJbnB1dFZhbHVlcygpKTtcbiAgICB0aGlzLmNsb3NlKCk7XG4gICAgfSk7XG4gICAgc3VwZXIuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgfTtcblxuICAvL3B1YmxpYyBtZXRob2RcbiAgY2xvc2UoKXtcbiAgICB0aGlzLl9mb3JtRWwucmVzZXQoKTtcbiAgICBzdXBlci5jbG9zZSgpO1xuICB9O1xufTtcblxuIiwiaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aEltYWdlcyBleHRlbmRzIFBvcHVwIHtcbiAgY29uc3RydWN0b3IocG9wdXBTZWxlY3Rvcikge1xuICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpO1xuICAgIHRoaXMuX21vZGFsSW1hZ2VFbGVtZW50ID0gdGhpcy5fcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX3BvcHVwLWltYWdlXCIpO1xuICAgIHRoaXMuX21vZGFsQ2FwdGlvbiA9IHRoaXMuX3BvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19wb3B1cC1jYXB0aW9uXCIpO1xuIH1cblxuXG5vcGVuKGRhdGEpIHtcbiAgdGhpcy5fbW9kYWxJbWFnZUVsZW1lbnQuc3JjID0gZGF0YS51cmw7XG4gIHRoaXMuX21vZGFsSW1hZ2VFbGVtZW50LmFsdCA9YGltYWdlIG9mJHtkYXRhLnVybH1gO1xuICB0aGlzLl9tb2RhbENhcHRpb24udGV4dENvbnRlbnQgPSBkYXRhLnRpdGxlO1xuICBzdXBlci5vcGVuKCk7XG4gfVxufVxuXG5cbiIsIi8vIGltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWN0aW9uIHtcbiAgICBjb25zdHJ1Y3Rvcih7aXRlbXMsIHJlbmRlcmVyfSwgY29udGFpbmVyU2VsZWN0b3Ipe1xuICAgICAgdGhpcy5faXRlbXMgPSBpdGVtcztcbiAgICAgIHRoaXMuX3JlbmRlcmVyID0gcmVuZGVyZXI7XG4gICAgICB0aGlzLl9lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgJHtjb250YWluZXJTZWxlY3Rvcn1gKTtcbiAgfVxuXG4gIHJlbmRlckl0ZW1zKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmZvckVhY2goKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyKGRhdGEpO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkSXRlbShlbGVtZW50KSB7XG4gICAgdGhpcy5fZWxlbWVudC5wcmVwZW5kKGVsZW1lbnQpO1xuICB9XG59XG5cbi8vIC8vIGZ1bmN0aW9uIHJlbmRlckNhcmQoZGF0YSkge1xuLy8gLy8gICBjb25zdCBjYXJkID0gbmV3IENhcmQoY2FyZFRlbXBsYXRlLCBkYXRhKTtcbi8vIC8vICAgYWRkQ2FyZFRvUGFnZShjYXJkLnJlbmRlcihkYXRhKSk7XG4vLyB9IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckluZm8ge1xuICBjb25zdHJ1Y3Rvcih7dXNlck5hbWUsIHVzZXJEZXRhaWx9KSB7XG4gIFxuICAgIHRoaXMuX3VzZXJOYW1lID0gdXNlck5hbWU7XG4gICAgdGhpcy5fdXNlckRldGFpbCA9IHVzZXJEZXRhaWw7XG4gIH07XG5cbiAgZ2V0VXNlckluZm8oKSB7XG4gICAgY29uc29sZS5sb2coMSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVzZXJQcm9maWxlTmFtZTogdGhpcy5fdXNlck5hbWUudGV4dENvbnRlbnQsXG4gICAgICB1c2VyUHJvZmlsZURldGFpbDogdGhpcy5fdXNlckRldGFpbC50ZXh0Q29udGVudFxuICAgIH07XG4gIH1cblxuICBzZXRVc2VySW5mbygpIHtcbiAgICBjb25zb2xlLmxvZygyKTtcbiAgICB0aGlzLl91c2VyTmFtZS50ZXh0Q29udGVudCA9IHVzZXJOYW1lO1xuICAgIHRoaXMuX3VzZXJEZXRhaWwudGV4dENvbnRlbnQgPSB1c2VyRGV0YWlsO1xuICB9XG59IiwiXG5leHBvcnQgY29uc3QgaW5pdGlhbENhcmRzID0gW1xuICB7XG4gICAgLy9OQU1FXG4gICAgdGl0bGU6IFwiTGFrZSAmIE1vdW50YWluXCIsXG4gICAgLy9MSU5LXG4gICAgdXJsOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNjM4ODAyNDIyNjMzLTY5NDA4ODY4MDM1OT9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9Njg3JnE9ODBcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkxha2UgTG91aXNlXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL2xha2UtbG91aXNlLmpwZ1wiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiQmFsZCBNb3VudGFpbnNcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUvYmFsZC1tb3VudGFpbnMuanBnXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJMYXRlbWFyXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL2xhdGVtYXIuanBnXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJWYW5vaXNlIE5hdGlvbmFsIFBhcmtcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUvdmFub2lzZS5qcGdcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkxhZ28gZGkgYnJhaWVzXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL2xhZ28uanBnXCIsXG4gIH0sXG5dO1xuXG5cbmV4cG9ydCBjb25zdCBmb3JtVmFsaWRhdG9yQ29uZmlnID0ge1xuICBpbnB1dFNlbGVjdG9yOiBcIi5mb3JtLW5hbWVfX2lucHV0XCIsXG4gIHN1Ym1pdEJ1dHRvblNlbGVjdG9yOiBcIi5mb3JtLW5hbWVfX3NhdmUtYnV0dG9uXCIsXG4gIGluYWN0aXZlQnV0dG9uQ2xhc3M6IFwiZm9ybS1uYW1lX19zYXZlLWJ1dHRvbl9kaXNhYmxlZFwiLFxuICBpbnB1dEVycm9yQ2xhc3M6IFwiZm9ybS1uYW1lX19tb2RhbC10eXBlX2Vycm9yXCIsXG4gIGVycm9yQ2xhc3M6IFwibW9kYWxfX3BvcHVwX19lcnJvcl92aXNpYmxlXCIsXG59O1xuXG5cbmV4cG9ydCBjb25zdCBzZWxlY3RvcnMgPSB7XG4gIGNhcmRTZWN0aW9uOiBcIi5lbGVtZW50cy1ncmlkX19jYXJkc1wiLCAvL2NhcmQgbGlzdFxuICBjYXJkVGVtcGxhdGU6IFwiI2NhcmQtdGVtcGxhdGVcIiwvL2NhcmQgdGVtcGxhdGVcbiAgcHJldmlld1BvcHVwOiBcIiNpbWFnZS1wb3B1cFwiLC8vIGNhcmQgaW1hZ2UgcG9wdXAgcHJldmlld1xuICAvLyBtb2RhbFBvcFVwOiBcIi5tb2RhbF9fcG9wdXBcIixcblxufVxuXG5leHBvcnQgY29uc3QgcHJvZmlsZVBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0LXByb2ZpbGUtcG9wdXBcIik7IC8vLnBvcHVwX19mb3JtXG5leHBvcnQgY29uc3QgYWRkQ2FyZFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtY2FyZC1wb3B1cFwiKTtcbmV4cG9ydCBjb25zdCBmb3JtUHJvZmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdC1wcm9maWxlLXBvcHVwXCIpO1xuZXhwb3J0IGNvbnN0IGZvcm1DYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtY2FyZC1wb3B1cFwiKTtcblxuZXhwb3J0IGNvbnN0IGFkZENhcmRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX3BsdXMtYnV0dG9uXCIpO1xuZXhwb3J0IGNvbnN0IGVkaXRGb3JtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19lZGl0LWJ1dHRvblwiKTtcbmV4cG9ydCBjb25zdCBjbG9zZUNhcmRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nsb3NlLWNhcmQtcG9wdXBcIik7XG5leHBvcnQgY29uc3QgY2xvc2VJbWFnZVByZXZpZXdCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nsb3NlLWltYWdlLXBvcHVwXCIpO1xuZXhwb3J0IGNvbnN0IGNsb3NlUHJvZmlsZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvc2UtcHJvZmlsZS1wb3B1cFwiKTtcblxuZXhwb3J0IGNvbnN0IHByb1RpdGxlID0gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fdGl0bGVcIik7XG5leHBvcnQgY29uc3QgcHJvU3ViVGl0bGUgPSAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19zdWJ0aXRsZVwiKTtcblxuZXhwb3J0IGNvbnN0IGltYWdlUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ltYWdlLXBvcHVwXCIpO1xuZXhwb3J0IGNvbnN0IG1vZGFsSW1hZ2VFbGVtZW50ID0gaW1hZ2VQb3B1cC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19wb3B1cC1pbWFnZVwiKTtcbmV4cG9ydCBjb25zdCBtb2RhbENhcHRpb24gPSBpbWFnZVBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX3BvcHVwLWNhcHRpb25cIik7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vaW5kZXguY3NzJztcblxuLy9pbXBvcnQgYWxsIGNsYXNzZXNcbmltcG9ydCBDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmRcIjtcbmltcG9ydCBGb3JtVmFsaWRhdG9yIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3JcIjtcbmltcG9ydCBQb3B1cFdpdGhJbWFnZXMgZnJvbSAnLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhJbWFnZXMnO1xuaW1wb3J0IFBvcHVwV2l0aEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtJztcbmltcG9ydCBTZWN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL1NlY3Rpb25cIjtcbmltcG9ydCBVc2VySW5mbyBmcm9tICcuLi9jb21wb25lbnRzL1VzZXJJbmZvJztcbmltcG9ydCB7XG4gIGluaXRpYWxDYXJkcyxcbiAgZm9ybVZhbGlkYXRvckNvbmZpZyxcbiAgc2VsZWN0b3JzLFxuICBwcm9maWxlUG9wdXAsXG4gIGFkZENhcmRQb3B1cCxcbiAgZm9ybVByb2ZpbGUsXG4gIGZvcm1DYXJkLFxuICBhZGRDYXJkQnRuLFxuICBlZGl0Rm9ybUJ0bixcbiAgY2xvc2VDYXJkQnV0dG9uLFxuICBjbG9zZUltYWdlUHJldmlld0J1dHRvbixcbiAgY2xvc2VQcm9maWxlQnV0dG9uLFxuICBwcm9UaXRsZSxcbiAgcHJvU3ViVGl0bGUsXG5cbiAgaW1hZ2VQb3B1cCxcbiAgbW9kYWxJbWFnZUVsZW1lbnQsXG4gIG1vZGFsQ2FwdGlvbixcbn0gZnJvbSBcIi4uL3V0aWxzL2NvbnN0YW50c1wiO1xuXG5jb25zdCBwcm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX3RpdGxlXCIpO1xuY29uc3Qgc3ViID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19zdWJ0aXRsZVwiKTtcblxuY29uc3QgZm9ybVByb2ZpbGVEZXRhaWwgPSBuZXcgVXNlckluZm8oe3VzZXJOYW1lOnByb1RpdGxlLCB1c2VyRGV0YWlsOiBwcm9TdWJUaXRsZX0pO1xuXG5jb25zdCBmb3JtUHJvZmlsZU5hbWUgPSBuZXcgUG9wdXBXaXRoRm9ybSh7XG4gIGZvcm1TdWJtaXQ6ICh7dXNlck5hbWUsIHVzZXJEZXRhaWx9KSA9PiB7XG4gICAgZm9ybVByb2ZpbGVEZXRhaWwuc2V0VXNlckluZm8odXNlck5hbWUsIHVzZXJEZXRhaWwpO1xuICB9XG59LCAgXCIubW9kYWxfX3BvcHVwXCIpO1xuXG5mb3JtUHJvZmlsZU5hbWUuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcblxuY29uc3QgQ2FyZFByZXZpZXdQb3B1cCA9IG5ldyBQb3B1cFdpdGhJbWFnZXMoc2VsZWN0b3JzLnByZXZpZXdQb3B1cCk7XG5jb25zdCBjYXJkRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JzLmNhcmRUZW1wbGF0ZSk7XG5cbmNvbnN0IENhcmRTZWN0aW9uID0gIG5ldyBTZWN0aW9uICh7XG4gIHJlbmRlcmVyOiAoaXRlbSkgPT4ge1xuICAgIGNvbnN0IGNhcmRFbCA9IG5ldyBDYXJkKHsgZGF0YTppdGVtLCBoYW5kbGVDYXJkUHJldmlldzogKGltZ0RhdGEpID0+IHtcbiAgICAgICAgICBDYXJkUHJldmlld1BvcHVwLm9wZW4oaW1nRGF0YSk7XG4gICAgfVxuICB9LCBjYXJkRGlzcGxheSk7XG4gICAgQ2FyZFNlY3Rpb24uYWRkSXRlbShjYXJkRWwucmVuZGVyKCkpO1xuICB9LFxufSxcbiAgc2VsZWN0b3JzLmNhcmRTZWN0aW9uLFxuKTtcblxuQ2FyZFNlY3Rpb24ucmVuZGVySXRlbXMoaW5pdGlhbENhcmRzKTtcbkNhcmRQcmV2aWV3UG9wdXAuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbi8vL3Byb2ZpbGUgZWRpdCBidXR0b25cbi8vIGVkaXRGb3JtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge2NvbnNvbGUubG9nKFwicHJvZmlsZSBlZGl0IGJ1dHRvblwiKX0pXG5lZGl0Rm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiBmb3JtUHJvZmlsZU5hbWUocHJvZmlsZVBvcHVwKTtcbiAgfSk7XG5cbi8vYWRkIGNhcmQgYnV0dG9uXG5hZGRDYXJkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBjb25zb2xlLmxvZyhcImFkZCBjYXJkIGJ1dHRvblwiKX0pXG5cbmNvbnN0IGFkZEZvcm1FbCA9IGZvcm1DYXJkLnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1uYW1lXCIpO1xuY29uc3QgZWRpdEZvcm1FbCA9IGZvcm1Qcm9maWxlLnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1uYW1lXCIpO1xuXG5jb25zdCBhZGRGb3JtVmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3IoZm9ybVZhbGlkYXRvckNvbmZpZywgYWRkRm9ybUVsKTtcbi8vIGFkZEZvcm1WYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbihcIi5mb3JtLW5hbWVcIik7XG5hZGRGb3JtVmFsaWRhdG9yLmVuYWJsZVZhbGlkYXRpb24oKTtcbmNvbnN0IGVkaXRGb3JtVmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3IoZm9ybVZhbGlkYXRvckNvbmZpZywgZWRpdEZvcm1FbCk7XG4vLyBlZGl0Rm9ybVZhbGlkYXRvci5lbmFibGVWYWxpZGF0aW9uKFwiLmZvcm0tbmFtZVwiKTtcbmVkaXRGb3JtVmFsaWRhdG9yLmVuYWJsZVZhbGlkYXRpb24oKTtcblxuIl0sIm5hbWVzIjpbIlBvcHVwIiwiQ2FyZCIsInRlbXBsYXRlIiwicG9wdXBTZWxlY3RvciIsImRhdGEiLCJoYW5kbGVDYXJkUHJldmlldyIsIl90ZW1wbGF0ZSIsImNvbnRlbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xvbmVOb2RlIiwiX2NhcmRMaWtlQnV0dG9uIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiX2VsZW1lbnQiLCJyZW1vdmUiLCJlbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2dCIsIl9oYW5kbGVMaWtlSWNvbiIsIl9kZWxldGVDYXJkIiwiX2hhbmRsZURlbGV0ZUNhcmQiLCJfaW1hZ2VFbGVtZW50IiwiX2hhbmRsZUNhcmRQcmV2aWV3IiwidXJsIiwiX2RhdGEiLCJ0aXRsZSIsIl9nZXRFbGVtZW50IiwiX3RpdGxlRWxlbWVudCIsInNyYyIsIl91cmwiLCJhbHQiLCJ0ZXh0Q29udGVudCIsIl90aXRsZSIsIl9zZXRFdmVudExpc3RlbmVycyIsIkZvcm1WYWxpZGF0b3IiLCJzZXR0aW5ncyIsImZvcm1FbCIsIl9pbnB1dFNlbGVjdG9yIiwiaW5wdXRTZWxlY3RvciIsIl9zdWJtaXRCdXR0b25TZWxlY3RvciIsInN1Ym1pdEJ1dHRvblNlbGVjdG9yIiwiX2luYWN0aXZlQnV0dG9uQ2xhc3MiLCJpbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiX2lucHV0RXJyb3JDbGFzcyIsImlucHV0RXJyb3JDbGFzcyIsIl9lcnJvckNsYXNzIiwiZXJyb3JDbGFzcyIsIl9mb3JtRWwiLCJpbnB1dEVsIiwidmFsaWRpdHkiLCJ2YWxpZCIsImVycm9yRWwiLCJpZCIsImFkZCIsInZhbGlkYXRpb25NZXNzYWdlIiwiX2lucHV0TGlzdCIsInNvbWUiLCJfaXNJbnZhbGlkSW5wdXQiLCJfYnV0dG9uRWwiLCJkaXNhYmxlZCIsIl9zaG93RXJyb3IiLCJfaGlkZUVycm9yIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJfY2hlY2tJbnB1dFZhbGlkaXR5IiwiX3RvZ2dsZUJ1dHRvbiIsInJlc2V0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiX3BvcHVwRWxlbWVudCIsImRvY3VtZW50IiwiX2hhbmRsZUVzY1VwIiwiYmluZCIsImtleSIsImNsb3NlIiwidGFyZ2V0IiwiY29udGFpbnMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiUG9wdXBXaXRoRm9ybSIsImZvcm1TdWJtaXQiLCJfZm9ybVN1Ym1pdCIsIl9hbGxJbnB1dEZpZWxkcyIsIl9hbGxJbnB1dEVsIiwiX2dldElucHV0VmFsdWVzIiwiUG9wdXBXaXRoSW1hZ2VzIiwiX21vZGFsSW1hZ2VFbGVtZW50IiwiX21vZGFsQ2FwdGlvbiIsIlNlY3Rpb24iLCJjb250YWluZXJTZWxlY3RvciIsIml0ZW1zIiwicmVuZGVyZXIiLCJfaXRlbXMiLCJfcmVuZGVyZXIiLCJwcmVwZW5kIiwiVXNlckluZm8iLCJ1c2VyTmFtZSIsInVzZXJEZXRhaWwiLCJfdXNlck5hbWUiLCJfdXNlckRldGFpbCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyUHJvZmlsZU5hbWUiLCJ1c2VyUHJvZmlsZURldGFpbCIsImluaXRpYWxDYXJkcyIsImZvcm1WYWxpZGF0b3JDb25maWciLCJzZWxlY3RvcnMiLCJjYXJkU2VjdGlvbiIsImNhcmRUZW1wbGF0ZSIsInByZXZpZXdQb3B1cCIsInByb2ZpbGVQb3B1cCIsImFkZENhcmRQb3B1cCIsImZvcm1Qcm9maWxlIiwiZm9ybUNhcmQiLCJhZGRDYXJkQnRuIiwiZWRpdEZvcm1CdG4iLCJjbG9zZUNhcmRCdXR0b24iLCJjbG9zZUltYWdlUHJldmlld0J1dHRvbiIsImNsb3NlUHJvZmlsZUJ1dHRvbiIsInByb1RpdGxlIiwicHJvU3ViVGl0bGUiLCJpbWFnZVBvcHVwIiwibW9kYWxJbWFnZUVsZW1lbnQiLCJtb2RhbENhcHRpb24iLCJwcm8iLCJzdWIiLCJmb3JtUHJvZmlsZURldGFpbCIsImZvcm1Qcm9maWxlTmFtZSIsInNldFVzZXJJbmZvIiwic2V0RXZlbnRMaXN0ZW5lcnMiLCJDYXJkUHJldmlld1BvcHVwIiwiY2FyZERpc3BsYXkiLCJDYXJkU2VjdGlvbiIsIml0ZW0iLCJjYXJkRWwiLCJpbWdEYXRhIiwib3BlbiIsImFkZEl0ZW0iLCJyZW5kZXIiLCJyZW5kZXJJdGVtcyIsImFkZEZvcm1FbCIsImVkaXRGb3JtRWwiLCJhZGRGb3JtVmFsaWRhdG9yIiwiZW5hYmxlVmFsaWRhdGlvbiIsImVkaXRGb3JtVmFsaWRhdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==