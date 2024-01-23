import "./Test.css";

export default function MyGrid() {
  // Assuming you have an array of columns, each with an array of items
  const columns = [
    ["Item 1.1", "Item 1.2", "Item 1.3"],
    ["Item 2.1", "Item 2.2"],
    // more columns
  ];

  return (
    <div className="container">
      <div className="column">
        <div class="item">
          <div class="grocery-item">
            <input type="checkbox" id="item1" />
            <label for="item1">Puttu podi</label>
          </div>
          <div class="grocery-item">
            <input type="checkbox" id="item1" />
            <label for="item1">Puttu podi</label>
          </div>
          <div class="grocery-item">
            <input type="checkbox" id="item1" />
            <label for="item1">Puttu podi</label>
          </div>
          <div class="grocery-item">
            <input type="checkbox" id="item1" />
            <label for="item1">Puttu podi</label>
          </div>
        </div>
        <div class="item">
          <div class="grocery-item">
            <input type="checkbox" id="item1" />
            <label for="item1">Puttu podi</label>
          </div>
          <div class="grocery-item">
            <input type="checkbox" id="item1" />
            <label for="item1">Puttu podi</label>
          </div>
          
        </div>
      </div>
      <div className="column">
      <div class="item">
          <div class="grocery-item">
            <input type="checkbox" id="item1" />
            <label for="item1">Puttu podi</label>
          </div>
          <div class="grocery-item">
            <input type="checkbox" id="item1" />
            <label for="item1">Puttu podi</label>
          </div>
          <div class="grocery-item">
            <input type="checkbox" id="item1" />
            <label for="item1">Puttu podi</label>
          </div>
          <div class="grocery-item">
            <input type="checkbox" id="item1" />
            <label for="item1">Puttu podi</label>
          </div>
        </div>
        <div class="item">
          <div class="grocery-item">
            <input type="checkbox" id="item1" />
            <label for="item1">Puttu podi</label>
          </div>
          <div class="grocery-item">
            <input type="checkbox" id="item1" />
            <label for="item1">Puttu podi</label>
          </div>
          <div class="grocery-item">
            <input type="checkbox" id="item1" />
            <label for="item1">Puttu podi</label>
          </div>
          <div class="grocery-item">
            <input type="checkbox" id="item1" />
            <label for="item1">Puttu podi</label>
          </div>
        </div>
        <div class="item">
          <div class="grocery-item">
            <input type="checkbox" id="item1" />
            <label for="item1">Puttu podi</label>
          </div>
          <div class="grocery-item">
            <input type="checkbox" id="item1" />
            <label for="item1">Puttu podi</label>
          </div>
          
        </div>
      </div>
    </div>
  );
}
