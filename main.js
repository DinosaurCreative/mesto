(()=>{"use strict";var e=document.querySelector(".page"),t=(e.querySelector(".popup__cross_info-edit"),e.querySelector(".profile__edit-button")),n=e.querySelector(".profile__name"),r=e.querySelector(".profile__occupation"),o=e.querySelector(".popup__input_type_name"),i=e.querySelector(".popup__input_type_occupation"),a=e.querySelector(".popup__form_type_editor"),c=e.querySelector(".popup_info-edit"),u=e.querySelector(".profile__add-button"),s=e.querySelector(".popup_type_image"),l=(e.querySelector(".popup__cross_type_image"),e.querySelector(".popup__form_type_image")),f=e.querySelector(".grid__list"),p=(e.querySelector(".popup__input_type_image-title"),e.querySelector(".popup__input_type_image-link"),e.querySelector(".popup_type_viewer")),_=(c.querySelector(".popup__save-btn"),s.querySelector(".popup__save-btn")),h={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save-btn",inactiveButtonClass:"popup__save-btn_type_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_visible",errorSpan:".popup__input-error"},y=e.querySelector(".popup_type_delete-confirm"),d=e.querySelector(".popup_type_avatar"),v=e.querySelector(".profile__photo"),m=e.querySelector(".popup__input_type_avatar-link"),b=e.querySelector(".popup__form_type_avatar"),g=e.querySelector(".profile__edit-avatar"),S=d.querySelector(".popup__save-btn");function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var w=function(){function e(t){var n,r,o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(e){"Escape"===e.key&&o.close()},(n="_handleEscClose")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._popupSelector=t}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupSelector.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupSelector.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;document.addEventListener("click",(function(t){(t.target.classList.contains("popup")||t.target.classList.contains("popup__cross"))&&e.close()}))}}])&&k(t.prototype,n),e}();function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(e,t,n){return(C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=P(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function j(e,t){return!t||"object"!==E(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=P(r);if(o){var n=P(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return j(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._image=t._popupSelector.querySelector(".popup__image"),t._title=t._popupSelector.querySelector(".popup__image-title"),t}return t=a,(n=[{key:"open",value:function(e){this._image.src=e.link,this._image.alt=e.name,this._title.textContent=e.name,C(P(a.prototype),"open",this).call(this)}}])&&L(t.prototype,n),a}(w);function q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var T=function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),q(this,"_hideInputError",(function(e,t){t.classList.remove(r._config.inputErrorClass),e.classList.remove(r._config.errorClass),e.textContent=""})),q(this,"resetInputError",(function(){r._errorList.forEach((function(e){e.classList.remove(r._config.errorClass),e.textContent=""})),r._inputList.forEach((function(e){e.classList.remove(r._config.inputErrorClass)}))})),q(this,"_showInputError",(function(e,t){e.textContent=t.validationMessage,e.classList.add(r._config.errorClass),t.classList.add(r._config.inputErrorClass)})),q(this,"_validateInput",(function(e,t){var n=e.querySelector(".".concat(t.id,"-error"));t.validity.valid?r._hideInputError(n,t):r._showInputError(n,t)})),q(this,"_checkInputValidity",(function(e){return e.every((function(e){return e.validity.valid}))})),q(this,"activateButton",(function(e){e.classList.remove(r._config.inactiveButtonClass),e.disabled=!1})),q(this,"disactivateButton",(function(e){e.classList.add(r._config.inactiveButtonClass),e.disabled=!0})),q(this,"_toggleButtonState",(function(e,t){r._checkInputValidity(t)?r.activateButton(e):r.disactivateButton(e)})),q(this,"_preventDefaultSubmit",(function(e){return e.preventDefault()})),q(this,"enableValidation",(function(){r._inputList.forEach((function(e){e.addEventListener("input",(function(){r._validateInput(r._formSelector,e),r._toggleButtonState(r._buttonElement,r._inputList)}))})),r._formSelector.addEventListener("submit",r._preventDefaultSubmit)})),this._config=t,this._formSelector=n,this._inputList=Array.from(this._formSelector.querySelectorAll(this._config.inputSelector)),this._errorList=Array.from(this._formSelector.querySelectorAll(t.errorSpan)),this._buttonElement=this._formSelector.querySelector(this._config.submitButtonSelector)};function B(e){return(B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(e,t,n){return(x="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=V(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function D(e,t){return(D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function A(e,t){return!t||"object"!==B(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function V(e){return(V=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var W=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&D(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=V(r);if(o){var n=V(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return A(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e)).formSubmit=t,n._saveButton=n._popupSelector.querySelector(".popup__save-btn"),n._form=n._popupSelector.querySelector(".popup__form"),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e={};return Array.from(this._popupSelector.querySelectorAll(".popup__input")).forEach((function(t){return e[t.name]=t.value})),e}},{key:"close",value:function(){x(V(a.prototype),"close",this).call(this),this._form.reset()}},{key:"showTextWhileSaving",value:function(e){this._saveButton.value=e?"Сохраняю...":"Сохранить"}},{key:"setEventListeners",value:function(){var e=this;x(V(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e.formSubmit(e._getInputValues()),e.close()}))}}])&&R(t.prototype,n),a}(w);function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var z=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._containerSelector=n}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._containerSelector.prepend(e)}},{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}}])&&N(t.prototype,n),e}();function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var H=function(){function e(t){var n,r,o=this,i=t.nameSelector,a=t.occupationSelector,c=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(e){o._nameSelector.textContent=e.name,o._occupationSelector.textContent=e.about},(n="setUserInfo")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._nameSelector=i,this._occupationSelector=a,this._avatarSelector=c}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._nameSelector.textContent,occupation:this._occupationSelector.textContent}}},{key:"setNewAvatar",value:function(e){this._avatarSelector.style.backgroundImage="url(".concat(e,")")}}])&&U(t.prototype,n),e}();function J(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var G=function(){function e(t,n,r,o,i,a){var c,u,s=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),u=function(){s._confirmPopup.submitHandler(s._handleDeleteButton,s._cardElement,s._id)},(c="_openPopupConfirm")in this?Object.defineProperty(this,c,{value:u,enumerable:!0,configurable:!0,writable:!0}):this[c]=u,this._name=t.name,this._link=t.link,this._likes=t.likes,this._owner=t.owner,this._id=t._id,this._myId=i,this._data=t,this._confirmPopup=a,this._templateSelector=r,this._handleCardClick=n,this._cardElement=this._getTemplate(),this._likeContainer=this._cardElement.querySelector(".grid__like-counter"),this._likeButton=this._cardElement.querySelector(".grid__like"),this._gridImage=this._cardElement.querySelector(".grid__image"),this._gridDeletreButton=this._cardElement.querySelector(".grid__delete-btn"),this._isLiked=!1,this._api=o}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".grid__item").cloneNode(!0)}},{key:"_setUserInfoToCard",value:function(){this._gridImage.src=this._link,this._gridImage.alt=this._name,this._cardElement.querySelector(".grid__city-name").textContent=this._name,this._likeContainer.textContent=this._likes.length}},{key:"_countLikes",value:function(){var e=this;this._handleLikeButton(),this._isLiked?this._api.reduceLike(this._id).then((function(t){e._likeContainer.textContent=t.likes.length,e._isLiked=!1})).catch((function(e){return console.log("Ошибка при уменьшении лайков ".concat(e))})):this._api.increaseLike(this._id).then((function(t){e._likeContainer.textContent=t.likes.length,e._isLiked=!0})).catch((function(e){return console.log("Ошибка при увеличении лайков ".concat(e))}))}},{key:"_activateDeleteButton",value:function(){this._data.owner._id==this._myId&&this._gridDeletreButton.classList.add("grid__delete-btn_type_visible")}},{key:"_handleLikeButton",value:function(){this._likeButton.classList.toggle("grid__like_type_dark")}},{key:"_handleDeleteButton",value:function(e){e.remove(),e=null}},{key:"_setEventListeners",value:function(){var e=this;this._likeButton.addEventListener("click",(function(){return e._countLikes()})),this._gridImage.addEventListener("click",(function(){return e._handleCardClick(e._name,e._link)})),this._cardElement.querySelector(".grid__delete-btn").addEventListener("click",(function(){return e._openPopupConfirm()}))}},{key:"_checkIsItLiked",value:function(){var e=this;this._likes.forEach((function(t){t._id==e._myId&&(e._isLiked=!0,e._handleLikeButton())}))}},{key:"generateCard",value:function(){return this._activateDeleteButton(),this._setUserInfoToCard(),this._setEventListeners(),this._checkIsItLiked(),this._cardElement}}])&&J(t.prototype,n),e}();function M(e){return(M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function F(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function K(e,t,n){return(K="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Z(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function Q(e,t){return(Q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function X(e,t){return!t||"object"!==M(t)&&"function"!=typeof t?Y(e):t}function Y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Z(e){return(Z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var $=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Q(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=Z(r);if(o){var n=Z(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return X(this,e)});function a(e,t){var n,r,o,c;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),c=function(e,t,r){n.open(),n._cardElement=t,n._id=r,n._handleDeleteButton=e},(o="submitHandler")in(r=Y(n=i.call(this,e)))?Object.defineProperty(r,o,{value:c,enumerable:!0,configurable:!0,writable:!0}):r[o]=c,n._form=n._popupSelector.querySelector(".popup__form"),n._saveButton=n._popupSelector.querySelector(".popup__save-btn"),n._api=t,n}return t=a,(n=[{key:"_showTextWhileSaving",value:function(e){this._saveButton.value=e?"Удаляю...":"Да"}},{key:"setEventListeners",value:function(){var e=this;K(Z(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._showTextWhileSaving(!0),e._api.deleteImage(e._id).then((function(e){return"Вероятно надо использовать приходлящие данные"})).catch((function(e){return console.log("Ошибка: ".concat(e))})).finally((function(){return e._showTextWhileSaving(!1)})),e._handleDeleteButton(e._cardElement),e.close()}))}}])&&F(t.prototype,n),a}(w);function ee(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var te=function(e){return new G(e,_e,"#grid_item",ne,"4d426ed11c4589547aeb84e9",oe)},ne=new(function(){function e(t){var n=t.address,r=t.token;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._address=n,this._token=r}var t,n;return t=e,(n=[{key:"_checkServerResponse",value:function(e){return e.ok?e.json():Promise.reject(e.status)}},{key:"getProfileData",value:function(){var e=this;return fetch("".concat(this._address,"users/me"),{method:"GET",headers:{authorization:this._token,"Content-Type":"application/json"}}).then((function(t){return e._checkServerResponse(t)}))}},{key:"getImages",value:function(){var e=this;return fetch("".concat(this._address,"cards"),{method:"GET",headers:{authorization:this._token,"Content-Type":"application/json"}}).then((function(t){return e._checkServerResponse(t)}))}},{key:"setNewProfileData",value:function(e){var t=this;return fetch("".concat(this._address,"users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){t._checkServerResponse(e)}))}},{key:"postImage",value:function(e){var t=this;return fetch("".concat(this._address,"cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return t._checkServerResponse(e)}))}},{key:"deleteImage",value:function(e){var t=this;return fetch("".concat(this._address,"cards/").concat(e),{method:"DELETE",headers:{authorization:this._token,"Content-Type":"application/json"}}).then((function(e){return t._checkServerResponse(e)}))}},{key:"changeAvatar",value:function(e){var t=this;return fetch("".concat(this._address,"users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e})}).then((function(e){return t._checkServerResponse(e)}))}},{key:"increaseLike",value:function(e){var t=this;return fetch("".concat(this._address,"cards/likes/").concat(e),{method:"PUT",headers:{authorization:this._token,"Content-Type":"applictaion/json"}}).then((function(e){return t._checkServerResponse(e)}))}},{key:"reduceLike",value:function(e){var t=this;return fetch("".concat(this._address,"cards/likes/").concat(e),{method:"DELETE",headers:{authorization:this._token,"Content-Type":"applictaion/json"}}).then((function(e){return t._checkServerResponse(e)}))}}])&&ee(t.prototype,n),e}())({address:"https://nomoreparties.co/v1/cohort-24/",token:"1b42587b-1212-49d2-8dac-fba90d326288"}),re=new H({nameSelector:n,occupationSelector:r,avatarSelector:v}),oe=new $(y,ne),ie=new W(d,(function(e){ie.showTextWhileSaving(!0),ne.changeAvatar(e.link).then((function(e){re.setNewAvatar(e.avatar)})).catch((function(e){return console.log("Ошибка при добавлении нового аватара: ".concat(e))})).finally((function(){ie.showTextWhileSaving(!1)}))}));ne.getImages().then((function(e){ce.renderItems(e.reverse())})).catch((function(e){return console.log(e)}));var ae=new W(s,(function(e){ae.showTextWhileSaving(!0),ne.postImage(e).then((function(e){var t=te(e);ce.addItem(t.generateCard())})).catch((function(e){return console.log(e)})).finally((function(){ae.showTextWhileSaving(!1),ae.close()}))})),ce=new z({renderer:function(e){var t=te(e);ce.addItem(t.generateCard())}},f),ue=new T(h,b),se=new T(h,a),le=new T(h,l),fe=new I(p);ne.getProfileData().then((function(e){re.setUserInfo({name:e.name,about:e.about}),re.setNewAvatar(e.avatar)})).catch((function(e){return console.log("Ошибка: ".concat(e))}));var pe=new W(c,(function(){pe.showTextWhileSaving(!0),ne.setNewProfileData(pe._getInputValues()).then((function(e){return e})).catch((function(e){return console.log(e)})).finally((function(){pe.showTextWhileSaving(!1)})),re.setUserInfo(pe._getInputValues())})),_e=function(e,t){fe.open({name:e,link:t})};g.addEventListener("click",(function(){ue.disactivateButton(S),ue.resetInputError(m),ie.open()})),t.addEventListener("click",(function(){se.resetInputError(c),le.activateButton(t);var e=re.getUserInfo();o.value=e.name,i.value=e.occupation,pe.open()})),u.addEventListener("click",(function(){le.disactivateButton(_),se.resetInputError(s),ae.open()})),ue.enableValidation(),le.enableValidation(),se.enableValidation(),pe.setEventListeners(),ae.setEventListeners(),fe.setEventListeners(),ie.setEventListeners(),oe.setEventListeners()})();