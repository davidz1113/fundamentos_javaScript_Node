let empleados = [{
        id: 1,
        nombre: 'David'
    },
    {
        id: 2,
        nombre: 'Andres'
    },
    {
        id: 3,
        nombre: 'Mateo'
    },
];

let salarios = [{
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    },
];


let getEmpleado = async(id) => {

    let empleadoDB = empleados.find(empleado => {
        return empleado.id === id
    });

    if (!empleadoDB) {
        throw new Error(`No existe un empleado con el id ${id} `)
    } else {
        return (empleadoDB);
    }

}

let getSalario = async(empleado) => {
    let findSalario = salarios.find(salario => salario.id == empleado.id);
    if (!findSalario) {
        throw new Error(`No se encontro un salario para el usuario ${empleado.nombre} `)
    } else {
        return { nombre: empleado.nombre, salario: findSalario.salario };
    }

}


let getInformacion = async(id) => {

    let empleado = await getEmpleado(id);
    let resp = await getSalario(empleado);

    return `${resp.nombre} tiene un salario de ${resp.salario}$ `;

}

getInformacion(3).then(msj => { console.log(msj); }).catch(err => console.log(err.message));