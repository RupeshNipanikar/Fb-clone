// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyBFF-hEDWVwLBSj5rSQ3P1Enn-EMr8TcMY",
    authDomain: "fb-clone-efc4e.firebaseapp.com",
    projectId: "fb-clone-efc4e",
    storageBucket: "fb-clone-efc4e.appspot.com",
    messagingSenderId: "382872806499",
    appId: "1:382872806499:web:94fd2c8a4dc1f4ac238456"
  };
  // Initialize Firebase
  const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
  const db = getFirestore();
  const storage = getStorage();
  
  export default app;
  export { db, storage };