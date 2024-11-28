import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


// Import the functions you need from the SDKs you need

const firebaseConfig = {
  apiKey: "AIzaSyAMK0iIJVd0IhdpFUbCheXRb8QOkDhIY30",
  authDomain: "layhor-projects.firebaseapp.com",
  projectId: "layhor-projects",
  storageBucket: "layhor-projects.firebasestorage.app",
  messagingSenderId: "1043616800272",
  appId: "1:1043616800272:web:7150c6c601f792cb887495"
};

// const firebaseConfig = {
//   apiKey: `${process.env.REACT_APP_API_KEY}`,
//   authDomain:`${process.env.REACT_APP_AUTH_DOMAIN}`,
//   projectId: `${process.env.REACT_APP_PROJECT_ID}`,
//   storageBucket: `${process.env.REACT_APP_STORAGE_BUCKET}`,
//   messagingSenderId: `${process.env.REACT_APP_MESSAGING_SENDER_ID}`,
//   appId: `${process.env.REACT_APP_APP_ID}`
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
