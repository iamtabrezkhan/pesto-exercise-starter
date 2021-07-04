const sumEvenArgs = (...args) => {
  return args.reduce((previousValue, currentValue) => {
    if (currentValue % 2 === 0) return previousValue + currentValue;
    return previousValue;
  }, 0);
};

export { sumEvenArgs };
