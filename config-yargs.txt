const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Es la base de la tabla de multiplicar",
  })
  .check((argv, options) => {
    console.log("Yargs: ", argv);
    if (isNaN(argv.base)) {
      throw "La base tiene que ser un número";
    }
    return true;
  })
  .option("l", {
    alias: "list",
    type: "boolean",
    default: false,
    describe: "Muestra por pantalla la tabla de multiplicar",
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    default: 10,
    describe: "Número hasta el cual se harán las tablas de multiplicar",
  }).argv;

module.exports = argv;
