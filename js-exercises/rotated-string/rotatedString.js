function rotateStringByOneStep(string) {
  const firstLetter = string[0];
  const restOfTheLetters = string.substring(1);
  return restOfTheLetters + firstLetter;
}

const rotatedString = (str1, str2) => {
  if (str1 === str2) {
    return false;
  }
  if (str1.length !== str2.length) {
    return false;
  }
  let k = 0;
  const len = str1.length;
  let result = str2;
  while (k < len) {
    result = rotateStringByOneStep(result);
    if (result === str1) return true;
    k += 1;
  }
  return false;
};

export { rotatedString };
