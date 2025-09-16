// Esto no crea un objeto en tiempo de ejecución
type Owner = 'DC' | 'Marvel';

// Esto crea un tipo enumerado, que se refleja como un objeto en tiempo de ejecución
export enum OwnerEnum {
    DC = 'DC',
    Marvel = 'Marvel'
}

export interface HeroOwnerEnum {
    id: number;
    name: string;
    owner: OwnerEnum;
}

export const heroesOwnerEnum: HeroOwnerEnum[] = [
  {
    id: 1,
    name: 'Batman',
    owner: OwnerEnum.DC,
  },
  {
    id: 2,
    name: 'Spiderman',
    owner: OwnerEnum.Marvel,
  },
  {
    id: 3,
    name: 'Superman',
    owner: OwnerEnum.DC,
  },
  {
    id: 4,
    name: 'Flash',
    owner: OwnerEnum.DC,
  },
  {
    id: 5,
    name: 'Wolverine',
    owner: OwnerEnum.Marvel,
  },
  {
    id: 6,
    name: 'Green Lantern',
    owner: OwnerEnum.DC,
  }
];

interface HeroOwnerType {
    id: number;
    name: string;
    owner: Owner;
}

const heroesOwnerType: HeroOwnerType[] = [
  {
    id: 1,
    name: 'Batman',
    owner: 'DC',
  },
  {
    id: 2,
    name: 'Spiderman',
    owner: 'Marvel',
  },
  {
    id: 3,
    name: 'Superman',
    owner: 'DC',
  },
  {
    id: 4,
    name: 'Flash',
    owner: 'DC',
  },
  {
    id: 5,
    name: 'Wolverine',
    owner: 'Marvel',
  },
  {
    id: 6,
    name: 'Green Lantern',
    owner: 'DC',
  }
];

// export default heroesOwnerType;