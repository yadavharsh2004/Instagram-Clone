// Import the functions you need from the SDKs you need
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyChuNYDUE5uzR5ZtrEKC2tCGgjwWWxaW8s",
  authDomain: "insta-clone-f3814.firebaseapp.com",
  projectId: "insta-clone-f3814",
  storageBucket: "insta-clone-f3814.firebasestorage.app",
  messagingSenderId: "852727905265",
  appId: "1:852727905265:web:c793a3ab61a4177b88e250",
  measurementId: "G-H2BYPVV46J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export {app, auth, firestore, storage}


// const analytics = getAnalytics(app); 