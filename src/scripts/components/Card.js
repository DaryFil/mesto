export class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    return this._templateSelector.querySelector(".card").cloneNode(true);
  }

  _toggleLike = () => {
    this._cardLikebtn.classList.toggle("card__like_active");
  };

  _deleteCard = () => {
    this._card.remove();
  };

  _setEventListeners = () => {
    this._cardLikebtn.addEventListener("click", () => {
      this._toggleLike();
    });
    this._cardDeletebtn.addEventListener("click", () => {
      this._deleteCard();
    });
    this._cardImage.addEventListener("click", () => {
      this._handleCardClick(this._cardImage);
    });
  };

  generateCard = () => {
    this._card = this._getTemplate();
    this._cardTitle = this._card.querySelector(".card__title");
    this._cardImage = this._card.querySelector(".card__image");
    this._cardLikebtn = this._card.querySelector(".card__like");
    this._cardDeletebtn = this._card.querySelector(".card__delete-button");

    this._cardTitle.textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;

    this._setEventListeners();

    return this._card;
  };
}
