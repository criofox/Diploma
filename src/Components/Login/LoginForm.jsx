import { useState } from "react";
import { LogInFunc } from "../../auth";
import styles from "./LoginForm.module.css";

export const LoginForm = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <div className={styles.form}>
      <div className={styles.input}>
        <label className={styles.label}>E-Mail</label>
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
          LogInFunc(email, password);
        }}
      >
        Log In
      </button>
    </div>
  );
};
