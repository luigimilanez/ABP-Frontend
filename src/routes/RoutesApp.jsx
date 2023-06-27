import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "../pages/Home";
import CheckIn from "../pages/CheckIn";
import CheckOut from "../pages/CheckOut";
import Alteracao from "../pages/Alteracao";
import Login from '../pages/Login'
import Cadastro from '../pages/Cadastro'
import Error from "../pages/Error";
import Cookies from 'js-cookie';

export default function RoutesApp() {

    const Private = ({ Item }) => {

        const loginToken = Cookies.get('loginToken');

        if (loginToken === "logon") {
            return <Item />;
        }
        else {
            return <Error />;
        }
    };

    return(
        <BrowserRouter>
            <Fragment>
                <Routes>                    
                    <Route path="*" element={<Login />} />
                    <Route path="/" element={<Login />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/home" element={<Private Item={Home} />} />
                    <Route path="/checkin" element={<Private Item={CheckIn} />} />
                    <Route path="/checkout" element={<Private Item={CheckOut} />} />
                    <Route path="/alteracao" element={<Private Item={Alteracao} />} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    )
}