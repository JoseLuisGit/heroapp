import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getById } from "../helpers";

export const HeroPage = () =>{

    const { id } = new useParams();

    const navigate = new useNavigate();


    const hero = useMemo(()=> getById(id), [id]);

    const onBack = () => {
        navigate(-1);
    }

    if(!hero){
        return <Navigate to={ '/marvel' } ></Navigate>
    }

    return (
            <div className="row mt-6">
                <div className="col-4">
                    <img 
                        src={`/assets/images/${ id }.jpg`}
                        className="img-thumbnail animate__animated animate__fadeInLeft"
                        alt={ hero.alter_ego }
                    />
                </div>

                <div className="col-8">
                    <h3>{ hero.superhero }</h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"> <b>Alter ego: </b> { hero.alter_ego } </li>
                        <li className="list-group-item"> <b>Publisher: </b> { hero.publisher } </li>
                        <li className="list-group-item"> <b>First appearance: </b> { hero.first_appearance } </li>
                    </ul>

                    <h5 className="mt-3">Characters</h5>
                    <p>{hero.characters}</p>

                    <button className="btn btn-primary" onClick={ onBack }>
                        Back
                    </button>

                </div>

            </div>
        );
}