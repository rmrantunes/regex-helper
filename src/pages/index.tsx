import { RegexInput } from "components/RegexInput";
import { TextInput } from "components/TextInput";
import { RegexContext } from "contexts/RegexContext";
import { useContext } from "react";

export default function Home() {
  const { highlightText } = useContext(RegexContext);

  return (
    <div>
      <RegexInput />
      <TextInput />
      <div dangerouslySetInnerHTML={{ __html: highlightText }} />
    </div>
    // Regex options modal // TextInput
  );
}
