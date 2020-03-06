function diffArray(firstArray, secondArray) {
  const uniqueInFirstArray = firstArray.filter(elem => {
    return secondArray.indexOf(elem) === -1;
  });
  const uniqueInSecondArray = secondArray.filter(elem => {
    return firstArray.indexOf(elem) === -1;
  });
  return uniqueInFirstArray.concat(uniqueInSecondArray);
}

export { diffArray };
