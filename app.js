// importamos el modulo built-in fs(file-system)

const fs = require("fs");

//usamos el metodo readFile para leer archivo, sabemos que es un metodo asyn por lo que el tercer
// parametro es una funcion para manejar la respuesta exitosa o fallida(Ej: err/data)
// ubicacion del archivo que queremos leer | codificacion | funcion a ejecutar despues de la lectura
//throw err detiene la funcion mientras que console.log(err) no

/*fs.readFile("./index.html", "utf-8", (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
});*/

//cambiar nombre de una archivo con el metodo rename
//archivo a cambiar nombre | nuevo nombre | funcion con (err)

/*fs.rename("./index.html", "main.html", (err) => {
  if (err) {
    throw err;
  }
  console.log("Se modifico el nombre del archivo correctamente");
});*/

//Agregar contenido al final de un archivo
//archivo | contenido | funcion(err)

fs.appendFile(
  "./index.html",
  "<p>Este parrafo es agregado al final con el metodo appendFile</p>",
  (err) => {
    if (err) {
      throw err;
    }
    console.log("Archivo modificado exitosamente");
  },
);
