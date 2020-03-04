function flipArgs(fn) {
  return function(...args) {
    args.reverse();
    return fn(...args);
  };
}

export { flipArgs };
