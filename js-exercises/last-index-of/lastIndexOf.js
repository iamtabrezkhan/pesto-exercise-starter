function lastIndexOf(elem, array) {
  for (let i = array.length - 1; i >= 0; i -= 1) {
    if (array[i] === elem) {
      return i;
    }
  }
  return -1;
}

export { lastIndexOf };
