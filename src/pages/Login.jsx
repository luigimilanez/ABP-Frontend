import { useState } from "react";
import Button from "../components/Button/Button";
import InputText from "../components/InputText/InputText";

export default function Login() {
    const styleDivContainer = {
        display: 'flex',
        justifyContent: 'center',
    }

    const styleDivContent = {
        display: 'flex',
        alignItems: 'center',
        top: '50vh',
        bottom: '50vh',
        position: 'absolute',
        margin: 'auto',
    }

    const styleForm = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '20rem',
        height: '420px',
        backgroundColor: '#1E2022',
        border: '2px solid #00ff88b9',
    }

    const styleH1 = {
        marginTop: '5rem',
        color:'#00ff88'
    }

    const styleH2 = {
        marginTop: '5px',
        fontSize: '10px',
        color: 'gray',
        fontWeight: 'bold',
    }

    const styleSpan = {
        color: '#1D7D35',
        // fazer a função hover & color #00ff88
    }

    return (
        <div style={styleDivContainer} className="container">
            <div style={styleDivContent} className="content">
                <form style={styleForm} 
                className="formulario" 
                action="#"
                onSubmit={(event) => {
                    event.preventDefault()
                }}>
                    <h1 style={styleH1}>Login</h1>
                    <label>
                        <InputText width="15rem"
                        height="2rem"
                        marginTop="2.2rem"
                        placeholder="Email ou username" />
                    </label>

                    <label>
                        <InputText width="15rem"
                        height="2rem"
                        marginTop="1rem"
                        placeholder="Password" />
                    </label>

                    <label>
                    <Button width="15rem"
                        height="2rem"
                        color='#00ff88'
                        marginTop="2rem"
                        title="LOGAR" />
                    </label>
                    <h2 style={styleH2}>Novo usuário? <span style={styleSpan}>Contate o suporte</span></h2>
                </form>
            </div>          
        </div>
    )
}