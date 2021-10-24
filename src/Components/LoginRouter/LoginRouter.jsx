import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { LoginForm } from "../Login/LoginForm";
import { RegisterForm } from "../RegisterForm/RegisterForm";

export const LoginRouter = () => {
  return (
    <Router>
      <div>
        <div>
          <Link to="/">Войти</Link>
        </div>
        <div>
          <Link to="/register">Регистрация</Link>
        </div>

        <hr />
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
