const { sumarCantidad } = require('../carrito/src/app');

document.body.innerHTML = `
  <div class="carrito-item-detalles">
    <input type="text" value="1" class="carrito-item-cantidad" disabled>
  </div>
`;

test('sumarCantidad aumenta la cantidad en uno', () => {
  const event = {
    target: document.querySelector('.carrito-item-cantidad'),
  };
  sumarCantidad(event);
  expect(event.target.value).toBe('2');
});