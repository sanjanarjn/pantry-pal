import React, { useState, useContext } from "react";
import "./AddToGrocery.css";

import plusImage from "../images/plus.png";
import trashImage from "../images/bin.png";
import EditableListItem from "./EditableListItem";
import { DataContext } from "./DataContext";
import Item from "../data/Item";
import DeletableListItem from "./DeletableListItem";

const AddItemsToGroceryList = ({
  groceryListName,
  toggleAddToGroceryModal,
}) => {
  console.log(groceryListName);
  const { grocery, addItemsToGroceryList } = useContext(DataContext);

  const getItemsInGroceryList = () => {
    return grocery.groceryMap.get(groceryListName.itemName);
  };

  const [items, setItems] = useState(getItemsInGroceryList());
  const [emptyItem, setEmptyItem] = useState(new Item(""));

  const updateGroceryList = (newItem) => {
    const updatedItems = [newItem, ...items];
    addItemsToGroceryList(groceryListName.itemName, updatedItems);
    setItems(updatedItems);
    setEmptyItem(new Item(""));
  };

  const deleteItem = (itemToDelete) => {
    const updatedItems = items.filter((item) => itemToDelete.id !== item.id);
    addItemsToGroceryList(groceryListName.itemName, updatedItems);
    setItems(updatedItems);
  }

  const itemsInList = [];
  items.map((item) =>
    itemsInList.push(
      <DeletableListItem key={item.id} item={item} actionImage={trashImage} action={deleteItem}/>
    )
  );

  console.log(itemsInList);
  return (
    <div className="modal-overlay">
      <div className="add-to-grocery modal">
        <div className="header">
          <div className="header-text">Add items to list - {groceryListName.itemName}</div>
          <div className="close-button" onClick={toggleAddToGroceryModal}>
            X
          </div>
        </div>
        <div className="add-to-grocery modal-content">
        <section>
            <div className="grocery-list-header">
              <h4>{groceryListName.itemName}</h4>
            </div>
            <ul className="items">{itemsInList}</ul>
          </section>
          <div className="sticky">
            <img src={plusImage} className="plus-icon" />
            <ul className="items">
              <EditableListItem
                key={emptyItem.id}
                item={emptyItem}
                inFocus={true}
                onUpdate={updateGroceryList}
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddItemsToGroceryList;
