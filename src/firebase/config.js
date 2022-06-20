// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import 'firebase/firestore'
import firebase from "firebase/app";
import "firebase/auth";
import 'firebase/database'; // If using Firebase database
import 'firebase/storage';  // If using Firebase storage


const firebaseConfig = {
  apiKey: "AIzaSyAo2xFkslcJ2-Us4-6Yi1sUhI5is4ESKSQ",
  authDomain: "thehalotask.firebaseapp.com",
  projectId: "thehalotask",
  storageBucket: "thehalotask.appspot.com",
  messagingSenderId: "377848340023",
  appId: "1:377848340023:web:073941af6afcf4ae8c69b2",
  measurementId: "G-V340KXZC7H"
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

const timestamp = firebase.firestore.Timestamp();

export { projectFirestore, projectAuth, timestamp };