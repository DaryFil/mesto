export class Card {
  constructor(
    data,
    templateSelector,
    handleCardClick,
    handleLikeClick,
    handleOpenConfirm,
    userId
  ) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._cardId = data._id;
    this._ownerId = data.owner._id;
    this._userId = userId;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleLikeClick = handleLikeClick;
    this._handleOpenConfirm = handleOpenConfirm;
    this._isLiked = false;
  }

  _getTemplate() {
    return this._templateSelector.querySelector(".card").cloneNode(true);
  }

  // _toggleLikeButton(isLiked) {
  //   if (isLiked) {
  //     this._cardLikebtn.classList.add("card__like-button_active");
  //   } else {
  //     this._cardLikebtn.classList.remove("card__like-button_active");
  //   }
  // }

  deleteCard = () => {
    this._card.remove();
  };

  _handleClickDeleteBtn() {
    this._handleOpenConfirm(this._cardId);
  }

  _isLikedByMe() {
    return this._likes.some((item) => item._id === this._userId);
  }

  _toggleButtonLikeState() {
    this._isLiked = this._isLikedByMe();

    if (this._isLiked) {
      this._cardLikebtn.classList.add("card__like-button_active");
    } else {
      this._cardLikebtn.classList.remove("card__like-button_active");
    }
  }

  handleToggleLike(likes) {
    this._likes = likes;
    this._likeCounter.textContent = this._likes.length;
    this._toggleButtonLikeState();
  }

  _setEventListeners = () => {
    this._cardLikebtn.addEventListener("click", () => {
      this._handleLikeClick(this._cardId, this._isLiked);
    });
    this._cardDeletebtn.addEventListener("click", () => {
      this._handleClickDeleteBtn();
    });
    this._cardImage.addEventListener("click", () => {
      this._handleCardClick(this._cardImage);
    });
  };

  generateCard = () => {
    this._card = this._getTemplate();
    this._cardTitle = this._card.querySelector(".card__title");
    this._cardImage = this._card.querySelector(".card__image");
    this._cardLikebtn = this._card.querySelector(".card__like-button");
    this._likeCounter = this._card.querySelector(".card__like-count");
    this._cardDeletebtn = this._card.querySelector(".card__delete-button");

    this._cardTitle.textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;

    if (this._ownerId !== this._userId) {
      //если id не наш-убираем корзинку
      this._cardDeletebtn.remove();
    }
    this._likeCounter.textContent = this._likes.length;
    this._toggleButtonLikeState();

    this._setEventListeners();

    return this._card;
  };
}
