import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../auth/pages/LoginPage";
import { HeroesRouter } from "../heroes";

export const AppRouter = ()=>{
    return (
        <>
            <Routes>
                <Route path="login" element={<LoginPage />} ></Route>

                <Route path="/*" element={<HeroesRouter/>} ></Route>
            </Routes>
        </>
    );
}