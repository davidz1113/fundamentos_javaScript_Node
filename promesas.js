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


let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => {
            return empleado.id === id
        });

        if (!empleadoDB) {
            reject(`No existe un empleado con el id ${id} `)
        } else {
            resolve(empleadoDB);
        }

    });
}

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let findSalario = salarios.find(salario => salario.id == empleado.id);
        if (!findSalario) {
            reject(`No se encontro un salario para el usuario ${empleado.nombre} `)
        } else {
            reject({ nombre: empleado.nombre, salario: findSalario.salario });
        }

    });
}



getEmpleado(3).then(empleado => {
    // console.log('Empleado de Bd', empleado);
    return getSalario(empleado);

}).then(resp => console.log(resp)).catch(err => console.log(err));