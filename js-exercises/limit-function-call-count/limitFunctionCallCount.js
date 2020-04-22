const limitFunctionCallCount = (fn, limit) => {
  let wasCalledCount = 0;
  const callLimit = limit;
  return function(...args) {
    if (wasCalledCount < callLimit) {
      const result = fn(...args);
      wasCalledCount += 1;
      return result;
    }
    return null;
  };
};

export { limitFunctionCallCount };
