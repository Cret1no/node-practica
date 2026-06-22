// importamos el modulo built-in fs(file-system)

const fs = require("fs");

//Vamos a usar los metodos en formato "SYNC" para que sean sincronos y se puedan ejecutar en orden

const data = fs.readFileSync("./index.html", "utf-8");

console.log(data);

fs.renameSync("./index.html", "main.html");

fs.appendFileSync(
  "./main.html",
  "<p>Este parrafo es agregado al final con el metodo appendFile</p>",
);

fs.writeFileSync("./main.html", "<h1>Este es el nuevo contenido</h1>");

fs.unlinkSync("./main.html");
