import Button from "../Button/Button";

export default function BarraLateral() {
    return(
        <div className="barraLateral">
            <img className="fotoUsuario" src="../../fotoperfil.png" alt="foto do perfil" />
            <h3 id="nomeUsuario">Fulano da Silva</h3>
            <Button nomeClasse="buttonBarraLateral" title="Cadastrar" />
            <Button nomeClasse="buttonBarraLateral" title="Check In" />
            <Button nomeClasse="buttonBarraLateral" title="Check Out" />
            <Button nomeClasse="buttonBarraLateral" title="Alteração" />
            <div className="iconeSair">
                <span className="material-symbols-outlined">logout</span>
            </div>
        </div>
    )
}