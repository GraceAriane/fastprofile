// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeBfwV3Nz5hLqF_IjkGZlLdU5SLNAdeZY",
  authDomain: "fastprofile-92f0f.firebaseapp.com",
  projectId: "fastprofile-92f0f",
  storageBucket: "fastprofile-92f0f.firebasestorage.app",
  messagingSenderId: "486407736479",
  appId: "1:486407736479:web:3c64206b1b5f53f85766aa",
  measurementId: "G-WYQ810Z487"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Authentification
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const db = getFirestore(app)