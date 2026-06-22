// se importa maths.js con require y destructuring

const { sum, res, mul } = require("./maths.js");
const { mostrarTema } = require("./mostrar-tema.js");

//setImmediate se ejecuta despues de todo el codigo sincrono

console.log("esto sale antes del setImmediate");
setImmediate(mostrarTema, "Node.js");
console.log("esto sale despues del setImmediate");
console.log("esto sale despues del setImmediate");
