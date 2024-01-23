import React, { useState } from "react";
import "./AddToGrocery.css";
import Item from "../data/Item.js";

const EditableListItem = ({ item, inFocus, onUpdate }) => {
  const [updatedItem, setItem] = useState(item);

  const handleTextChange = (event) => {
    const updatedValue = event.target.value;

    const changedItem = new Item(updatedValue);
    changedItem.id = updatedItem.id;
    changedItem.checked = updatedItem.checked;
    setItem(changedItem);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onUpdate(updatedItem);
    }
  };

  const handleBlur = () => {
    //onUpdate(updatedItem);
  };

  return (
    <li className="item">
      <input
        type="text"
        className="item-input"
        value={updatedItem.itemName}
        onChange={handleTextChange}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        autoFocus={inFocus}
      />
    </li>
  );
};

export default EditableListItem;
