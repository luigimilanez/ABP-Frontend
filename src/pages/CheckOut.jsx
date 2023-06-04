// import { Link } from "react-router-dom"
import BarraLateral from "../components/BarraLateral/BarraLateral"

export default function CheckOut() {

    document.title = 'BookSpot | Check Out'

    return (
        <div className="container">
            <BarraLateral />
            <div className="divMainHome">
                <div className="divContentMain">
                    <h1 style={{color: 'white'}}>Check Out</h1>
                    {/* FAZER OS FORMULÁRIOS AQUI */}
                </div>
            </div>
        </div>
    )
}