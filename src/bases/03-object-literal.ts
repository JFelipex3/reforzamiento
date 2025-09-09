
const ironman = {
    firstName: 'Eduardo',
    lastName: 'Morales',
    age: 31,
    address: {
        street: 'Av. street 3',
        city: 'New York',
    }
};

let spiderman = ironman // Se apunta al mismo espacio en memoria y ambos modifican sus valores al cambiar.

// se puede cambiar los valores del objeto pero no se puede reasignar el objeto si esta definido como const
ironman.firstName = 'Tony';
ironman.lastName = 'Stark';
ironman.age = 45;

console.log( ironman, spiderman );

// Para evitar que spiderman apunte al mismo espacio en memoria se puede hacer una copia del objeto
spiderman = { ...ironman }; // Operador spread, pero rompe la referencia con las propiedades del primer nivel

spiderman.firstName = 'Peter';
spiderman.lastName = 'Parker';
spiderman.age = 21;
spiderman.address.city = 'Springfield'; // La propiedad address sigue apuntando al mismo espacio en memoria

console.log( ironman, spiderman );

// Para hacer un clon del objeto se debe utilizar structuredClone que es una función de JavaScript

spiderman = structuredClone( ironman ); // Clona todo el objeto y sus propiedades

spiderman.address.city = 'New York';

console.log( ironman, spiderman );