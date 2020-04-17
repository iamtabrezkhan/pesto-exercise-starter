export function getRandomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateRandomFoodPosition(
  numberOfCellsX,
  numberOfCellsY,
  cellWidth,
  cellHeight
) {
  const x = Math.floor(Math.random() * numberOfCellsX) * cellWidth;
  const y = Math.floor(Math.random() * numberOfCellsY) * cellHeight;
  const foodId = getRandomBetween(0, 3);
  return {
    x,
    y,
    foodId,
  };
}

export const throttle = (func, limit) => {
  let lastFunc;
  let lastRan;
  return function () {
    const context = this;
    const args = arguments;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function () {
        if (Date.now() - lastRan >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
};
