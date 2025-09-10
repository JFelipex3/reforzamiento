// Función tradicional
function greet(name: string): string {
    return `Hola ${name}... función tradicional`;
}

// Función de flecha
const greetArrow = (name: string): string => {
    return `Hola ${name}... función de flecha`;
};

// Función de flecha simplificada
const greetArrow2 = (name: string): string => `Hola ${name}... función de flecha simplificada`;

const message = greet("Goku");
const messageArrow = greetArrow("Vegeta");
const messageArrow2 = greetArrow2("Trunks");

console.log({message, messageArrow, messageArrow2});

function getUser() {
    return {
        uid: 'ABC123',
        username: 'El_Papi1502'
    }
}

const user = getUser();
console.log({user});

// Tarea
// 1. Transformar a función de flecha
// 2. Tiene que retornar un objeto implícito
// 3. Pruebas

// Adicional no lo piden en la tarea pero corresponde a crear la interfaz para retorno
interface User {
    uid: string;
    username: string;
}

// Función de flecha que retorna un objeto implícito
const getUserArrow = (): User => ({
    uid: 'ABC123',
    username: 'El_Papi1502'
});

const userArrow = getUserArrow();
console.log({userArrow});