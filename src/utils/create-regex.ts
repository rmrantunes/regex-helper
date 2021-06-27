type RegexFlags = "g" | "i" | "m";

export function createRegex(input: string, flags?: RegexFlags[]): RegExp {
  return new RegExp(input, flags?.join(""));
}
