import { useEffect, useState } from "react";
import { auth } from "../../auth";
import { readData } from "../../firestore";
import { getList } from "../../Requests";
import { LoginForm } from "../Login/LoginForm";
import { MovieList } from "../MovieList/MovieList";
import { MovieParams } from "../MovieParams/MovieParams";

export const MovieFinder = () => {
  const [list, setList] = useState([]);
  const [user, setUser] = useState(null);
  auth.onAuthStateChanged(setUser);

  const logOutFunc = () => {
    auth.signOut();
  };
  if (user === null) {
    return <LoginForm />;
  } else {
    return (
      <>
        <button
          onClick={() => {
            readData(user.uid);
          }}
        ></button>
        <button
          onClick={() => {
            logOutFunc();
          }}
        >
          Log Out
        </button>
        <MovieParams setList={setList} />
        <MovieList list={list} />
      </>
    );
  }
};
