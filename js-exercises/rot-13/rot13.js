function isUpperCaseAlphabet(letter) {
  const charCode = letter.charCodeAt();
  return charCode >= 65 && charCode <= 90;
}

function getDecodedLetter(letter) {
  const charCode = letter.charCodeAt();
  const maybeDecodedLetter = String.fromCharCode(charCode - 13);
  if (!isUpperCaseAlphabet(maybeDecodedLetter)) {
    return String.fromCharCode(charCode + 13);
  }
  return maybeDecodedLetter;
}

function rot13(string) {
  if (string.length === 0) {
    return "";
  }
  const encodedString = string;
  let decodedString = "";
  for (const letter of encodedString) {
    if (isUpperCaseAlphabet(letter)) {
      decodedString += getDecodedLetter(letter);
      continue;
    }
    decodedString += letter;
  }
  return decodedString;
}

export { rot13 };
