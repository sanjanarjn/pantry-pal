import { v4 as uuidv4 } from 'uuid';

class List {

    constructor(itemName) {
        this.id = uuidv4();
        this.itemName = itemName;
    }
}

export default List;