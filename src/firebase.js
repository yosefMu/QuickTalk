import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "my-chat-140a3.firebaseapp.com",
    projectId: "my-chat-140a3",
    storageBucket: "my-chat-140a3.appspot.com",
    messagingSenderId: "1016476761833",
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
  })
  .auth();
