function getEquivalentOpeningBrace(closingBrace) {
  if (closingBrace === ")") return "(";
  if (closingBrace === "}") return "{";
  if (closingBrace === "]") return "[";
  return false;
}

function balancedBraces(string) {
  const stack = [];
  for (const char of string) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else if (stack[stack.length - 1] === getEquivalentOpeningBrace(char)) {
      stack.pop();
    }
  }
  if (!stack.length) return true;
  return false;
}

export { balancedBraces };
