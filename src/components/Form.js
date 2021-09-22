import Input from './../components/Input';
import Textarea from './../components/Textarea';
import './Form.css';

const Form = ({ todo, setTodo, handleSubmit }) => {

    const handleChange = (evt) => {
        const {name} = evt.currentTarget;
        const {value} = evt.currentTarget;

        setTodo((prev) => ({...prev, [name]: value}))
    };

    return (
        <form>
          <Input id="title" label="Title" value={todo?.title ?? ''} handleChange={handleChange} />
          <Textarea id="content" label="Content" value={todo?.content ?? ''} handleChange={handleChange} />
          <button onClick={handleSubmit} type="submit">Add</button>
        </form>
    )
}

export default Form;