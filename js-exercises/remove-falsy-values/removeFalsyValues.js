function removeFalsyValues(array) {
  return array.filter(value => !value !== true);
}

export { removeFalsyValues };
