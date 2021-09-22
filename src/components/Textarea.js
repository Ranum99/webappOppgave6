const Textarea = ({id, label, value, handleChange}) => {

    return (
        <label htmlFor={id}>{label}
            <textarea name="content" onChange={handleChange} id={id} value={value}></textarea>
        </label>
    )
}

export default Textarea;