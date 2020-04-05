import React from "react";
import "./App.css";
import Playground from "./components/Playground/Playground";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Playground
          config={{
            cell: {
              width: 20,
              height: 20,
            },
            numberOfCells: {
              x: 30,
              y: 25,
            },
          }}
        ></Playground>
      </div>
    </div>
  );
}

export default App;
