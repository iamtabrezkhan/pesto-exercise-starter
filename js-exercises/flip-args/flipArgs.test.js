// write your own test cases
import { flipArgs } from "./flipArgs";

describe("flipArgs", () => {
  test("should flip arguments and return correct array", () => {
    let flipped = flipArgs(function() {
      let args = Array.from(arguments);
      return args.map(v => v * 2);
    });
    let result = flipped(1, 2, 3);
    expect(result).toEqual([6, 4, 2]);
  });
});
