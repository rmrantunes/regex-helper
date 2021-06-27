import { RegexContext } from "contexts/RegexContext";
import React, { useContext } from "react";

export const TextInput = () => {
  const { setText, text } = useContext(RegexContext);
  return (
    <textarea value={text} onChange={(event) => setText(event.target.value)} />
  );
};
