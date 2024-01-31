import React, { useState } from "react";
import { useContext } from "react";
import { useNavigate } from 'react-router-dom';


import { DataContext } from "./DataContext";

import trashImage from "../images/bin.png";
import backButton from "../images/back.png";

import "./GroceryLists.css";

function GroceryLists() {
  const { grocery, deleteGroceryList } = useContext(DataContext);
  const navigate = useNavigate();

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

  const GroceryListHeader = ({ listName, deleteList }) => {
    const [isHovering, setIsHovering] = useState(false);
    return (
      <div
        className="grocery-list-header"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <h3 className="header-text">{listName}</h3>
        {isHovering && (
          <img
            className="trash-icon"
            src={trashImage}
            onClick={() => deleteList(listName)}
          />
        )}
      </div>
    );
  };

  return (
    <div className="grocery-list-container">
      <div className="grocery-lists-header">
        <img
          src={backButton}
          className="back-button"
          onClick={() => navigate(-1)}
        />

        <h2>Grocery list</h2>
      </div>

      <div className="grocery-lists">
        {getGroceryListInColumns().map((eachColumn) => (
          <div className="grocery-list-column" key={eachColumn.columnId}>
            {eachColumn.map((groceryListInColumn) => (
              <section className="grocery-list" key={groceryListInColumn[0]}>
                <GroceryListHeader
                  listName={groceryListInColumn[0]}
                  deleteList={deleteGroceryList}
                />

                {groceryListInColumn[1].map((listItem, index) => (
                  <div className="grocery-item" key={index}>
                    <label htmlFor="item">{listItem.itemName}</label>
                  </div>
                ))}
              </section>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default GroceryLists;
