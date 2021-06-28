import { RegexContext } from "contexts/RegexContext";
import React, { useContext } from "react";
import { RegexFlags } from "utils/create-regex";

const options: RegexFlags[] = ["g", "i", "m"];

export const RegexFlagsInput = () => {
  const { setRegexFlags, regexFlags } = useContext(RegexContext);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setRegexFlags((state) => {
      const value = event.target.value as RegexFlags;
      if (regexFlags.includes(value)) {
        return state.filter((flag) => flag !== value);
      }
      return [...state, value];
    });
  }

  return (
    <div>
      {options.map((flag) => (
        <label key={flag}>
          <input
            type="checkbox"
            name="regex-value"
            value={flag}
            checked={regexFlags.includes(flag)}
            onChange={handleChange}
          />
          <span>{flag}</span>
        </label>
      ))}
    </div>
  );
};
