import { heroesOwnerEnum, HeroOwnerEnum, OwnerEnum } from '../data/heroes.data';

const getHeroById = (id: number): HeroOwnerEnum => {
    
    const hero = heroesOwnerEnum.find( hero => {
        return hero.id === id;
    });

    if (!hero) throw new Error(`Heroe con id ${id} no existe`)
    
    return hero;
}

console.log(getHeroById(1));
//console.log(getHeroById(10));

// Tarea

export const getHeoresByOwner = (owner: OwnerEnum): HeroOwnerEnum[] => {
    const heroes = heroesOwnerEnum.filter( hero => hero.owner === owner);
    return heroes;
}