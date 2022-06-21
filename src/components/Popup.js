export default class Popup {
    constructor(popupSelector){
        this._popupElement = document.querySelector(popupSelector);
        this._handleEscUp = this._handleEscUp.bind(this);
    }

    _handleEscUp(evt) {
      if (evt.key === "Escape") {
        evt.preventDefault();
        // closePopup(document.querySelector(".modal_opened"));
        this.close();
      }
    }

    setEventListeners() {
      this._popupElement.addEventListener("click", (evt) => {
        if(
          evt.target.classList.contains("modal__popup-btn") ||  evt.target.classList.contains("modal__popup")
        ) {
          this.close();
        }
      });
    }

    open(){
      this._popupElement.classList.add("modal_opened");
      document.addEventListener("keydown", this._handleEscUp);
    }

    close(){
      this._popupElement.classList.remove("modal_opened");
      document.removeEventListener("keydown", this._handleEscUp);
    }

}
