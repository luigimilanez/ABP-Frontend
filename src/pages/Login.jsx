import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import Button from "../components/Button/Button";
import InputText from "../components/InputText/InputText";

export default function Login() {
   
    document.title = 'BookSpot | Login';

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    //const redirect = useNavigate();

    return (
        <div className="styleDivContainer">
            <div className="styleDivContent">
                <form className="styleForm" 
                action=""
                method="post"
                onSubmit={(event) => {
                    event.preventDefault()
                }}>
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
                        value={password} 
                        onChange={(event) => setPassword(event.target.value)} />
                    </label>

                    <label>
                        <Button width="15rem"
                            height="2rem"
                            color='#00ff88'
                            marginTop="2rem"
                            title="LOGAR" /> 
                    </label>

                    <h2 className="styleH2">Novo usuário? <Link to="/cadastro" className="tagLink">Cadastre-se</Link></h2>
                </form>
            </div>          
        </div>
    )
}