import { useState } from "react";
import { signUpFunc } from "../../auth";

export const RegisterForm = () => {
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
          signUpFunc(email, password);
        }}
      >
        Register
      </button>
    </div>
  );
};
