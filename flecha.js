// function sumar(a, b) {
//     return a + b;
// }

// let sumar = (a, b) => a + b;

// console.log(sumar(10, 20));

// function saludar() {
//     return 'Hola mundo';
// }

// let saludar = () => 'Hola mundo';
// console.log(saludar());
let nombre = "Hola mundo";
let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre() {
        return `${this.nombre} `;
    }
};

console.log(deadpool.getNombre());