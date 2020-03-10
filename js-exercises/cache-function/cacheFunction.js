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
    if (isArgumentCached(args)) {
      return getResultFromCache(args);
    }
    const result = fn(...args);
    addToCacheStorage(args, result);
    return result;
  };
}

export { cacheFunction };
