function sumAll(range) {
  const [lowerBound, upperBound] = range;
  let sum = 0;
  if (lowerBound < upperBound) {
    for (let i = lowerBound; i <= upperBound; i += 1) {
      sum += i;
    }
    return sum;
  }
  if (lowerBound > upperBound) {
    for (let i = upperBound; i <= lowerBound; i += 1) {
      sum += i;
    }
    return sum;
  }
  return lowerBound + upperBound;
}

export { sumAll };
