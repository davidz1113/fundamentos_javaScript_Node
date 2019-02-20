// let getNombre = async() => {
//     // throw new Error('no se pudo obtener el nombre');
//     return 'Fernando';
// };


let getNombre = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve('fernando');

        }, 3000);

    });
}

let saludo = async() => {

    let nombre = await getNombre();

    return `Hola ${nombre}`

}

saludo().then(mensaje => {
    console.log(mensaje);
});