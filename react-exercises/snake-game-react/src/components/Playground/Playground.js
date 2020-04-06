import React, { useState } from "react";
import Classes from "./Playground.module.css";
import Food from "../Food/Food";
import { generateRandomFoodPosition } from "../../utils/helper";
import Snake from "../Snake/Snake";
import GameOverOverlay from "../GameOverOverlay/GameOverOverlay";
import EatMp3 from "../../assets/eat.mp3";
import GameOverMp3 from "../../assets/gameover.mp3";

const eatAudio = new Audio(EatMp3);
const gameOverAudio = new Audio(GameOverMp3);

export default function Playground({ config, children }) {
  // ========== state =======================================
  const [gameConfig, setGameConfig] = useState({
    ...config,
    isPlaying: false,
    isGameOver: false,
    restartGame: false,
    isPaused: false,
  });
  const { cell, numberOfCells, isPlaying, isGameOver, isPaused } = gameConfig;
  const [food, setFood] = useState(
    generateRandomFoodPosition(
      numberOfCells.x,
      numberOfCells.y,
      cell.width,
      cell.height
    )
  );
  const [score, setScore] = useState(0);
  // ========================================================
  // ========================================================
  const startGame = () => {
    setGameConfig((prevState) => {
      return {
        ...prevState,
        isPlaying: true,
        restartGame: false,
      };
    });
  };
  const gameOver = () => {
    setGameConfig((prevState) => {
      return {
        ...prevState,
        isPlaying: false,
        isGameOver: true,
        restartGame: false,
      };
    });
    gameOverAudio.play();
  };
  const onBoundaryCollision = () => {
    gameOver();
  };
  const onSelfCollision = () => {
    gameOver();
  };
  const onEatFood = () => {
    setFood(
      generateRandomFoodPosition(
        numberOfCells.x,
        numberOfCells.y,
        cell.width,
        cell.height
      )
    );
    setScore((prevState) => {
      return prevState + 5;
    });
    eatAudio.play();
  };
  const restartGame = () => {
    setGameConfig((prevState) => {
      return {
        ...prevState,
        restartGame: true,
        isPlaying: true,
        isGameOver: false,
      };
    });
    setFood(
      generateRandomFoodPosition(
        numberOfCells.x,
        numberOfCells.y,
        cell.width,
        cell.height
      )
    );
    setScore(0);
  };
  const pauseGame = () => {
    setGameConfig((prevState) => {
      return {
        ...prevState,
        isPaused: true,
      };
    });
  };
  const resumeGame = () => {
    setGameConfig((prevState) => {
      return {
        ...prevState,
        isPaused: false,
      };
    });
  };
  return (
    <>
      <div className={`${Classes.topBar} font-vt323`}>
        <div className={Classes.score}>Score: {score}</div>
        <div className={Classes.actionBtn}>
          {!isPlaying && !isGameOver ? (
            <button className={Classes.startBtn} onClick={startGame}>
              Start
            </button>
          ) : null}
          {isGameOver && !isPlaying ? (
            <button className={Classes.restartBtn} onClick={restartGame}>
              Restart
            </button>
          ) : null}
          {!isPaused && isPlaying ? (
            <button className={Classes.pauseBtn} onClick={pauseGame}>
              Pause
            </button>
          ) : null}
          {isPaused && isPlaying ? (
            <button className={Classes.resumeBtn} onClick={resumeGame}>
              Resume
            </button>
          ) : null}
        </div>
      </div>
      <div
        className={Classes.main}
        style={{
          width: cell.width * numberOfCells.x,
          height: cell.height * numberOfCells.y,
        }}
      >
        {/* gameover overlay */}
        {isGameOver ? <GameOverOverlay /> : null}

        {/* food component */}
        <Food width={cell.width} height={cell.height} {...food} />

        {/* the snake */}
        <Snake
          playground={{
            width: cell.width * numberOfCells.x,
            height: cell.height * numberOfCells.y,
          }}
          onSelfCollision={onSelfCollision}
          onBoundaryCollision={onBoundaryCollision}
          food={food}
          onEatFood={onEatFood}
          {...gameConfig}
        />

        {/* background tiles */}
        {[...Array(numberOfCells.y)].map((_, i) => {
          return [...Array(numberOfCells.x)].map((_, j) => {
            return (
              <div
                className={Classes.cell}
                id={`cell${i * numberOfCells.x + j}`}
                style={{
                  width: cell.width,
                  height: cell.height,
                  background:
                    (i + j) % 2 === 0
                      ? "var(--color-gray-1)"
                      : "var(--color-gray-2)",
                }}
                data-position-x={j * cell.width}
                data-position-y={i * cell.height}
                key={i * numberOfCells.x + j}
              ></div>
            );
          });
        })}
      </div>
    </>
  );
}
