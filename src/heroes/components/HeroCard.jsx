


export const HeroCard = ({ 
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters}) =>{

    const urlImage = `/assets/images/${id}.jpg`;


    return (
        <div className="col-6">
            <div className="card">
                <div className="row not-gutters">
                    <div className="col-4">
                        <img alt={ id } className="card-img" src={ urlImage }/>
                    </div>
                    <div className="col-7 card-body">
                        <h5 className="card-title"> { superhero } </h5>
                        <p className="card-text">
                            { alter_ego }
                        </p>
                        <p>
                            {
                                alter_ego != characters ?
                                characters :
                                ''
                            }
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
}