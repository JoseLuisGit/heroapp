import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context";

export const LoginPage = ()=>{

    const navigate = useNavigate();

    const { login } = useContext(AuthContext);

    const onLogin = () => {

        login('Jose Luis Quispe');

        navigate('/', 
        {
            replace: true
        });
    }

    return (
        <>
        <div className="container p-3">
            <h1>LoginPage</h1>
            <hr/>
            <button className="btn btn-primary"
                    onClick={ onLogin }>
                Login
                </button>
        </div>
        </>
    );
}