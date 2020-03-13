import { parseMs } from "./parseMs";

describe("parseMs", () => {
  test("should return correct object", () => {
    const actualObject = {
      days: 15,
      hours: 11,
      minutes: 23,
      seconds: 20,
      milliseconds: 1,
      microseconds: 0,
      nanoseconds: 0
    };
    expect(parseMs(1337000001)).toEqual(actualObject);
  });
  test("should throw an error", () => {
    expect(() => parseMs("foo")).toThrow();
  });
  test("should return correct number of days", () => {
    let result = parseMs(86400000);
    expect(result.days).toEqual(1);
    let result2 = parseMs(549457351);
    expect(result2.days).toEqual(6);
  });
});
