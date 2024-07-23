// Importamos la función actualizarTotalCarrito desde el archivo carrito.js
const { actualizarTotalCarrito } = require('../carrito/src/app');

// Simulamos una estructura del DOM relevante para la prueba
document.body.innerHTML = `
  <div class="carrito">
    <div class="carrito-items">
      <div class="carrito-item">
        <div class="carrito-item-detalles">
          <input type="text" value="1" class="carrito-item-cantidad" disabled>
        </div>
        <span class="carrito-item-precio">$1000,00</span>
      </div>
    </div>
  </div>
  <div class="carrito-precio-total">$0,00</div>
`;

// Definimos una prueba utilizando el método test de Jest
test('actualizarTotalCarrito actualiza el total del carrito', () => {
  // Llamamos a la función actualizarTotalCarrito para actualizar el total
  actualizarTotalCarrito();
  // Seleccionamos el elemento que muestra el total del carrito del DOM simulado
  const totalElement = document.querySelector('.carrito-precio-total');
  // Verificamos que el total del carrito se haya actualizado correctamente
  expect(totalElement.innerText).toBe('$1.000,00');
});
