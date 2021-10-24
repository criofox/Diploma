import { useState } from "react";
import { LogInFunc } from "../../auth";

export const LoginForm = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <div>
      <label>Email</label>
      <input
        type="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <label>Password</label>
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
    </div>
  );
};
