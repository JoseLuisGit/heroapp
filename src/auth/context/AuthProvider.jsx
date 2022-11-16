import { useReducer } from "react";
import { types } from "../types/types";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";

const initState = {
    logged: false
}

export const AuthProvider = ( {children} )=>{

    const [ authState, dispatch ] = useReducer(authReducer, initState);

    const login = (name = '') =>{
        
        const action = {
            type: types.login,
            payload: {
                id: '23456',
                name: name
            }
        }
        dispatch(action);
    }

    return (
            <AuthContext.Provider value={ {
                ...authState,
                login: login
            } }>
                { children }
            </AuthContext.Provider>
            );
}