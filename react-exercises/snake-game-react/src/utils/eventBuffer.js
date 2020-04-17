const buffer = [];

export const enqueueBuffer = (eventName, handler, args) => {
  console.log(buffer.slice());
  buffer.push({
    eventName,
    handler,
    args,
  });
};

export const dequeueBuffer = () => {
  return buffer.shift();
};

export const bufferEmpty = () => {
  return buffer.length === 0;
};
