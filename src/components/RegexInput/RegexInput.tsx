import React, { useContext } from "react";
import { RegexContext } from "contexts/RegexContext";

import styles from "components/RegexInput/RegexInput.module.css";

export const RegexInput = () => {
  const { setRegexInput, regexInput } = useContext(RegexContext);

  return (
    <input
      className={styles.input}
      type="text"
      value={regexInput}
      onChange={(event) => setRegexInput(event.target.value)}
      placeholder="The expression which go inside //"
    />
  );
};
