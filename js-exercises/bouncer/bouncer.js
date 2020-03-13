function bouncer(array) {
  if (!Array.isArray(array)) {
    throw new TypeError(`Expected array, received ${typeof array}`);
  }
  return array.filter(element => !element === false);
}

export { bouncer };
