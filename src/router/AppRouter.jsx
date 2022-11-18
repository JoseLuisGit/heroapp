import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../auth/pages/LoginPage";
import { HeroesRouter } from "../heroes";
import { PrivateRouter } from "./PrivateRouter";

export const AppRouter = ()=>{
    return (
        <>
            <Routes>
                <Route path="login" element={<LoginPage />} ></Route>

                <Route path="/*" element= {
                    <PrivateRouter>
                        <HeroesRouter />
                    </PrivateRouter>
                }>
                </Route>

            </Routes>
        </>
    );
}