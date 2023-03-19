// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7RDolpMGoWMx1b1wa5HSw8sDRj3jInGI",
  authDomain: "ferm-7247d.firebaseapp.com",
  projectId: "ferm-7247d",
  storageBucket: "ferm-7247d.appspot.com",
  messagingSenderId: "403908197177",
  appId: "1:403908197177:web:597b289bbc12a6323b06e8",
  measurementId: "G-HG31L2GZCH"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
