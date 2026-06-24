//Importamos el modulo HTTP
const http = require("http");
//Utilizamos el metodo createServer para crear servidor
//Callback funcion con dos parametros req/res(request/response)
const servidor = http.createServer((req, res) => {
  //Aca va a ir la Logica que se aplique en cada request
  console.log("Solicitud recibida");
  //metodo end, lo que se envia en la response
  res.end("Hola, mundo!");
});

const PUERTO = 3000;
//metodo listen para que el servidor empieze a escuchar
//se especifica el puerto y una callback funcion
servidor.listen(PUERTO, () => {
  console.log(`Servidor escuchando en: http://localhost:${PUERTO}...`);
});
