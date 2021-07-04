function addTwoBigIntegers(number1, number2) {
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

function addBigIntegers(integerString) {
  const integerStringArray = integerString.split("\n");
  const sum = integerStringArray.reduce(addTwoBigIntegers);
  return sum;
}

export { addBigIntegers };
