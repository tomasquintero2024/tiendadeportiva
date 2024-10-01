// Variables globales
const carrito = [];
let usuarioActual = null;

// Clases
class Producto {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}

class Usuario {
    constructor(nombreUsuario, password) {
        this.nombreUsuario = nombreUsuario;
        this.password = password;
    }
}

class Carrito {
    constructor() {
        this.items = [];
    }

    agregarProducto(producto) {
        this.items.push(producto);
        guardarEnStorage('carrito', this.items);
        renderizarCarrito();
        alert(`Has agregado ${producto.nombre} a tu carrito.`);
    }

    obtenerTotal() {
        return this.items.reduce((total, producto) => total + producto.precio, 0);
    }

    mostrarResumen() {
        let resumen = "Has comprado:\n";
        for (let producto of this.items) {
            resumen += `${producto.nombre} - $${producto.precio}\n`;
        }
        resumen += `\nTotal: $${this.obtenerTotal()}`;
        return resumen;
    }

    limpiarCarrito() {
        this.items = [];
        guardarEnStorage('carrito', this.items);
        renderizarCarrito();
    }
}

// Productos disponibles
const productos = [
    new Producto(1, "Colchoneta Alta Densidad", 10000),
    new Producto(2, "Colchoneta Económica", 7000),
    new Producto(3, "Colchoneta Yoga Mat 6mm", 12500),
    new Producto(4, "Tobilleras (con cierre/elpar) 1 kg", 7000),
    new Producto(5, "Tobillera (con cierre/elpar) 2 kg", 7500),
    new Producto(6, "Tobillera (con cierre/elpar) 3 kg", 8000),
    new Producto(7, "Tobillera (con cierre/elpar) 4 kg", 11000),
    new Producto(8, "Tobillera (con cierre/elpar) 5 kg", 14000),
    new Producto(9, "Mancuerna de pvc (elpar) 1 kg", 5500),
    new Producto(10, "Mancuerna de pvc (elpar) 2 kg", 8500),
    new Producto(11, "Mancuerna de pvc (elpar) 3 kg", 9000),
    new Producto(12, "Mancuerna de pvc (elpar) 4 kg", 10000),
    new Producto(13, "Mancuerna de pvc (elpar) 5 kg", 12000),
    new Producto(14, "Banda elástica revestida con manija (tren superior)", 10500),
    new Producto(15, "Banda elástica reforzada con manija (tren superior)", 10000),
    new Producto(16, "Banda elástica x3 intensidades (tren inferior)", 7000),
    new Producto(17, "Banda de suspención simil trx", 15000),
    new Producto(18, "Theraband lineal 0,35 cm", 5500),
    new Producto(19, "Theraband lineal 0,45 cm", 6500),
    new Producto(20, "Theraband lineal 0,55 cm", 7500),
    new Producto(21, "Banda de dominadas 1,3 cm", 12500),
    new Producto(22, "Banda de dominadas 2,2 cm", 18000),
    new Producto(23, "Banda de dominadas 3,2 cm", 23500),
    new Producto(24, "Banda de dominadas 4,4 cm", 33500),
    new Producto(25, "kit de banda elástica x5 intensidades", 8000),
    new Producto(26, "Pesas rusas de pvc 2 kg", 5500),
    new Producto(27, "Pesas rusas de pvc 3 kg", 5600),
    new Producto(28, "Pesas rusas de pvc 4 kg", 5700),
    new Producto(29, "Pesas rusas de pvc 5 kg", 6000),
    new Producto(30, "Pesas rusas de pvc 6 kg", 6200),
    new Producto(31, "Pesas rusas de pvc 7 kg", 7000),
    new Producto(32, "Pesas rusas de pvc 8 kg", 7500),
    new Producto(33, "Pesas rusas de pvc 9 kg", 7500),
    new Producto(34, "Pesas rusas de pvc 10 kg", 8000),
    new Producto(35, "Pesas rusas de pvc 11 kg", 8200),
    new Producto(36, "Pesas rusas de pvc 12 kg", 9200),
    new Producto(37, "Pesas rusas de pvc 14 kg", 10000),
    new Producto(38, "Pesas rusas de pvc 16 kg", 11000),
    new Producto(39, "Kit Localizada 15 kg", 6000),
    new Producto(40, "Kit Localizada 18 kg", 6200),
    new Producto(41, "Kit Localizada 20 kg", 7000),
    new Producto(42, "Disco de pvc 8 kg", 7500),
    new Producto(43, "Disco de pvc 9 kg", 7500),
    new Producto(44, "Disco de pvc 10 kg", 8000),
    new Producto(45, "Disco de pvc 11 kg", 8200),
    new Producto(46, "Disco de pvc 12 kg", 9200),
    new Producto(47, "Pesas rusas de pvc 14 kg", 10000),
    new Producto(48, "Pesas rusas de pvc 16 kg", 11000),
];

