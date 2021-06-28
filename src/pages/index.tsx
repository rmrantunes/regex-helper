import { RegexInput } from "components/RegexInput";
import { TextInput } from "components/TextInput";
import { RegexContext } from "contexts/RegexContext";
import { useContext } from "react";

import styles from "styles/Home.module.css";

export default function Home() {
  const { highlightText } = useContext(RegexContext);

  return (
    <main className={styles.main}>
      <RegexInput />
      <TextInput />
      <div dangerouslySetInnerHTML={{ __html: highlightText }} />
    </main>
    // Regex options modal // TextInput
  );
}
