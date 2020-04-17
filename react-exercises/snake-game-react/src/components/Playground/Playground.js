import React, { useState, useEffect } from "react";
import Classes from "./Playground.module.css";
import Food from "../Food/Food";
import { generateRandomFoodPosition } from "../../utils/helper";
import Snake from "../Snake/Snake";
import BrawlButton from "../BrawlButton/BrawlButton";
import ScoreBoard from "../ScoreBoard/ScoreBoard";
import GameOverOverlay from "../GameOverOverlay/GameOverOverlay";
import EatMp3 from "../../assets/eat.mp3";
import GameOverMp3 from "../../assets/gameover.mp3";

const eatAudio = new Audio(EatMp3);
const gameOverAudio = new Audio(GameOverMp3);

const keyCodes = {
  SPACE: 32,
  M: 77,
};

export default function Playground({ config, children }) {
  // ========== state =======================================
  const [gameConfig, setGameConfig] = useState({
    ...config,
    isPlaying: false,
    isGameOver: false,
    restartGame: false,
    isPaused: false,
    isSound: false,
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
  const [sound, setSound] = useState(false);
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
  const setGameOver = () => {
    setGameConfig((prevState) => {
      return {
        ...prevState,
        isPlaying: false,
        isGameOver: true,
        restartGame: false,
      };
    });
    if (sound) {
      gameOverAudio.play();
    }
  };
  const onBoundaryCollision = () => {
    setGameOver();
  };
  const onSelfCollision = () => {
    setGameOver();
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
    if (sound) {
      eatAudio.play();
    }
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
  const toggleSound = () => {
    setSound((prevState) => {
      return !prevState;
    });
  };
  const SoundElement = !sound ? (
    <i className="fas fa-volume-mute"></i>
  ) : (
    <i className="fas fa-volume-up"></i>
  );
  const InfoIconElement = <i className="far fa-question-circle"></i>;
  const gamePaused = () => {
    return isPaused && isPlaying;
  };
  const gamePlaying = () => {
    return !isPaused && isPlaying;
  };
  const handleKeyPress = (e) => {
    const keyCode = e.keyCode || e.which;
    if (keyCode === keyCodes.SPACE) {
      e.preventDefault();
      if (gamePlaying()) {
        pauseGame();
      } else if (gamePaused()) {
        resumeGame();
      } else {
        restartGame();
      }
      return;
    }
    if (keyCode === keyCodes.M) {
      e.preventDefault();
      toggleSound();
      return;
    }
  };
  useEffect(() => {
    document.addEventListener("keyup", handleKeyPress);
    return () => {
      document.removeEventListener("keyup", handleKeyPress);
    };
  }, [isPlaying, isPaused]);
  return (
    <>
      <div className={`${Classes.topBar} font-vt323`}>
        <div className={Classes.info}>
          <ScoreBoard title={InfoIconElement} />
        </div>
        <div className={Classes.score}>
          <ScoreBoard title="Score" value={score} />
        </div>
        <div className={Classes.sound}>
          <BrawlButton onClick={toggleSound} text={SoundElement} />
        </div>
        <div className={Classes.actionBtn}>
          {!isPlaying && !isGameOver ? (
            <BrawlButton onClick={startGame} text="Start" />
          ) : null}
          {isGameOver && !isPlaying ? (
            <BrawlButton onClick={restartGame} text="Restart" />
          ) : null}
          {!isPaused && isPlaying ? (
            <BrawlButton onClick={pauseGame} text="Pause" />
          ) : null}
          {isPaused && isPlaying ? (
            <BrawlButton onClick={resumeGame} text="Resume" />
          ) : null}
        </div>
      </div>
      <div
        className={Classes.main}
        style={{
          width: cell.width * numberOfCells.x,
          height: cell.height * numberOfCells.y,
        }}
        data-testid="playground"
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
