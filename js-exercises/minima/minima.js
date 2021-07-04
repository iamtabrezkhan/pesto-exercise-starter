function minima(k, array) {
  const sortedArray = array.sort(function(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });
  const firstKElements = sortedArray.slice(0, k);
  return firstKElements;
}

export { minima };
