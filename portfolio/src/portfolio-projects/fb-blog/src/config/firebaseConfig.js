// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuFWFK99SwwBpAQhv00vRUnAZtIghxAww",
  authDomain: "cohort-24-blog-project.firebaseapp.com",
  projectId: "cohort-24-blog-project",
  storageBucket: "cohort-24-blog-project.appspot.com",
  messagingSenderId: "144799226952",
  appId: "1:144799226952:web:22bb8df2cb028d22c98c7d",
  measurementId: "G-0JH05PWQV4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);