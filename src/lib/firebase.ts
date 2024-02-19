// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyCHa57iAZfpdCB1E8NanzzGuH6Z2wNgWY0",
  authDomain: "film-on-burk.firebaseapp.com",
  projectId: "film-on-burk",
  storageBucket: "film-on-burk.appspot.com",
  messagingSenderId: "130202541625",
  appId: "1:130202541625:web:8353cbd7c3b12ce498b7e8",
  measurementId: "G-BZL1V8SL8C"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);