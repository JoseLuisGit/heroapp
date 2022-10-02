import { getByPublisher } from "../helpers/getByPublisher";


export const HeroList = ({ publisher }) =>{

    const heroes = getByPublisher(publisher);

    return (
        
        <ul>
            {
                heroes.map( (hero) => (<li> { hero.superhero } </li>))
            }
            
        </ul>

    );
}