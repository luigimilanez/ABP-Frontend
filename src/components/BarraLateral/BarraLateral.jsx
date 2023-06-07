import Cookies from "js-cookie";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

export default function BarraLateral() {
    const navigate = useNavigate();
    
    const deleteCookie = () => {
        Cookies.remove('loginToken')
        navigate('/')
    };

    const navegar = ({diretorio}) => {
        navigate(`/${diretorio}`)
    }

    return(
        <div className="barraLateral">
            <img className="fotoUsuario" src="../../fotoperfil.png" alt="foto do perfil" />
            <h3 id="nomeUsuario">Fulano da Silva</h3>
            <Button nomeClasse="buttonBarraLateral" title="Cadastrar" />
            <Button onClick={navegar('checkout')} nomeClasse="buttonBarraLateral" title="Check In" />
            <Button nomeClasse="buttonBarraLateral" title="Check Out" />
            <Button nomeClasse="buttonBarraLateral" title="Alteração" />
            <div className="iconeSair">
                <span onClick={deleteCookie} className="material-symbols-outlined">logout</span>
            </div>
        </div>
    )
}