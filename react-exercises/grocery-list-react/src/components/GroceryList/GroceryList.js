import React, { Component } from "react";
import Classes from "./GroceryList.module.css";
import GroceryItem from "../GroceryItem/GroceryItem";

export class GroceryList extends Component {
  constructor() {
    super();
    this.state = {
      items: []
    };
    this.addItem = this.addItem.bind(this);
    this.clearAll = this.clearAll.bind(this);
    this.ifItemAlreadyExists = this.ifItemAlreadyExists.bind(this);
    this.markItRed = this.markItRed.bind(this);
    this.scrollItemsContainerToBottom = this.scrollItemsContainerToBottom.bind(
      this
    );
  }

  componentDidUpdate() {
    // this.scrollItemsContainerToBottom();
  }

  render() {
    return (
      <div className={Classes.main}>
        <div className={Classes.title}>Grocery Items</div>
        <div
          ref={node => (this.itemsContainerElement = node)}
          className={Classes.itemsContainer}
        >
          {this.state.items.map(item => (
            <GroceryItem markItRed={this.markItRed} item={item} key={item.id} />
          ))}
        </div>
        <div className={Classes.inputContainer}>
          <form onSubmit={this.addItem}>
            <input
              ref={node => (this.inputElement = node)}
              type="text"
              placeholder="Start typing here..."
            />
          </form>
        </div>
        <div className={Classes.actionButtons}>
          <button onClick={this.clearAll}>Clear All</button>
          <button onClick={this.addItem}>Add</button>
        </div>
      </div>
    );
  }

  addItem(e) {
    e.preventDefault();
    const text = this.inputElement.value.trim();
    if (!text) {
      return;
    }
    const oldItem = this.ifItemAlreadyExists(text, this.state.items);
    if (!oldItem) {
      const newItem = {
        text,
        id: this.state.items.length,
        count: 1,
        purchased: false
      };
      this.setState(prevState => ({
        items: [...prevState.items, newItem]
      }));
    } else {
      this.setState(prevState => ({
        items: prevState.items.map(item => {
          return item.id === oldItem.id
            ? { ...item, count: item.count + 1 }
            : item;
        })
      }));
    }
    this.inputElement.value = "";
    setTimeout(() => {
      this.scrollItemsContainerToBottom();
    }, 0);
  }

  ifItemAlreadyExists(text, items) {
    for (const item of items) {
      if (item.text === text) {
        return item;
      }
    }
    return false;
  }

  clearAll() {
    this.setState(prevState => ({
      items: []
    }));
  }

  markItRed(itemId) {
    this.setState(prevState => ({
      items: prevState.items.map(item => {
        return item.id === itemId
          ? { ...item, purchased: item.purchased ? false : true }
          : item;
      })
    }));
  }

  scrollItemsContainerToBottom() {
    this.itemsContainerElement.scrollTop = this.itemsContainerElement.scrollHeight;
  }
}

export default GroceryList;
