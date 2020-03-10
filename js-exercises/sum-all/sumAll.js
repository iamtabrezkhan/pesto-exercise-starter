function sumAll(range) {
  const [lowerBound, upperBound] = range;
  let sum = 0;
  if (lowerBound < upperBound) {
    for (let i = lowerBound; i <= upperBound; i += 1) {
      sum += i;
    }
  } else if (lowerBound > upperBound) {
    for (let i = upperBound; i <= lowerBound; i += 1) {
      sum += i;
    }
  } else {
    sum = lowerBound + upperBound;
  }
  return sum;
}

export { sumAll };
