export default function Button({width, height, color, marginTop, title}) {
    const styleButton = {
        cursor: 'pointer',
        marginTop: marginTop,
        padding: '0px 10px',
        width: width,  // 15rem
        height: height,  // 2rem
        fontWeight: 'bold',
        backgroundColor: color,  // #00ff88
        border: '1px solid black',
        borderRadius: '1rem',
        outline: 'none',
    }

    return (
        <button style={styleButton}>{title}</button>
    )
}