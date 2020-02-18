import firebase from 'firebase/app';
import 'firebase/firebase-auth';

const config = {
  apiKey: 'AIzaSyCx-wLLK125zjrNB7V-ABNkiyx1k7SgIO4',
  authDomain: 'nextjs-mobx-aileen-r.firebaseapp.com',
  databaseURL: 'https://nextjs-mobx-aileen-r.firebaseio.com',
  projectId: 'nextjs-mobx-aileen-r',
  storageBucket: 'nextjs-mobx-aileen-r.appspot.com',
  messagingSenderId: '1002590595105',
  appId: '1:1002590595105:web:b2e4f6989b96c061f1db60',
};

try {
  firebase.initializeApp(config);
} catch (err) {
  // taken from https://github.com/now-examples/next-news/blob/master/lib/db.js
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack);
  }
}

export default firebase;
export const auth = firebase.auth()