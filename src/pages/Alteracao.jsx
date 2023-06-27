import BarraLateral from "../components/BarraLateral/BarraLateral"
import Button from "../components/Button/Button";
import InputText from "../components/InputText/InputText";
import { useState } from 'react';

export default function Alteracao() {

    document.title = 'BookSpot | Alteração Reserva'

    const [buscar, setBuscar] = useState('')
    const [alteracao, setAlteracao] = useState({
        name: '',
        email: '',
        cpf: '',
        pessoas: '',
        quarto: '',
        telefone: '',
        data: '',
    })

    return (
        <div className="container">
            <BarraLateral />
            <div className="divMainHome">
                <div className="divContentMain">
                    <h1 style={{color: 'white', alignSelf: "center"}}>Alteração</h1>
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
                            value={buscar}
                            onChange={(event) => setBuscar(event.target.value)}
                            />
                        </label>

                        <label style={{alignSelf: "center", marginBottom: "30px"}}>
                            <Button nomeClasse="buttonForm" title="PESQUISAR" /> 
                        </label>

                        <div className="greenLine" />

                        <div className="divChanges">
                            <label style={{paddingRight: "5px"}}>
                                <InputText width="400px"
                                type="text"
                                height="3rem"
                                marginTop="2.2rem"
                                placeholder="Alterar Nome"
                                value={alteracao.name}
                                onChange={(event) => setAlteracao({name: event.target.value})}
                                />
                            </label>
                            <label style={{paddingLeft: "5px"}}>
                                <InputText width="400px"
                                type="email"
                                height="3rem"
                                marginTop="2.2rem"
                                placeholder="Alterar Email"
                                value={alteracao.email}
                                onChange={(event) => setAlteracao({email: event.target.value})}
                                />
                            </label>
                        </div>
                        <div className="divChanges">
                            <label style={{paddingRight: "5px"}}>
                                <InputText width="400px"
                                type="text"
                                height="3rem"
                                marginTop="2.2rem"
                                placeholder="Alterar CPF"
                                value={alteracao.cpf}
                                onChange={(event) => setAlteracao({cpf: event.target.value})}
                                />
                            </label>
                            <label style={{paddingLeft: "5px"}}>
                                <InputText width="400px"
                                type="number"
                                height="3rem"
                                marginTop="2.2rem"
                                placeholder="Alterar Numero de Pessoas"
                                value={alteracao.pessoas}
                                onChange={(event) => setAlteracao({pessoas: event.target.value})}
                                />
                            </label>
                        </div>
                        <div className="divChanges">
                            <label style={{paddingRight: "5px"}}>
                                <InputText width="400px"
                                type="text"
                                height="3rem"
                                marginTop="2.2rem"
                                placeholder="Alterar Tipo do Quarto"
                                value={alteracao.quarto}
                                onChange={(event) => setAlteracao({quarto: event.target.value})}
                                />
                            </label>
                            <label style={{paddingLeft: "5px"}}>
                                <InputText width="400px"
                                type="text"
                                height="3rem"
                                marginTop="2.2rem"
                                placeholder="Alterar Telefone"
                                value={alteracao.telefone}
                                onChange={(event) => setAlteracao({telefone: event.target.value})}
                                />
                            </label>
                        </div>

                        <div className="divChanges">
                            <label style={{alignSelf: "center"}}>
                                <InputText width="400px"
                                type="date"
                                height="3rem"
                                marginTop="2.2rem"
                                placeholder="Alterar Data"
                                value={alteracao.data}
                                onChange={(event) => setAlteracao({data: event.target.value})}
                                />
                            </label>
                        </div>

                        <label style={{alignSelf: "center", marginBottom: "30px"}}>
                            <Button nomeClasse="buttonForm" title="ATUALIZAR" /> 
                        </label>

                        <div className="greenLine" />
                    </form>
                </div>
            </div>
        </div>
    )
}