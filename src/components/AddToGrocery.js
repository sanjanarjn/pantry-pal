import React, { useState, useContext } from "react";
import "./AddToGrocery.css"; // Make sure to create a CSS file with this name

import EditableListItem from "./EditableListItem";
import { DataContext } from "./DataContext";
import Item from "../data/Item";

const AddtoGroceryModal = ({ toggleModal }) => {
  const [items, setItems] = useState([new Item("")]);
  const { groceryMap, updateGroceryMap } = useContext(DataContext);

  const updateItem = (updatedItem) => {
    const updatedItems = items
      .map((item) => (item.id === updatedItem.id ? updatedItem : item))
      .filter((item) => !isEmptyItem(item));
    updateGroceryMap("Grocery", updatedItems);

    if (!isEmptyItem(updatedItems[0])) {
      setItems([new Item(""), ...updatedItems]);
    } else {
      setItems(updatedItems);
    }
  };

  const addSpaceForNewItem = () => {
    let updatedItems = [...items];
    if (!isEmptyItem(updatedItems[0])) {
      updatedItems = [new Item(""), ...items];
    }
    setItems(updatedItems);
  };

  const isEmptyItem = (item) => {
    return item && item.itemName != null && item.itemName.trim() === "";
  };

  let listItems = [];
  {
    items.map((item, index) =>
      listItems.push(
        <EditableListItem
          key={item.id}
          item={item}
          index={index}
          inFocus={item.itemName.trim() === ""}
          onUpdate={updateItem}
        />
      )
    );
  }

  return (
    <div className="modal-overlay">
      <div className="add-to-grocery modal">
        <div className="header">
          <div className="header-text">Add to Grocery</div>
          <div className="close-button" onClick={toggleModal}>X</div>
        </div>
        <div className="grocery-list-container modal-content">
          <div className="list-title">List - Grocery</div>
          <ul className="items">{listItems}</ul>
          <div className="sticky">
            <button className="add-item" onClick={addSpaceForNewItem}>
              +
            </button>
            <label>Add new item</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddtoGroceryModal;
