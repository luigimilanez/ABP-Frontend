import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import Home from "../pages/Home";
import CadastrarReserva from "../pages/CadastrarReserva";
import CheckIn from "../pages/CheckIn";
import CheckOut from "../pages/CheckOut";
import Alteracao from "../pages/Alteracao";

// função verificadora do login (Private com o prop Item)

export default function RoutesApp() {
    return(
        <BrowserRouter>
            <Fragment>
                <Routes>
                    {/* <Route path="/" element={<Private Item={Home} />} /> */}
                    <Route path="/" element={<Login />} />
                    <Route path="*" element={<Login />} />
                    {/* <Route path="/" element={<Home />} />  PARA TESTES */}
                    <Route path="/cadastro" element={<Cadastro />} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    )
}