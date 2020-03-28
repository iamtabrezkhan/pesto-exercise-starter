const onChange = (obj, onChangeFn) => {
  const handler = {
    defineProperty(target, keyName, attributes) {
      if (
        (typeof target[keyName] === "object" ||
          typeof target[keyName] === "function") &&
        target[keyName] !== null
      ) {
        return new Proxy(target[keyName], handler);
      }
      const oldAttributes = Object.getOwnPropertyDescriptor(target, keyName);
      Object.defineProperty(target, keyName, {
        ...oldAttributes,
        ...attributes
      });
      onChangeFn();
      return true;
    },
    deleteProperty(target, keyName) {
      Reflect.deleteProperty(target, keyName);
      onChangeFn();
      return true;
    },
    get(target, keyName, receiver) {
      // console.log("get");
      if (
        (typeof target[keyName] === "object" ||
          typeof target[keyName] === "function") &&
        target[keyName] !== null
      ) {
        return new Proxy(target[keyName], handler);
      }
      return target[keyName];
    }
  };
  return new Proxy(obj, handler);
};

export { onChange };
