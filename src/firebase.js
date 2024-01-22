// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_8dc-xAbZ5iXEXwg6njqgOCdaBShlOSs",
  authDomain: "big-fat-tacos.firebaseapp.com",
  projectId: "big-fat-tacos",
  storageBucket: "big-fat-tacos.appspot.com",
  messagingSenderId: "668507528418",
  appId: "1:668507528418:web:bc802abebacb73aa9992bb",
  measurementId: "G-RYC2N27F77",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export { auth, analytics };
