// Función tradicional
function greet(name: string): string {
    return `Hola ${name}... función tradicional`;
}

// Función de flecha
const greetArrow = (name: string): string => {
    return `Hola ${name}... función de flecha`;
}

const message = greet("Goku");
const messageArrow = greetArrow("Vegeta");

console.log({message, messageArrow});

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

const getUserArrow = (): User => ({
    uid: 'ABC123',
    username: 'El_Papi1502'
});

const userArrow = getUserArrow();
console.log({userArrow});