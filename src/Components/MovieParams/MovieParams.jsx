import { useState } from "react";
import { getList } from "../../Requests";

export const MovieParams = ({ setList }) => {
  const [lowerDate, setLowerDate] = useState("");
  const [upperDate, setUpperDate] = useState("");

  const handleAdd = () => {
    const genre = (genre) => {
      return document.getElementById(`${genre}`).checked;
    };
    getList(
      setList,
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
      <input
        type="checkbox"
        name="criminal"
        id="criminal"
        defaultChecked={false}
      />
      <label name="criminal">Криминал</label>
      <input type="checkbox" name="horror" id="horror" defaultChecked={false} />
      <label name="horror">Ужасы</label>
      <input type="checkbox" name="comedy" id="comedy" defaultChecked={false} />
      <label name="comedy">Комедия</label>
      <input type="checkbox" name="action" id="action" defaultChecked={false} />
      <label name="action">Боевик</label>
      <input
        type="checkbox"
        name="thriller"
        id="thriller"
        defaultChecked={false}
      />
      <label name="thriller">Триллер</label>
      <input
        type="checkbox"
        name="animation"
        id="animation"
        defaultChecked={false}
      />
      <label name="animation">Мультфильм</label>
      <input
        type="checkbox"
        name="adventure"
        id="adventure"
        defaultChecked={false}
      />
      <label name="adventure">Приключения</label>
      <input
        type="checkbox"
        name="documentary"
        id="documentary"
        defaultChecked={false}
      />
      <label name="documentary">Документальные</label>
      <input type="checkbox" name="drama" id="drama" defaultChecked={false} />
      <label name="drama">Драма</label>
      <input type="checkbox" name="family" id="family" defaultChecked={false} />
      <label name="family">Семейные</label>
      <input
        type="checkbox"
        name="fantasy"
        id="fantasy"
        defaultChecked={false}
      />
      <label name="fantasy">Фантастика</label>
      <input
        type="checkbox"
        name="history"
        id="history"
        defaultChecked={false}
      />
      <label name="history">Исторический</label>
      <input type="checkbox" name="music" id="music" defaultChecked={false} />
      <label name="music">Музыкальный</label>
      <label name="lowerDate"> От </label>
      <input
        type="date"
        onChange={(e) => setLowerDate(e.target.value)}
        defaultValue=""
        name="lowerDate"
      />
      <label name="upperDate"> До </label>
      <input
        type="date"
        onChange={(e) => setUpperDate(e.target.value)}
        defaultValue=""
        name="upperDate"
      />
      <button
        onClick={() => {
          handleAdd();
        }}
      >
        Найти
      </button>
    </>
  );
};
