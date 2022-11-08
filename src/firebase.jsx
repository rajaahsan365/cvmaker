import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyCUoyLg9_qI-_x5TG1-XtOZRQ5urrTkjOQ",
  authDomain: "cvmaker-cd68e.firebaseapp.com",
  databaseURL: "https://cvmaker-cd68e-default-rtdb.firebaseio.com/",
  projectId: "cvmaker-cd68e",
  storageBucket: "cvmaker-cd68e.appspot.com",
  messagingSenderId: "221395824398",
  appId: "1:221395824398:web:e973683b7f97b8704a715f",
  measurementId: "G-C738HZKQ8N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
const database = getDatabase(app);

export { app, auth, database };
