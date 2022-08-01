import { Routes, Route, Navigate } from "react-router-dom";
import { LoginPage } from "../auth/pages/LoginPage";
import { DcPage } from "../heroes/pages/DcPage";
import { MarvelPage } from "../heroes/pages/MarvelPage";

export const AppRouter = ()=>{
    return (
        <>
            <Routes>
                <Route path="marvel" element={<MarvelPage />} ></Route>
                <Route path="dc" element={<DcPage />} ></Route>
                <Route path="login" element={<LoginPage />} ></Route>

                <Route path="/" element={<Navigate to="marvel" />} ></Route>
            </Routes>
        </>
    );
}