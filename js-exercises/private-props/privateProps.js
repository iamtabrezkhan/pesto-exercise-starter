function privateProps(obj, isPrivate) {
  const handler = {
    get(target, keyName, receiver) {
      if (typeof target[keyName] === "function") {
        return new Proxy(target[keyName], handler);
      }
      return target[keyName];
    },
    set(target, keyName, value, receiver) {
      if (isPrivate(keyName)) {
        throw new TypeError(`Can't set property "${keyName}"`);
      }
      target[keyName] = value;
    },
    getOwnPropertyDescriptor(target, keyName) {
      if (isPrivate(keyName)) {
        return {
          configurable: true,
          enumerable: false,
          writable: false
        };
      }
      return Object.getOwnPropertyDescriptor(obj, keyName);
    },
    has(target, keyName) {
      if (isPrivate(keyName)) {
        return false;
      }
      return keyName in target;
    },
    ownKeys(target) {
      return Object.keys(target).filter(key => isPrivate(key) === false);
    }
  };
  return new Proxy(obj, handler);
}

export { privateProps };
