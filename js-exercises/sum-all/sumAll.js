function sumAll(arr) {
  let [x, y] = arr;
  x = parseInt(x, 10);
  y = parseInt(y, 10);
  let sum = 0;
  if (x < y) {
    for (let i = x; i <= y; i += 1) {
      sum += i;
    }
  } else if (x > y) {
    for (let i = y; i <= x; i += 1) {
      sum += i;
    }
  } else {
    sum = x + y;
  }
  return sum;
}

export { sumAll };
