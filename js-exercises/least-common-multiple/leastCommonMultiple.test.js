import { leastCommonMultiple } from "./leastCommonMultiple";

describe("leastCommonMultiple", () => {
  test("should return correct lcm", () => {
    expect(leastCommonMultiple(6, 21)).toEqual(42);
    expect(leastCommonMultiple(12, 16)).toEqual(48);
  });
  test("should throw an error", () => {
    expect(() => leastCommonMultiple("foo", 99)).toThrow();
    expect(() => leastCommonMultiple(21, "bar")).toThrow();
  });
});
