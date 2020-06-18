import React from "react";
import Classes from "./Instructions.module.css";

function Instructions() {
  return (
    <div className={Classes.main}>
      <div className={`${Classes.title} font-press`}>Instruction Manual</div>
      <div className={`${Classes.info} font-vt323`}>
        Use arrow keys [&larr; &uarr; &rarr; &darr;] to move the snake.
      </div>
      <div className={`${Classes.info} font-vt323`}>
        Press Spacebar key to pause/resume the game.
      </div>
      <div className={`${Classes.info} font-vt323`}>
        Press M key to mute/unmute game sound.
      </div>
      <div className={`${Classes.info} font-vt323`}>
        Press I key to show/hide instructions.
      </div>
    </div>
  );
}

export default Instructions;
