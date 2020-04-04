function isEveryElementInteger(array) {
  return array.every(elem => {
    if (elem === Infinity || elem === -Infinity) {
      return true;
    }
    elem = parseInt(elem);
    return !Number.isNaN(elem);
  });
}

function arrayCubeRootToJson(array) {
  if (!Array.isArray(array)) {
    throw new TypeError(`Expected array, received ${typeof array}`);
  }
  if (!isEveryElementInteger(array)) {
    throw new TypeError(`Some elements of the array are not integers.`);
  }
  const resultantObject = {};
  for (const number of array) {
    const cubeRoot = Math.cbrt(number);
    resultantObject[number] = cubeRoot;
  }
  return resultantObject;
}

export { arrayCubeRootToJson };
