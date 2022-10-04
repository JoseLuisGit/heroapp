import { HeroCard } from ".";
import { getByPublisher } from "../helpers";


export const HeroList = ({ publisher }) =>{

    const heroes = getByPublisher(publisher);

    return (
        
        <div className="row">
            {
                heroes.map( (hero) => (
                <HeroCard key={ hero.id } { ...hero } > 
                </HeroCard>))
            }
            
        </div>

    );
}