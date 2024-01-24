/* global chrome */
import React, { createContext, useState } from 'react';
import Grocery from "../data/Grocery";

export const DataContext = createContext({
  grocery: new Grocery(),
  addItemsToGroceryList: () => {},
  addGroceryList: () => {}
});

export const DataProvider = ({ children }) => {

  const [grocery, setGrocery] = useState(new Grocery());

  const addItemsToGroceryList = (key, values) => {
    setGrocery(prevGrocery => {
      const updatedGrocery = new Grocery();
      updatedGrocery.groceryMap = new Map(prevGrocery.groceryMap);
      updatedGrocery.updatedItemsInGroceryList(key, values);
      updatedGrocery.groceryLists = [...prevGrocery.groceryLists];
      
      console.log("In Datacontext : ", updatedGrocery);      
      return updatedGrocery;
    });
  };


  const addGroceryList = (list) => {
    setGrocery(prevGrocery => {
      const updatedGrocery = new Grocery();
      updatedGrocery.groceryMap = new Map(prevGrocery.groceryMap);
      updatedGrocery.groceryLists = [list, ...prevGrocery.groceryLists];
      
      updatedGrocery.groceryMap.set(list.itemName, []);
      console.log("In Datacontext : ", updatedGrocery);      
      return updatedGrocery;
    });
  };

  return (
    <DataContext.Provider value={{ grocery: grocery, addGroceryList: addGroceryList, addItemsToGroceryList: addItemsToGroceryList }}>
      {children}
    </DataContext.Provider>
  );
};
