/*
// >>>>>>>>>> Destructuración de objetos <<<<<<<<<<<<<<<<<<<
let Deadpool = {
    nombre: `Wade`,
    apellido: `Wilson`,
    superPoder: `Regeneración`,
    getInfo() {
        return `Se llama ${this.nombre} ${this.apellido}` +
            `y su super-poder es la ${this.superPoder}`;
    }
}
let { nombre: otroNombre, apellido, superPoder } = Deadpool;
console.log(Deadpool.getInfo());
*/
/*
// >>>>>>>>>>>>> La función .find() y sus parametros<<<<<<<<<<<<<<

console.log(usuario.find((objecto, numArray, arrayCompleto) => {
    if (objecto.nombre === "Giorgi") {
        console.log(objecto);
        console.log(numArray);
    }
}))

// >>>>>>>>>>>>>>>> CallBacks <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: `Giorgi`,
        id
    }
    if (id == 20) {
        callback(`El usuario con ID ${id} no existe en la base de datos`);
    } else {
        callback(null, usuario);
    }
}
getUsuarioById(10, (err, usuario) => {
        if (err) {
            return console.log(err);
        }
        console.log(`Usuario de base de datos`, usuario);
    })
*/
/*
// CALLBACKS
const llamar = nombre => {
    return `Llamando a ${nombre}`;
}

const mensaje = nombre => {
    return `Escribe el mensaje que quiere enviarle a ${nombre}`;
}

function suServicio(persona, callback) {
    return callback(persona);
}

console.log(suServicio(`Giorgi`, mensaje));

// PROMISES
let x = 20;
const p = new Promise((resolve, reject) => {
    if (x !== 10) {
        reject(`La variable no es igual a 10`);
    } else {
        resolve(`La variable es igual a 10`);
    }
}).then(res => {
    console.log(`SUCCESS!!!...`, res);
}).catch(err => {
    console.log(`error,`, err);
})
*/
/*
// >>Ejercicio de PROMESAS (perdidas en el mar de tus mentiras bb)<<
let usuarios = [{
    id: 1,
    nombre: 'Giorgi'
}, {
    id: 2,
    nombre: 'Meladze'
}, {
    id: 3,
    nombre: `Kirgiskhan`
}];

let telefonos = [{
    id: 1,
    telefono: 654321478
}, {
    id: 2,
    telefono: 6944217
}]

const obtenerUsuario = id => {
    return new Promise((resolve, reject) => {
        
        let usuario = usuarios.find(usuario => usuario.id == id);
        if (!usuario) {
            reject(`Este usuario no se encuentra en nuestra base de datos`);
        } else {
            resolve (usuario);
        }
    })
}

const obtenerTelefono = user =>{
    return new Promise((resolve, reject) => {
        
        let telefono = telefonos.find(telefono => telefono.id === user.id);
        if (!telefono) {
            reject(`"${user.nombre}" no tiene teléfono`);
        } else {
            resolve({
                nombre: user.nombre,
                telefono: telefono.telefono
            })
        }
    })
}
// FUNCION LLAMADA
const informacion = (num) => {
    return obtenerUsuario(num)
    .then((user) => {
        return obtenerTelefono(user)
    })
    .then(todosLosDatos=>{
        console.log(todosLosDatos.nombre, todosLosDatos.telefono)
    })
    .catch(err => console.log(err))
}

telefonos.push({
    id: 3,
    telefono: 6259551423
});
usuarios.push({
    id: 4,
    nombre: `Zelimkhan`
});
informacion(1);
*/
/* */
// ASYNC, AWAIT << Lo mismo de arriba <<
let usuarios = [{
    id: 1,
    nombre: 'Giorgi'
}, {
    id: 2,
    nombre: 'Meladze'
}, {
    id: 3,
    nombre: `Kirgiskhan`
}];

let telefonos = [{
    id: 1,
    telefono: 654321478
}, {
    id: 2,
    telefono: 6944217
}]
// Agregar datos
telefonos.push({
    id: 3,
    telefono: 6259551423
});
usuarios.push({
    id: 4,
    nombre: `Zelimkhan`
});

const obtenerUsuario = async id => {
    let usuario = usuarios.find(usuario => usuario.id == id);
    if (!usuario) {
        throw new Error(`Este usuario no se encuentra en nuestra base de datos`);
    }
    return usuario;
}

const obtenerTelefono = async user => {
    user = await obtenerUsuario(user);
    let telefono = telefonos.find(telefono => telefono.id === user.id);
    if (!telefono) {
        throw new Error(`"${user.nombre}" no tiene telefono asignado`)
    }
    return {
        nombre: user.nombre,
        telefono: telefono.telefono
    }
}
// FUNCION LLAMADA
obtenerTelefono(2).then(resp => {
    console.log(resp.nombre, resp.telefono);
}).catch(err => {
    console.log(err);
})