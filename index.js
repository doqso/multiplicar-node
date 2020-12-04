// REQUIRES
const fs = require('fs');
const colors = require('colors');
const {
  crearArchivo,
  listarTabla
} = require('./multiplicar/multi');
const argv = require(`./config/yargs`).argv;
// Proyecto<<<<<<<<<<<<<<<<<<<<<<<<<

// pruebas con YARGS
let comando = argv._[0];

switch (comando) {
  case 'listar':
    listarTabla(argv.base, argv.limite);
    break;

  case `crear`:
    crearArchivo(argv.base, argv.limite) // 1. paso
      .then(nombreArchivo => { // 3. paso
        console.log(`===============================`.blue);
        console.log(`Archivo creado: `, nombreArchivo.green);
        console.log(`===============================`.blue);

      }).catch(err => {
        console.log(err);
      })
    break;

  default:
    console.log(`Comando no reconocido`);
}
// console.log(argv);


// console.log('Limite: ', argv.limite);
/*
/////////////////////////////////////
// Extraer datos de la consola **(importante)** <<<<<<<<<<<<<<<<<
let argv = process.argv;
let num1 = "";
for (i in argv) {
  if (argv[i].includes("--num1")) {
    num1 = Number(argv[i].split("=")[1]);
  }
}
console.log(`la numero obtenido es:`, num1);
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<
*/