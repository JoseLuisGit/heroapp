import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "../../ui";
import { DcPage } from "../pages/DcPage";
import { MarvelPage } from "../pages/MarvelPage";

export const HeroesRouter = ()=>{
    return (
      <>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="marvel" element={<MarvelPage />}></Route>
            <Route path="dc" element={<DcPage />}></Route>

            <Route path="/*" element={<Navigate to="marvel" />}></Route>
          </Routes>
        </div>
      </>
    );
}