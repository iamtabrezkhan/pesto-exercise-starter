function getCube(number) {
  return number * number * number;
}

function isEveryElementInteger(array) {
  return array.every(elem => {
    if (elem === Infinity || elem === -Infinity) {
      return true;
    }
    elem = parseInt(elem);
    return !Number.isNaN(elem);
  });
}

function getCubeRoot(number) {
  if (number === Infinity) {
    return Infinity;
  }
  if (number === -Infinity) {
    return -Infinity;
  }
  if (number === 1) {
    return 1;
  }
  if (number === -1) {
    return -1;
  }
  if (number > 0) {
    let i = 2;
    let cube = getCube(i);
    while (cube < number) {
      i += 1;
      cube = getCube(i);
    }
    return i;
  }
  if (number < 0) {
    let i = -2;
    let cube = getCube(i);
    while (cube > number) {
      i -= 1;
      cube = getCube(i);
    }
    return i;
  }
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
    const cubeRoot = getCubeRoot(number);
    resultantObject[number] = cubeRoot;
  }
  return resultantObject;
}

export { arrayCubeRootToJson, getCubeRoot, getCube };
