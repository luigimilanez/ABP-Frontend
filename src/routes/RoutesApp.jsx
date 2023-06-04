import { Fragment } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
// import Home from "../pages/Home";

export default function RoutesApp() {

    const Cookie = () => {
        const navigate = useNavigate();

        useEffect(() => {
            const loginToken = Cookies.get('loginToken');
            if (!loginToken) {
                // Redirecionar para a tela de login
                navigate('/');
            }
        }, [navigate])
    };

    return(
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="*" element={<Login />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                </Routes>
                <Cookie />
            </Fragment>
        </BrowserRouter>
    )
}