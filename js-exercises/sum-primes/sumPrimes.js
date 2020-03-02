function isPrime(num) {
  for (let j = 2; j <= Math.floor(Math.sqrt(num)); j += 1) {
    if (num % j === 0) {
      return false;
    }
  }
  return true;
}

function sumPrimes(n) {
  if (!Number.isNaN(n)) {
    if (n > 1) {
      let sum = 0;
      for (let i = 2; i <= n; i += 1) {
        if (isPrime(i)) {
          sum += i;
        }
      }
      return sum;
    }
  }
  return 0;
}

export { sumPrimes };
