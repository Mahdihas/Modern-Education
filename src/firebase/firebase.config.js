// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANG3KltXnoFrO3SEuQhpLLH4lNl5XfCTU",
  authDomain: "easy-developer.firebaseapp.com",
  projectId: "easy-developer",
  storageBucket: "easy-developer.appspot.com",
  messagingSenderId: "461019623845",
  appId: "1:461019623845:web:b6b6a75a8d35c82b6a384c",
  measurementId: "G-3LLP23Z5M6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;