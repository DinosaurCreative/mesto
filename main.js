(()=>{"use strict";var e=document.querySelector(".page"),t=(e.querySelector(".popup__cross_info-edit"),e.querySelector(".profile__edit-button")),n=e.querySelector(".profile__name"),r=e.querySelector(".profile__occupation"),o=e.querySelector(".popup__input_type_name"),i=e.querySelector(".popup__input_type_occupation"),c=e.querySelector(".popup__form_type_editor"),u=e.querySelector(".popup_info-edit"),a=e.querySelector(".profile__add-button"),l=e.querySelector(".popup_type_image"),s=(e.querySelector(".popup__cross_type_image"),e.querySelector(".popup__form_type_image")),p=e.querySelector(".grid__list"),f=e.querySelector(".popup__input_type_image-title"),_=e.querySelector(".popup__input_type_image-link"),y=e.querySelector(".popup_type_viewer"),d=u.querySelector(".popup__save-btn"),v=l.querySelector(".popup__save-btn"),h={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save-btn",inactiveButtonClass:"popup__save-btn_type_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_visible"};function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var b=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupSelector=t}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupSelector.classList.add("popup_opened")}},{key:"close",value:function(){this._popupSelector.classList.remove("popup_opened")}},{key:"_handleEscClose",value:function(){var e=this;document.addEventListener("keydown",(function(t){"Escape"===t.key&&e.close()}))}},{key:"setEventListeners",value:function(){var e=this;console.log(1),this._handleEscClose(),document.addEventListener("click",(function(t){(t.target.classList.contains("popup")||t.target.classList.contains("popup__cross"))&&e.close()}))}}])&&m(t.prototype,n),e}();function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(e,t,n){return(k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=L(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function L(e){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=L(r);if(o){var n=L(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return w(this,e)});function c(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),i.call(this,e)}return t=c,(n=[{key:"open",value:function(e){this._popupSelector.querySelector(".popup__image").src=e.link,this._popupSelector.querySelector(".popup__image").alt=e.name,this._popupSelector.querySelector(".popup__image-title").innerHTML=e.name,k(L(c.prototype),"open",this).call(this)}}])&&S(t.prototype,n),c}(b),O=function(e){var t=Array.from(e.querySelectorAll(".popup__input-error")),n=Array.from(e.querySelectorAll(".popup__input"));t.forEach((function(e){e.classList.remove("popup__input-error_visible")})),n.forEach((function(e){e.classList.remove("popup__input_type_error")}))};function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j=function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),C(this,"_hideInputError",(function(e,t){t.classList.remove(r._config.inputErrorClass),e.classList.remove(r._config.errorClass),e.textContent=""})),C(this,"_showInputError",(function(e,t){e.textContent=t.validationMessage,e.classList.add(r._config.errorClass),t.classList.add(r._config.inputErrorClass)})),C(this,"_validateInput",(function(e,t){var n=e.querySelector(".".concat(t.id,"-error"));t.validity.valid?r._hideInputError(n,t):r._showInputError(n,t)})),C(this,"_checkInputValidity",(function(e){return e.every((function(e){return e.validity.valid}))})),C(this,"_toggleButtonState",(function(e,t){r._checkInputValidity(t)?(e.classList.remove(r._config.inactiveButtonClass),e.disabled=!1):(e.classList.add(r._config.inactiveButtonClass),e.disabled=!0)})),C(this,"_preventDefaultSubmit",(function(e){return e.preventDefault()})),C(this,"enableValidation",(function(){var e=Array.from(r._formSelector.querySelectorAll(r._config.inputSelector)),t=r._formSelector.querySelector(r._config.submitButtonSelector);e.forEach((function(n){n.addEventListener("input",(function(){r._validateInput(r._formSelector,n),r._toggleButtonState(t,e)}))})),r._formSelector.addEventListener("submit",r._preventDefaultSubmit)})),this._config=t,this._formSelector=n};function I(e){return(I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function R(e,t,n){return(R="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=D(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function T(e,t){return(T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function B(e,t){return!t||"object"!==I(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function D(e){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=D(r);if(o){var n=D(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return B(this,e)});function c(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(n=i.call(this,e)).formSubmit=t,n}return t=c,(n=[{key:"_getInputValues",value:function(){return Array.from(this._popupSelector.querySelectorAll(".popup__input"))}},{key:"close",value:function(){R(D(c.prototype),"close",this).call(this),this._popupSelector.querySelector(".popup__form").reset()}},{key:"setEventListeners",value:function(){R(D(c.prototype),"setEventListeners",this).call(this)}},{key:"submitChanges",value:function(){this.formSubmit(this._getInputValues())}}])&&P(t.prototype,n),c}(b);function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var V=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=r,this._renderer=o,this._containerSelector=n}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._containerSelector.prepend(e)}},{key:"renderItems",value:function(){var e=this;this._renderedItems.forEach((function(t){e.addItem(e._renderer(t))}))}}])&&A(t.prototype,n),e}();function M(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var U=function(){function e(t){var n,r,o=this,i=t.nameSelector,c=t.occupationSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(e){o._nameSelector.innerHTML=e[0].value,o._occupationSelector.innerHTML=e[1].value},(n="setUserInfo")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._nameSelector=i,this._occupationSelector=c}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._nameSelector.innerHTML,occupation:this._occupationSelector.innerHTML}}}])&&M(t.prototype,n),e}();function H(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var z=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t.name,this._link=t.link,this._handleCardClick=n,this._cardElement=this._getTemplate()}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector("#grid_item").content.querySelector(".grid__item").cloneNode(!0)}},{key:"_setUserInfoToCard",value:function(){this._cardElement.querySelector(".grid__image").src=this._link,this._cardElement.querySelector(".grid__image").alt=this._name,this._cardElement.querySelector(".grid__city-name").textContent=this._name}},{key:"_handleLikeButton",value:function(){this._cardElement.querySelector(".grid__like").classList.toggle("grid__like_type_dark")}},{key:"_handleDeleteButton",value:function(){this._cardElement.remove()}},{key:"_setEventListeners",value:function(){var e=this;this._cardElement.querySelector(".grid__like").addEventListener("click",(function(){return e._handleLikeButton()})),this._cardElement.querySelector(".grid__image").addEventListener("click",(function(){return e._handleCardClick()})),this._cardElement.querySelector(".grid__delete-btn").addEventListener("click",(function(){return e._handleDeleteButton()}))}},{key:"generateCard",value:function(){return this._setUserInfoToCard(),this._setEventListeners(),this._handleCardClick(),this._cardElement}}])&&H(t.prototype,n),e}(),Y=new j(h,c),K=new j(h,s),N=new x(l),F=new q(y),G=new V({items:[{name:"Эльбрус",link:"https://wikiway.com/upload/hl-photo/8d5/dc0/gora-everest_57.jpg"},{name:"Санкт-Петербург",link:"https://s0.rbk.ru/v6_top_pics/media/img/7/64/755919488628647.jpg"},{name:"Апатиты",link:"https://www.tv21.ru/sites/default/files/news/2020/03/27/-e0tgy2yibm.jpg"},{name:"Камчатка",link:"https://cdnimg.rg.ru/img/content/200/54/46/Kurs_na_razvitie_20-21_polosy_razvorot_d_850.jpg"},{name:"Деревня",link:"https://radiokp.ru/sites/default/files/styles/kp_fullnode_730_486/public/2020-04/derevnya2.jpg?itok=YrYaEPg9"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"}],renderer:function(e){return new z(e,W).generateCard()}},p),J=new U({nameSelector:n,occupationSelector:r}),Q=new x(u,J.setUserInfo),W=function(){document.addEventListener("click",(function(e){e.target.classList.contains("grid__image")&&F.open({name:e.target.alt,link:e.target.src})}))};c.addEventListener("submit",(function(e){e.preventDefault(),Q.submitChanges(),Q.close()})),t.addEventListener("click",(function(){O(u),d.classList.remove("popup__save-btn_type_disabled"),d.disabled=!1;var e=J.getUserInfo();o.value=e.name,i.value=e.occupation,Q.open()})),a.addEventListener("click",(function(){v.disabled=!0,v.classList.add("popup__save-btn_type_disabled"),O(l),N.open()})),s.addEventListener("submit",(function(e){var t;e.preventDefault(),t=new z({name:f.value,link:_.value},W),G.addItem(t.generateCard()),N.close(),N.close()})),G.renderItems(),K.enableValidation(),Y.enableValidation(),Q.setEventListeners(),N.setEventListeners(),F.setEventListeners()})();