function abbreviateString(str) {
  if (typeof str !== "string") {
    throw Error("Not a valid string!");
  }
  if (str.length === 0) {
    return str;
  }
  const words = str.split(" ");
  if (words.length === 1) {
    return words[0];
  }
  const firstWord = words[0];
  const lastWord = words[words.length - 1];
  const firstLetterOfLastWord = lastWord[0];
  return `${firstWord} ${firstLetterOfLastWord.toUpperCase()}.`;
}

export { abbreviateString };
