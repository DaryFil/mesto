import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import {
  popupProfileSelector,
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
  popupAddSelector,
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
import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";

const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  descriptionSelector: ".profile__about",
});

const formEditProfileValidator = new FormValidator(
  validationConfig,
  formEditProfile
); //создаем новый экземпляр класса на основе класса формвалидатор
const formAddCardValidator = new FormValidator(validationConfig, formAddCard); //создаем новый экземпляр класса на основе класса формвалидатор
formEditProfileValidator.enableValidation(); //для формы вызываем публичный метод
formAddCardValidator.enableValidation(); // для формы вызываем публичный метод

const openPopupProfile = () => {
  const { name, description } = userInfo.getUserUnfo();
  inputName.value = name;
  inputAbout.value = description;
  formEditProfileValidator.resetValidation();
  popupProfileEdit.open();
};

const handlformEditProfileSubmit = (data) => {
  userInfo.setUserInfo(data);
  popupProfileEdit.close();
};

const popupWithImage = new PopupWithImage(popupPhotoViewSelector); //создаем экземпляр класса попап-с-картинкой
popupWithImage.setEventListeners();

const popupProfileEdit = new PopupWithForm(
  popupProfileSelector,
  handlformEditProfileSubmit
);
popupProfileEdit.setEventListeners();

const popupAddCard = new PopupWithForm(popupAddSelector, handleSubmitPopupAdd);
popupAddCard.setEventListeners();

function handleCardClick(cardImage) {
  popupWithImage.open(cardImage);
}

function createCard(cardData) {
  const card = new Card(cardData, cardTemplate, handleCardClick); //создаем новый экземпляр класса на основе класса кард
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

function handleSubmitPopupAdd(cardData) {
  // const cardData = {
  //   name: inputPlace.value,
  //   link: inputLink.value,
  // };
  renderCard(cardData);
  popupAddCard.close();
}

profileOpenBtn.addEventListener("click", openPopupProfile);

popupCloseButtons.forEach((button) => {
  button.addEventListener("click", (event) =>
    closePopup(event.target.closest(".popup"))
  );
});

btnOpenPopupAdd.addEventListener("click", () => {
  formAddCardValidator.resetValidation();
  popupAddCard.open();
});
