const productForm = document.getElementById("product-form");
const inventoryList = document.getElementById("inventory-list");

productForm.addEventListener("submit", function(event) {
    event.preventDefault();
});

document.getElementById("add-product").addEventListener("click", function() {
    const productName = document.getElementById("product-name").value;
    const productCategory = document.getElementById("product-category").value;
    const productPrice = parseFloat(document.getElementById("product-price").value);
    const productQuantity = parseInt(document.getElementById("product-quantity").value);
    
    const product = {
        name: productName,
        category: productCategory,
        price: productPrice,
        quantity: productQuantity,
        history: []
    };
    
    // Agregar el producto a la lista de inventario y mostrarlo
    // También, realiza el seguimiento de la cantidad y la generación de informes aquí
    
    // Lógica de alerta de stock bajo
    
    // Limpiar los campos del formulario
    document.getElementById("product-form").reset();
    
    document.addEventListener("DOMContentLoaded", function() {
        const productForm = document.getElementById("product-form");
        const inventoryList = document.getElementById("inventory-list");
    
        let inventory = []; // Array para almacenar los productos en inventario
    
        // Cargar datos del almacenamiento local si existen
        const savedInventory = localStorage.getItem("inventory");
        if (savedInventory) {
            inventory = JSON.parse(savedInventory);
            updateInventoryList();
        }
    
        productForm.addEventListener("submit", function(event) {
            event.preventDefault();
        });
    
        document.getElementById("add-product").addEventListener("click", function() {
            const productName = document.getElementById("product-name").value;
            const productQuantity = parseInt(document.getElementById("product-quantity").value);
    
            const existingProductIndex = inventory.findIndex(item => item.name === productName);
    
            if (existingProductIndex !== -1) {
                inventory[existingProductIndex].quantity += productQuantity;
            } else {
                inventory.push({ name: productName, quantity: productQuantity });
            }
    
            updateInventoryList();
            saveInventoryToLocalStorage();
        });
    
        function updateInventoryList() {
            inventoryList.innerHTML = "";
    
            inventory.forEach(product => {
                const productItem = document.createElement("div");
                productItem.textContent = `${product.name}: ${product.quantity} unidades`;
                inventoryList.appendChild(productItem);
            });
        }
    
        function saveInventoryToLocalStorage() {
            localStorage.setItem("inventory", JSON.stringify(inventory));
        }
    });
    

});
