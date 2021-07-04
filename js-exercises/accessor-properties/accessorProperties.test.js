import { accessorProperties } from "./accessorProperties";

describe("accessorProperties", () => {
  test("should return binary representation of number if 'number' property is set to decimal", () => {
    const obj = accessorProperties();
    obj.number = 5;
    expect(obj.number).toBe(101);
  });
  test("should return normal value if 'number' property was set to non-decimal", () => {
    const obj = accessorProperties();
    obj.number = "iamastring";
    expect(obj.number).toBe("iamastring");
  });
  test("should return true for getter and setter function types", () => {
    const obj = accessorProperties();
    const descriptor = Object.getOwnPropertyDescriptor(obj, "number");
    expect(typeof descriptor.get === "function").toBe(true);
    expect(typeof descriptor.set === "function").toBe(true);
  });
  test("should check for '_number' enumerability", () => {
    const obj = accessorProperties();
    const descriptor = Object.getOwnPropertyDescriptor(obj, "_number");
    expect(descriptor.enumerable).toBe(false);
    const keys = Object.keys(obj);
    expect(keys).toEqual(["number"]);
  });
});
