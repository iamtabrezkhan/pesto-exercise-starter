function isPrime(number) {
  for (let j = 2; j <= Math.sqrt(number); j += 1) {
    if (number % j === 0) return false;
  }
  return true;
}

function sumPrimes(number) {
  if (Number.isNaN(number)) {
    throw TypeError(`Expected number, received ${typeof number}`);
  }
  if (number <= 1) {
    return 0;
  }
  if (number === 2) {
    return 2;
  }
  let sum = 0;
  for (let i = 3; i <= number; i += 2) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum + 2;
}

export { sumPrimes };
