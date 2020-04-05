import React, { useState, useEffect, useRef } from "react";
import Classes from "./Snake.module.css";

const keyCodes = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
};

const directions = {
  LEFT: "LEFT",
  UP: "UP",
  RIGHT: "RIGHT",
  DOWN: "DOWN",
};

export default function Snake({
  cell,
  numberOfCells,
  isPlaying,
  isGameOver,
  isPaused,
  onSelfCollision,
  onBoundaryCollision,
  food,
  onEatFood,
  restartGame,
}) {
  // =========== states =====================================
  const snakeInitialState = [
    {
      x: cell.width * 5,
      y: cell.height * 0,
    },
    {
      x: cell.width * 5,
      y: cell.height * 1,
    },
    {
      x: cell.width * 5,
      y: cell.height * 2,
    },
    {
      x: cell.width * 5,
      y: cell.height * 3,
    },
  ];
  const [direction, setDirection] = useState(directions.DOWN);
  const [snake, setSnake] = useState(snakeInitialState);
  const [fps, setFps] = useState(8);
  // ========================================================
  // ========================================================
  const getSnakeHead = () => {
    const snakeClone = [...snake];
    const newHead = {
      x: snakeClone[snakeClone.length - 1].x,
      y: snakeClone[snakeClone.length - 1].y,
    };
    return newHead;
  };
  const getUpdatedSnakeHead = (snakeX, snakeY) => {
    let x = snakeX;
    let y = snakeY;
    if (direction === directions.LEFT) {
      x -= cell.width;
      return {
        x,
        y,
      };
    }
    if (direction === directions.RIGHT) {
      x += cell.width;
      return {
        x,
        y,
      };
    }
    if (direction === directions.UP) {
      y -= cell.height;
      return {
        x,
        y,
      };
    }
    if (direction === directions.DOWN) {
      y += cell.height;
      return {
        x,
        y,
      };
    }
  };
  const addNewHead = (newHead) => {
    setSnake((prevState) => {
      return [...prevState, newHead];
    });
  };
  const removeTail = () => {
    setSnake(snake.slice(1));
  };
  const changeDirection = (e) => {
    const keyCode = e.keyCode || e.which;
    if (keyCode === keyCodes.LEFT) {
      setDirection((prevState) => {
        if (prevState === directions.RIGHT) {
          return prevState;
        }
        return directions.LEFT;
      });
      return;
    }
    if (keyCode === keyCodes.RIGHT) {
      setDirection((prevState) => {
        if (prevState === directions.LEFT) {
          return prevState;
        }
        return directions.RIGHT;
      });
      return;
    }
    if (keyCode === keyCodes.UP) {
      setDirection((prevState) => {
        if (prevState === directions.DOWN) {
          return prevState;
        }
        return directions.UP;
      });
      return;
    }
    if (keyCode === keyCodes.DOWN) {
      setDirection((prevState) => {
        if (prevState === directions.UP) {
          return prevState;
        }
        return directions.DOWN;
      });
      return;
    }
  };
  const checkForBoundaryCollision = (x, y) => {
    if (
      x < 0 ||
      x >= cell.width * numberOfCells.x ||
      y < 0 ||
      y >= cell.height * numberOfCells.y
    ) {
      onBoundaryCollision();
      return false;
    }
  };
  const checkForSelfCollision = (x, y) => {
    for (let s of snake) {
      if (s.x === x && s.y === y) {
        onSelfCollision();
        return false;
      }
    }
  };
  const isHead = (index) => {
    return index === snake.length - 1;
  };
  const isFood = (x, y) => {
    return x === food.x && y === food.y;
  };
  const useAnimation = (cb, fps, isPlaying, isPaused) => {
    const cbRef = useRef();
    const animationFrameId = useRef();
    const then = useRef(window.performance.now());
    const now = useRef();
    const elapsed = useRef();
    const fpsInterval = useRef(1000 / fps);
    useEffect(() => {
      cbRef.current = cb;
    }, [cb]);
    useEffect(() => {
      function loop() {
        animationFrameId.current = window.requestAnimationFrame(loop);
        now.current = window.performance.now();
        elapsed.current = now.current - then.current;
        if (elapsed.current > fpsInterval.current) {
          then.current = now.current - (elapsed.current % fpsInterval.current);
          cbRef.current();
        }
      }
      if (isPlaying && !isPaused) {
        animationFrameId.current = window.requestAnimationFrame(loop);
        return () => {
          window.cancelAnimationFrame(animationFrameId.current);
        };
      }
    }, [isPlaying, isPaused]);
  };
  useAnimation(
    () => {
      const head = getSnakeHead();
      const newHead = getUpdatedSnakeHead(head.x, head.y);
      if (isFood(newHead.x, newHead.y)) {
        // eating food
        onEatFood();
      } else {
        removeTail();
      }
      checkForBoundaryCollision(newHead.x, newHead.y);
      checkForSelfCollision(newHead.x, newHead.y);
      addNewHead(newHead);
    },
    fps,
    isPlaying,
    isPaused
  );
  useEffect(() => {
    document.addEventListener("keyup", changeDirection);
    return () => {
      document.removeEventListener("keyup", changeDirection);
    };
  }, []);
  useEffect(() => {
    if (restartGame) {
      setSnake((prevState) => {
        return snakeInitialState;
      });
      setDirection((prevState) => {
        return directions.DOWN;
      });
    }
  }, [restartGame]);
  return snake.map((body, index) => {
    return (
      <div
        style={{
          width: cell.width - 2,
          height: cell.height - 2,
          left: body.x,
          top: body.y,
          fontSize: "0.9rem",
          color: "white",
          background: isHead(index)
            ? "var(--color-head)"
            : "var(--color-green)",
        }}
        className={Classes.snake}
        key={index}
      ></div>
    );
  });
}
