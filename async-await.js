let getNombre = async() => {
    // throw new Error('no se pudo obtener el nombre');
    return 'Fernando';
};

getNombre().then(nombre => {
    console.log(nombre);
}).catch(err => {
    console.log(err);
})