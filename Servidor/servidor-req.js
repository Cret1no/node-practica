const http = require("http");

const servidor = http.createServer((req, res) => {
  //es la url con la que se hace la solicitud(despues de "/")
  console.log(req.url);
  //es el metodo de la solicitud
  console.log(req.method);
  //headers de la solicitud
  console.log(req.headers);
  res.end("Soy Batman!");
});

const PUERTO = 3000;

servidor.listen(PUERTO, () => {
  console.log(`Servidor escuchando en http://localhost:${PUERTO}...`);
});
