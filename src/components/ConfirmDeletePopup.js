import "./AddToGrocery.css";

const ConfirmDelete = ({itemToBeDeleted, deleteFunctions}) => {

    return (
        <div className="modal-overlay">
        <div className="add-to-grocery modal">
          <div className="header">
            <div className="header-text">Confirm Deletion</div>
          </div>
          <div className="add-to-grocery modal-content">
            <h3>Are you sure you want to delete the list - {itemToBeDeleted.itemName}</h3>
            <div className="confirm-delete-buttons">
                <div className="confirm-delete-button">Cancel</div>
                <div className="confirm-delete-button">Delete</div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default ConfirmDelete;