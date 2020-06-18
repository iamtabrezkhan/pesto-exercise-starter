import React from "react";
import Classes from "./ScoreBoard.module.css";

export default function ScoreBoard({ title, value }) {
  return (
    <div className={Classes.main}>
      <div className={Classes.wrapper}>
        {title ? <div className={Classes.title}>{title}</div> : null}
        {value === 0 ? (
          <div className={Classes.value}>0</div>
        ) : value ? (
          <div className={Classes.value}>{value}</div>
        ) : null}
      </div>
    </div>
  );
}
