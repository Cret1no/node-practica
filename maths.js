function sum(a, b) {
  return a + b;
}

function res(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

//se exporta las funciones con module.exports como un objeto

module.exports = {
  sum: sum,
  res: res,
  mul: mul,
};
