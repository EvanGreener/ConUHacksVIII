// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJk4SE6YILxYwIGugcUPnjYvzHJnINJXI",
  authDomain: "conuhacksviii-esmc.firebaseapp.com",
  projectId: "conuhacksviii-esmc",
  storageBucket: "conuhacksviii-esmc.appspot.com",
  messagingSenderId: "249976249657",
  appId: "1:249976249657:web:6a94a0e2979702cf10dce8",
  measurementId: "G-NQ65CRGM2D",
};

const FIREBASE_APP = initializeApp(firebaseConfig);
const FIREBASE_DB = getFirestore(FIREBASE_APP);

const FIREBASE_AUTH: Auth = getAuth(FIREBASE_APP);

export { FIREBASE_APP, FIREBASE_DB, FIREBASE_AUTH };
