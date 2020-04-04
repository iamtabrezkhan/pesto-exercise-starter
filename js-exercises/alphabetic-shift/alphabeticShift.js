function isUpperCaseAlphabet(char) {
  const charCode = char.charCodeAt();
  return charCode >= 65 && charCode <= 90;
}

function isLowerCaseAlphabet(char) {
  const charCode = char.charCodeAt();
  return charCode >= 97 && charCode <= 122;
}

function isAlphabet(char) {
  const charCode = char.charCodeAt();
  return (
    (charCode >= 97 && charCode <= 122) || (charCode >= 65 && charCode <= 90)
  );
}

function shiftAlphabetBy(alphabet, shiftCount) {
  if (!isAlphabet(alphabet)) {
    return alphabet;
  }
  const TOTAL_ALPHABETS_COUNT = 26;
  if (isUpperCaseAlphabet(alphabet)) {
    const charCode = alphabet.charCodeAt();
    const charCodeAfterShift = charCode + shiftCount;
    const maybeShiftedLetter = String.fromCharCode(charCodeAfterShift);
    if (isAlphabet(maybeShiftedLetter)) {
      return maybeShiftedLetter;
    }
    const mod = charCodeAfterShift % TOTAL_ALPHABETS_COUNT;
    return String.fromCharCode(mod + 52);
  }
  // alphabet is lowercase
  const charCode = alphabet.charCodeAt();
  const charCodeAfterShift = charCode + shiftCount;
  const maybeShiftedLetter = String.fromCharCode(charCodeAfterShift);
  if (isAlphabet(maybeShiftedLetter)) {
    return maybeShiftedLetter;
  }
  const mod = charCodeAfterShift % TOTAL_ALPHABETS_COUNT;
  return String.fromCharCode(mod + 78);
}

function shiftAlphabetStringBy(string, shiftCount) {
  if (typeof string !== "string") {
    throw new TypeError(
      `Expected 1st argument of type string, received ${typeof string}`
    );
  }
  if (typeof shiftCount !== "number") {
    throw new TypeError(
      `Expected 2nd argument of type number, received ${typeof string}`
    );
  }
  let shiftedString = "";
  for (const letter of string) {
    shiftedString += shiftAlphabetBy(letter, shiftCount);
  }
  return shiftedString;
}

function alphabeticShift(string) {
  if (typeof string !== "string") {
    throw new TypeError(`Expected string, received ${typeof string}`);
  }
  return shiftAlphabetStringBy(string, 1);
}

export { alphabeticShift };
