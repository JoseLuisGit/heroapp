import { useMemo } from "react";
import { HeroCard } from ".";
import { getByPublisher } from "../helpers";


export const HeroList = ({ publisher }) =>{

    const heroes = useMemo(()=>getByPublisher(publisher), [publisher]);

    return (
        
        <div className="row animate__animated animate__fadeIn">
            {
                heroes.map( (hero) => (
                <HeroCard key={ hero.id } { ...hero } > 
                </HeroCard>))
            }
            
        </div>

    );
}