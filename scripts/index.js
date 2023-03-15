import { Card } from "./Card.js";

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

// function toggleLike(evt) {
//   evt.target.classList.toggle("card__like_active");
// }

// function deleteCard(evt) {
//   evt.target.closest(".card").remove();
// }

function handleImageView(cardImage) {
  popupImage.src = evt.target.src;
  popupImage.alt = evt.target.alt;
  popupImageTitle.textContent = cardImage.alt;
  openPopup(popupPhotoView);
}

// function createCard(name, link) {
//   const card = cardTemplate.querySelector(".card").cloneNode(true);
//   const cardTitle = card.querySelector(".card__title");
//   const cardImage = card.querySelector(".card__image");
//   const cardLikebtn = card.querySelector(".card__like");
//   const cardDeletebtn = card.querySelector(".card__delete-button");

//   cardTitle.textContent = name;
//   cardImage.src = link;
//   cardImage.alt = name;

//   cardLikebtn.addEventListener("click", toggleLike);
//   cardDeletebtn.addEventListener("click", deleteCard);
//   cardImage.addEventListener("click", handleImageView);

//   return card;
// }

function renderCard(cardData) {
  const card = new Card(cardData, cardTemplate, handleImageView); //создаем новый экземпляр класса на основе класса кард
  const cardElement = card.createCard(); //реальную карточку помещаем в переменную
  cardsContainer.prepend(cardElement); //реальную карточку помещаем в начало контейнера
}

initialCards.forEach((cardData) => {
  //для каждого объекта массива
  renderCard(cardData);
});

function handleSubmitPopupAdd(evt) {
  evt.preventDefault();
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
  resetValidation(formPopupAdd, validationConfig);
  openPopup(popupAdd);
});
