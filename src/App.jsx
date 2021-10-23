import { useState } from "react";
import { auth } from "./auth";
import { Header } from "./Components/Header/Header";
import { LoginForm } from "./Components/Login/LoginForm";

export const App = () => {
  const [user, setUser] = useState(null);
  auth.onAuthStateChanged(setUser);
  if (user === null) {
    return <LoginForm />;
  } else {
    return <Header />;
  }
};
