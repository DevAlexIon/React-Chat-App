import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDtGjKiGGlCxbe6qLq2_Mi8kUrSvPTlhrw",
  authDomain: "react-chat-application-382019.firebaseapp.com",
  projectId: "react-chat-application-382019",
  storageBucket: "react-chat-application-382019.appspot.com",
  messagingSenderId: "163346322449",
  appId: "1:163346322449:web:c19737fd8a413a7b398db0"
});

const db = firebaseApp.firestore();

const auth = firebaseApp.auth();

export { db, auth };
