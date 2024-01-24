
class Grocery {

    constructor() {
        this.groceryMap = new Map();
        this.groceryLists = [];
    }

    updatedItemsInGroceryList(groceryListName, groceryItems) {
        this.groceryMap.set(groceryListName, groceryItems);
    }

    
    isListPresent(listName) {
        return this.groceryMap.has(listName);
    }
}

export default Grocery;