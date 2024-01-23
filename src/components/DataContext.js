/* global chrome */
import React, { createContext, useState } from 'react';

export const DataContext = createContext({
  groceryMap: new Map(),
  updateGroceryMap: () => {}
});

export const DataProvider = ({ children }) => {

  const [groceryMap, setGroceryMap] = useState(new Map());

  const updateGroceryMap = (key, values) => {
    setGroceryMap(prevMap => {
      const updatedMap = new Map(prevMap);
      updatedMap.set(key, values);
      console.log("In Datacontext : ", updatedMap);      
      return updatedMap;
    });
  };

  return (
    <DataContext.Provider value={{ groceryMap: groceryMap, updateGroceryMap: updateGroceryMap }}>
      {children}
    </DataContext.Provider>
  );
};
