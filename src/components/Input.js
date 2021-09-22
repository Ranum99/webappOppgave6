const Input = ({id, label, value, setTitleTodo}) => {
    const handleChange = (evt) => {
        setTitleTodo(evt.currentTarget.value);
    }

    return (
        <label htmlFor={id}>{label}
            <input onChange={handleChange} id={id} value={value}></input>
        </label>
    )
}

export default Input;