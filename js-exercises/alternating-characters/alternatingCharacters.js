function countMinimumNumberOfDeletions(string) {
  if (!string.length) {
    return 0;
  }
  let k = 0;
  let numberOfDeletions = 0;
  while (k < string.length - 1) {
    if (string[k] === "A" && string[k + 1] !== "B") {
      numberOfDeletions += 1;
    }
    if (string[k] === "B" && string[k + 1] !== "A") {
      numberOfDeletions += 1;
    }
    k += 1;
  }
  return numberOfDeletions;
}

function alternatingCharacters(arr) {
  if (arr.length === 0) {
    return [];
  }
  const result = arr.map(countMinimumNumberOfDeletions);
  return result;
}

export { alternatingCharacters };
