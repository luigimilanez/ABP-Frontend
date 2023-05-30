import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
// import Home from "../pages/Home";

export default function RoutesApp() {
    return(
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="*" element={<Login />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    )
}