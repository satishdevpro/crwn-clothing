import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCVaFVz3JBx4p0A5kI9sqiwgLSxxuO0T50",
  authDomain: "crwn-db-60c3d.firebaseapp.com",
  databaseURL: "https://crwn-db-60c3d.firebaseio.com",
  projectId: "crwn-db-60c3d",
  storageBucket: "crwn-db-60c3d.appspot.com",
  messagingSenderId: "337918067457",
  appId: "1:337918067457:web:7a2b386344703eae96d100",
  measurementId: "G-3MVYZHC8H2"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
