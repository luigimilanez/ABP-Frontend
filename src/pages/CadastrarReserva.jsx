// import { Link } from "react-router-dom"
import BarraLateral from "../components/BarraLateral/BarraLateral"

export default function CadastrarReserva() {

    document.title = 'BookSpot | Cadastrar Reserva'

    return (
        <div className="container">
            <BarraLateral />
            <div className="divMainHome">
                <div className="divContentMain">
                    <h1 style={{color: 'white'}}>Cadastrar Reserva</h1>
                    {/* FAZER OS FORMULÁRIOS AQUI */}
                </div>
            </div>
        </div>
    )
}