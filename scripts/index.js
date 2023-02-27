const popupProfile = document.querySelector(".popup_profile"),
  popups = document.querySelectorAll(".popup"),
  btnOpen = document.querySelector(".profile__edit-button"),
  popupCloseButtons = document.querySelectorAll(".popup__button-close"),
  profileName = document.querySelector(".profile__name"),
  profileAbout = document.querySelector(".profile__about"),
  inputName = document.querySelector(".popup__input_name"),
  inputAbout = document.querySelector(".popup__input_about"),
  popupForm = document.querySelector(".popup__profile-form"),
  popupProfileSavebtn = popupForm.querySelector(".popup__button-save"),
  cardTemplate = document.querySelector("#card").content,
  cardsContainer = document.querySelector(".elements"),
  popupAdd = document.querySelector(".popup_add-card"),
  btnOpenPopupAdd = document.querySelector(".profile__add-button"),
  formPopupAdd = document.querySelector(".popup__profile-form_card"),
  inputPlace = document.querySelector(".popup__input_place"),
  inputLink = document.querySelector(".popup__input_link"),
  popupPhotoView = document.querySelector(".popup_photo-view"),
  popupImage = document.querySelector(".popup__image"),
  popupImageTitle = document.querySelector(".popup__image-title"),
  validationConfig = {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button-save",
    inactiveButtonClass: "popup__button-save_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__input-error_visible",
  },
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
  ];

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

function openPopupProfile() {
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
  resetValidation(popupForm, validationConfig);
  openPopup(popupProfile);
}

function saveForm(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  closePopup(popupProfile);
}

function toggleLike(evt) {
  evt.target.classList.toggle("card__like_active");
}

function deleteCard(evt) {
  evt.target.closest(".card").remove();
}

function handleImageView(evt) {
  popupImage.src = evt.target.src;
  popupImage.alt = evt.target.alt;
  popupImageTitle.textContent = evt.target.alt;
  openPopup(popupPhotoView);
}

function createCard(name, link) {
  const card = cardTemplate.querySelector(".card").cloneNode(true);
  const cardTitle = card.querySelector(".card__title");
  const cardImage = card.querySelector(".card__image");
  const cardLikebtn = card.querySelector(".card__like");
  const cardDeletebtn = card.querySelector(".card__delete-button");

  cardTitle.textContent = name;
  cardImage.src = link;
  cardImage.alt = name;

  cardLikebtn.addEventListener("click", toggleLike);
  cardDeletebtn.addEventListener("click", deleteCard);
  cardImage.addEventListener("click", handleImageView);

  return card;
}

function renderCard(card, container) {
  container.prepend(card);
}
initialCards.forEach((card) => {
  renderCard(createCard(card.name, card.link), cardsContainer);
});

function handleSubmitPopupAdd(evt) {
  evt.preventDefault();
  renderCard(createCard(inputPlace.value, inputLink.value), cardsContainer);
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
  resetValidation(formPopupAdd, validationConfig);
  openPopup(popupAdd);
});
