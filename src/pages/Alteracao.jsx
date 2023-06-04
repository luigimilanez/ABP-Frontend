// import { Link } from "react-router-dom"
import BarraLateral from "../components/BarraLateral/BarraLateral"

export default function Alteracao() {

    document.title = 'BookSpot | Alteração Reserva'

    return (
        <div className="container">
            <BarraLateral />
            <div className="divMainHome">
                <div className="divContentMain">
                    <h1 style={{color: 'white'}}>Alteração</h1>
                    {/* FAZER OS FORMULÁRIOS AQUI */}
                </div>
            </div>
        </div>
    )
}