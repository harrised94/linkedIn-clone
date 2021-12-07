// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyA5TM4MyfsLbUCiH25uO7xb4drWoDDR54k",
    authDomain: "linkedin-clone-fbe11.firebaseapp.com",
    projectId: "linkedin-clone-fbe11",
    storageBucket: "linkedin-clone-fbe11.appspot.com",
    messagingSenderId: "848387308957",
    appId: "1:848387308957:web:a404ea8a02c5ebce418374",
    measurementId: "G-SH9QJ5BNZV"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth };