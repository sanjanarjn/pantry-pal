import { v4 as uuidv4 } from 'uuid';

class Item {

    constructor(itemName) {
        this.id = uuidv4();
        this.itemName = itemName;
        this.checked = false;
    }
}

export default Item;