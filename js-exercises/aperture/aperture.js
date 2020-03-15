function aperture(n, array) {
  if (n > array.length) {
    return [];
  }
  const result = [];
  for (let i = 0; i <= array.length - n; i += 1) {
    const subArray = array.slice(i, i + n);
    result.push(subArray);
  }
  return result;
}

export { aperture };
