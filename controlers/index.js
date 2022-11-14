// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPOX34zPbg4AquRez0_pl5TLoIp2N_9VI",
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
