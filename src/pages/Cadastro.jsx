import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import Button from "../components/Button/Button";
import InputText from "../components/InputText/InputText";

export default function Cadastro() {
    document.title = 'BookSpot | Cadastro'

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [vrfpassword, setVrfpassword] = useState('')

    return (
        <div className="styleDivContainer">
            <div className="styleDivContent">
                <form className="styleForm" 
                action=""
                method="post"
                onSubmit={(event) => {
                    event.preventDefault()
                }}>
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
                        <Button width="15rem"
                            height="2rem"
                            color='#00ff88'
                            marginTop="2rem"
                            title="CADASTRAR" /> 
                    </label>

                    <h2 className="styleH2">Novo usuário? <Link to="/" className="tagLink">Logar-se</Link></h2>
                </form>
            </div>          
        </div>
    )
}