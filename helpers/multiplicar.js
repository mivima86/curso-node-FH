const fs = require("fs");
const colors = require("colors");
const crearArchivo = async (base = 5, listar=false, hasta=10) => {
  //
  try {

    let h = hasta;
    let salida = "";
    for (let i = 1; i <= h; i++) {
      let resultado = base * i;
      salida += `${base} * ${i} = ${resultado}\n`;
    }
    if(listar){
    //SI LISTAR es TRUE MOSTRAR SALIDA
    console.log(colors.rainbow("========================"));
    console.log(`======Tabla del ${base}======`.trap);
    console.log(colors.rainbow("========================"));
    console.log(salida);
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    return `El fichero tabla-${base}.txt se ha creado con éxito`;
  }
  else{
    fs.writeFileSync(`tabla-${base}.txt`, salida);
    return `El fichero tabla-${base}.txt se ha creado con éxito`;
  }
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
};
