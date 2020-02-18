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
    auth.signInWithPopup(provider).catch(err => console.error(err));
  };

  signOut = () => {
    auth.signOut().catch(err => console.error(err));
  };
}

export default function initAuthStore() {
  if (store === null) {
    store = new Store();
  }
  return store;
}
