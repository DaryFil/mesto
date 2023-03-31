import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import {
  popupProfile,
  popups,
  profileOpenBtn,
  popupCloseButtons,
  profileName,
  profileAbout,
  inputName,
  inputAbout,
  formEditProfile,
  cardTemplate,
  cardsContainer,
  popupAdd,
  btnOpenPopupAdd,
  formAddCard,
  inputPlace,
  inputLink,
  popupPhotoViewSelector,
  popupImage,
  popupImageTitle,
  initialCards,
  validationConfig,
} from "./constants.js";
import PopupWithImage from "./PopupWithImage.js";

// const handleCloseEsc = (evt) => {
//   if (evt.key === "Escape") {
//     const currentPopup = document.querySelector(".popup_opened");
//     closePopup(currentPopup);
//   }
// };

// const openPopup = (popup) => {
//   popup.classList.add("popup_opened");
//   document.addEventListener("keydown", handleCloseEsc);
// };

// const closePopup = (popup) => {
//   popup.classList.remove("popup_opened");
//   document.removeEventListener("keydown", handleCloseEsc);
// };

// popups.forEach((popup) => {
//   popup.addEventListener("mousedown", (evt) => {
//     if (evt.target === evt.currentTarget) {
//       closePopup(popup);
//     } else if (evt.target.classList.contains("popup__button-close")) {
//       closePopup(popup);
//     }
//   });
// });

const formEditProfileValidator = new FormValidator(
  validationConfig,
  formEditProfile
); //создаем новый экземпляр класса на основе класса формвалидатор
const formAddCardValidator = new FormValidator(validationConfig, popupAdd); //создаем новый экземпляр класса на основе класса формвалидатор
formEditProfileValidator.enableValidation(); //для формы вызываем публичный метод
formAddCardValidator.enableValidation(); // для формы вызываем публичный метод

const openPopupProfile = () => {
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
  formEditProfileValidator.resetValidation();
  openPopup(popupProfile);
};

function handlformEditProfileSubmit() {
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  closePopup(popupProfile);
}

// function handleImageView(cardImage) {
//   popupImage.src = cardImage.src;
//   popupImage.alt = cardImage.alt;
//   popupImageTitle.textContent = cardImage.alt;
//   openPopup(popupPhotoView);
// }
const popupWithImage = new PopupWithImage(popupPhotoViewSelector);
popupWithImage.setEventListeners();

function handleCardClick(cardImage) {
  popupWithImage.open(cardImage);
}


function createCard(cardData) {
  const card = new Card(cardData, cardTemplate, handleImageView); //создаем новый экземпляр класса на основе класса кард
  return card.generateCard(); //возвращаем сгенерированную карточку
}

function renderCard(cardData) {
  //функция вставляет карточку в разметку
  const cardElement = createCard(cardData);
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

profileOpenBtn.addEventListener("click", openPopupProfile);

popupCloseButtons.forEach((button) => {
  button.addEventListener("click", (event) =>
    closePopup(event.target.closest(".popup"))
  );
});
formEditProfile.addEventListener("submit", handlformEditProfileSubmit);
formAddCard.addEventListener("submit", handleSubmitPopupAdd);
btnOpenPopupAdd.addEventListener("click", () => {
  formAddCard.reset();
  formAddCardValidator.resetValidation();
  openPopup(popupAdd);
});
