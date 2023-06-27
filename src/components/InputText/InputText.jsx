export default function InputText({width, height, marginTop, placeholder, type = "text", value, onChange}) {
    const styleInput = {
        width: width,  // 15rem
        height: height,  // 2rem
        marginTop: marginTop,
        padding: '0px 10px',
        outline: 'none',
        border: '1px solid black',
        borderRadius: '1px',
    }
    
    return (
        <input style={styleInput} 
            placeholder={placeholder} 
            maxLength='32' 
            required
            type={type}
            value={value} 
            onChange={onChange} />
    )
}