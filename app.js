const fs = require("fs");
const {boolean} = require("yargs");
const {crearArchivo} = require("./helpers/multiplicar");
const argv = require("./config/yargs");
var colors = require("colors");
console.clear();

crearArchivo(argv.b, argv.l, argv.h)
  .then((nombreArchivo)=>console.log(nombreArchivo,"creado"))
  .catch((err)=>console.log(err));

/*const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("yargs/yargs")
.option("b", {
  alias: "base",
  type: "number",
}).arguments;

console.clear();

console.log(process.argv);
console.log(argv);
//const [, , arg3 = "base=5"] = process.argv;
//const [, base = 5] = arg3.split("=");
//
//crearArchivo(13)
//  .then((crearArchivo) => console.log(crearArchivo))
//  .catch((err) => console.log(err));
*/