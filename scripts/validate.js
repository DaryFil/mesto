const enableValidation = ({ formSelector, ...rest }) => {
  const forms = document.querySelectorAll(formSelector);

  forms.forEach((form) => {
    addFormValidation({ form, ...rest });
  });
};
const addFormValidation = ({
  form,
  inputSelector,
  submitButtonSelector,
  inputErrorClass,
}) => {
  const inputList = form.querySelectorAll(inputSelector);
  const button = form.querySelector(submitButtonSelector);
  form.addEventListener("submit", (evt) => {
    evt.preventDefault();
  });

  inputList.forEach((input) => {
    input.addEventListener("input", () => {
      checkInputValidity(input, form, inputErrorClass);
      toggleButtonState(inputList, button);
    });
  });
  toggleButtonState(inputList, button);
};

const checkInputValidity = (input, form, inputErrorClass) => {
  if (!input.validity.valid) {
    showInputError(form, input, input.validationMessage, inputErrorClass);
  } else {
    hideInputError(form, input, inputErrorClass);
  }
};

const showInputError = (form, input, errorMessage, inputErrorClass) => {
  const errorElement = form.querySelector(`.${input.name}-error`); //элемент в который выводим ошибку(спан)
  input.classList.add(inputErrorClass);
  errorElement.textContent = errorMessage;
};

const hideInputError = (form, input, inputErrorClass) => {
  const errorElement = form.querySelector(`.${input.name}-error`);
  input.classList.remove(inputErrorClass);
  errorElement.textContent = "";
};
const toggleButtonState = (inputList, button) => {
  if (hasInvalidInput(inputList)) {
    button.disabled = true;
  } else {
    button.disabled = false;
  }
};
const hasInvalidInput = (inputList) => {
  return Array.from(inputList).some((input) => !input.validity.valid);
};
// const resetValidation = (
//   form,
//   {
//     inputSelector,
//     submitButtonSelector,
//     inactiveButtonClass,
//     inputErrorClass,
//     errorClass,
//   }
// ) => {
//   const inputList = Array.from(form.querySelectorAll(inputSelector));
//   const button = form.querySelector(submitButtonSelector);
//   toggleButtonState(inputList, button);
//   inputList.forEach((input) => {
//     hideInputError(form, input, inputErrorClass);
//   });
// };
