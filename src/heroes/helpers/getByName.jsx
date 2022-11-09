import { heroes } from "../data/heroes"

export const getByName = (name) =>{
    name = name.toLowerCase();
    return name != '' ?
    heroes.filter( function(hero){
         return hero.superhero.toLowerCase().includes(name);
    })
    : [];
}