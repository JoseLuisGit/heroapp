import { Navigate, useParams } from "react-router-dom";
import { getById } from "../helpers";

export const HeroPage = () =>{

    const { id } = new useParams();


    const hero = getById(id);

    if(!hero){
        return <Navigate to={ '/marvel' } ></Navigate>
    }

    return (
            <>
             <h1>HeroPage</h1>

             <pre> { JSON.stringify(hero, 3) } </pre>
            </>
        );
}