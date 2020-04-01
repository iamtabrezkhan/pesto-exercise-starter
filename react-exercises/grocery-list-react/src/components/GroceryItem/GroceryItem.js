import React, { Component } from "react";
import Classes from "./GroceryItem.module.css";

export class GroceryItem extends Component {
  render() {
    const { text, count } = this.props.item;
    return (
      <div
        onClick={() => this.props.markAsPurchased(this.props.item.id)}
        className={`${Classes.main} ${
          this.props.item.purchased ? Classes.purchased : ""
        }`}
      >
        <div className={Classes.wrapper}>
          <div className={Classes.text}>{text}</div>
          <div className={Classes.count}>({count})</div>
        </div>
      </div>
    );
  }
}

export default GroceryItem;
