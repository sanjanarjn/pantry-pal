import { useState } from "react";
import "./DeletableListItem.css";


const DeletableListItem = ({item, actionImage, action}) => {
  const [isHovering, setIsHovering] = useState(false);
  const [listItem, setItem] = useState(item);

  return (
    <li
      className="list-item"
      key={listItem.id}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <span className="item-text">{listItem.itemName}</span>
      {isHovering && (
        <img className="trash-icon" src={actionImage} onClick={() => action(listItem)}/>
      )}
    </li>
  );
};

export default DeletableListItem;
