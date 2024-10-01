Tienda Deportiva Interactiva
Este proyecto es un simulador de una tienda interactiva para la compra de artículos deportivos. Los usuarios pueden registrarse, iniciar sesión, navegar entre diferentes productos, agregar productos a su carrito y finalizar la compra.

Funcionalidades
Registro e Inicio de Sesión: Los usuarios pueden registrarse e iniciar sesión para realizar compras.
Selección de Productos: Los productos están organizados en diferentes categorías, como colchonetas, tobilleras, mancuernas, bandas elásticas, pesas rusas y kits de localizada.
Carrito de Compras: Los usuarios pueden agregar productos a su carrito, ver un resumen del total de la compra, y finalizarla.
LocalStorage: La información del carrito de compras y los datos del usuario se almacenan en el LocalStorage para que se mantengan al recargar la página.
Interacción con el DOM: La aplicación captura eventos del DOM para la autenticación, agregar productos al carrito y finalizar la compra.
Resumen de Compra: Los usuarios pueden visualizar un resumen de los productos en el carrito antes de finalizar la compra.
Estructura del Código
Variables Globales
carrito: Array que almacena los productos agregados al carrito.
usuarioActual: Variable que almacena el usuario autenticado actualmente.
Clases
Producto: Representa un producto con su id, nombre, y precio.
Usuario: Representa un usuario con nombreUsuario y password.
Carrito: Gestiona los productos agregados al carrito, su total, y la limpieza del carrito.
Funciones
agregarProducto(producto): Agrega un producto al carrito y lo guarda en LocalStorage.
mostrarResumen(): Muestra el resumen de la compra incluyendo los productos y el total.
renderizarProductos(): Renderiza los productos disponibles en el DOM.
renderizarCarrito(): Renderiza el estado actual del carrito en el DOM.
guardarEnStorage(clave, valor): Guarda información en el LocalStorage.
obtenerCarrito(): Obtiene los productos almacenados en el carrito desde el LocalStorage.
registrarUsuario(): Registra un nuevo usuario y lo guarda en el LocalStorage.
iniciarSesion(): Verifica las credenciales del usuario para iniciar sesión.
Almacenamiento en LocalStorage
El carrito y los datos del usuario se guardan en el LocalStorage para mantener persistencia de los datos al actualizar la página.
Eventos del DOM
Eventos de clic para agregar productos al carrito, iniciar sesión y finalizar la compra.
Eventos de carga de la página para renderizar los productos y el carrito almacenado en LocalStorage.
Estructura HTML
El HTML tiene contenedores específicos para:

Lista de productos: Donde se renderizan los productos disponibles.
Resumen del carrito: Donde se muestran los productos agregados al carrito.
Botones de autenticación: Para el inicio de sesión y registro de usuarios.
Uso
Al cargar la página, los productos disponibles se renderizan.
El usuario puede agregar productos al carrito haciendo clic en los botones correspondientes.
Si no está registrado, el usuario debe registrarse para poder finalizar la compra.
Al finalizar la compra, se muestra un resumen de los productos adquiridos, junto con el total de la compra.
El carrito se limpia automáticamente al finalizar la compra.
Requisitos
Este proyecto funciona sin la necesidad de instalar ningún framework de JavaScript (React, Angular, etc.). Se utilizan tecnologías como HTML, CSS (se puede usar Bootstrap para el estilo) y JavaScript puro. Además, la interacción con el almacenamiento y el procesamiento de datos se maneja mediante LocalStorage, arrays y objetos.
