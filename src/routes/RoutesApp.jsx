import { Fragment } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import Home from "../pages/Home";
import CheckIn from "../pages/CheckIn";
import CheckOut from "../pages/CheckOut";
import Alteracao from "../pages/Alteracao";

export default function RoutesApp() {

    const Cookie = () => {
        const navigate = useNavigate();

        // o correto seria o uso de uma contextAPI, o useEffect
        // está forçando a todo momento o redirecionamento para
        // a página da home
        useEffect(() => {
            const loginToken = Cookies.get('loginToken');
            if (!loginToken) {
                navigate('/')
            } 
        }, [navigate])
    };

    return(
        <BrowserRouter>
            <Fragment>
                <Routes>                    
                    <Route path="/home" element={<Home />} />
                    <Route path="/checkin" element={<CheckIn />} />
                    <Route path="/checkout" element={<CheckOut />} />
                    <Route path="/alteracao" element={<Alteracao />} />
                    <Route path="/" element={<Login />} />
                    <Route path="*" element={<Login />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                </Routes>
                <Cookie />
            </Fragment>
        </BrowserRouter>
    )
}