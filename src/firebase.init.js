// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNaB5UEgk69wamK1Iue8BFgW9TA4mLlA4",
  authDomain: "assignment-10-shohidmax.firebaseapp.com",
  projectId: "assignment-10-shohidmax",
  storageBucket: "assignment-10-shohidmax.appspot.com",
  messagingSenderId: "246920908464",
  appId: "1:246920908464:web:4c4db5d3360ba9320fb575"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;