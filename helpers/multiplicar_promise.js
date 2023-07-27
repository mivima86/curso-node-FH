const fs = require("fs");
const crearArchivo = (base = 5) => {
  //

  const promesa = new Promise((resolve, reject) => {
    console.log("========================");
    console.log(`======Tabla del ${base}======`);
    console.log("========================");
    let salida = "";
    for (let i = 1; i <= 10; i++) {
      let resultado = base * i;
      salida += `${base} * ${i} = ${resultado}\n`;
    }
    console.log(salida);
    fs.writeFileSync(`tabla-${base}.txt`, salida);
    return `El fichero tabla-${base}.txt se ha creado con éxito`;
  });
  return promesa;
};

module.exports = {
  crearArchivo,
};
