import BarraLateral from "../components/BarraLateral/BarraLateral"
import Button from "../components/Button/Button";
import InputText from "../components/InputText/InputText";
import { useState } from 'react';
import Tabela from "../components/Tabela/Tabela";

export default function CheckIn() {

    document.title = 'BookSpot | Check In'

    const [buscarCI, setBuscarCI] = useState('')

    return (
        <div className="container">
            <BarraLateral />
            <div className="divMainHome">
                <div className="divContentMain">
                    <h1 style={{color: 'white', alignSelf: "center"}}>Check In</h1>
                    <form className="divContentMain"
                    method="path"
                    action="#"
                    onSubmit={(event) => {
                        event.preventDefault();
                    }}>
                        <label style={{alignSelf: "center"}}>
                            <InputText width="400px"
                            type="text"
                            height="3rem"
                            marginTop="2.2rem"
                            placeholder="Digite o CPF aqui"
                            value={buscarCI.name}
                            onChange={(event) => setBuscarCI(event.target.value)}
                            />
                        </label>

                        <label style={{alignSelf: "center", marginBottom: "30px"}}>
                            <Button nomeClasse="buttonForm" title="PESQUISAR" /> 
                        </label>

                        <Tabela /> 
                    </form>
                </div>
            </div>
        </div>
    )
}