import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from "./firebase";
import { createData } from "./firestore";

export const auth = getAuth(app);

export const signUpFunc = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      const user = cred.user;
      createData(user.uid);
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

export const logOutFunc = () => {
  auth.signOut();
};
