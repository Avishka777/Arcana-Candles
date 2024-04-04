// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "arcana-candles.firebaseapp.com",
  projectId: "arcana-candles",
  storageBucket: "arcana-candles.appspot.com",
  messagingSenderId: "778396467067",
  appId: "1:778396467067:web:3339c590c0470a8c3707de"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);