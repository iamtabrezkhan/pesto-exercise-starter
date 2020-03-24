const allPromises = promises => {
  const results = [];
  let completedPromises = 0;
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i += 1) {
      if (promises[i] instanceof Promise) {
        promises[i]
          .then(value => {
            results[i] = value;
            completedPromises += 1;
            if (completedPromises === promises.length) {
              resolve(results);
            }
          })
          .catch(error => {
            reject(error);
          });
      } else {
        results[i] = promises[i];
        completedPromises += 1;
        if (completedPromises === promises.length) {
          resolve(results);
        }
      }
    }
  });
};

export { allPromises };
