function updateObject(index, replaceWith, array) {
  if (!(typeof index === "number")) {
    throw new TypeError();
  }
  if (index > array.length - 1 || index < -array.length) {
    throw new Error("Index out of range");
  }
  if (!Array.isArray(array)) {
    throw new TypeError(`Expected array, received ${typeof array}`);
  }
  const clonedArray = array.slice();
  clonedArray.splice(index, 1, replaceWith);
  return clonedArray;
}

export { updateObject };
