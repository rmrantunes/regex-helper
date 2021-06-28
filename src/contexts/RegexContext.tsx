import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { createRegex, RegexFlags } from "utils/create-regex";
import { highlightMatch } from "utils/highlight-match";

type RegexContextValue = {
  text: string;
  setText: Dispatch<SetStateAction<string>>;
  regexInput: string;
  setRegexInput: Dispatch<SetStateAction<string>>;
  regexFlags: RegexFlags[];
  setRegexFlags: Dispatch<SetStateAction<RegexFlags[]>>;
  highlightText: string;
};

export const RegexContext = createContext({} as RegexContextValue);

export const RegexProvider: React.FC = (props) => {
  const [text, setText] = useState("My number is 91234-5678");
  const [regexInput, setRegexInput] = useState("[0-9]{4,5}-?[0-9]{4}");
  const [regexFlags, setRegexFlags] = useState<RegexFlags[]>(["g"]);
  const [regexError, setRegexError] = useState("");
  const [highlightText, setHighlightText] = useState("");

  useEffect(() => {
    try {
      const highlightText = highlightMatch({
        input: text,
        regex: createRegex(regexInput, regexFlags),
      });
      setHighlightText(highlightText);
    } catch (error) {
      setRegexError(error);
    }
  }, [text, regexInput, regexFlags]);

  return (
    <RegexContext.Provider
      value={{
        text,
        setText,
        regexInput,
        setRegexInput,
        highlightText,
        regexFlags,
        setRegexFlags,
      }}
    >
      {props.children}
    </RegexContext.Provider>
  );
};
