function buildFrequencyMap(string) {
  const openBracesFrequencyMap = {};
  const closedBracesFrequencyMap = {};
  for (const char of string) {
    if (char === "{" || char === "(" || char === "[") {
      if (openBracesFrequencyMap[char]) {
        openBracesFrequencyMap[char] += 1;
      } else {
        openBracesFrequencyMap[char] = 1;
      }
    } else if (char === "}" || char === ")" || char === "]") {
      if (closedBracesFrequencyMap[char]) {
        closedBracesFrequencyMap[char] += 1;
      } else {
        closedBracesFrequencyMap[char] = 1;
      }
    }
  }
  return {
    openBracesFrequencyMap,
    closedBracesFrequencyMap
  };
}

function compareFrequencyMaps(
  openBracesFrequencyMap,
  closedBracesFrequencyMap
) {
  return (
    openBracesFrequencyMap["{"] === closedBracesFrequencyMap["}"] &&
    openBracesFrequencyMap["("] === closedBracesFrequencyMap[")"] &&
    openBracesFrequencyMap["["] === closedBracesFrequencyMap["]"]
  );
}

function balancedBraces(string) {
  const {
    openBracesFrequencyMap,
    closedBracesFrequencyMap
  } = buildFrequencyMap(string);
  return compareFrequencyMaps(openBracesFrequencyMap, closedBracesFrequencyMap);
}

export { balancedBraces };
