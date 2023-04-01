import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = this._popup.querySelector(".popup__image");
    this._title = this._popup.querySelector(".popup__image-title");
  }

  open({ src, alt }) {
    this._image.src = src;
    this._image.alt = alt;
    this._title.textContent = alt;
    super.open();
  }
}
