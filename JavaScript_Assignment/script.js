// // --- 1. Data Initialization ---

// Hardcoded Tables Data [cite: 2]
const tables = [
    { id: 1, name: "Table - 1", cost: 0, items: 0, orders: {} },
    { id: 2, name: "Table - 2", cost: 0, items: 0, orders: {} },
    { id: 3, name: "Table - 3", cost: 0, items: 0, orders: {} }
];

// Hardcoded Menu Data [cite: 4]
const menuItems = [
    { id: 1, name: "Chinken Biryani", price: 120.00, category: "main" },
    { id: 2, name: "French Fries", price: 105.00, category: "Starter" },
    { id: 3, name: "Home Country Fries with Herbs & Chilli Flakes", price: 105.00, category: "Starter" },
    { id: 4, name: "French Fries with Cheese & Jalapenos", price: 135.00, category: "Starter" },
    { id: 5, name: "Chicken & Cheese Burger", price: 150.00, category: "main" },
    { id: 6, name: "Veggie 9 Burger", price: 150.00, category: "main" },
    { id: 7, name: "Thums Up 250ml", price: 50.00, category: "drinks" }
    
];

// // --- 2. Initial Rendering ---

function loadTables(tableData = tables) {
    const container = document.getElementById("table-list");
    container.innerHTML = "";
    
    tableData.forEach(table => {
        const div = document.createElement("div");
        div.className = "card table-card";
        div.setAttribute("ondrop", `drop(event, ${table.id})`);
        div.setAttribute("ondragover", "allowDrop(event)");
        div.setAttribute("onclick", `openModal(${table.id})`); // [cite: 8]
        
        div.innerHTML = `
            <h3>${table.name}</h3>
            <div class="table-info">
                Rs. <span id="cost-${table.id}">${table.cost.toFixed(2)}</span> | 
                Total items: <span id="items-${table.id}">${table.items}</span>
            </div>
        `;
        container.appendChild(div);
    });
}

function loadMenu(menuData = menuItems) {
    const container = document.getElementById("menu-list");
    container.innerHTML = "";
    
    menuData.forEach(item => {
        const div = document.createElement("div");
        div.className = "card menu-card";
        div.draggable = true;
        div.setAttribute("ondragstart", `drag(event, ${item.id})`); // 
        
        div.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.price.toFixed(2)}</p>
            <span style="font-size:0.8em; color:gray;">${item.category}</span>
        `;
        container.appendChild(div);
    });
}

// Initial Load
window.onload = () => {
    loadTables();
    loadMenu();
};

// --- 3. Search Functions  ---

function searchTables() {
    const query = document.getElementById("search-table").value.toLowerCase();
    const filteredTables = tables.filter(t => t.name.toLowerCase().includes(query));
    loadTables(filteredTables);
}

function searchMenu() {
    const query = document.getElementById("search-menu").value.toLowerCase();
    const filteredMenu = menuItems.filter(item => 
        item.name.toLowerCase().includes(query) || 
        item.category.toLowerCase().includes(query)
    );
    loadMenu(filteredMenu);
}

// --- 4. Drag and Drop Logic  ---

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev, itemId) {
    ev.dataTransfer.setData("text", itemId);
}

function drop(ev, tableId) {
    ev.preventDefault();
    const itemId = parseInt(ev.dataTransfer.getData("text"));
    const item = menuItems.find(i => i.id === itemId);
    const table = tables.find(t => t.id === tableId);
    
    if (item && table) {
        // Add item to table orders
        if (table.orders[itemId]) {
            table.orders[itemId].qty += 1;
        } else {
            table.orders[itemId] = { ...item, qty: 1 };
        }
        updateTableStats(table);
        // Refresh UI to show updated cost immediately
        searchTables(); 
    }
}

function updateTableStats(table) {
    let totalCost = 0;
    let totalItems = 0;
    
    Object.values(table.orders).forEach(orderItem => {
        totalCost += orderItem.price * orderItem.qty;
        totalItems += orderItem.qty;
    });
    
    table.cost = totalCost;
    table.items = totalItems;
}

// --- 5. Modal Logic  ---

let currentTableId = null;

function openModal(tableId) {
    currentTableId = tableId;
    const table = tables.find(t => t.id === tableId);
    document.getElementById("modal-table-name").innerText = `${table.name} | Order Details`;
    document.getElementById("order-modal").style.display = "block";
    renderModalItems(table);
}

function renderModalItems(table) {
    const tbody = document.getElementById("modal-items-body");
    tbody.innerHTML = "";
    
    let sn = 1;
    Object.values(table.orders).forEach(order => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${sn++}</td>
            <td>${order.name}</td>
            <td>${order.price.toFixed(2)}</td>
            <td>
                <input type="number" min="1" value="${order.qty}" onchange="updateQty(${order.id}, this.value)">
            </td>
            <td>
                <span style="cursor:pointer; color:red;" onclick="deleteItem(${order.id})">&#128465;</span>
            </td>
        `;
        tbody.appendChild(row);
    });
    
    document.getElementById("modal-total-price").innerText = table.cost.toFixed(2);
}

function updateQty(itemId, newQty) {
    const table = tables.find(t => t.id === currentTableId);
    if (table && table.orders[itemId]) {
        table.orders[itemId].qty = parseInt(newQty);
        updateTableStats(table);
        renderModalItems(table); 
        searchTables(); 
    }
}

function deleteItem(itemId) {
    const table = tables.find(t => t.id === currentTableId);
    if (table && table.orders[itemId]) {
        delete table.orders[itemId];
        updateTableStats(table);
        renderModalItems(table);
        searchTables();
    }
}

function closeSession() {
    const table = tables.find(t => t.id === currentTableId);
    if(table.cost > 0) {
        alert(`Bill Generated for ${table.name}\nTotal: Rs. ${table.cost}`);
        table.orders = {};
        table.cost = 0;
        table.items = 0;
        searchTables();
    }
    closeModal();
}

function closeModal() {
    document.getElementById("order-modal").style.display = "none";
    currentTableId = null;
}

// Close modal if clicked outside
window.onclick = function(event) {
    const modal = document.getElementById("order-modal");
    if (event.target == modal) {
        closeModal();
    }
}

