import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCj7JZBCUgJauU_BGkhQuJQ45f7B1r_Iuo",
  authDomain: "lets-talk-b7f95.firebaseapp.com",
  databaseURL: "https://lets-talk-b7f95.firebaseio.com",
  projectId: "lets-talk-b7f95",
  storageBucket: "lets-talk-b7f95.appspot.com",
  messagingSenderId: "174975429846",
  appId: "1:174975429846:web:be6f9aa3dc0bb26632ad77",
  measurementId: "G-N6FNCQ8VXZ"
});

const db = firebaseApp.firestore();

export default db;