function longestWordInString(string) {
  if (string.length === 0) {
    return 0;
  }
  const arrayOfWords = string.split(" ");
  const lengthOfEachWord = arrayOfWords.map(word => word.length);
  return Math.max(...lengthOfEachWord);
}

export { longestWordInString };
