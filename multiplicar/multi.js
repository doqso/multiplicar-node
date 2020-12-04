// REQUIRES
const fs = require('fs');
/* */
// Ejercicio 1 << Elnazar archivos
let crearArchivo = (base, limite) => { // 2. paso
    return new Promise((resolve, reject) => {

        let tablMult = '';

        for (let i = 1; i <= limite; i++) {
            tablMult += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`./multiplicar/tabla-${base}.txt`, tablMult, (err) => {
            if (err) reject(err);
            else resolve(`tabla-${base}.txt`);
        })
    })
}

// Ejercicio 2 << Trabajando con Yargs
let listarTabla = (base, limite) =>{
    for (let i = 1; i <= limite; i++){
        console.log(`${base} * ${i} = `, Number(base) * i);
    }
}

// Como volverlo exportable
module.exports = {
    crearArchivo,
    listarTabla
}
/* */