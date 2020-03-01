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

export const createUserProfileDocument = async (userAuth, additonalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additonalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
