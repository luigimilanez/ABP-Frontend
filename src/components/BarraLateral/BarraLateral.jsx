import Cookies from "js-cookie";
import Button from "../Button/Button";
import { Link, useNavigate } from "react-router-dom";

export default function BarraLateral() {
    const navigate = useNavigate();
    
    const deleteCookie = () => {
        Cookies.remove('loginToken')
        navigate('/')
    };

    return(
        <div className="barraLateral">
            <img className="fotoUsuario" src="../../fotoperfil.png" alt="foto do perfil" />
            <h3 id="nomeUsuario">2Pac Jhonson</h3>
            
            <Link to='../home'>
                <Button nomeClasse="buttonBarraLateral" title="Cadastrar" />
            </Link>

            <Link to='../checkin'>
                <Button nomeClasse="buttonBarraLateral" title="Check In" />
            </Link>

            <Link to='../checkout'>
                <Button nomeClasse="buttonBarraLateral" title="Check Out" />
            </Link>

            <Link to='../alteracao'>
                <Button nomeClasse="buttonBarraLateral" title="Alteração" />
            </Link>

            <div className="iconeSair">
                <span onClick={deleteCookie} className="material-symbols-outlined">logout</span>
            </div>
        </div>
    )
}