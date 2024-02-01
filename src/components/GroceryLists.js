import React, { useState } from "react";
import { useContext } from "react";

import SelectGroceryList from "./SelectGroceryList";
import AddItemsToGroceryList from "./AddItemsToGrocery";
import AppHeader from "./AppHeader";
import { DataContext } from "./DataContext";

import trashImage from "../images/bin.png";
import editIcon from "../images/edit.png";
import plusIcon from "../images/plus.png";
import "./GroceryLists.css";

function GroceryLists() {
  const { grocery, deleteGroceryList, getGroceryList } = useContext(DataContext);

  const getGroceryListInColumns = () => {
    const groceryListColumns = [[], [], []];

    let columnIndex = 0;
    for (const [key, value] of grocery.groceryMap) {
      groceryListColumns[columnIndex].push([key, value]);
      columnIndex = (columnIndex + 1) % 3;
    }
    console.log(grocery);
    console.log(groceryListColumns);
    return groceryListColumns;
  };

  const GroceryListHeader = ({ listName, editList, deleteList }) => {
    const [isHovering, setIsHovering] = useState(false);
    return (
      <div
        className="grocery-lists-header"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="header-text">{listName}</div>
        {isHovering && (
          <>
            <img
              className="action-icon"
              src={editIcon}
              alt="Edit list"
              onClick={() => editList(listName)}
            />
            <img
              className="action-icon"
              src={trashImage}
              alt="Delete list"
              onClick={() => deleteList(listName)}
            />
          </>
        )}
      </div>
    );
  };

  const [selectedGroceryList, setSelectedGroceryList] = useState("");

  const [showGroceryListsModal, setShowGroceryListsModal] = useState(false);
  const toggleShowGroceryListsModal = () => {
    setShowGroceryListsModal(!showGroceryListsModal);
  };

  const [showAddGroceryItemModal, setShowAddGroceryItemModal] = useState(false);
  const toggleShowAddGroceryItemModal = (groceryList) => {
    if (showGroceryListsModal) toggleShowGroceryListsModal();

    setSelectedGroceryList(groceryList);
    setShowAddGroceryItemModal(!showAddGroceryItemModal);
  };

  const goBacktoGroceryListModal = () => {
    if (showAddGroceryItemModal) toggleShowAddGroceryItemModal();

    setShowGroceryListsModal(!showGroceryListsModal);
  };

  const editGroceryList = (listName) => {
    const groceryList = getGroceryList(listName);
    toggleShowAddGroceryItemModal(groceryList);
  }

  const groceryListColumns = getGroceryListInColumns();
  const groceryListPresent = grocery.groceryMap.size > 0;
  return (
    <>
      <AppHeader />
      <div className="grocery-list-container">
        <div className="grocery-lists-header">
          <h2>Your Grocery lists</h2>
          <img
            className="plus-icon"
            src={plusIcon}
            alt="Add new list"
            onClick={toggleShowGroceryListsModal}
          />
        </div>

        {groceryListPresent && (
          <div className="grocery-lists">
            {groceryListColumns.map((eachColumn) => (
              <div className="grocery-list-column" key={eachColumn.columnId}>
                {eachColumn.map((groceryListInColumn) => (
                  <section
                    className="grocery-list"
                    key={groceryListInColumn[0]}
                  >
                    <GroceryListHeader
                      listName={groceryListInColumn[0]}
                      editList={editGroceryList}
                      deleteList={deleteGroceryList}
                    />
                    <div className="grocery-items">
                    {groceryListInColumn[1].map((listItem, index) => (
                      <div className="grocery-item" key={index}>
                        <label htmlFor="item">{listItem.itemName}</label>
                      </div>
                    ))}
                    </div>
                  </section>
                ))}
              </div>
            ))}
          </div>
        )}

        {!groceryListPresent && (
          <div className="no-grocery-lists">
            <h2>Looks like you have no grocery lists!</h2>
          </div>
        )}

        {showGroceryListsModal && (
          <SelectGroceryList
            toggleGroceryListModal={toggleShowGroceryListsModal}
            toggleAddGroceryItemModal={toggleShowAddGroceryItemModal}
          />
        )}
        {showAddGroceryItemModal && (
          <AddItemsToGroceryList
            groceryListName={selectedGroceryList}
            toggleAddToGroceryModal={toggleShowAddGroceryItemModal}
            goBacktoGroceryListModal={goBacktoGroceryListModal}
          />
        )}
      </div>
    </>
  );
}

export default GroceryLists;
