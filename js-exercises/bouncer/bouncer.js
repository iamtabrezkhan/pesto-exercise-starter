function bouncer(array) {
  if (!Array.isArray(array)) {
    throw new TypeError();
  }
  return array.filter(element => !element === false);
}

export { bouncer };
