(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,n(o.key),o)}}function r(t,e,r){return(e=n(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(e){var r=function(e,r){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===t(r)?r:String(r)}var o=function(){function t(e,n,o,i,u,a){var c=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),r(this,"deleteCard",(function(){c._card.remove()})),r(this,"_setEventListeners",(function(){c._cardLikebtn.addEventListener("click",(function(){c._handleLikeClick(c._cardId,c._isLiked)})),c._cardDeletebtn.addEventListener("click",(function(){c._handleClickDeleteBtn()})),c._cardImage.addEventListener("click",(function(){c._handleCardClick(c._cardImage)}))})),r(this,"generateCard",(function(){return c._card=c._getTemplate(),c._cardTitle=c._card.querySelector(".card__title"),c._cardImage=c._card.querySelector(".card__image"),c._cardLikebtn=c._card.querySelector(".card__like-button"),c._likeCounter=c._card.querySelector(".card__like-count"),c._cardDeletebtn=c._card.querySelector(".card__delete-button"),c._cardTitle.textContent=c._name,c._cardImage.src=c._link,c._cardImage.alt=c._name,c.setLikes(),c._ownerId!==c._userId&&c._cardDeletebtn.remove(),c._setEventListeners(),c._card})),this._name=e.name,this._link=e.link,this._likes=e.likes,this._cardId=e._id,this._ownerId=e.owner._id,this._userId=a,this._templateSelector=n,this._handleCardClick=o,this._handleLikeClick=i,this._handleOpenConfirm=u,this._isLiked=this.isLiked()}var n,o;return n=t,(o=[{key:"_getTemplate",value:function(){return this._templateSelector.querySelector(".card").cloneNode(!0)}},{key:"_toggleLikeButton",value:function(t){t?this._cardLikebtn.classList.add("card__like-button_active"):this._cardLikebtn.classList.remove("card__like-button_active")}},{key:"_handleClickDeleteBtn",value:function(){this._handleOpenConfirm(this._cardId)}},{key:"isLiked",value:function(){var t=this;return this._likes.find((function(e){return e._id===t._userId}))}},{key:"setLikes",value:function(t){t&&(this._likes=t,this._isLiked=this.isLiked()),this._likeCounter.textContent=this._likes.length,this._toggleLikeButton(this.isLiked())}}])&&e(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),t}();function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function u(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,l(n.key),n)}}function a(t,e,r){return e&&u(t.prototype,e),r&&u(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function c(t,e,r){return(e=l(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t){var e=function(t,e){if("object"!==i(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===i(e)?e:String(e)}var s=a((function t(e,r){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),c(this,"_showInputError",(function(t){var e=n._formElement.querySelector(".".concat(t.name,"-error"));t.classList.add(n._inputErrorClass),e.classList.add(n._errorClass),e.textContent=t.validationMessage})),c(this,"_hideInputError",(function(t){var e=n._formElement.querySelector(".".concat(t.name,"-error"));t.classList.remove(n._inputErrorClass),e.classList.remove(n._errorClass),e.textContent=""})),c(this,"_checkInputValidity",(function(t){t.validity.valid?n._hideInputError(t):n._showInputError(t)})),c(this,"_hasInvalidInput",(function(){return n._inputList.some((function(t){return!t.validity.valid}))})),c(this,"_toggleButtonState",(function(){n._hasInvalidInput(n._inputList)?(n._submitButton.classList.add(n._inactiveButtonClass),n._submitButton.setAttribute("disabled",!0)):(n._submitButton.classList.remove(n._inactiveButtonClass),n._submitButton.removeAttribute("disabled"))})),c(this,"_addFormValidation",(function(){n._inputList.forEach((function(t){t.addEventListener("input",(function(){n._checkInputValidity(t),n._toggleButtonState()}))}))})),c(this,"resetValidation",(function(){n._toggleButtonState(),n._inputList.forEach((function(t){n._hideInputError(t)}))})),c(this,"enableValidation",(function(){n._formElement.addEventListener("submit",(function(t){t.preventDefault()})),n._addFormValidation()})),this._formElement=r,this._inputList=Array.from(this._formElement.querySelectorAll(e.inputSelector)),this._submitButton=this._formElement.querySelector(e.submitButtonSelector),this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass})),f=document.querySelector(".profile__edit-button"),p=document.querySelector(".profile__avatar-save"),y=document.querySelector(".popup__input_name"),d=document.querySelector(".popup__input_about"),h=document.querySelector(".popup__profile-form"),v=document.querySelector("#card").content,b=(document.querySelector(".elements"),document.querySelector(".profile__add-button")),_=document.querySelector(".popup__profile-form_card"),m=document.querySelector(".popup__form_avatar"),S={inputSelector:".popup__input",submitButtonSelector:".popup__button-save",inactiveButtonClass:"popup__button-save_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_visible"};function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function w(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==g(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==g(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===g(o)?o:String(o)),n)}var o}var k=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._handlerEsc=this._handleEscClose.bind(this)}var e,r;return e=t,(r=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handlerEsc)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handlerEsc)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("mousedown",(function(e){(e.target===t._popup||e.target.classList.contains("popup__button-close"))&&t.close()}))}}])&&w(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function E(t){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(t)}function O(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==E(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==E(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===E(o)?o:String(o)),n)}var o}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=L(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},j.apply(this,arguments)}function P(t,e){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},P(t,e)}function L(t){return L=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},L(t)}var C=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&P(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=L(n);if(o){var r=L(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===E(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._image=e._popup.querySelector(".popup__image"),e._title=e._popup.querySelector(".popup__image-title"),e}return e=u,(r=[{key:"open",value:function(t){var e=t.src,r=t.alt;this._image.src=e,this._image.alt=r,this._title.textContent=r,j(L(u.prototype),"open",this).call(this)}}])&&O(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(k);function I(t){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(t)}function B(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==I(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==I(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===I(o)?o:String(o)),n)}var o}function T(){return T="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=A(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},T.apply(this,arguments)}function q(t,e){return q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},q(t,e)}function A(t){return A=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},A(t)}var R=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&q(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=A(n);if(o){var r=A(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===I(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,t))._form=r._popup.querySelector(".popup__form"),r._inputList=r._popup.querySelectorAll(".popup__input"),r._handleFormSubmit=e,r._submitButton=r._form.querySelector(".popup__button-save"),r}return e=u,r=[{key:"_getInputValues",value:function(){var t=this;return this._valuesForm={},this._inputList.forEach((function(e){t._valuesForm[e.name]=e.value})),this._valuesForm}},{key:"close",value:function(){T(A(u.prototype),"close",this).call(this),this._form.reset()}},{key:"blockButton",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this._submitButton.disabled=e,this._submitButton.textContent=t}},{key:"setEventListeners",value:function(){var t=this;T(A(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(){t._handleFormSubmit(t._getInputValues())}))}}],r&&B(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(k);function U(t){return U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},U(t)}function x(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==U(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==U(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===U(o)?o:String(o)),n)}var o}function D(){return D="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=F(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},D.apply(this,arguments)}function V(t,e){return V=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},V(t,e)}function F(t){return F=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},F(t)}var N=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&V(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=F(n);if(o){var r=F(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===U(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,t))._form=r._popup.querySelector(".popup__form"),r._submitButton=r._form.querySelector(".popup__button-save"),r._handleFormSubmit=e,r}return e=u,r=[{key:"open",value:function(t,e){D(F(u.prototype),"open",this).call(this),this._cardId=t,this._card=e}},{key:"setEventListeners",value:function(){var t=this;D(F(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handleFormSubmit(t._cardId,t._card)}))}},{key:"blockButton",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this._submitButton.disabled=e,this._submitButton.textContent=t}}],r&&x(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(k);function J(t){return J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},J(t)}function G(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==J(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==J(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===J(o)?o:String(o)),n)}var o}var H=function(){function t(e){var r=e.nameSelector,n=e.descriptionSelector,o=e.avatarSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=document.querySelector(r),this._description=document.querySelector(n),this._avatar=document.querySelector(o),this._id=""}var e,r;return e=t,(r=[{key:"getUserInfo",value:function(){return this._userInfo={},this._userInfo.name=this._name.textContent,this._userInfo.about=this._description.textContent,this._userInfo}},{key:"setUserInfo",value:function(t){var e=t.name,r=t.about,n=t._id;this._name.textContent=e,this._description.textContent=r,this._id=n}},{key:"getUserId",value:function(){return this._id}},{key:"setUserAvatar",value:function(t){var e=t.avatar;this._avatar.src=e}}])&&G(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function M(t){return M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},M(t)}function z(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==M(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==M(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===M(o)?o:String(o)),n)}var o}var $=function(){function t(e,r){var n=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=n,this._container=document.querySelector(r)}var e,r;return e=t,(r=[{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(t){this._container.prepend(t)}}])&&z(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function K(t){return K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},K(t)}function Q(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==K(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==K(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===K(o)?o:String(o)),n)}var o}var W=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._address=e.baseUrl,this._headers=e.headers}var e,r;return e=t,(r=[{key:"_checkAnswer",value:function(t){return t.ok?t.json():Promise.reject(t.status)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._address,"/users/me"),{method:"GET",headers:this._headers}).then(this._checkAnswer)}},{key:"saveUserInfo",value:function(t){var e=t.name,r=t.about;return fetch("".concat(this._address,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:r})}).then(this._checkAnswer)}},{key:"saveUserAvatar",value:function(t){var e=t.avatar;return fetch("".concat(this._address,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(this._checkAnswer)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._address,"/cards"),{method:"GET",headers:this._headers}).then(this._checkAnswer)}},{key:"addNewCard",value:function(t){var e=t.name,r=t.link;return fetch("".concat(this._address,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:r})}).then(this._checkAnswer)}},{key:"deleteCard",value:function(t){return fetch("".concat(this._address,"/cards/").concat(t),{method:"DELETE",headers:this._headers}).then(this._checkAnswer)}},{key:"addLike",value:function(t){return fetch("".concat(this._address,"/cards/").concat(t,"/likes"),{method:"PUT",headers:this._headers}).then(this._checkAnswer)}},{key:"removeLike",value:function(t){return fetch("".concat(this._address,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:this._headers}).then(this._checkAnswer)}}])&&Q(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function X(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var Y=new H({nameSelector:".profile__name",descriptionSelector:".profile__about",avatarSelector:".profile__avatar"}),Z=new W({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-64",headers:{authorization:"a54ec7ef-da76-40d6-af95-163ba9adf077","Content-Type":"application/json"}}),tt={};Promise.all([Z.getUserInfo(),Z.getInitialCards()]).then((function(t){var e,r,n=(r=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,u,a=[],c=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(a.push(n.value),a.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(e,r)||function(t,e){if(t){if("string"==typeof t)return X(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?X(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1];Y.setUserInfo(o),Y.setUserAvatar(o),pt.renderItems(i.reverse())})).catch((function(t){return console.log("Ошибка: ".concat(t))}));var et=new s(S,h),rt=new s(S,_);et.enableValidation(),rt.enableValidation();var nt=new s(S,m);nt.enableValidation();var ot=new C(".popup_photo-view");ot.setEventListeners();var it=new R(".popup_profile",(function(t){it.blockButton("Сохранение..."),Z.saveUserInfo(t).then((function(t){Y.setUserInfo(t),it.close()})).catch((function(t){return console.log("Ошибка: ".concat(t))})).finally((function(){return it.blockButton("Сохранить",!1)}))}));it.setEventListeners();var ut=new R(".popup_add-card",(function(t){ut.blockButton("Создание..."),Z.addNewCard(t).then((function(t){pt.addItem(ft(t)),ut.close()})).catch((function(t){return console.log("Ошибка: ".concat(t))})).finally((function(){return ut.blockButton("Создать",!1)}))}));ut.setEventListeners();var at=new R(".popup_save-avatar",(function(t){at.blockButton("Сохранение..."),Z.saveUserAvatar(t).then((function(t){Y.setUserAvatar(t),at.close()})).catch((function(t){return console.log("Ошибка: ".concat(t))})).finally((function(){return at.blockButton("Сохранить",!1)}))}));at.setEventListeners();var ct=new N(".popup_delete-card",(function(t,e){ct.blockButton("Удаление..."),Z.deleteCard(t).then((function(){e.deleteCard(),ct.close()})).catch((function(t){return console.log("Ошибка: ".concat(t))})).finally((function(){return ct.blockButton("Да",!1)}))}));function lt(t){ot.open(t)}ct.setEventListeners();var st=function(t,e){e?Z.removeLike(t).then((function(e){tt[t].setLikes(e.likes)})):Z.addLike(t).then((function(e){tt[t].setLikes(e.likes)}))};function ft(t){var e=new o(t,v,lt,st,(function(t){return ct.open(t,e)}),Y.getUserId());return tt[t._id]=e,e.generateCard()}var pt=new $({renderer:function(t){pt.addItem(ft(t))}},".elements");f.addEventListener("click",(function(){var t=Y.getUserInfo(),e=t.name,r=t.about;y.value=e,d.value=r,et.resetValidation(),it.open()})),p.addEventListener("click",(function(){nt.resetValidation(),at.open()})),b.addEventListener("click",(function(){rt.resetValidation(),ut.open()}))})();