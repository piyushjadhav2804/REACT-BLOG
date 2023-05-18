import firebase from "firebase/compat/app";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBvKKQnrGXjaO_Y1TJs8e_uuwGf7w-303E",
  authDomain: "react-hooks-blog-6cfef.firebaseapp.com",
  projectId: "react-hooks-blog-6cfef",
  storageBucket: "react-hooks-blog-6cfef.appspot.com",
  messagingSenderId: "834340126610",
  appId: "1:834340126610:web:7b6d47bcb532745c178b4b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

