export class FormValidator {
  constructor(data, formSelector) {
    this._formSelector = formSelector;
    this._inputList = Array.from(
      this._formSelector.querySelectorAll(data.inputSelector)
    );

    this._submitButtonSelector = this._formSelector.querySelector(
      data.submitButtonSelector
    );
    this._inactiveButtonClass = data.inactiveButtonClass;
    this._inputErrorClass = data.inputErrorClass;
    this._errorClass = data.errorClass;
  }

  _showInputError = (input) => {
    const errorElement = this._formSelector.querySelector(
      `.${input.name}-error`
    );
    input.classList.add(this._inputErrorClass);
    errorElement.classList.add(this._errorClass);
    errorElement.textContent = input.validationMessage;
  };

  _hideInputError = (input) => {
    const errorElement = this._formSelector.querySelector(
      `.${input.name}-error`
    );
    input.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = "";
  };

  _checkInputValidity = (input) => {
    if (!input.validity.valid) {
      this._showInputError(input);
    } else {
      this._hideInputError(input);
    }
  };

  _hasInvalidInput = () => {
    return this._inputList.some((input) => {
      //проверяем у каждого инпута валидити стейт свойство валид.
      return !input.validity.valid;
    });
  };

  _toggleButtonState = () => {
    if (this._hasInvalidInput(this._inputList)) {
      this._submitButtonSelector.classList.add(this._inactiveButtonClass);
      this._submitButtonSelector.setAttribute("disabled", true);
    } else {
      this._submitButtonSelector.classList.remove(this._inactiveButtonClass);
      this._submitButtonSelector.removeAttribute("disabled");
    }
  };

  _addFormValidation = () => {
    this._inputList.forEach((input) => {
      input.addEventListener("input", () => {
        this._checkInputValidity(input);
        this._toggleButtonState();
      });
    });
  };

  resetValidation = () => {
    this._toggleButtonState();
    this._inputList.forEach((input) => {
      this._hideInputError(input);
    });
  };

  enableValidation = () => {
    this._formSelector.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._addFormValidation();
  };
}
