import { useState } from "react";
import { auth } from "../../auth";
import { deleteData } from "../../firestore";
import styles from "../MovieItem/MovieItem.module.css";

export const WatchedMovieItem = ({ title, img, overview, year, movieId }) => {
  let [user, setUser] = useState(null);
  auth.onAuthStateChanged(setUser);

  const handleItemClick = () => {
    document.getElementById(`${movieId}`).style.display = "none";
    deleteData(movieId, user.uid);
  };

  return (
    <li className={styles.item} id={movieId}>
      <img
        className={styles.image}
        src={"https://image.tmdb.org/t/p/w200" + img}
        alt="/"
      />
      <div className={styles.text_container}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{overview}</div>
        <div>Год выпуска: {year}</div>
        <button
          onClick={() => {
            handleItemClick();
          }}
        >
          Удалить
        </button>
      </div>
    </li>
  );
};
