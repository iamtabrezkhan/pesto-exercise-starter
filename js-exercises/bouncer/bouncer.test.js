import { bouncer } from "./bouncer";

describe("bouncer", () => {
  test("should remove all falsy values from an array", () => {
    const result = bouncer([0, null, 100, false]);
    expect(result).toEqual([100]);
  });
  test("should return an empty array", () => {
    const result = bouncer([0, null, "", false, undefined, NaN]);
    expect(result).toEqual([]);
  });
  test("should return same array that was passed", () => {
    const result = bouncer([1, 2, 3, 4]);
    expect(result).toEqual([1, 2, 3, 4]);
  });
});
