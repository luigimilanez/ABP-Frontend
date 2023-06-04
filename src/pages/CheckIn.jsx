// import { Link } from "react-router-dom"
import BarraLateral from "../components/BarraLateral/BarraLateral"

export default function CheckIn() {

    document.title = 'BookSpot | Check In'

    return (
        <div className="container">
            <BarraLateral />
            <div className="divMainHome">
                <div className="divContentMain">
                    <h1 style={{color: 'white'}}>Check In</h1>
                    {/* FAZER OS FORMULÁRIOS AQUI */}
                </div>
            </div>
        </div>
    )
}