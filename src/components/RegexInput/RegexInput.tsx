import React, { useContext, useState } from "react";
import { RegexContext } from "contexts/RegexContext";

import styles from "components/RegexInput/RegexInput.module.css";

export const RegexInput = () => {
  const { setRegexInput } = useContext(RegexContext);
  const [input, setInput] = useState("");
  return (
    <input
      className={styles.input}
      type="text"
      value={input}
      onBlur={() => setRegexInput(input)}
      onChange={(event) => setInput(event.target.value)}
    />
  );
};
