// Se importa en modulo Events, el nombre comienza con mayusculas porque estamos hablando de una clase
const EventEmitter = require("events");

//nueva instancia de Eventemitter(emisor del evento)
const emisorBatiSeñal = new EventEmitter();

//Generamos el evento "crimen" y la funcion que va a ocurrir en ese evento(Event Handler)
emisorBatiSeñal.on("crimen", (enemigo) => {
  return console.log(`
            PIM! PAM! PUM! CRASH!
            SOY BATMAN!!!
            ${enemigo} abatido`);
});

//Emitimos en el evento "crimen"
emisorBatiSeñal.emit("crimen", "Guason");
