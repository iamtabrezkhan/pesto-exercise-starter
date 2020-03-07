const deepCopyObject = objToCopy => {
  if (typeof objToCopy !== "object" || objToCopy === null) {
    return objToCopy;
  }
  const newObject = {};
  for (const key in objToCopy) {
    newObject[key] = deepCopyObject(objToCopy[key]);
  }
  return newObject;
};

export { deepCopyObject };
