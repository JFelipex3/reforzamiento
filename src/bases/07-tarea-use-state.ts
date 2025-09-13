
const useState = (name: string) => {
    return [
        name,
        (texto: string) => { console.log({texto})}
    ] as const;
}

const [name, setName] = useState('Goku');
console.log({name});
setName('Vegeta');