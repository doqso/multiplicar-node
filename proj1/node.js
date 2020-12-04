//>>>>>>>>>>>>>>> los Require <<<<<<<<<<<<<<<<<<<<<<
// const colors = require('colors');

// >>>>>>>>>>>>>>>>>>>>>>> ASYNC <<<<<<<<<<<<<<<<<<<<<<<<
// SALARIO
let getSalario = async empleado => {
    // Conseguir la ID a partir del nombre recibido
    let empleadoObj = empleados.find(salario => salario.nombre === empleado.nombre);
    let salarioObj = salarios.find(id => id.id === empleadoObj.id);
    if (!salarioObj) {
        throw new Error(`'${empleado.nombre}' No dispone de salario`);
    } else {
        return salarioObj;
    }
};
// EMPLEADO
let getEmpleado = async id => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);
    if (!empleadoDB) {
        throw new Error(`No existe un empleado con el ID ${id}`);
    } else {
        let salario = await getSalario(empleadoDB);
        return {
            nombre: empleadoDB.nombre,
            salario: salario.salario
        }
    }
}
// FUNCIÓN LLAMADA
const infromacion = id=>{
    return getEmpleado(id).then(empleado => {
        console.log(`El salario de ${empleado.nombre} es ${empleado.salario}$`);  
    }).catch (err=>{
        console.log(`ASYNC`, err);
    })
}
infromacion(1);
