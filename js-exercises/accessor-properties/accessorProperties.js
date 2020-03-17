function accessorProperties() {
  const newObject = {};
  Object.defineProperties(newObject, {
    _number: {
      value: null,
      writable: true
    },
    number: {
      get() {
        if (typeof this._number === "number") {
          return parseInt(this._number.toString(2), 10);
        }
        return this._number;
      },
      set(value) {
        this._number = value;
      },
      enumerable: true,
      configurable: true
    }
  });
  return newObject;
}

export { accessorProperties };
