
const characterNames: string[] = ['Goku', 'Vegeta', 'Trunks'];

const [ p1, p2, p3 ] = characterNames; // Se extraen los elemento del array en orden posicional
console.log( { p1, p2, p3 } );

const [, vegeta, ] = characterNames; // Se puede ignorar elementos
console.log( { vegeta } );

const [ , , trunks ] = characterNames; // Se puede ignorar elementos
console.log( { trunks } );

const returnsArrayFn = () => {
    return [ 'ABC', 123 ] as const; // 'as const' para que no infiera (string | number)[] sino [string, number]
};

const [ letters, numbers ] = returnsArrayFn();
console.log( { letters, numbers } );
console.log( numbers + 100 );
console.log( letters + 100 );