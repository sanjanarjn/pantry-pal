/* global chrome */
import React, { createContext, useState, useEffect } from "react";
import Grocery from "../data/Grocery";

export const DataContext = createContext({
  grocery: new Grocery(),
  addItemsToGroceryList: () => {},
  addGroceryList: () => {},
  deleteGroceryList: () => {},
  getGroceryList: () => {}
});

export const DataProvider = ({ children }) => {

  const [grocery, setGrocery] = useState(new Grocery());

  const loadGroceryDataFromLocalStorage = async () => {
    const updatedGrocery = new Grocery();
    const chromeValid = typeof chrome !== "undefined" && chrome.storage;
    if (chromeValid) {
      // Fetch data from Chrome storage
      chrome.storage.local.get(
        ["groceryLists", "groceryMap"],
        function (result) {
          if (result.groceryLists) {
            updatedGrocery.groceryLists = [...result.groceryLists];
            updatedGrocery.groceryMap = new Map(result.groceryMap);

            console.log("Set grocery details from storage");
            console.log(updatedGrocery);
          }
        }
      );
    }
    setGrocery(updatedGrocery);
  };


  useEffect(() => {
    loadGroceryDataFromLocalStorage();
  }, []);

  const addItemsToGroceryList = (key, values) => {
    setGrocery((prevGrocery) => {
      const updatedGrocery = new Grocery();
      updatedGrocery.groceryMap = new Map(prevGrocery.groceryMap);
      updatedGrocery.updatedItemsInGroceryList(key, values);
      updatedGrocery.groceryLists = [...prevGrocery.groceryLists];

      console.log("In Datacontext : ", updatedGrocery);
      saveGroceryItemsToLocalStorage(updatedGrocery.groceryMap);
      return updatedGrocery;
    });
  };

  const addGroceryList = (list) => {
    setGrocery((prevGrocery) => {
      const updatedGrocery = new Grocery();
      updatedGrocery.groceryMap = new Map(prevGrocery.groceryMap);
      updatedGrocery.groceryLists = [list, ...prevGrocery.groceryLists];

      updatedGrocery.groceryMap.set(list.itemName, []);
      console.log("In Datacontext : ", updatedGrocery);

      saveGroceryListsToLocalStorage(updatedGrocery.groceryLists);
      return updatedGrocery;
    });
  };

  const deleteGroceryList = (listName) => {
    setGrocery((prevGrocery) => {
      prevGrocery.groceryMap.delete(listName);
      prevGrocery.groceryLists.filter((list) => list.itemName !== listName);

      const updatedGrocery = new Grocery();
      updatedGrocery.groceryMap = new Map(prevGrocery.groceryMap);
      updatedGrocery.groceryLists = prevGrocery.groceryLists.filter(
        (list) => list.itemName !== listName
      );

      saveGroceryItemsToLocalStorage(updatedGrocery.groceryMap);
      saveGroceryListsToLocalStorage(updatedGrocery.groceryLists);
      return updatedGrocery;
    });
  };

  const getGroceryList = (listName) => {
    return grocery.groceryLists.find((list) => list.itemName === listName);
  }

  const saveGroceryListsToLocalStorage = (groceryLists) => {
    const chromeValid = typeof chrome !== "undefined" && chrome.storage;
    if (chromeValid) {
      chrome.storage.local.set({ groceryLists: groceryLists }, function () {
        console.log("Stored grocery lists");
        console.log(groceryLists);
      });
    }
  };

  const saveGroceryItemsToLocalStorage = (groceryMap) => {
    const chromeValid = typeof chrome !== "undefined" && chrome.storage;
    if (chromeValid) {
      chrome.storage.local.set(
        { groceryMap: Array.from(groceryMap.entries()) },
        function () {
          console.log("Stored grocery map");
          console.log(groceryMap);
        }
      );
    }
  };

  return (
    <DataContext.Provider
      value={{
        grocery: grocery,
        addGroceryList: addGroceryList,
        addItemsToGroceryList: addItemsToGroceryList,
        deleteGroceryList: deleteGroceryList,
        getGroceryList: getGroceryList
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
