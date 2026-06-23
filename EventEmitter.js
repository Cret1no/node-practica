// Se importa en modulo Events, el nombre comienza con mayusculas porque estamos hablando de una clase
const EventEmitter = require("events");

//nueva instancia de Eventemitter
const batiSeñal = new EventEmitter();

//Generamos el evento "crimen"
batiSeñal.on("crimen", () => {
  return console.log(`PIM PAM PUM CRASH
            SOY BATMAN!!!`);
});

//Emitimos en el evento "crimen"
batiSeñal.emit("crimen");
