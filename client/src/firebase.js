// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-44284.firebaseapp.com",
  projectId: "mern-blog-44284",
  storageBucket: "mern-blog-44284.appspot.com",
  messagingSenderId: "842573299740",
  appId: "1:842573299740:web:04f3f5e5cb9c0ef7245fd9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);