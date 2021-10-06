// Initialize Cloud Firestore through Firebase
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCv3KopWUx-lGOBYLT-b8M1fbEKVW4RNww",
  authDomain: "react-firebase-todo-app-48d47.firebaseapp.com",
  projectId: "react-firebase-todo-app-48d47",
  storageBucket: "react-firebase-todo-app-48d47.appspot.com",
  messagingSenderId: "884646535756",
  appId: "1:884646535756:web:bd2d7acf71e4533ab8cae9",
});

const db = firebaseApp.firestore();

export default db;
