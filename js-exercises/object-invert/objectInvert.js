function objectInvert(object) {
  if (typeof object !== "object" || Array.isArray(object) || object === null) {
    return false;
  }
  const objectEntries = Object.entries(object);
  const newObject = {};
  for (const entry of objectEntries) {
    const [value, key] = entry;
    newObject[key] = value;
  }
  return newObject;
}

export { objectInvert };
