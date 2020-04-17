import React from "react";
import Classes from "./BrawlButton.module.css";

export default function BrawlButton({ onClick, text, testId }) {
  return (
    <button
      data-testid={testId}
      className={Classes.brawlButton}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
