import "./AddToGrocery.css";

const MyList = () => {

    const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);
  
    const updateItem = (index, newText) => {
      const updatedItems = items.map((item, i) => (i === index ? newText : item));
      setItems(updatedItems);
    };
  
    return (
      <ul className="items">
        {items.map((item, index) => (
          <EditableListItem
            key={index}
            text={item}
            onUpdate={(newText) => updateItem(index, newText)}
          />
        ))}
      </ul>
    );
  };
  
  export default MyList;