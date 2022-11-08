import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';
import { useForm } from "../hooks/useForm"; 

export const SearchPage = ()=>{

    const navigate = new useNavigate();
    const location = new useLocation();

    const {search, onInputChange} = useForm({
        search: ''
    });

    const { q = '' } = queryString.parse(location.search);


    const onSearchSubmit = (event) =>{
        event.preventDefault();

        if(search.trim().length <= 1) return;

        navigate( `?q=${ search }` );
    }


    return (
        <>
            <h1>SearchPage</h1>

            <hr/>

            <div className="row">

                <div className="col-4">
                    <form onSubmit={ onSearchSubmit }>
                        <input
                            className="form-control"
                            placeholder="Text Search"
                            name="search"
                            value={ search }
                            onChange={ onInputChange }
                        />
                        <button className="btn btn-primary mt-3" type="submit">
                            Search
                        </button>
                    </form>
                </div>
            

                <div className="col-8">
                    <h4>Results</h4>
                    <hr/>
                    <div className="alert alert-danger">
                        { q } Not found
                    </div>
                </div>
            </div>
        </>
    )
}