import { AuthProvider } from "./auth/context";
import { AppRouter } from "./router/AppRouter"


export const HeroeApp = ()=>{
    return (
        <AuthProvider>
           <AppRouter />
        </AuthProvider>

    );
}