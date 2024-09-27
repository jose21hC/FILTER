// Lista de productos
const products = [
    { categoria: "Abarrotes", nombre: "Atún" },
    { categoria: "Panadería", nombre: "Pan integral" },
    { categoria: "Frutas y Verduras", nombre: "Manzana" },
    { categoria: "Abarrotes", nombre: "Aceite de Oliva" },
    { categoria: "Lácteos", nombre: "Leche Deslactosada" },
    { categoria: "Panadería", nombre: "Pastel de Chocolate" },
    { categoria: "Frutas y Verduras", nombre: "Zanahoria" },
    { categoria: "Carnicería", nombre: "Pollo" },
];

// Función de filtrado
function filterProductsByCategory(category) {
    return products.filter(product => product.categoria.toLowerCase() === category.toLowerCase());
}

// Mostrar productos filtrados
function displayProducts(products) {
    const productList = document.getElementById('productList');
    productList.innerHTML = ''; // Limpiar la lista anterior

    if (products.length === 0) {
        productList.innerHTML = '<p>No se encontraron productos para esta categoría.</p>';
    } else {
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.innerHTML = `<strong>Producto:</strong> ${product.nombre} <br><strong>Categoría:</strong> ${product.categoria}`;
            productList.appendChild(productDiv);
        });
    }
}

// Mostrar mensaje basado en la categoría
function displayMessage(category) {
    const message = document.getElementById('message');
    let msgText = "";

    switch (category.toLowerCase()) {
        case "frutas y verduras":
            msgText = "ERES UN CLIENTE QUE DESEA MANTENER SU SALUD EN BUEN ESTADO.";
            break;
        case "panadería":
            msgText = "¡HORA DE DISFRUTAR ALGO DULCE Y FRESCO!";
            break;
        case "carnicería":
            msgText = "¡PROTEÍNAS PARA UNA DIETA FUERTE Y SANA!";
            break;
        default:
            msgText = "";
            break;
    }

    message.textContent = msgText;
}

// Manejo del formulario
document.getElementById('filterForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const categoryInput = document.getElementById('categoryInput').value;
    
    if (categoryInput.trim() === "") {
        alert("Por favor, ingresa una categoría.");
        return;
    }

    const filteredProducts = filterProductsByCategory(categoryInput);
    displayProducts(filteredProducts);
    displayMessage(categoryInput);
});
