import { useEffect, useState } from "react";
import { auth, db } from "../../firebase";

export const LoginForm = () => {
  const [loginValue, setLoginValue] = useState();
  const [passwordValue, setPasswordValue] = useState();

  const stateTrack = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("user logged in:", user.uid);
      } else {
        console.log("user logged out");
      }
    });
  };

  useEffect(() => {
    stateTrack();
  });

  const signUpFunc = () => {
    const email = loginValue;
    const password = passwordValue;

    auth.createUserWithEmailAndPassword(email, password).then((cred) => {});
  };

  const LogInFunc = () => {
    const email = loginValue;
    const password = passwordValue;

    auth.signInWithEmailAndPassword(email, password).then((cred) => {});
  };

  const logOutFunc = () => {
    auth.signOut();
  };
  return (
    <div>
      <label>Логин</label>
      <input
        type="email"
        onChange={(e) => {
          setLoginValue(e.target.value);
        }}
      />
      <label>Пароль</label>
      <input
        type="password"
        onChange={(e) => {
          setPasswordValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          LogInFunc();
        }}
      >
        Log In
      </button>
      <button
        onClick={() => {
          signUpFunc();
        }}
      >
        Register
      </button>
      <button
        onClick={() => {
          logOutFunc();
        }}
      >
        Log Out
      </button>
    </div>
  );
};
