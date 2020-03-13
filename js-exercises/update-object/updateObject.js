function updateObject(index, replaceWith, array) {
  if (!(typeof index === "number")) {
    throw new TypeError();
  }
  const clonedArray = array.slice();
  clonedArray.splice(index, 1, replaceWith);
  return clonedArray;
}

export { updateObject };
