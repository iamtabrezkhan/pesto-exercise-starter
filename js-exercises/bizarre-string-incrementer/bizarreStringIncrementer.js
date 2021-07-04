function addTwoStringifiedIntegers(number1, number2) {
  const sum = [];
  let number1Length = number1.length - 1;
  let number2Length = number2.length - 1;
  let carry = 0;
  while (number1Length >= 0 || number2Length >= 0) {
    const x = parseInt(number1[number1Length], 10) || 0;
    const y = parseInt(number2[number2Length], 10) || 0;
    const result = x + y + carry;
    carry = Math.floor(result / 10);
    const remainder = result % 10;
    sum.unshift(remainder);
    number1Length -= 1;
    number2Length -= 1;
  }
  if (carry) sum.unshift(carry);
  return sum.join("");
}

function extractOnlyLastDigits(string, direction = "right") {
  const stringNumbers = [];
  if (direction === "left") {
    for (let i = 0 - 1; i < string.length; i += 1) {
      if (!Number.isNaN(parseInt(string[i]))) {
        stringNumbers.unshift(string[i]);
      } else {
        return stringNumbers;
      }
    }
  }
  if (direction === "right") {
    for (let i = string.length - 1; i >= 0; i -= 1) {
      if (!Number.isNaN(parseInt(string[i]))) {
        stringNumbers.unshift(string[i]);
      } else {
        return stringNumbers;
      }
    }
  }
  return stringNumbers;
}

function bizarreStringIncrementer(string) {
  if (!string.length) {
    return "";
  }
  if (typeof string !== "string") {
    throw new TypeError(`Expected string, received ${typeof string}`);
  }
  const arrayOfLastDigits = extractOnlyLastDigits(string);
  if (arrayOfLastDigits.length === 0) {
    return `${string}1`;
  }
  const restOfTheString = string.substring(
    0,
    string.length - arrayOfLastDigits.length
  );
  const digitsAfterAddingOne = addTwoStringifiedIntegers(
    arrayOfLastDigits.join(""),
    "1"
  );
  return `${restOfTheString}${digitsAfterAddingOne}`;
}

export { bizarreStringIncrementer };
