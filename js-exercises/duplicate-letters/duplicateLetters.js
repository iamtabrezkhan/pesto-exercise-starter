function duplicateLetters(...args) {
  const string = args[0];
  if (string.length > 0) {
    const countObject = {};
    let max = 1;
    for (const char of string) {
      if (countObject[char]) {
        countObject[char] += 1;
      } else {
        countObject[char] = 1;
      }
      if (countObject[char] > max) {
        max = countObject[char];
      }
    }
    if (max > 1) {
      return max;
    }
    return false;
  }
  return false;
}

export { duplicateLetters };
