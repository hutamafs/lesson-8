import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCSLYb8zYhFySM-UiR3nTMHFKnXS8pprCk",
  authDomain: "crown-db-c3278.firebaseapp.com",
  projectId: "crown-db-c3278",
  storageBucket: "crown-db-c3278.appspot.com",
  messagingSenderId: "1064209603081",
  appId: "1:1064209603081:web:1900bd5c5e44c93f2936d8",
  measurementId: "G-Z2WZVRBRJ8"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
