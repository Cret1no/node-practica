function hacerPedido(producto) {
  return new Promise((resolve, reject) => {
    console.log(`Procesando compra de producto: ${producto}`);
    setTimeout(() => {
      if (producto === "remera") {
        resolve("Su compra fue procesado con exito");
      } else {
        reject("El producto no se encuentra disponible en este momento");
      }
    }, 2000);
  });
}

//Funcion para procesar la compra devuelve otra promesa
//Utilizo solo resolve porque por ahora voy a trabajar solo con la respuesta positiva
function procesarPedido(respuesta) {
  return new Promise((resolve) => {
    console.log("Procesando respuesta....");
    console.log(`La respuesta fue: ${respuesta}`);
    setTimeout(() => {
      resolve("Gracias por su compra. Disfruta tu producto!");
    }, 4000);
  });
}

//Chaining Promises con then y catch
/*hacerPedido("remera")
  .then((respuesta) => {
    console.log("Respuesta recibida");
    console.log(respuesta);
    return procesarPedido(respuesta);
  })
  .then((respuestaProcesada) => {
    console.log(respuestaProcesada);
  })
  .catch((err) => {
    console.log(err);
  });*/

//Chaining Promises con async y await
async function comprarProducto(producto) {
  try {
    const respuesta = await hacerPedido(producto);
    console.log("respuesta recibida");
    console.log(respuesta);
    const respuestaProcesada = await procesarPedido(respuesta);
    console.log(respuestaProcesada);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("Remeras Cret1no");
  }
}

comprarProducto("pantalon");
