import { useEffect, useState } from "react";
import { LogInFunc, signUpFunc } from "../../auth";
import { auth, db } from "../../firebase";

export const LoginForm = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <div>
      <label>Логин</label>
      <input
        type="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <label>Пароль</label>
      <input
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button
        onClick={() => {
          LogInFunc(email, password);
        }}
      >
        Log In
      </button>
      <button
        onClick={() => {
          signUpFunc(email, password);
        }}
      >
        Register
      </button>
    </div>
  );
};
