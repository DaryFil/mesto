import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._form = this._popup.querySelector(".popup__form");
    this._inputList = this._popup.querySelectorAll(".popup__input");
    this._handleFormSubmit = handleFormSubmit;
    this._submitButton = this._form.querySelector('.popup__button-save');
  }

  _getInputValues() {
    this._valuesForm = {};
    this._inputList.forEach((input) => {
      this._valuesForm[input.name] = input.value;
    });
    return this._valuesForm;
  }

  close() {
    super.close();
    this._form.reset();
  }

  blockButton(buttonText, isBlocked = true) {
    this._submitButton.disabled = isBlocked;
    this._submitButton.textContent = buttonText;
  }


  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", () => {
      this._handleFormSubmit(this._getInputValues());
    });
  }
}
