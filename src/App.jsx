import { useState } from "react";
import { auth } from "./auth";
import { Header } from "./Components/Header/Header";
import { LoginRouter } from "./Components/LoginRouter/LoginRouter";

export const App = () => {
  const [user, setUser] = useState(null);
  auth.onAuthStateChanged(setUser);
  if (user === null) {
    return <LoginRouter />;
  } else {
    return <Header />;
  }
};
