// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLVljVLOWTqoKMHuTqqjttqVcBrm5dePo",
  authDomain: "the-nike-stuff.firebaseapp.com",
  projectId: "the-nike-stuff",
  storageBucket: "the-nike-stuff.appspot.com",
  messagingSenderId: "434176640465",
  appId: "1:434176640465:web:1d86e9d6ef0a91f6ca8cf0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore (app)