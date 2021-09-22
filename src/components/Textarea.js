const Textarea = ({id, label, value, setContentTodo}) => {
    const handleChange = (evt) => {
        setContentTodo(evt.currentTarget.value);
    }
    return (
        <label htmlFor={id}>{label}
            <textarea onChange={handleChange} id={id} value={value}></textarea>
        </label>
    )
}

export default Textarea;