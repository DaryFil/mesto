const enableValidation = ({ formSelector, ...rest }) => {
  const forms = document.querySelectorAll(formSelector);

  forms.forEach((form) => {
    addFormValidation({ form, ...rest });
  });
};
const addFormValidation = (
  form,
  {
    inputSelector,
    submitButtonSelector,
    inputErrorClass,
    inactiveButtonClass,
    ...rest
  }
) => {
  const inputList = Array.from(form.querySelectorAll(inputSelector));
  const button = form.querySelector(submitButtonSelector);
  form.addEventListener("submit", (evt) => {
    evt.preventDefault();
  });

  inputList.forEach((input) => {
    input.addEventListener("input", () => {
      checkInputValidity(input, form, inputErrorClass);
      toggleButtonState(inputList, button, inactiveButtonClass);
    });
  });
  toggleButtonState(inputList, button, inactiveButtonClass);
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
const toggleButtonState = (inputList, button, inactiveButtonClass) => {
  if (hasInvalidInput(inputList)) {
    button.classList.add(inactiveButtonClass);
    button.setAttribute("disabled", true);
  } else {
    button.classList.remove(inactiveButtonClass);
    button.removeAttribute("disabled");
  }
};
const hasInvalidInput = (inputList) => {
  return Array.from(inputList).some((input) => !input.validity.valid);
};
const resetValidation = (
  form,
  {
    inputSelector,
    submitButtonSelector,
    inactiveButtonClass,
    inputErrorClass,
    errorClass
  }
) => {
  const inputList = Array.from(form.querySelectorAll(inputSelector));
  const button = form.querySelector(submitButtonSelector);
  toggleButtonState(inputList, button, inactiveButtonClass);
  inputList.forEach((input) => {
    hideInputError(form, input, inputErrorClass, errorClass);
  });
};
