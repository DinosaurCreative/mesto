export  class Api {
  constructor({address, token}) {
    this._address = address;
    this._token = token; 
  }
  
  _checkServerResponse(item) {
    if(item.ok){
      return item.json();
    }else {
      return Promise.reject(item.status)
    }
  }
  
    getProfileData() {
      return fetch(`${this._address}users/me`, {
        method: 'GET',
        headers: {
          authorization: this._token,
          'Content-Type': 'application/json' 
        }
      })
      .then(res => this._checkServerResponse(res))
      .catch(err=> console.log(`Ошибка: ${err}`))
    }

  getImages(){
    return fetch(`${this._address}cards`,{
      method: 'GET',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json' 
      }
    })
    .then(res => res.json())
    .catch(err => console.log(`Ошибка: ${err}`))
  }


  setNewProfileData(data) {
    fetch(`${this._address}users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        about: data.occupatiion
      })
    })
    .then(res => this._checkServerResponse(res))
    .catch(err => console.log(`Ошибка: ${err}`))
  }

  postImage(data) {
    return fetch(`${this._address}cards`, {
      method: 'POST',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        imageLink: data.link,
        imageTitle: data.title,
      })
    })
    .then(res => this._checkServerResponse(res))
    .catch(err => console.log(`Ошибка: ${err}`))
  }

  deleteImage(id) {
    fetch(`${this._address}cards/${id}`, {
      method: 'DELETE',
      headers:{
        authorization: this._token,
        'Content-Type': 'application/json'
      }
    })
    .then(res => this._checkServerResponse(res))
    .catch(err => console.log(`Ошибка: ${err}`))
  }

  changeAvatar(link) {
    fetch(`${this._address}user/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: {
        avatar: link
      }
    })
    .then(res => this._checkServerResponse(res))
    .catch(err => console.log(`Ошибка: ${err}`))
  }
  
  increaseLike(id) {
    return fetch(`${this._address}cards/likes/${id}`, {
      method: 'PUT',
      headers: {
        authorization: this._token,
        'Content-Type': 'applictaion/json'
      }
    })
    .then(res => this._checkServerResponse(res))
    .catch(err => console.log(`Ошибка: ${err}`))
  }


  reduceLike(id) {
    return fetch(`${this._address}cards/likes/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
        'Content-Type': 'applictaion/json'
      }
    })
    .then(res => this._checkServerResponse(res))
    .catch(err => console.log(`Ошибка: ${err}`))
  }
}