type HighlightMatchOptions = {
  input: string;
  regex: RegExp;
  /** HTML tag `[open, close]` */
  tag?: [string, string];
};

export function highlightMatch(options: HighlightMatchOptions) {
  const [open, close] = options.tag || ["<b>", "</b>"];
  return options.input.replace(
    options.regex,
    (match) => `${open}${match}${close}`
  );
}
