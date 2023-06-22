// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnh7kTD4NEVp25SxEN1e0DQK9dtN09tjg",
  authDomain: "base-suelto-y-confio-cc300.firebaseapp.com",
  projectId: "base-suelto-y-confio-cc300",
  storageBucket: "base-suelto-y-confio-cc300.appspot.com",
  messagingSenderId: "301569124055",
  appId: "1:301569124055:web:1e137bf3c34e2771183292",
  measurementId: "G-SQFG10HH59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const firestoreInit = () => app