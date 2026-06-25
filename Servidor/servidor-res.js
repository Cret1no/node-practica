const http = require("http");

const server = http.createServer((req, res) => {
  console.log("===> res (respuesta)");
  console.log(res.statusCode); // 200
  res.statusCode = 404; // Asignamos otro valor al statusCode
  console.log(res.statusCode);
  // Seteamos un header de la respuesta
  res.setHeader("content-type", "application/json");
  // metodo para obtener headers
  console.log(res.getHeaders());
  res.end("Hola, Mundo!");
});

const PUERTO = 3000;

server.listen(PUERTO, () => {
  console.log(`Escuchando en http://localhost:${PUERTO}`);
});
