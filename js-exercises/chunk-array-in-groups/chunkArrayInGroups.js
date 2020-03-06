function chunkArrayInGroups(array, chunkSize) {
  if (chunkSize < 1) {
    return [];
  }
  const resultantArray = [];
  if (array.length < chunkSize) {
    resultantArray.push(array);
    return resultantArray;
  }
  let index = chunkSize - 1;
  while (index < array.length) {
    resultantArray.push(array.slice(index + 1 - chunkSize, index + 1));
    index += chunkSize;
  }
  index -= chunkSize;
  if (array.length - resultantArray.length * chunkSize !== 0) {
    resultantArray.push(array.slice(index + 1));
  }
  return resultantArray;
}

export { chunkArrayInGroups };
