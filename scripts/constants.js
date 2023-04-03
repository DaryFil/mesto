export const popupProfileSelector = ".popup_profile",
  profileOpenBtn = document.querySelector(".profile__edit-button"),
  inputName = document.querySelector(".popup__input_name"),
  inputAbout = document.querySelector(".popup__input_about"),
  formEditProfile = document.querySelector(".popup__profile-form"),
  cardTemplate = document.querySelector("#card").content,
  cardsContainer = document.querySelector(".elements"),
  btnOpenPopupAdd = document.querySelector(".profile__add-button"),
  formAddCard = document.querySelector(".popup__profile-form_card"),
  popupPhotoViewSelector = ".popup_photo-view",
  popupAddSelector = ".popup_add-card",
  initialCards = [
    {
      name: "Архипо-Осиповка",
      link: "https://i.ibb.co/3SDtYjd/archipo-osipovka.jpg",
    },
    {
      name: "Бехтеевка",
      link: "https://i.ibb.co/ZBd1343/bechteevka.jpg",
    },
    {
      name: "Графский заповедник",
      link: "https://i.ibb.co/zP14PC3/grafskij-zapovednik.jpg",
    },
    {
      name: "Кудыкина гора",
      link: "https://i.ibb.co/Mhpfy9g/kudykina-gora-lipetskaya-obl.jpg",
    },
    {
      name: "Новороссийск",
      link: "https://i.ibb.co/KzhMcbp/novorossijsk.jpg",
    },
    {
      name: "Сафари-парк, Геленджик",
      link: "https://i.ibb.co/Hxf96kK/safari-park-gelendjik.jpg",
    },
  ],
  validationConfig = {
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button-save",
    inactiveButtonClass: "popup__button-save_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__input-error_visible",
  };
