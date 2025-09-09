
const name: string = 'Jhonnatan';
const lastName: string = 'O\' Neal'; // Se puede usar "" dentro del texto ejemplo -> 'O\' Neal "es un apellido"'

console.log(lastName); // Imprime: O' Neal

const fullName = `
    El nombre es: ${name} ${lastName}
`;

console.log(fullName);