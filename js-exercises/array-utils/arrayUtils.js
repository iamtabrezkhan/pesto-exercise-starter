function forEach(array, callback, thisArg) {
  if (typeof callback !== "function") {
    throw TypeError("callback is not a function");
  }
  if (Array.isArray(array)) {
    let clonedArray = array.slice(0);
    let k = 0;
    let len = clonedArray.length;
    while (k < len) {
      if (clonedArray.hasOwnProperty(k)) {
        callback.call(thisArg || this, clonedArray[k], k, clonedArray);
      }
      k += 1;
    }
  } else {
    throw new TypeError("1st argument is not a valid array");
  }
  return undefined;
}

function map(array, callback, thisArg) {
  if (typeof callback !== "function") {
    throw TypeError("callback is not a function");
  }
  let result = [];
  if (Array.isArray(array)) {
    let clonedArray = array.slice(0);
    let k = 0;
    let len = clonedArray.length;
    while (k < len) {
      if (clonedArray.hasOwnProperty(k)) {
        result.push(
          callback.call(thisArg || this, clonedArray[k], k, clonedArray)
        );
      }
      k += 1;
    }
  } else {
    throw new TypeError("1st argument is not a valid array");
  }
  return result;
}

function filter(array, callback, thisArg) {
  if (typeof callback !== "function") {
    throw TypeError("callback is not a function");
  }
  let result = [];
  if (Array.isArray(array)) {
    let clonedArray = array.slice(0);
    let k = 0;
    let len = clonedArray.length;
    while (k < len) {
      if (array.hasOwnProperty(k)) {
        const selected = callback.call(
          thisArg || this,
          clonedArray[k],
          k,
          clonedArray
        );
        if (selected === true) {
          result.push(clonedArray[k]);
        }
      }
      k += 1;
    }
  } else {
    throw new TypeError("1st argument is not a valid array");
  }
  return result;
}

function reduce(array, callback, initialValue) {
  if (array.length === 0 && !initialValue) {
    throw TypeError("array length is 0 and initialValue is not present");
  }
  if (typeof callback !== "function") {
    throw TypeError("callback is not a function");
  }
  if (Array.isArray(array)) {
    const clonedArray = array.slice(0);
    const len = clonedArray.length;
    let accumulator;
    let k = 0;
    if (initialValue) {
      accumulator = initialValue;
    } else {
      let isPresent = false;
      while (isPresent === false && k < len) {
        isPresent = clonedArray.hasOwnProperty(k);
        if (isPresent === true) {
          accumulator = clonedArray[k];
        }
        k += 1;
      }
    }
    while (k < len) {
      if (clonedArray.hasOwnProperty(k)) {
        accumulator = callback(accumulator, clonedArray[k], k, array);
      }
      k += 1;
    }
    return accumulator;
  } else {
    throw new TypeError("1st argument is not a valid array");
  }
}

export { forEach, map, filter, reduce };
