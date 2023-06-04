export default function Button({nomeClasse, title}) {

    return (
        <button className={nomeClasse}>{title}</button>
    )
}