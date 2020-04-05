import React from "react";
import Classes from "./Food.module.css";
import Food1 from "../../assets/food-1.png";
import Food2 from "../../assets/food-2.png";
import Food3 from "../../assets/food-3.png";
import Food4 from "../../assets/food-4.png";

const foods = [Food1, Food2, Food3, Food4];

export default function Food({ x, y, width, height, foodId }) {
  return (
    <div
      className={Classes.main}
      style={{
        left: x,
        top: y,
        width: width,
        height: height,
      }}
    >
      <img src={foods[foodId]} alt="Food" />
    </div>
  );
}
