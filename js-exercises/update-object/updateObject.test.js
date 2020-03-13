import { updateObject } from "./updateObject";

describe("updateObject", () => {
  test("should return correct array", () => {
    expect(updateObject(1, 10, [1, 2, 3, 4])).toEqual([1, 10, 3, 4]);
  });
  test("should replace dog with cat on 3rd index in an array", () => {
    expect(
      updateObject(3, "cat", ["house", "lion", "fish", "dog", "hotdog"])
    ).toEqual(["house", "lion", "fish", "cat", "hotdog"]);
  });
  test("should throw an error if 1st argument (index) was not a number", () => {
    expect(() => updateObject("boo", 10, [1, 2, 3, 4])).toThrow();
  });
  test("should throw an error if 3rd argument (array) was not an array", () => {
    expect(() => updateObject(2, 10, {})).toThrow();
  });
  test("should work in reverse if negative index is given", () => {
    expect(updateObject(-4, 10, [1, 2, 3, 4])).toEqual([10, 2, 3, 4]);
  });
  test("should throw an error if index is out of range", () => {
    expect(() => updateObject(-5, 10, [1, 2, 3, 4])).toThrow();
    expect(() => updateObject(4, 10, [1, 2, 3, 4])).toThrow();
  });
});
