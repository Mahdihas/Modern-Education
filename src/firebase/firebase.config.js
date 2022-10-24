// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXu8r-zkcu7dhZhoP1EFMndJvcRgyrrok",
  authDomain: "easy-develper.firebaseapp.com",
  projectId: "easy-develper",
  storageBucket: "easy-develper.appspot.com",
  messagingSenderId: "226455667325",
  appId: "1:226455667325:web:860acb31e34697284ae714",
  measurementId: "G-L43X1MPHLE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;