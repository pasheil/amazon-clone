// OLD WAY DOESNT WORK import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbXIvYYkzfUpiTMuzlNAKG3-U6zdrE0Aw",
  authDomain: "challenge-f76c4.firebaseapp.com",
  projectId: "challenge-f76c4",
  storageBucket: "challenge-f76c4.appspot.com",
  messagingSenderId: "675524398294",
  appId: "1:675524398294:web:0e0937d645b96c123f0d77",
  measurementId: "G-Y7ZMG72BJQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
