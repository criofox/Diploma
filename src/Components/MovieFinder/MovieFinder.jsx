import { useState } from "react";
import { MovieList } from "../MovieList/MovieList";
import { MovieParams } from "../MovieParams/MovieParams";
import { MovieItem } from "../MovieItem/MovieItem";

export const MovieFinder = () => {
  const [list, setList] = useState([]);

  return (
    <>
      <MovieParams setList={setList} />
      <MovieList list={list} />
    </>
  );
};
