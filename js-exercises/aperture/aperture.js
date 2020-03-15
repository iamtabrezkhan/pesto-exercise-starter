function aperture(n, array) {
  if (typeof n !== "number") {
    throw new TypeError(
      `Expected 1st argument of type [number], received ${typeof n}`
    );
  }
  if (!Array.isArray(array)) {
    throw new TypeError(
      `Expected 2nd argument of type [array], received ${typeof array}`
    );
  }
  if (n > array.length) {
    return [];
  }
  const result = [];
  for (let i = 0; i <= array.length - n; i += 1) {
    const subArray = array.slice(i, i + n);
    result.push(subArray);
  }
  return result;
}

export { aperture };
