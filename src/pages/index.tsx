import { RegexInput } from "components/RegexInput";
import { RegexFlagsInput } from "components/RegexFlagsInput";
import { TextInput } from "components/TextInput";
import { RegexContext } from "contexts/RegexContext";
import { useContext } from "react";

import styles from "styles/Home.module.css";

export default function Home() {
  const { highlightText, regexInput, regexFlags } = useContext(RegexContext);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.regex}>
          <RegexInput />
          <RegexFlagsInput />
        </div>
        <TextInput />
        <div className={styles.regexInfo}>
          <div>
            <h3>Used Expression:</h3>
            <p>
              /{regexInput}/{regexFlags.join("")}
            </p>
          </div>
          <div>
            <h3>Result: </h3>
            <p
              dangerouslySetInnerHTML={{ __html: highlightText }}
              className={styles.highlight}
            />
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <a href="https://github.com/rmrantunes/regex-helper">Regex Helper</a>{" "}
        made by <a href="https://github.com/rmrantunes">@rmrantunes</a>
      </footer>
    </div>
    // Regex options modal // TextInput
  );
}
