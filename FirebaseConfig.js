// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2oPld4RjuUxAoT-Z_fg0ljVNIJ_PBPrc",
  authDomain: "reactapp-e6938.firebaseapp.com",
  projectId: "reactapp-e6938",
  storageBucket: "reactapp-e6938.appspot.com",
  messagingSenderId: "309574759899",
  appId: "1:309574759899:web:fcfdf7a2594337f14023fe",
  measurementId: "G-M9GQ3VV888"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
