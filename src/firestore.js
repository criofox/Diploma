import {
  collection,
  getFirestore,
  setDoc,
  doc,
  getDoc,
  arrayUnion,
} from "firebase/firestore";
import { app } from "./firebase";

const db = getFirestore(app);

export const sendData = async (data, uid) => {
  await setDoc(
    doc(db, "users", uid),
    {
      watchedFilms: arrayUnion(data),
    },
    { merge: true }
  );
};

export const readData = async (uid) => {
  try {
    const response = await getDoc(doc(db, "users", uid));
    return response.data().watchedFilms;
  } catch (error) {
    console.log(error);
  }
};