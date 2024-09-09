// Constantes y arrays
const productos = [
    { id: 1, nombre: "Colchoneta Alta Densidad", precio: 10000 },
    { id: 2, nombre: "Colchoneta Ecónomica", precio: 7000 },
    { id: 3, nombre: "Colchoneta Yoga Mat 6mm", precio: 12500 },
    { id: 4, nombre: "Tobilleras (con cierre/elpar) 1 kg", precio: 7000 },
    { id: 5, nombre: "Tobillera (con cierre/elpar) 2 kg", precio: 7500 },
    { id: 6, nombre: "Tobillera (con cierre/elpar) 3 kg", precio: 8000 },
    { id: 7, nombre: "Tobillera (con cierre/elpar) 4 kg", precio: 11000 },
    { id: 8, nombre: "Tobillera (con cierre/elpar) 5 kg", precio: 14000 },
    { id: 9, nombre: "Mancuerna de pvc (elpar) 1 kg", precio: 5500 },
    { id: 10, nombre: "Mancuerna de pvc (elpar) 2 kg", precio: 8500 },
    { id: 11, nombre: "Mancuerna de pvc (elpar) 3 kg", precio: 9000 },
    { id: 12, nombre: "Mancuerna de pvc (elpar) 4 kg", precio: 10000 },
    { id: 13, nombre: "Mancuerna de pvc (elpar) 5 kg", precio: 12000 },
    { id: 14, nombre: "Banda elástica revestida con manija (tren superior)", precio: 10500 },
    { id: 15, nombre: "Banda elástica reforzada con manija (tren superior)", precio: 10000 },
    { id: 16, nombre: "Banda elástica x3 intensidades (tren inferior)", precio: 7000 },
    { id: 17, nombre: "Banda de suspención simil trx", precio: 15000 },
    { id: 18, nombre: "Theraband lineal 0,35 cm", precio: 5500 },
    { id: 19, nombre: "Theraband lineal 0,45 cm", precio: 6500 },
    { id: 20, nombre: "Theraband lineal 0,55 cm", precio: 7500 },
    { id: 21, nombre: "Banda de dominadas 1,3 cm", precio: 12500 },
    { id: 22, nombre: "Banda de dominadas 2,2 cm", precio: 18000 },
    { id: 23, nombre: "Banda de dominadas 3,2 cm", precio: 23500 },
    { id: 24, nombre: "Banda de dominadas 4,4 cm", precio: 33500 },
    { id: 25, nombre: "kit de banda elástica x5 intensidades", precio: 8000 },
    { id: 26, nombre: "Pesas rutas de pvc 2 kg", precio: 5500 },
    { id: 27, nombre: "Pesas rutas de pvc 3 kg", precio: 5600 },
    { id: 28, nombre: "Pesas rutas de pvc 4 kg", precio: 5700 },
    { id: 29, nombre: "Pesas rutas de pvc 5 kg", precio: 6000 },
    { id: 30, nombre: "Pesas rutas de pvc 6 kg", precio: 6200 },
    { id: 31, nombre: "Pesas rutas de pvc 7 kg", precio: 7000 },
    { id: 32, nombre: "Pesas rutas de pvc 8 kg", precio: 7500 },
    { id: 33, nombre: "Pesas rutas de pvc 9 kg", precio: 7500 },
    { id: 34, nombre: "Pesas rutas de pvc 10 kg", precio: 8000 },
    { id: 35, nombre: "Pesas rutas de pvc 11 kg", precio: 8200 },
    { id: 36, nombre: "Pesas rutas de pvc 12 kg", precio: 9200 },
    { id: 37, nombre: "Pesas rutas de pvc 14 kg", precio: 10000 },
    { id: 38, nombre: "Pesas rutas de pvc 16 kg", precio: 11000 },
    { id: 39, nombre: "Kit Localizada 15 kg", precio: 6000 },
    { id: 40, nombre: "Kit Localizada 18 kg", precio: 6200 },
    { id: 41, nombre: "Kit Localizada 20 kg", precio: 7000 },
    { id: 42, nombre: "Disco de pvc 8 kg", precio: 7500 },
    { id: 43, nombre: "Disco de pvc 9 kg", precio: 7500 },
    { id: 44, nombre: "Disco de pvc 10 kg", precio: 8000 },
    { id: 45, nombre: "Disco de pvc 11 kg", precio: 8200 },
    { id: 46, nombre: "Disco de pvc 12 kg", precio: 9200 },
    { id: 47, nombre: "Pesas rutas de pvc 14 kg", precio: 10000 },
    { id: 48, nombre: "Pesas rutas de pvc 16 kg", precio: 11000 },
];
const carrito = [];

// Función para mostrar productos según categoría
function mostrarProductos(categoria) {
    let lista = "Productos disponibles en esta categoría:\n";
    let productosFiltrados = [];

    switch(categoria) {
        case '1': // Colchonetas
            productosFiltrados = productos.slice(0, 3);
            break;
        case '2': // Tobilleras
            productosFiltrados = productos.slice(3, 8);
            break;
        case '3': // Mancuernas
            productosFiltrados = productos.slice(8, 13);
            break;
        case '4': // Bandas
            productosFiltrados = productos.slice(13, 25);
            break;
        case '5': // Pesas Rusas
            productosFiltrados = productos.slice(25, 38);
            break;
        case '6': // Localizada
            productosFiltrados = productos.slice(38, 46);
            break;
        default:
            alert("Categoría no válida.");
            return;
    }

    for (let producto of productosFiltrados) {
        lista += `${producto.id}. ${producto.nombre} - $${producto.precio}\n`;
    }
    
    return lista;
}

// Función para mostrar el menú de categorías
function mostrarMenuCategorias() {
    return "Elige una categoría:\n1. Colchonetas\n2. Tobilleras\n3. Mancuernas\n4. Bandas\n5. Pesas Rusas\n6. Localizada";
}

// Función para iniciar la compra
function iniciarCompra() {
    let continuar = true;

    while (continuar) {
        const categoriaSeleccionada = prompt(mostrarMenuCategorias() + "\nIngrese el número de la categoría que desea ver:");

        // Mostrar los productos de la categoría seleccionada
        const productosDeCategoria = mostrarProductos(categoriaSeleccionada);

        if (!productosDeCategoria) {
            continue;
        }

        const seleccion = prompt(productosDeCategoria + "\nIngrese el número del producto que desea comprar:");

        // Buscar el producto seleccionado
        const productoSeleccionado = productos.find(producto => producto.id == seleccion);

        if (productoSeleccionado) {
            carrito.push(productoSeleccionado);
            alert(`Has agregado ${productoSeleccionado.nombre} a tu carrito.`);
        } else {
            alert("Producto no válido, intenta nuevamente.");
        }

        continuar = confirm("¿Deseas agregar otro producto?");
    }

    finalizarCompra();
}

// Función para finalizar la compra
function finalizarCompra() {
    
    if (carrito.length === 0) {
        alert("No has seleccionado ningún producto.");
        return;
    }

    let total = 0;
    let resumen = "Has comprado:\n";

    
    for (let producto of carrito) {
        resumen += `${producto.nombre} - $${producto.precio}\n`;
        total += producto.precio;
    }

    alert(resumen + `\nTotal: $${total}`);
    
    // Mostrar en la consola el resumen de la compra
    console.log("Resumen de la compra:", resumen, `Total: $${total}`);
}
