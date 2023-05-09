import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCdiKDmDov3CJdK1Xy8y-qpsNRzMQdDqGw",
  authDomain: "customization-app.firebaseapp.com",
  projectId: "customization-app",
  storageBucket: "customization-app.appspot.com",
  messagingSenderId: "393838397287",
  appId: "1:393838397287:web:9413a9664aa621d91f51c2",
  measurementId: "G-G7V51ZZ6YM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };
