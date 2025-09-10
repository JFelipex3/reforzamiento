const person = {
    name: 'Tony',
    age: 45,
    key: 'Ironman'
};

const namePerson = person.name;
const agePerson = person.age;
const keyPerson = person.key;

console.log({namePerson, agePerson, keyPerson});

// Destructuring

const { name, age, key } = person;
console.log({name, age, key}); 

interface Hero {
    name: string;
    age: number;
    key: string;
    rank?: string; // El ? indica que es opcional
};

const useContext = ({ key, name, age, rank }: Hero) => {
    return {
        keyName: key,
        user: {
            name, // cuando se quiere crear una propiedad con el mismo nombre de la variable, se puede simplificar
            age: age
        },
        rank: rank
    }
};

const context = useContext(person);
console.log({context});

// desestructurar el context 
//const { keyName: keyContext, user: { name: nameContext }, rank: rankContext } = context; // se recomienda desestructurar el objeto anidado en una segunda linea
const { keyName: keyContext, user, rank: rankContext } = context; // Obtiene el user
const { name: nameContext } = user; // Desestructura el nombre desde el user, solo para mejor legibilidad, se puede hacer en una sola linea
console.log({keyContext, nameContext, rankContext});