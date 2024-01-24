import React, { useState, useContext } from "react";
import "./AddToGrocery.css"; // Make sure to create a CSS file with this name

import plusImage from "../images/plus.png";
import EditableListItem from "./EditableListItem";
import List from "../data/List";
import { DataContext } from "./DataContext";

const SelectGroceryList = ({ toggleGroceryListModal,  toggleAddGroceryItemModal}) => {

  const [emptyList, setEmptyList] = useState(new List(""));
  const [errorMessage, setErrorMessage] = useState("");

  const { grocery, addGroceryList } = useContext(DataContext);
  const [groceryLists, setGroceryLists] = useState([...grocery.groceryLists]);

  const addNewGroceryList = (newList) => {

    if (grocery.isListPresent(newList.itemName)) {
      setErrorMessage("List with same name exists!");
      setEmptyList(new List(newList.itemName));
    } else {
      setErrorMessage("");
      setEmptyList(new List(""));
      addGroceryList(newList);
      setGroceryLists([newList, ...groceryLists]);
      
    }
  };

  const listItems = [];
  groceryLists.map((list) =>
    listItems.push(
      <li className="list-item" key={list.id} onClick={() => toggleAddGroceryItemModal(list.itemName)}>
        {list.itemName}
      </li>
    )
  );

  const errorMessagePresent = errorMessage.trim().length > 0;
  return (
    <div className="modal-overlay">
      <div className="add-to-grocery modal">
        <div className="header">
          <div className="header-text">Your Grocery Lists</div>
          <div className="close-button" onClick={toggleGroceryListModal}>
            X
          </div>
        </div>
        <div className="add-to-grocery modal-content">
          <ul className="items">{listItems}</ul>
          <div className="sticky">
            <img src={plusImage} className="plus-icon" />
            <ul className="items">
              <EditableListItem
                key={emptyList.id}
                item={emptyList}
                inFocus={true}
                onUpdate={addNewGroceryList}
              />
            </ul>
          </div>
          {errorMessagePresent && (
            <div className="sticky error-message">
              <h5>{errorMessage}</h5>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectGroceryList;
