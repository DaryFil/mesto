import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import {
  popupProfile,
  popups,
  btnOpen,
  popupCloseButtons,
  profileName,
  profileAbout,
  inputName,
  inputAbout,
  popupForm,
  cardTemplate,
  cardsContainer,
  popupAdd,
  btnOpenPopupAdd,
  formPopupAdd,
  inputPlace,
  inputLink,
  popupPhotoView,
  popupImage,
  popupImageTitle,
  initialCards,
  validationConfig,
} from "./constants.js";

const handleCloseEsc = (evt) => {
  if (evt.key === "Escape") {
    const currentPopup = document.querySelector(".popup_opened");
    closePopup(currentPopup);
  }
};

const openPopup = (popup) => {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", handleCloseEsc);
};

const closePopup = (popup) => {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", handleCloseEsc);
};

popups.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target === evt.currentTarget) {
      closePopup(popup);
    } else if (evt.target.classList.contains("popup__button-close")) {
      closePopup(popup);
    }
  });
});

const formPopupFormValidator = new FormValidator(validationConfig, popupForm); //создаем новый экземпляр класса на основе класса формвалидатор
const formPopupAddValidator = new FormValidator(validationConfig, popupAdd); //создаем новый экземпляр класса на основе класса формвалидатор
formPopupFormValidator.enableValidation(); //для формы вызываем публичный метод
formPopupAddValidator.enableValidation(); // для формы вызываем публичный метод

const openPopupProfile = () => {
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
  formPopupFormValidator.resetValidation();
  openPopup(popupProfile);
};

function saveForm() {
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  closePopup(popupProfile);
}

function handleImageView(cardImage) {
  popupImage.src = cardImage.src;
  popupImage.alt = cardImage.alt;
  popupImageTitle.textContent = cardImage.alt;
  openPopup(popupPhotoView);
}

function renderCard(cardData) {
  const card = new Card(cardData, cardTemplate, handleImageView); //создаем новый экземпляр класса на основе класса кард
  const cardElement = card.createCard(); //реальную карточку помещаем в переменную
  cardsContainer.prepend(cardElement); //реальную карточку помещаем в начало контейнера
}

initialCards.forEach((cardData) => {
  //для каждого объекта массива функцией rendercard создаем карточку и перемещаем ее в начало контейнера с карточками
  renderCard(cardData);
});

function handleSubmitPopupAdd(evt) {
  const cardData = {
    name: inputPlace.value,
    link: inputLink.value,
  };
  renderCard(cardData);
  closePopup(popupAdd);
  evt.target.reset();
}

btnOpen.addEventListener("click", openPopupProfile);

popupCloseButtons.forEach((button) => {
  button.addEventListener("click", (event) =>
    closePopup(event.target.closest(".popup"))
  );
});
popupForm.addEventListener("submit", saveForm);
formPopupAdd.addEventListener("submit", handleSubmitPopupAdd);
btnOpenPopupAdd.addEventListener("click", () => {
  formPopupAddValidator.resetValidation();
  openPopup(popupAdd);
});
