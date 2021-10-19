import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { app } from "./firebase";

export const auth = getAuth(app);

export const signUpFunc = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      const user = cred.user;
    })
    .catch((error) => {
      console.log(console.error());
    });
};

export const LogInFunc = (email, password) => {
  signInWithEmailAndPassword(auth, email, password).catch((error) => {
    console.log(console.error());
  });
};
