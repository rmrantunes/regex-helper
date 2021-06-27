import React from "react";
import { useState } from "react";

export const RegexInput = () => {
  const [text, setText] = useState("");
  return (
    <input
      type="text"
      value={text}
      onChange={(event) => setText(event.target.value)}
    />
  );
};
