import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { LoginForm } from "../Login/LoginForm";
import { RegisterForm } from "../RegisterForm/RegisterForm";
import styles from "./LoginRouter.module.css";

export const LoginRouter = () => {
  return (
    <Router>
      <div>
        <div className={styles.header}>
          <div>
            <NavLink
              exact
              activeClassName={styles.active}
              className={styles.nav}
              to="/"
            >
              Войти
            </NavLink>
          </div>
          <div>
            <NavLink
              activeClassName={styles.active}
              className={styles.nav}
              to="/register"
            >
              Регистрация
            </NavLink>
          </div>
        </div>

        <Switch>
          <Route exact path="/">
            <LoginForm />
          </Route>
          <Route path="/register">
            <RegisterForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
