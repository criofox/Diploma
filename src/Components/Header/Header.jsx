import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { logOutFunc } from "../../auth";
import { MovieFinder } from "../MovieFinder/MovieFinder";
import { WatchedMovieList } from "../WatchedMovieList/WatchedMovieList";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <Router>
      <div>
        <div className={styles.header}>
          <div className={styles.menu}>
            <div>
              <NavLink
                exact
                activeClassName={styles.active}
                className={styles.nav}
                to="/"
              >
                Главная
              </NavLink>
            </div>
            <div>
              <NavLink
                exact
                activeClassName={styles.active}
                className={styles.nav}
                to="/watched"
              >
                Смотрел
              </NavLink>
            </div>
          </div>
          <button
            className={styles.button}
            onClick={() => {
              logOutFunc();
            }}
          >
            Log Out
          </button>
        </div>
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
