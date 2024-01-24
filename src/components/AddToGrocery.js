import React, { useState, useContext } from "react";
import "./AddToGrocery.css"; // Make sure to create a CSS file with this name

import plusImage from "../images/plus.png";
import EditableListItem from "./EditableListItem";
import { DataContext } from "./DataContext";
import Item from "../data/Item";

const AddtoGroceryModal = ({ groceryListName, toggleAddToGroceryModal }) => {

  const { grocery, addItemsToGroceryList } = useContext(DataContext);

  const getItemsInGroceryList = ()  => {
    const itemsInList = grocery.groceryMap.get(groceryListName);
    return [new Item(""), ...itemsInList];
  }
  const [items, setItems] = useState(getItemsInGroceryList());
  

  const updateItem = (updatedItem) => {
    const updatedItems = items
      .map((item) => (item.id === updatedItem.id ? updatedItem : item))
      .filter((item) => !isEmptyItem(item));
    
    addItemsToGroceryList(groceryListName, updatedItems);

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
          <div className="close-button" onClick={toggleAddToGroceryModal}>
            X
          </div>
        </div>
        <div className="add-to-grocery modal-content">
          <section>
            <div className="grocery-list-header">
              <h4>{groceryListName}</h4>
              
            </div>
            <ul className="items">{listItems}</ul>
          </section>
          <div className="sticky">
            <img
              src={plusImage}
              className="plus-icon"
              onClick={addSpaceForNewItem}
            />
            <h5>Add new item</h5>
          </div>
        </div>
      </div>
    </div>
  );

  
};

export default AddtoGroceryModal;
