import React from "react";
import Classes from "./BrawlButton.module.css";

export default function BrawlButton({ onClick, text }) {
  return (
    <button
      data-testid="brawlButton"
      className={Classes.brawlButton}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
