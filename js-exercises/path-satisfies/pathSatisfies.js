function pathSatisfies(predicate, path, object) {
  if (typeof predicate !== "function") {
    throw new TypeError(
      `Expected predicate as a function, received ${typeof predicate}`
    );
  }
  if (!Array.isArray(path)) {
    throw new TypeError(`Expected path as an array, received ${typeof path}`);
  }
  if (path.length === 0) {
    return false;
  }
  const prop = path.shift();
  if (typeof prop === "number") {
    const propValue = object[prop];
    if (
      (typeof propValue !== "object" && !Array.isArray(propValue)) ||
      typeof propValue === null
    ) {
      const didSatisfy = predicate(propValue);
      return didSatisfy;
    }
    return pathSatisfies(predicate, path, propValue);
  }
  if (typeof prop === "string") {
    const propValue = object[prop];
    if (
      (typeof propValue !== "object" && !Array.isArray(propValue)) ||
      typeof propValue === null
    ) {
      const didSatisfy = predicate(propValue);
      return didSatisfy;
    }
    return pathSatisfies(predicate, path, propValue);
  }
}

export { pathSatisfies };
