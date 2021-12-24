import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD8kQKwQbPbei3cXvKpvqTdxAMaiJHTdz0",
  authDomain: "firechat-app-71069.firebaseapp.com",
  projectId: "firechat-app-71069",
  storageBucket: "firechat-app-71069.appspot.com",
  messagingSenderId: "247340543400",
  appId: "1:247340543400:web:7a8c79fc51171504b7c19d",
});

const db = firebaseApp.firestore();

const auth = firebaseApp.auth();

export { db, auth };
