import { heroes } from "../data/heroes"



export const getById = (id) =>{

    return heroes.find( hero => hero.id === id);

}