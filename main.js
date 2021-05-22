(()=>{"use strict";var e=document.querySelector(".page"),t=(e.querySelector(".popup__cross_info-edit"),e.querySelector(".profile__edit-button")),n=e.querySelector(".profile__name"),r=e.querySelector(".profile__occupation"),o=e.querySelector(".popup__input_type_name"),i=e.querySelector(".popup__input_type_occupation"),c=e.querySelector(".popup__form_type_editor"),u=e.querySelector(".popup_info-edit"),a=e.querySelector(".profile__add-button"),l=e.querySelector(".popup_type_image"),s=(e.querySelector(".popup__cross_type_image"),e.querySelector(".popup__form_type_image")),p=e.querySelector(".grid__list"),f=(e.querySelector(".popup__input_type_image-title"),e.querySelector(".popup__input_type_image-link"),e.querySelector(".popup_type_viewer")),_=(u.querySelector(".popup__save-btn"),l.querySelector(".popup__save-btn")),y={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save-btn",inactiveButtonClass:"popup__save-btn_type_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_visible",errorSpan:".popup__input-error"};function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var h=function(){function e(t){var n,r,o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(e){"Escape"===e.key&&o.close()},(n="_handleEscClose")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._popupSelector=t}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupSelector.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupSelector.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;document.addEventListener("click",(function(t){(t.target.classList.contains("popup")||t.target.classList.contains("popup__cross"))&&e.close()}))}}])&&d(t.prototype,n),e}();function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t,n){return(b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=E(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(r);if(o){var n=E(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return S(this,e)});function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this,e))._image=t._popupSelector.querySelector(".popup__image"),t._title=t._popupSelector.querySelector(".popup__image-title"),t}return t=c,(n=[{key:"open",value:function(e){this._image.src=e.link,this._image.alt=e.name,this._title.textContent=e.name,b(E(c.prototype),"open",this).call(this)}}])&&v(t.prototype,n),c}(h);function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var L=function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),w(this,"_hideInputError",(function(e,t){t.classList.remove(r._config.inputErrorClass),e.classList.remove(r._config.errorClass),e.textContent=""})),w(this,"resetInputError",(function(){r._errorList.forEach((function(e){e.classList.remove(r._config.errorClass),e.textContent=""})),r._inputList.forEach((function(e){e.classList.remove(r._config.inputErrorClass)}))})),w(this,"_showInputError",(function(e,t){e.textContent=t.validationMessage,e.classList.add(r._config.errorClass),t.classList.add(r._config.inputErrorClass)})),w(this,"_validateInput",(function(e,t){var n=e.querySelector(".".concat(t.id,"-error"));t.validity.valid?r._hideInputError(n,t):r._showInputError(n,t)})),w(this,"_checkInputValidity",(function(e){return e.every((function(e){return e.validity.valid}))})),w(this,"activateButton",(function(e){e.classList.remove(r._config.inactiveButtonClass),e.disabled=!1})),w(this,"disactivateButton",(function(e){e.classList.add(r._config.inactiveButtonClass),e.disabled=!0})),w(this,"_toggleButtonState",(function(e,t){r._checkInputValidity(t)?r.activateButton(e):r.disactivateButton(e)})),w(this,"_preventDefaultSubmit",(function(e){return e.preventDefault()})),w(this,"enableValidation",(function(){r._inputList.forEach((function(e){e.addEventListener("input",(function(){r._validateInput(r._formSelector,e),r._toggleButtonState(r._buttonElement,r._inputList)}))})),r._formSelector.addEventListener("submit",r._preventDefaultSubmit)})),this._config=t,this._formSelector=n,this._inputList=Array.from(this._formSelector.querySelectorAll(this._config.inputSelector)),this._errorList=Array.from(this._formSelector.querySelectorAll(t.errorSpan)),this._buttonElement=this._formSelector.querySelector(this._config.submitButtonSelector)};function C(e){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function q(e,t,n){return(q="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=P(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function I(e,t){return!t||"object"!==C(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=P(r);if(o){var n=P(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return I(this,e)});function c(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(n=i.call(this,e)).formSubmit=t,n._form=n._popupSelector.querySelector(".popup__form"),n}return t=c,(n=[{key:"_getInputValues",value:function(){var e={};return Array.from(this._popupSelector.querySelectorAll(".popup__input")).forEach((function(t){return e[t.name]=t.value})),e}},{key:"close",value:function(){q(P(c.prototype),"close",this).call(this),this._form.reset()}},{key:"setEventListeners",value:function(){var e=this;q(P(c.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e.formSubmit(e._getInputValues()),e.close()}))}}])&&O(t.prototype,n),c}(h);function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var x=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._containerSelector=n}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._containerSelector.prepend(e)}},{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}}])&&R(t.prototype,n),e}();function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var D=function(){function e(t){var n,r,o=this,i=t.nameSelector,c=t.occupationSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(e){o._nameSelector.textContent=e.name,o._occupationSelector.textContent=e.occupation},(n="setUserInfo")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._nameSelector=i,this._occupationSelector=c}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._nameSelector.textContent,occupation:this._occupationSelector.textContent}}}])&&T(t.prototype,n),e}();function V(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var A=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t.name,this._link=t.link,this._templateSelector=r,this._handleCardClick=n,this._cardElement=this._getTemplate()}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".grid__item").cloneNode(!0)}},{key:"_setUserInfoToCard",value:function(){this._cardElement.querySelector(".grid__image").src=this._link,this._cardElement.querySelector(".grid__image").alt=this._name,this._cardElement.querySelector(".grid__city-name").textContent=this._name}},{key:"_handleLikeButton",value:function(){this._cardElement.querySelector(".grid__like").classList.toggle("grid__like_type_dark")}},{key:"_handleDeleteButton",value:function(){this._cardElement.remove(),this._cardElement=null}},{key:"_setEventListeners",value:function(){var e=this;this._cardElement.querySelector(".grid__like").addEventListener("click",(function(){return e._handleLikeButton()})),this._cardElement.querySelector(".grid__image").addEventListener("click",(function(){return e._handleCardClick(e._name,e._link)})),this._cardElement.querySelector(".grid__delete-btn").addEventListener("click",(function(){return e._handleDeleteButton()}))}},{key:"generateCard",value:function(){return this._setUserInfoToCard(),this._setEventListeners(),this._cardElement}}])&&V(t.prototype,n),e}(),U=function(e){return new A({name:e.name,link:e.link},H,"#grid_item")},z=new B(l,(function(e){var t=U(e);Y.addItem(t.generateCard()),z.close()})),Y=new x({renderer:function(e){var t=U(e);Y.addItem(t.generateCard())}},p),K=new L(y,c),M=new L(y,s),N=new k(f),F=new D({nameSelector:n,occupationSelector:r}),G=new B(u,(function(){F.setUserInfo(G._getInputValues())})),H=function(e,t){N.open({name:e,link:t})};t.addEventListener("click",(function(){K.resetInputError(u),M.activateButton(t);var e=F.getUserInfo();o.value=e.name,i.value=e.occupation,G.open()})),a.addEventListener("click",(function(){M.disactivateButton(_),K.resetInputError(l),z.open()})),Y.renderItems([{name:"Эльбрус",link:"https://wikiway.com/upload/hl-photo/8d5/dc0/gora-everest_57.jpg"},{name:"Санкт-Петербург",link:"https://s0.rbk.ru/v6_top_pics/media/img/7/64/755919488628647.jpg"},{name:"Апатиты",link:"https://www.tv21.ru/sites/default/files/news/2020/03/27/-e0tgy2yibm.jpg"},{name:"Камчатка",link:"https://cdnimg.rg.ru/img/content/200/54/46/Kurs_na_razvitie_20-21_polosy_razvorot_d_850.jpg"},{name:"Деревня",link:"https://radiokp.ru/sites/default/files/styles/kp_fullnode_730_486/public/2020-04/derevnya2.jpg?itok=YrYaEPg9"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"}]),M.enableValidation(),K.enableValidation(),G.setEventListeners(),z.setEventListeners(),N.setEventListeners()})();