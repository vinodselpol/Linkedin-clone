import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAQkcM0UudLVqJa5DmmnwjUidk0Ac5ipl4",
  authDomain: "linkedin-clone-5719f.firebaseapp.com",
  projectId: "linkedin-clone-5719f",
  storageBucket: "linkedin-clone-5719f.appspot.com",
  messagingSenderId: "603675285986",
  appId: "1:603675285986:web:665fff8240b4dd9d77c1bb",
  measurementId: "G-GSWKQ7FH29",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
