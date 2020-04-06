import React from "react";
import Classes from "./ScoreBoard.module.css";

export default function ScoreBoard({ score }) {
  return (
    <div className={Classes.main}>
      <div className={Classes.wrapper}>
        <div className={Classes.title}>Score</div>
        <div className={Classes.value}>{score}</div>
      </div>
    </div>
  );
}
