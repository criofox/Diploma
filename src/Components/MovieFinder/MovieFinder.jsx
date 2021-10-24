import { useState } from "react";
import { MovieList } from "../MovieList/MovieList";
import { MovieParams } from "../MovieParams/MovieParams";

export const MovieFinder = () => {
  const [list, setList] = useState([]);

  return (
    <>
      <MovieParams setList={setList} />
      <MovieList list={list} />
    </>
  );
};
