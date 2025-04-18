let vegetables = [];
    
function addItem(name, quantity) {
  vegetables.push({ name, quantity });
  displayList();
}

const addItemFromInput = () => {
  const name = document.getElementById("itemName").value.trim();
  const quantity = parseInt(document.getElementById("itemQuantity").value);
  if (name && quantity > 0) {
    addItem(name, quantity);
    document.getElementById("itemName").value = "";
    document.getElementById("itemQuantity").value = "";
  }
};

const sortItemsByQuantity = () => {
  vegetables.sort((a, b) => b.quantity - a.quantity);
  displayList();
};

const filterItemsByName = function (searchTerm) {
  return vegetables.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

function removeItem(name) {
  const index = vegetables.findIndex(function (item) {
    return item.name.toLowerCase() === name.toLowerCase();
  });

  if (index !== -1) {
    vegetables.splice(index, 1);
  }
  displayList();
}

function removeItemFromInput() {
  const name = document.getElementById("removeName").value;
  if (name) {
    removeItem(name);
    document.getElementById("removeName").value = "";
  }
}

const getTotalQuantity = () => {
  const total = vegetables.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById("totalQuantity").textContent = ` Total Quantity: ${total}`;
};

const displayList = () => {
  const listContainer = document.getElementById("list");
  listContainer.innerHTML = "<h4> Your Vegetable List:</h4>";
  vegetables.map((item, index) => {
    const div = document.createElement("div");
    div.className = "item";
    div.textContent = `${index + 1}. ${item.name} - ${item.quantity}`;
    listContainer.appendChild(div);
  });
};

function filterItems() {
  const term = document.getElementById("filterName").value;
  const filtered = filterItemsByName(term);
  const listContainer = document.getElementById("list");
  listContainer.innerHTML = "<h4> Filtered Items:</h4>";
  filtered.map((item, index) => {
    const div = document.createElement("div");
    div.className = "item";
    div.textContent = `${index + 1}. ${item.name} - ${item.quantity}`;
    listContainer.appendChild(div);
  });
}