// Funciones para interactuar con el DOM
function renderizarProductos() {
    const listaProductos = document.getElementById('listaProductos');
    listaProductos.innerHTML = '';

    productos.forEach(producto => {
        const divProducto = document.createElement('div');
        divProducto.innerHTML = `
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio}</p>
            <button data-id="${producto.id}">Agregar al carrito</button>
        `;
        listaProductos.appendChild(divProducto);

        // Agregar evento al botón
        divProducto.querySelector('button').addEventListener('click', () => {
            const carrito = obtenerCarrito();
            const productoSeleccionado = productos.find(p => p.id == producto.id);
            carrito.agregarProducto(productoSeleccionado);
        });
    });
}

function renderizarCarrito() {
    const resumenCarrito = document.getElementById('resumenCarrito');
    const carrito = obtenerCarrito();
    resumenCarrito.innerHTML = '';

    if (carrito.items.length > 0) {
        carrito.items.forEach(item => {
            resumenCarrito.innerHTML += `<p>${item.nombre} - $${item.precio}</p>`;
        });
        document.getElementById('btnFinalizarCompra').style.display = 'block';
    } else {
        resumenCarrito.innerHTML = '<p>El carrito está vacío.</p>';
        document.getElementById('btnFinalizarCompra').style.display = 'none';
    }
}

// Funciones de localStorage
function guardarEnStorage(clave, valor) {
    localStorage.setItem(clave, JSON.stringify(valor));
}

function obtenerCarrito() {
    const carritoGuardado = JSON.parse(localStorage.getItem('carrito')) || [];
    const carrito = new Carrito();
    carrito.items = carritoGuardado;
    return carrito;
}

function obtenerUsuario() {
    return JSON.parse(localStorage.getItem('usuario')) || null;
}

// Funciones de autenticación
function registrarUsuario() {
    const nombreUsuario = prompt("Ingrese su nombre de usuario:");
    const password = prompt("Ingrese su contraseña:");

    if (nombreUsuario && password) {
        const usuario = new Usuario(nombreUsuario, password);
        guardarEnStorage('usuario', usuario);
        alert("Usuario registrado con éxito.");
        usuarioActual = usuario;
    } else {
        alert("Debe ingresar un nombre de usuario y contraseña válidos.");
    }
}

function iniciarSesion() {
    const nombreUsuario = prompt("Ingrese su nombre de usuario:");
    const password = prompt("Ingrese su contraseña:");
    const usuarioGuardado = obtenerUsuario();

    if (usuarioGuardado && nombreUsuario === usuarioGuardado.nombreUsuario && password === usuarioGuardado.password) {
        alert(`¡Bienvenido, ${usuarioGuardado.nombreUsuario}!`);
        usuarioActual = usuarioGuardado;
    } else {
        alert("Nombre de usuario o contraseña incorrectos.");
    }
}

// Inicializar la tienda
document.addEventListener('DOMContentLoaded', () => {
    renderizarProductos();
    renderizarCarrito();

    const btnIniciarSesion = document.getElementById('btnIniciarSesion');
    btnIniciarSesion.addEventListener('click', manejarAutenticacion);

    const btnFinalizarCompra = document.getElementById('btnFinalizarCompra');
    btnFinalizarCompra.addEventListener('click', () => {
        const carrito = obtenerCarrito();
        if (carrito.items.length === 0) {
            alert("El carrito está vacío.");
            return;
        }
        alert(carrito.mostrarResumen());
        carrito.limpiarCarrito();
    });
});

function manejarAutenticacion() {
    const opcion = prompt("¿Tienes cuenta?\n1. Iniciar Sesión\n2. Registrarse\nIngrese el número de la opción:");

    if (opcion === '1') {
        iniciarSesion();
    } else if (opcion === '2') {
        registrarUsuario();
    } else {
        alert("Opción no válida.");
    }
}

function mostrarMenuCategorias() {
    return `
        1. Colchonetas
        2. Tobilleras
        3. Mancuernas
        4. Bandas elásticas
        5. Pesas rusas
        6. Kits Localizada
        7. Discos de PVC
    `;
}
