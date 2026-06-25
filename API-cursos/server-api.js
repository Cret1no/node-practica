const http = require("http");

const { infoCursos } = require("../API-cursos/cursos.js");
const { stringify } = require("querystring");

const server = http.createServer((req, res) => {
  //vamos a tomar el metodo de la request
  const { method } = req;

  //vamos a manejar los distintos casos de 'method'
  switch (method) {
    case "GET":
      //funcion para manejar la solicitud 'GET
      return manejarSolicitudGET(req, res);
    case "POST":
      return manejarSolicitudPOST(req, res);
    default:
      res.statusCode = 501;
      res.end(`El metodo no puede ser usado por el servidor: ${method}`);
      break;
  }
  res.end(`El mejor curso es: ${infoCursos.infoCursos.programacion[0].titulo}`);
});

function manejarSolicitudGET(req, res) {
  const path = req.url;

  if (path === "/") {
    //Editamos cabecera (statusCode, objeto)
    res.writeHead(200, { "Content-Type": "application/json" });
    //Asignamos de forma explicita el codigo 200 pero no es necesario
    // ya que esta es el codigo que se aigna por defecto
    //res.statusCode = 200;
    return res.end(
      "Bienvenidos a mi primer servidor y API creados con Node.js",
    );
  } else if (path === "/cursos") {
    return res.end(JSON.stringify(infoCursos));
  } else if (path === "/cursos/programacion") {
    return res.end(JSON.stringify(infoCursos.programacion));
  }

  res.statusCode = 404;
  return res.end("El recurso solicitado no se encuentra disponible...");
}

function manejarSolicitudPOST(req, res) {
  const path = req.url;

  if (path === "/cursos/programacion") {
    return res.end("El servidor recibio una solitud POST!");
  }

  res.statusCode = 404;
  return res.end("El recurso solicitado no se encuentra disponible...");
}

const PORT = 3000;

server.listen(PORT, () => {
  console.log("Servidor escuchando en http://localhost:3000...");
});
