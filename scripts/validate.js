validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button-save",
  inactiveButtonClass: "popup__button-save_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_visible",
};

const showInputError = (
  form,
  input,
  errorMessage,
  errorClass,
  inputErrorClass
) => {
  const errorElement = form.querySelector(`.${input.name}-error`); //элемент в который выводим ошибку(спан)
  input.classList.add(inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(errorClass);
};

const hideInputError = (form, input, inputErrorClass, errorClass) => {
  const errorElement = form.querySelector(`.${input.name}-error`);
  input.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = "";
};

const checkInputValidity = (input, form, { inputErrorClass, errorClass }) => {
  if (!input.validity.valid) {
    showInputError(
      form,
      input,
      inputErrorClass,
      errorClass,
      input.validationMessage
    );
  } else {
    hideInputError(form, input, inputErrorClass, errorClass);
  }
};

const hasInvalidInput = (inputList) => {
  return Array.from(inputList).some((input) => !input.validity.valid);
};

const toggleButtonState = (inputList, button, inactiveButtonClass) => {
  if (hasInvalidInput(inputList)) {
    button.classList.add(inactiveButtonClass);
    button.setAttribute("disabled", true);
  } else {
    button.classList.remove(inactiveButtonClass);
    button.removeAttribute("disabled");
  }
};

const resetValidation = (
  form,
  {
    inputSelector,
    submitButtonSelector,
    inactiveButtonClass,
    inputErrorClass,
    errorClass,
  }
) => {
  const inputList = Array.from(form.querySelectorAll(inputSelector));
  const button = form.querySelector(submitButtonSelector);
  toggleButtonState(inputList, button, inactiveButtonClass);
  inputList.forEach((input) => {
    hideInputError(form, input, inputErrorClass, errorClass);
  });
};

const addFormValidation = (
  form,
  {
    inputSelector,
    submitButtonSelector,
    
    inactiveButtonClass,
    ...rest
  }
) => {
  const inputList = Array.from(form.querySelectorAll(inputSelector));
  const button = form.querySelector(submitButtonSelector);
  // form.addEventListener("submit", (evt) => {
  //   evt.preventDefault();
  // });

  inputList.forEach((input) => {
    input.addEventListener("input", () => {
      checkInputValidity(input, form, rest);
      toggleButtonState(inputList, button, inactiveButtonClass);
    });
  });
 };


const enableValidation = ({ formSelector, ...rest }) => {
  const forms = document.querySelectorAll(formSelector);

  forms.forEach((form) => {
    addFormValidation(form, rest );
  });
};
enableValidation(validationConfig);






