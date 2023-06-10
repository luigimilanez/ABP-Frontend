import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import Button from "../components/Button/Button";
import InputText from "../components/InputText/InputText";
import { validateCookie } from "../components/Cookie/Cookie";

export default function Cadastro() {
    document.title = 'BookSpot | Cadastro'

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [vrfpassword, setVrfpassword] = useState('');
    const navigate = useNavigate();

    const cadastro = async (event) => {
        event.preventDefault();

        if (password === vrfpassword) {
            const isUsernameAvailable = await usuarioDisponivel();

            if (isUsernameAvailable) {
                const userData = {
                    login: username,
                    senha: password
                };

                try {
                    const response = await fetch(`https://bookspotapi.adrianoreus.repl.co/`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(userData)
                    });

                    if (response.ok) {
                        validateCookie(navigate, '/');
                    } else {
                        // erro quando não conseguir salvar na API
                    }
                } catch (error) {
                    // Handle error
                    console.error(error);
                }
            } else {
                // erro de nome não disponível (fazer que nem no login)
            }
        } else {
            // erro de senhas diferentes (fazer que nem no login)
        }
    };

    const usuarioDisponivel = async () => {
        try {
            const response = await fetch(`https://bookspotapi.adrianoreus.repl.co/`);
            const data = await response.json();

            const usernames = data.map((user) => user.login);

            return !usernames.includes(username);
        } catch (error) {
            console.error(error);
            return false;
        }
    };

    return (
        <div className="styleDivContainer">
            <div className="styleDivContent">
                <form className="styleForm" 
                action=""
                method="post"
                onSubmit={cadastro}>
                    <h1 style={{marginTop: '4rem'}} className="styleH1">Cadastro</h1>
                    <label>
                        <InputText width="15rem"
                        height="2rem"
                        marginTop="2rem"
                        placeholder="Email ou username" 
                        value={username}
                        onChange={(event) => setUsername(event.target.value)} />
                    </label>

                    <label>
                        <InputText width="15rem"
                        height="2rem"
                        marginTop="1rem"
                        placeholder="Senha" 
                        value={password} 
                        onChange={(event) => setPassword(event.target.value)} />
                    </label>

                    <label>
                        <InputText width="15rem"
                        height="2rem"
                        marginTop="1rem"
                        placeholder="Confirme sua senha" 
                        value={vrfpassword} 
                        onChange={(event) => setVrfpassword(event.target.value)} />
                    </label>

                    <label>
                        <Button nomeClasse="buttonForm" title="CADASTRAR" /> 
                    </label>

                    <h2 className="styleH2">Novo usuário? <Link to="/" className="tagLink">Logar-se</Link></h2>
                </form>
            </div>          
        </div>
    )
}