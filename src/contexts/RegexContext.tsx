import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { createRegex } from "utils/create-regex";
import { highlightMatch } from "utils/highlight-match";

type RegexContextValue = {
  text: string;
  setText: Dispatch<SetStateAction<string>>;
  regexInput: string;
  setRegexInput: Dispatch<SetStateAction<string>>;
  highlightText: string;
};

export const RegexContext = createContext({} as RegexContextValue);

export const RegexProvider: React.FC = (props) => {
  const [text, setText] = useState("");
  const [regexInput, setRegexInput] = useState("");
  const [regexError, setRegexError] = useState("");
  const [highlightText, setHighlightText] = useState("");

  useEffect(() => {
    try {
      const highlightText = highlightMatch({
        input: text,
        regex: createRegex(regexInput),
      });
      setHighlightText(highlightText);
    } catch (error) {
      setRegexError(error);
    }
  }, [text, regexInput]);

  return (
    <RegexContext.Provider
      value={{
        text,
        setText,
        regexInput,
        setRegexInput,
        highlightText,
      }}
    >
      {props.children}
    </RegexContext.Provider>
  );
};
