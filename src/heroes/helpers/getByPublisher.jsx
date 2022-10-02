import { heroes } from '../data/heroes';


export const getByPublisher = (publisher) => {
    
    const availablePublisher = ['DC Comics', 'Marvel Comics'];

    if( !availablePublisher.includes(publisher) ){
        throw new Error(`${ publisher } not found!`)
    }

    return heroes.filter( (hero) => hero.publisher == publisher);
}