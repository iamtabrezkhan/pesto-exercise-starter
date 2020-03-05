const argsString = (message, args) => {
  let string = message;
  const curlyBraces = "{}";
  for (const arg of args) {
    string = string.replace(curlyBraces, arg);
  }
  return string;
};

export { argsString };
