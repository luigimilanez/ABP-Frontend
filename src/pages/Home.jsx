import { Link } from "react-router-dom"
import BarraLateral from "../components/BarraLateral/BarraLateral"
import Button from "../components/Button/Button";
import InputText from "../components/InputText/InputText";
import { useState } from 'react';

export default function Home() {

    document.title = 'BookSpot | Home'

    const [cadastro, setCadastro] = useState({
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
                    <h1 style={{color: 'white', alignSelf: "center"}}>Cadastro de Reservas</h1>
                    <form className="divContentMain"
                    method="path"
                    action="#"
                    onSubmit={(event) => {
                        event.preventDefault();
                    }}>
                        <label>
                            <InputText width="400px"
                            type="text"
                            height="3rem"
                            marginTop="2.2rem"
                            placeholder="Nome"
                            value={cadastro.name}
                            onChange={(event) => setCadastro({name: event.target.value})}
                            />
                        </label>

                        <label>
                            <InputText width="400px"
                            type="email"
                            height="3rem"
                            marginTop="2.2rem"
                            placeholder="E-mail" 
                            value={cadastro.email}
                            onChange={(event) => setCadastro({email: event.target.value})}
                            />
                        </label>

                        <label>
                            <InputText width="400px"
                            type="text"
                            height="3rem"
                            marginTop="2.2rem"
                            placeholder="CPF"
                            value={cadastro.cpf}
                            onChange={(event) => setCadastro({cpf: event.target.value})}
                            />
                        </label>

                        <label>
                            <InputText width="400px"
                            type="number"
                            height="3rem"
                            marginTop="2.2rem"
                            placeholder="Numero de Pessoas"
                            value={cadastro.pessoas}
                            onChange={(event) => setCadastro({pessoas: event.target.value})}
                            />
                        </label>
                        <label className="labelRadioButton">
                            <div>
                                <h3>Escolha um tipo de Quarto:</h3>
                                <div className="divLabelRadioButton">
                                    <input id="op1"
                                    type="radio"
                                    height="0.7rem"
                                    marginTop="2.2rem"
                                    value={"Standard"}
                                    checked={cadastro.quarto == "Standard" ? true : false}
                                    onChange={(event) => setCadastro({quarto: event.target.value})}
                                    />
                                    <label htmlFor="op1">
                                        <span className="spanRadioButton">Standard</span>
                                    </label>
                                </div>
                                <div className="divLabelRadioButton">
                                    <input id="op2"
                                    type="radio"
                                    height="0.7rem"
                                    marginTop="2.2rem"
                                    value={"Deluxe"}
                                    checked={cadastro.quarto == "Deluxe" ? true : false}
                                    onChange={(event) => setCadastro({quarto: event.target.value})}
                                    />
                                    <label htmlFor="op2">
                                        <span className="spanRadioButton">Deluxe</span>
                                    </label>
                                </div>
                                <div className="divLabelRadioButton">
                                    <input id="op3"
                                    type="radio"
                                    height="0.7rem"
                                    marginTop="2.2rem"
                                    value={"Premium"}
                                    checked={cadastro.quarto == "Premium" ? true : false}
                                    onChange={(event) => setCadastro({quarto: event.target.value})}
                                    />
                                    <label htmlFor="op3">
                                        <span className="spanRadioButton">Premium</span>
                                    </label>
                                </div>
                            </div>
                        </label>

                        <label>
                            <InputText width="400px"
                            type="text"
                            height="3rem"
                            marginTop="2.2rem"
                            placeholder="Telefone"
                            value={cadastro.telefone}
                            onChange={(event) => setCadastro({telefone: event.target.value})}
                            />
                        </label>

                        <label>
                            <InputText width="400px"
                            type="date"
                            height="3rem"
                            marginTop="2.2rem"
                            placeholder="CPF"
                            value={cadastro.data}
                            onChange={(event) => setCadastro({data: event.target.value})}
                            />
                        </label>

                        <label style={{alignSelf: "center"}}>
                            <Button nomeClasse="buttonForm" title="CADASTRAR" /> 
                        </label>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}