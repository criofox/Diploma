import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyApKq3lrKYsMR3oqGl2htzRaqpQDE12fd8",
  authDomain: "movie-finder-45712.firebaseapp.com",
  databaseURL:
    "https://movie-finder-45712-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "movie-finder-45712",
  storageBucket: "movie-finder-45712.appspot.com",
  messagingSenderId: "15156865272",
  appId: "1:15156865272:web:2c929b3cc64428e091330d",
};
export const app = initializeApp(firebaseConfig);
