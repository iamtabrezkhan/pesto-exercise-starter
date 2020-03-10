function sumFibs(n) {
  if (n <= 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 2;
  }
  let a = 1;
  let b = 1;
  let c = a + b;
  let sum = c;
  while (c <= n) {
    if (c % 2 !== 0) {
      sum += c;
    }
    a = b;
    b = c;
    c = a + b;
  }
  return sum;
}

export { sumFibs };
