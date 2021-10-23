import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { logOutFunc } from "../../Requests";
import { MovieFinder } from "../MovieFinder/MovieFinder";
import { WatchedMovieList } from "../WatchedMovieList/WatchedMovieList";

export const Header = () => {
  return (
    <Router>
      <div>
        <div>
          <Link to="/">Главная</Link>
        </div>
        <div>
          <Link to="/watched">Смотрел</Link>
        </div>
        <button
          onClick={() => {
            logOutFunc();
          }}
        >
          Log Out
        </button>

        <hr />
        <Switch>
          <Route exact path="/">
            <MovieFinder />
          </Route>
          <Route path="/watched">
            <WatchedMovieList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
