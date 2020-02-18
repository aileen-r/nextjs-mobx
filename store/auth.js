import { observable } from 'mobx';
import firebase, { auth } from '~/services/firebase';

let store = null;

class Store {
  @observable user = null;

  constructor() {
    auth.onAuthStateChanged(user => {
      this.user = user;
    });
  }

  signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth
      .signInWithPopup(provider)
      .then(function(result) {
        // console.log(result);
      })
      .catch(function(error) {
        // const errorMessage = error.message;
      });
  };

  signOut = () => {
    auth.signOut().then(
      function() {
        // Sign-out successful.
      },
      function(error) {
        // An error happened.
      }
    );
  };
}

export default function initAuthStore() {
  if (store === null) {
    store = new Store();
  }
  return store;
}
