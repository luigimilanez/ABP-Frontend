import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from "../pages/Login";

export default function RoutesApp() {
    return(
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="*" element={<Login />} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    )
}