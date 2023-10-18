//Funciones que inicializan el proyecto de firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore } from "firebase/firestore";
import {getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDYKN5onuHzUUqDSnSeTysAkC0hAT3QBU",
  authDomain: "cwn-2023-2-t.firebaseapp.com",
  projectId: "cwn-2023-2-t",
  storageBucket: "cwn-2023-2-t.appspot.com",
  messagingSenderId: "13120241989",
  appId: "1:13120241989:web:2768ae53b3e64504007e2c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

//Inicializamos  firestore
export const db = getFirestore(app);
//Inicializamos Auth
export const auth = getAuth(app);
