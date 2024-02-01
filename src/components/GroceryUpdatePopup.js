const GroceryUpdatePopup = () => {
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

  return (
    <>
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
    </>
  );
};
