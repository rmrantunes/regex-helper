import React, { useContext, useState } from "react";
import { RegexContext } from "contexts/RegexContext";

export const RegexInput = () => {
  const { setRegexInput } = useContext(RegexContext);
  const [input, setInput] = useState("");
  return (
    <input
      type="text"
      value={input}
      onBlur={() => setRegexInput(input)}
      onChange={(event) => setInput(event.target.value)}
    />
  );
};
