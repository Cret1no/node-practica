const { rejects } = require("node:assert/strict");
const { resolve } = require("node:dns");

const promesaCumplida = true;

// nueva instancia de promesa, es una callback con dos parametros(resolve, reject) que tambien son funciones
const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (promesaCumplida) {
      resolve("Promesa cumplida");
    } else {
      reject("Error en promesa");
    }
  }, 3000);
});

// .then recibe como parametro 2 callback, la primera para el caso exitoso, la segunda para el rechazo ambas tienen como parametro el resultado de la promesa(resuelta o rechazada)
/*promesa.then(
  (resultado) => console.log(resultado),
  (razonDeRechazo) => console.log(razonDeRechazo),
);*/

//Por cuestiones de legibidad tambien se puede declarar la variables antes

const promesaExitosa = (resultado) => {
  console.log(resultado);
};

const promesaRechazada = (razonDeRechazo) => {
  console.log(razonDeRechazo);
};

promesa.then(promesaExitosa, promesaRechazada);
