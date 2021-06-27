import { createRegex } from "./create-regex";
import { highlightMatch } from "./highlight-match";

describe("highlightMatch()", () => {
  it("should return highlight match with a <b>TAG</b>", () => {
    expect(
      highlightMatch({
        input: "matchtext",
        regex: createRegex("match"),
      })
    ).toBe(`<b>match</b>text`);

    expect(
      highlightMatch({
        input: "123 456",
        regex: createRegex("([0-9]{3})", ["g"]),
      })
    ).toBe(`<b>123</b> <b>456</b>`);
  });

  it("should return input if regex does not have effect", () => {
    expect(
      highlightMatch({
        input: "matchtext",
        regex: createRegex("error"),
      })
    ).toBe(`matchtext`);
  });
});
