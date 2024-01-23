
class GroceryLists {

    constructor() {
        this.groceries = new Map();
    }

    updateGroceryList(groceryList, groceryItems) {
        this.groceries.put(groceryList, groceryItems);
    }

    isListPresent(listName) {
        return this.groceries.has(listName);
    }

    static emptyGroceryLists() {
        return new GroceryLists();
    }

    static cloneGroceryLists(inputGroceryLists) {
        let groceryLists = new GroceryLists();
        groceryLists.groceries = new Map(inputGroceryLists.groceries);
        return groceryLists;

    }
}