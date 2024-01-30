import React from "react";
import { useContext } from "react";

import { DataContext } from "./DataContext";

import "./GroceryLists.css";

function GroceryLists() {
  const { grocery } = useContext(DataContext);

  const getGroceryListInColumns = () => {
    const groceryListColumns = [[], [], []];

    let columnIndex = 0;
    for (const [key, value] of grocery.groceryMap) {
      groceryListColumns[columnIndex].push([key, value]);
      columnIndex = (columnIndex + 1) % 3;
    }
    console.log(groceryListColumns);
    return groceryListColumns;
  };

  return (
    <div className="grocery-list-container">
      <h2>Grocery list</h2>
      <div className="grocery-lists">
        {getGroceryListInColumns().map((eachColumn) => (
          <div className="grocery-list-column" key={eachColumn.columnId}>
            {eachColumn.map((groceryListInColumn) => (
              <section className="grocery-list" key={groceryListInColumn[0]}>
                <h3>{groceryListInColumn[0]}</h3>
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
