import "./index.css";
import { Card } from "../scripts/components/Card.js";
import { FormValidator } from "../scripts/components/FormValidator.js";
import {
  popupProfileSelector,
  profileOpenBtn,
  inputName,
  inputAbout,
  formEditProfile,
  cardTemplate,
  cardsContainer,
  popupAddSelector,
  popupSaveAvatarSelector,
  btnOpenPopupAdd,
  formAddCard,
  formSaveAvatar,
  popupPhotoViewSelector,
  validationConfig,
  settings,
  profileAvatarSave,
} from "../scripts/utils/constants.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import PopupWithConfirm from "../scripts/components/PopupWithConfirm.js";
import UserInfo from "../scripts/components/UserInfo.js";
import Section from "../scripts/components/Section.js";
import Api from "../scripts/components/Api.js";

const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  descriptionSelector: ".profile__about",
  avatarSelector: ".profile__avatar",
});

const api = new Api(settings);

const cards = {};

Promise.all([
  //для одновременного получения данных пользователя и карточек с сервера
  api.getUserInfo(),
  api.getInitialCards(),
])
  .then(([userData, cards]) => {
    userInfo.setUserInfo(userData);
    userInfo.setUserAvatar(userData);
    cardsSection.renderItems(cards.reverse());
  })
  .catch((error) => console.log(`Ошибка: ${error}`));

const openPopupProfile = () => {
  const { name, about } = userInfo.getUserInfo();
  inputName.value = name;
  inputAbout.value = about;
  formEditProfileValidator.resetValidation();
  popupProfileEdit.open();
};

//обработчик редактирования профиля//
const handleFormEditProfileSubmit = (data) => {
 popupProfileEdit.blockButton('Сохранение...');
  api
    .saveUserInfo(data) //отправляем данные пользователя на сервер
    .then((res) => {
      //если рез-т успешный, получаем обновленные данные с сервера
      userInfo.setUserInfo(res); //подставляем рез-ты на страничку
      popupProfileEdit.close(); //закрываем попап
    })
    .catch((error) => console.log(`Ошибка: ${error}`))
    .finally(() =>  popupProfileEdit.blockButton('Сохранить', false));
};
// редактирование аватара//
const handleSaveAvatar = (data) => { //отправляем аватар на сервер
  popupSaveAvatar.blockButton('Сохранение...');
  api
    .saveUserAvatar(data)
    .then((res) => {
      userInfo.setUserAvatar(res);
      popupSaveAvatar.close();
    })
    .catch((error) => console.log(`Ошибка: ${error}`))
    .finally(() => popupSaveAvatar.blockButton('Сохранить', false));
};

const formEditProfileValidator = new FormValidator(
  validationConfig,
  formEditProfile
); //создаем новый экземпляр класса на основе класса формвалидатор
const formAddCardValidator = new FormValidator(validationConfig, formAddCard); //создаем новый экземпляр класса на основе класса формвалидатор
formEditProfileValidator.enableValidation(); //для формы вызываем публичный метод
formAddCardValidator.enableValidation(); // для формы вызываем публичный метод

const formSaveAvatarValidator = new FormValidator(
  validationConfig,
  formSaveAvatar
);
formSaveAvatarValidator.enableValidation();

const popupWithImage = new PopupWithImage(popupPhotoViewSelector); //создаем экземпляр класса попап-с-картинкой
popupWithImage.setEventListeners();

const popupProfileEdit = new PopupWithForm(
  popupProfileSelector,
  handleFormEditProfileSubmit
);
popupProfileEdit.setEventListeners();

const popupAddCard = new PopupWithForm(popupAddSelector, handleSubmitPopupAdd);
popupAddCard.setEventListeners();

const popupSaveAvatar = new PopupWithForm(
  popupSaveAvatarSelector,
  handleSaveAvatar
);
popupSaveAvatar.setEventListeners();

const popupConfirmDelete = new PopupWithConfirm(
  ".popup_delete-card",
  handleSubmitPopupConfirm
);
popupConfirmDelete.setEventListeners();

function handleSubmitPopupConfirm(cardId, card) {
  popupConfirmDelete.blockButton('Удаление...');
  api.deleteCard(cardId)
  .then(() => {
    card.deleteCard();
    popupConfirmDelete.close()})
    .catch((error) => console.log(`Ошибка: ${error}`))
    .finally(() => popupConfirmDelete.blockButton('Да', false));
}

function handleCardClick(cardImage) {
  popupWithImage.open(cardImage);
}
const handleLikeClick = (id, isLiked) => {
  if (isLiked) {
    api._removeLike(id).then((res) => {
      cards[id].setLikes(res.likes);
    });
  } else {
    api._addLike(id).then((res) => {
      cards[id].setLikes(res.likes);
    });
  }
};

function createCard(cardData) {
  const card = new Card(
    cardData,
    cardTemplate,
    handleCardClick,
    handleLikeClick,
    (cardId) => popupConfirmDelete.open(cardId, card),
    userInfo.getUserId()
  ); //создаем новый экземпляр класса на основе класса кард
  cards[cardData._id] = card;
  return card.generateCard(); //возвращаем сгенерированную карточку
}
const cardsSection = new Section(
  {
    renderer: (item) => {
      cardsSection.addItem(createCard(item));
    },
  },
  ".elements"
);




// function renderCard(cardData) {
//   //функция вставляет карточку в разметку
//   const cardElement = createCard(cardData);
//   cardsContainer.prepend(cardElement); //реальную карточку помещаем в начало контейнера
// }

// initialCards.forEach((cardData) => {
//   //для каждого объекта массива функцией rendercard создаем карточку и перемещаем ее в начало контейнера с карточками
//   renderCard(cardData);
// });

function handleSubmitPopupAdd(cardData) {
  //добавление карточки
  popupAddCard.blockButton('Создание...');
  api
    .addNewCard(cardData)
    .then((res) => {
      cardsSection.addItem(createCard(res));
      popupAddCard.close();
    })
    .catch((error) => console.log(`Ошибка: ${error}`))
    .finally(() => popupAddCard.blockButton('Сохранить', false));
}

profileOpenBtn.addEventListener("click", openPopupProfile);

profileAvatarSave.addEventListener("click", () => {
  formSaveAvatarValidator.resetValidation();
  popupSaveAvatar.open();
})

btnOpenPopupAdd.addEventListener("click", () => {
  formAddCardValidator.resetValidation();
  popupAddCard.open();
});
