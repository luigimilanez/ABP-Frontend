// import { Link } from "react-router-dom"
import BarraLateral from "../components/BarraLateral/BarraLateral"

export default function Home() {

    document.title = 'BookSpot | Home'

    return (
        // Colocar um redirecionamento automático para
        // a page "cadastrarReservas"
        <div className="container">
            <BarraLateral />
            <div className="divMainHome">
                <div className="divContentMain">
                    <h1 style={{color: 'white'}}>Home</h1>
                    {/* FAZER OS FORMULÁRIOS AQUI */}
                </div>
            </div>
        </div>
    )
}