import { useState } from "react";
import "./DeletableListItem.css";


const DeletableListItem = ({listItem, actionImage, action}) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <li
      className="list-item"
      key={listItem.id}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <span className="item-text">{listItem.itemName}</span>
      {isHovering && (
        <img className="action-icon" src={actionImage} onClick={() => action(listItem)} alt="Delete item"/>
      )}
    </li>
  );
};

export default DeletableListItem;
