// se importa maths.js con require y destructuring

const { sum, res, mul } = require("./maths.js");

setTimeout(() => {
  console.log(sum(2, 3));
}, 3000);
