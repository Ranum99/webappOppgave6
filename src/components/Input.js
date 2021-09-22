const Input = ({id, label, value, handleChange}) => {

    return (
        <label htmlFor={id}>{label}
            <input name="title" onChange={handleChange} id={id} value={value}></input>
        </label>
    )
}

export default Input;