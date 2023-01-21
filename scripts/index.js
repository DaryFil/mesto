const popup = document.querySelector(".popup"),
  btnOpen = document.querySelector(".profile__edit-button"),
  btnClose = document.querySelector(".popup__button_close"),
  profileName = document.querySelector(".profile__name"),
  profileAbout = document.querySelector(".profile__about"),
  inputName = document.querySelector(".popup__profile_name"),
  inputAbout = document.querySelector(".popup__profile_about"),
  popupForm = document.querySelector(".popup__profile_form");

btnOpen.addEventListener("click", openPopup);
btnClose.addEventListener("click", closePopup);
popupForm.addEventListener("submit", saveForm);

function openPopup() {
  popup.classList.add("popup_opened");
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
}

function closePopup() {
  popup.classList.remove("popup_opened");
}

function saveForm(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  closePopup();
}
