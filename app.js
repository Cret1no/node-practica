// se importa maths.js con require y destructuring

const { sum, res, mul } = require("./maths.js");
const { mostrarTema } = require("./mostrar-tema.js");

//setImmediate se ejecuta despues de todo el codigo sincrono

setInterval(mostrarTema, 2000, "Node js");
