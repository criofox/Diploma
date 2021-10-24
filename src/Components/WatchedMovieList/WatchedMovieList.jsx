import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { auth } from "../../auth";
import { getWatchedList } from "../../Requests";

export const WatchedMovieList = () => {
  const [list, setList] = useState([]);
  const [user, setUser] = useState(null);
  auth.onAuthStateChanged(setUser);

  useEffect(() => {
    if (user !== null) {
      getWatchedList(user.uid, setList);
    }
  }, [user]);
  return <ul>{list}</ul>;
};
