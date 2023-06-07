import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import Cookies from 'js-cookie';
import Button from "../components/Button/Button";
import InputText from "../components/InputText/InputText";

export default function Login() {
   
    document.title = 'BookSpot | Login';

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [erro, setErro] = useState('');
    const navigate = useNavigate();

    const formulario = (event) => {
        event.preventDefault();

        fetch(`https://bookspotapi.adrianoreus.repl.co/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                for (const pos in data) {                    
                    if (data[pos].login === username && data[pos].senha === password) {
                        const expirationDate = new Date(new Date().getTime() + (60 * 60 * 1000));
                        Cookies.set('loginToken', 'logon', { expires: expirationDate });
                        navigate('/cadastro');
                    }
                }
                setErro('Informações Inválidas!');
            });
    }
    //const redirect = useNavigate();

    return (
        <div className="styleDivContainer">
            <div className="styleDivContent">
                <form className="styleForm" 
                action=""
                method="post"
                    onSubmit={formulario}>
                    <h1 style={{marginTop: '5rem'}} className="styleH1">Login</h1>
                    <label>
                        <InputText width="15rem"
                        height="2rem"
                        marginTop="2.2rem"
                        placeholder="Email ou username" 
                        value={username}
                        onChange={(event) => setUsername(event.target.value)} />
                    </label>

                    <label>
                        <InputText width="15rem"
                        height="2rem"
                        marginTop="1rem"
                        placeholder="Senha"
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)} />
                    </label>

                    <label>
                        <h2 className="styleH2" style={{ color: '#FF4E4E' }}>{erro}</h2>
                    </label>

                    <label>
                        <Button nomeClasse="buttonForm" title="LOGAR" /> 
                    </label>

                    <h2 className="styleH2">Novo usuário? <Link to="/cadastro" className="tagLink">Cadastre-se</Link></h2>
                    
                    {/* testando componente de loading */}
                    {/* <div className="loading">
                        <h1>.</h1>
                    </div> */}
                </form>
            </div>          
        </div>
    )
}