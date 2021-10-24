import { useState } from "react";
import { signUpFunc } from "../../auth";
import styles from "../Login/LoginForm.module.css";

export const RegisterForm = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <div className={styles.form}>
      <div className={styles.input}>
        <label className={styles.label}>Email</label>
        <input
          className={styles.field}
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div className={styles.input}>
        <label className={styles.label}>Password</label>
        <input
          className={styles.field}
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <button
        className={styles.button}
        onClick={() => {
          signUpFunc(email, password);
        }}
      >
        Sign Up
      </button>
    </div>
  );
};
