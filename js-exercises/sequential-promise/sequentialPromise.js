const sequentialPromise = fns => {
  const resultantPromise = fns.reduce((promise, fn) => {
    return promise.then(result => {
      return fn(result[result.length - 1]).then(res => {
        return result.concat(res);
      });
    });
  }, Promise.resolve([]));
  return resultantPromise.then(res => {
    return res[res.length - 1];
  });
};

export { sequentialPromise };
