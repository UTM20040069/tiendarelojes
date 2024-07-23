// Importamos la función eliminarItemCarrito desde el archivo carrito.js
const { eliminarItemCarrito } = require('../carrito/src/app');

// Simulamos una estructura del DOM relevante para la prueba
document.body.innerHTML = `
  <div class="carrito-items">
    <div class="carrito-item">
      <button class="btn-eliminar">Eliminar</button>
    </div>
  </div>
`;

// Definimos una prueba utilizando el método test de Jest
test('eliminarItemCarrito elimina el item del carrito', () => {
  // Simulamos el evento de click, seleccionando el botón de eliminar del DOM simulado
  const event = {
    target: document.querySelector('.btn-eliminar'),
  };
  // Llamamos a la función eliminarItemCarrito pasando el evento simulado
  eliminarItemCarrito(event);
  // Verificamos que el elemento carrito-item haya sido eliminado del DOM
  const carritoItems = document.querySelector('.carrito-items');
  expect(carritoItems.children.length).toBe(0);
});