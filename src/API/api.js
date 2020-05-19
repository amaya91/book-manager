const url = 'http://192.168.0.2:8080/';

export function getBooks() {
  console.log('GETTING BOOKS');
  return fetch(url)
          .then(res => res.json())
          .then(json => {
          return json;
          })
          .catch(error => console.error('Error:', error));
}

export function deleteBookAPI(id) {
  console.log('DELETING BOOK');
  return fetch(url + id, {
          method: 'DELETE'
          })
          .catch(error => console.error('Error:', error));
}

export function addBookAPI({title, author, genre, publisher}) {
  console.log('ADDING NEW BOOK');
  return fetch(url, {
          method: 'POST',
          body: JSON.stringify({title, author, genre, publisher}),
          headers: new Headers({'Content-Type': 'application/json'})
          })
          .then(res => console.log(res.status))
          .catch(error => console.error('Error:', error));
}

export function updateBookAPI({id, title, author, genre, publisher}) {
  console.log('UPDATING BOOK');
  return fetch(url, {
          method: 'PUT',
          body: JSON.stringify({id, title, author, genre, publisher}),
          headers: new Headers({'Content-Type': 'application/json'})
          })
          .then(res => console.log(res.status))
          .catch(error => console.error('Error:', error));
}

  //  export function loginAPI(username, password) {
  //      const isSignedIn = true;
  //      return isSignedIn;
  //  }