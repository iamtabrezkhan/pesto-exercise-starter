function cacheFunction(fn) {
  const cacheStorage = {};

  function addToCacheStorage(arg, result) {
    if (typeof arg === "function") {
      cacheStorage[arg.toString()] = result;
    } else if (typeof arg === "object" || typeof Array.isArray(arg)) {
      cacheStorage[JSON.stringify(arg)] = result;
    } else {
      cacheStorage["" + arg] = result;
    }
  }

  function getResultFromCache(arg) {
    if (typeof arg === "function") {
      return cacheStorage[arg.toString()];
    }
    if (typeof arg === "object" || typeof Array.isArray(arg)) {
      return cacheStorage[JSON.stringify(arg)];
    }
    return cacheStorage["" + arg];
  }

  function isArgumentCached(arg) {
    if (typeof arg === "function") {
      return cacheStorage.hasOwnProperty(arg.toString());
    }
    if (typeof arg === "object" || typeof Array.isArray(arg)) {
      return cacheStorage.hasOwnProperty(JSON.stringify(arg));
    }
    return cacheStorage.hasOwnProperty("" + arg);
  }

  return function(arg) {
    let result;
    if (!isArgumentCached(arg)) {
      result = fn(arg);
      addToCacheStorage(arg, result);
    } else {
      result = getResultFromCache(arg);
    }
    return result;
  };
}

export { cacheFunction };
