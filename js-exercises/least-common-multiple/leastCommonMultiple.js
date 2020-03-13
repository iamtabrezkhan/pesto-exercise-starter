function gcd(a, b) {
  let t;
  while (b !== 0) {
    t = b;
    b = a % b;
    a = t;
  }
  return a;
}

function leastCommonMultiple(a, b) {
  a = parseInt(a);
  b = parseInt(b);
  if (Number.isNaN(a)) {
    throw new TypeError(`Expected number, received ${typeof a}`);
  }
  if (Number.isNaN(b)) {
    throw new TypeError(`Expected number, received ${typeof b}`);
  }
  const lcm = (a * b) / gcd(a, b);
  return lcm;
}

export { leastCommonMultiple };
