// Don't change the export values.
// You can use the function in the Math module

function sqrt(x) {
  if (Number.isNaN(x)) {
    throw TypeError("x is not a number");
  }
  const temp = parseFloat(x);
  return Math.sqrt(temp);
}

function power(x, y) {
  if (Number.isNaN(x)) {
    throw TypeError("x is not a number");
  }
  if (Number.isNaN(y)) {
    throw TypeError("y is not a number");
  }
  const temp1 = parseFloat(x);
  const temp2 = parseFloat(y);
  return temp1 ** temp2;
}

function round(x) {
  if (Number.isNaN(x)) {
    throw TypeError("x is not a number");
  }
  const temp = parseFloat(x);
  return Math.round(temp);
}

export { sqrt, power, round };
