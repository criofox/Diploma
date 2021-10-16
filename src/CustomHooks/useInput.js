import { useState } from "react";

export const useInput = () => {
  const [value, setInput] = useState("");
  const onChange = (e) => setInput(e.target.value);
  return { value, onChange, setInput };
};
