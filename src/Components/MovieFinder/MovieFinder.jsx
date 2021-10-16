import { useEffect, useState } from "react";
import { LoginForm } from "../Login/LoginForm";
import { MovieList } from "../MovieList/MovieList";
import { MovieParams } from "../MovieParams/MovieParams";
import { auth } from "../../firebase";

export const MovieFinder = () => {
  const [list, setList] = useState([]);

  return (
    <>
      <LoginForm />
      <MovieParams setList={setList} />
      <MovieList list={list} />
    </>
  );
};
