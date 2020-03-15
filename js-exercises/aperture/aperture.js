function aperture(chunkSize, array) {
  if (typeof chunkSize !== "number") {
    throw new TypeError(
      `Expected 1st argument of type [number], received ${typeof chunkSize}`
    );
  }
  if (!Array.isArray(array)) {
    throw new TypeError(
      `Expected 2nd argument of type [array], received ${typeof array}`
    );
  }
  if (chunkSize > array.length) {
    return [];
  }
  const arrayOfChunks = [];
  for (let i = 0; i <= array.length - chunkSize; i += 1) {
    const chunk = array.slice(i, i + chunkSize);
    arrayOfChunks.push(chunk);
  }
  return arrayOfChunks;
}

export { aperture };
