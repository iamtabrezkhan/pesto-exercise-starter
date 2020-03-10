function cacheFunction(fn) {
  const cacheStorage = {};

  function addToCacheStorage(args, result) {
    cacheStorage[args] = result;
  }

  function getResultFromCache(args) {
    return cacheStorage[args];
  }

  function isArgumentCached(args) {
    return cacheStorage.hasOwnProperty(args);
  }

  return function(...args) {
    let result;
    if (!isArgumentCached(args)) {
      result = fn(...args);
      addToCacheStorage(args, result);
    } else {
      result = getResultFromCache(args);
    }
    return result;
  };
}

export { cacheFunction };
