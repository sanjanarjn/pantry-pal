import React, { useState, useContext } from "react";
import "./AddToGrocery.css";

import editImage from "../images/edit.png";

import EditableListItem from "./EditableListItem";
import List from "../data/List";
import { DataContext } from "./DataContext";
import DeletableListItem from "./DeletableListItem";

const SelectGroceryList = ({
  toggleGroceryListModal,
  toggleAddGroceryItemModal,
}) => {
  
  const [emptyList, setEmptyList] = useState(new List(""));
  const [errorMessage, setErrorMessage] = useState("");

  const { grocery, addGroceryList } = useContext(DataContext);

  const addNewGroceryList = (newList) => {
    if (newList.itemName == undefined || newList.itemName.trim().length == 0) {
      setErrorMessage("Please enter a name for the list!");
      setEmptyList(new List(""));
      return;
    }
    if (grocery.isListPresent(newList.itemName)) {
      setErrorMessage("List with same name exists!");
      setEmptyList(new List(newList.itemName));
    } else {
      setErrorMessage("");
      setEmptyList(new List(""));
      addGroceryList(newList);
    }
  };

  const listItems = [];
  grocery.groceryLists.map((list) =>
    listItems.push(
      <DeletableListItem
        key={list.id}
        listItem={list}
        actionImage={editImage}
        action={toggleAddGroceryItemModal}
      />
    )
  );

  const errorMessagePresent = errorMessage.trim().length > 0;
  return (
    <div className="modal-overlay">
      <div className="add-to-grocery modal">
        <div className="header">
          <div className="header-text">Store Lists for Grocery</div>
          <div className="close-button" onClick={toggleGroceryListModal}>
            X
          </div>
        </div>
        <div className="add-to-grocery modal-content">
          <ul className="items">{listItems}</ul>
          <div className="sticky">
            <ul className="items">
              <EditableListItem
                key={emptyList.id}
                placeholder="Add new store list"
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
