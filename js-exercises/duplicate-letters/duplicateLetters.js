function duplicateLetters(string) {
  if (string.length < 1) {
    return false;
  }
  const letterFrequencyMap = {};
  let max = 1;
  for (const letter of string) {
    if (letterFrequencyMap[letter]) {
      letterFrequencyMap[letter] += 1;
    } else {
      letterFrequencyMap[letter] = 1;
    }
    if (letterFrequencyMap[letter] > max) {
      max = letterFrequencyMap[letter];
    }
  }
  if (max <= 1) {
    return false;
  }
  return max;
}

export { duplicateLetters };
