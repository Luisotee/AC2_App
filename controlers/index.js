// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { API_KEY } from "@env";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "ac2app.firebaseapp.com",
  projectId: "ac2app",
  storageBucket: "ac2app.appspot.com",
  messagingSenderId: "1012676409291",
  appId: "1:1012676409291:web:a60e1e28462720e15d284e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

export default db;
