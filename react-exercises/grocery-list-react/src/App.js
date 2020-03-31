import React from "react";
import "./App.css";
import GroceryList from "./components/GroceryList/GroceryList";

function App() {
  return (
    <div className="App">
      <div className="grocery-list-container">
        <GroceryList />
      </div>
    </div>
  );
}

export default App;
