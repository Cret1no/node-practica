//Genera un status aleatorio con mas posibilidades de que sea true
const statusPedido = () => {
  return Math.random() < 0.8;
};

const miPedido = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (statusPedido()) {
      resolve("Tu pedido fue recibido exitosamente!");
    } else {
      reject("Tu pedido no se pudo procesar");
    }
  }, 3000);
});

const pedidoExitoso = (mensajeExitoso) => console.log(mensajeExitoso);
const pedidoRechazado = (mensajeRechazo) => console.log(mensajeRechazo);

//miPedido.then(pedidoExitoso, pedidoRechazado);

//Otra forma con then y catch(metodo de promesa que maneja el reject)
miPedido
  .then((mensajeExitoso) => {
    console.log(mensajeExitoso);
  })
  .catch((mensajeRechazo) => {
    console.log(mensajeRechazo);
  });
