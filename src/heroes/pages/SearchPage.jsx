import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { useForm } from "../hooks/useForm";
import { getByName } from "../helpers";
import { HeroCard } from "../components";

export const SearchPage = () => {
    const navigate = new useNavigate();
    const location = new useLocation();

    const { search, onInputChange } = useForm({
        search: "",
    });

    const { q = "" } = queryString.parse(location.search);

    const heroes = getByName(q);

    const onSearchSubmit = (event) => {
        event.preventDefault();

        if (search.trim().length <= 1) return;

        navigate(`?q=${search}`);
    };

    return (
        <>
            <h1>SearchPage</h1>

            <hr />

            <div className="row">
                <div className="col-4">
                    <form onSubmit={onSearchSubmit}>
                        <input
                            className="form-control"
                            placeholder="Text Search"
                            name="search"
                            value={search}
                            onChange={onInputChange}
                        />
                        <button className="btn btn-primary mt-3" type="submit">
                            Search
                        </button>
                    </form>
                </div>

                <div className="col-8">
                    <h4>Results</h4>
                    <hr />

                    {
                    q == "" ? (
                        <div className="alert alert-primary">Search a hero</div>
                    ) : heroes.length == 0 ? (
                        <div className="alert alert-danger">{q} Not found</div>
                    ) : (
                        <div className="alert alert-success">
                            {heroes.length} results were found
                        </div>
                    )
                    }
                </div>

                <div className="col-12">
                    {
                    heroes.map(function (hero) {
                        return <HeroCard key={hero.id} {...hero} />;
                    })
                    }
                </div>
            </div>
        </>
    );
};
