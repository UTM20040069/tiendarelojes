// Importamos la función restarCantidad desde el archivo carrito.js
const { restarCantidad } = require('../carrito/src/app');

// Simulamos una estructura del DOM relevante para la prueba
document.body.innerHTML = `
  <div class="carrito-item-detalles">
    <input type="text" value="2" class="carrito-item-cantidad" disabled>
  </div>
`;

// Definimos una prueba utilizando el método test de Jest
test('restarCantidad disminuye la cantidad en uno', () => {
  // Simulamos el evento de click, seleccionando el input del DOM simulado
  const event = {
    target: document.querySelector('.carrito-item-cantidad'),
  };
  // Llamamos a la función restarCantidad pasando el evento simulado
  restarCantidad(event);
  // Verificamos que el valor del input haya disminuido en 1
  expect(event.target.value).toBe('1');
});
