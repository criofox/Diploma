import { useState } from "react";
import { auth } from "../../auth";
import { getList } from "../../Requests";
import styles from "./MovieParams.module.css";

export const MovieParams = ({ setList }) => {
  const [lowerDate, setLowerDate] = useState("");
  const [upperDate, setUpperDate] = useState("");
  const [user, setUser] = useState(null);
  auth.onAuthStateChanged(setUser);

  const handleAdd = () => {
    const genre = (genre) => {
      return document.getElementById(`${genre}`).checked;
    };
    getList(
      setList,
      user.uid,
      lowerDate,
      upperDate,
      genre("criminal"),
      genre("horror"),
      genre("comedy"),
      genre("action"),
      genre("thriller"),
      genre("animation"),
      genre("adventure"),
      genre("documentary"),
      genre("drama"),
      genre("family"),
      genre("fantasy"),
      genre("history"),
      genre("music")
    );
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.paramsup}>
          <div className={styles.genre}>
            <input
              type="checkbox"
              name="criminal"
              id="criminal"
              defaultChecked={false}
            />
            <label className={styles.label} name="criminal">
              Криминал
            </label>
          </div>
          <div className={styles.genre}>
            <input
              type="checkbox"
              name="horror"
              id="horror"
              defaultChecked={false}
            />
            <label className={styles.label} name="horror">
              Ужасы
            </label>
          </div>
          <div className={styles.genre}>
            <input
              type="checkbox"
              name="comedy"
              id="comedy"
              defaultChecked={false}
            />
            <label className={styles.label} name="comedy">
              Комедия
            </label>
          </div>
          <div className={styles.genre}>
            <input
              type="checkbox"
              name="action"
              id="action"
              defaultChecked={false}
            />
            <label className={styles.label} name="action">
              Боевик
            </label>
          </div>
          <div className={styles.genre}>
            <input
              type="checkbox"
              name="thriller"
              id="thriller"
              defaultChecked={false}
            />
            <label className={styles.label} name="thriller">
              Триллер
            </label>
          </div>
          <div className={styles.genre}>
            <input
              type="checkbox"
              name="animation"
              id="animation"
              defaultChecked={false}
            />
            <label className={styles.label} name="animation">
              Мультфильм
            </label>
          </div>
          <div className={styles.genre}>
            <input
              type="checkbox"
              name="adventure"
              id="adventure"
              defaultChecked={false}
            />
            <label className={styles.label} name="adventure">
              Приключения
            </label>
          </div>
          <div className={styles.genre}>
            <input
              type="checkbox"
              name="documentary"
              id="documentary"
              defaultChecked={false}
            />
            <label className={styles.label} name="documentary">
              Документальные
            </label>
          </div>
          <div className={styles.genre}>
            <input
              type="checkbox"
              name="drama"
              id="drama"
              defaultChecked={false}
            />
            <label className={styles.label} name="drama">
              Драма
            </label>
          </div>
          <div className={styles.genre}>
            <input
              type="checkbox"
              name="family"
              id="family"
              defaultChecked={false}
            />
            <label className={styles.label} name="family">
              Семейные
            </label>
          </div>
        </div>
        <div className={styles.paramslow}>
          <div className={styles.genre}>
            <input
              type="checkbox"
              name="fantasy"
              id="fantasy"
              defaultChecked={false}
            />
            <label className={styles.label} name="fantasy">
              Фантастика
            </label>
          </div>
          <div className={styles.genre}>
            <input
              type="checkbox"
              name="history"
              id="history"
              defaultChecked={false}
            />
            <label className={styles.label} name="history">
              Исторический
            </label>
          </div>
          <div className={styles.genre}>
            <input
              type="checkbox"
              name="music"
              id="music"
              defaultChecked={false}
            />
            <label className={styles.label} name="music">
              Музыкальный
            </label>
          </div>
        </div>
        <div className={styles.dates}>
          <div className={styles.dateblock}>
            <label className={styles.datelabel} name="lowerDate">
              От:
            </label>
            <input
              className={styles.date}
              type="date"
              onChange={(e) => setLowerDate(e.target.value)}
              defaultValue=""
              name="lowerDate"
            />
          </div>
          <div className={styles.dateblock}>
            <label className={styles.datelabel} name="upperDate">
              До:
            </label>
            <input
              className={styles.date}
              type="date"
              onChange={(e) => setUpperDate(e.target.value)}
              defaultValue=""
              name="upperDate"
            />
          </div>
        </div>
        <div className={styles.button}>
          <button
            className={styles.buttoninner}
            onClick={() => {
              handleAdd();
            }}
          >
            Найти
          </button>
        </div>
      </div>
    </>
  );
};
