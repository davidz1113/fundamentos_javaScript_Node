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

let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find(empleado => {
        return empleado.id === id
    });

    if (!empleadoDB) {
        callback(`No existe un empleado con el id ${id} `)
    } else {
        callback(null, empleadoDB);
    }

}

let getSalario = (empleado, callback) => {
    let findSalario = salarios.find(salario => salario.id == empleado.id);
    if (!findSalario) {
        callback(`No se encontro un salario para el usuario ${empleado.nombre} `)
    } else {
        callback(null, { nombre: empleado.nombre, salario: findSalario.salario });
    }


}


getEmpleado(3, (err, empleadoDB) => {

    if (err) {
        return console.log(err);
    }

    getSalario(empleadoDB, (err, nuevoEmpleado) => {
        if (err) {
            return console.log(err);
        }

        console.log(nuevoEmpleado);

    })

});