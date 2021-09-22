import Input from './../components/Input';
import Textarea from './../components/Textarea';
import './Form.css';

const Form = ({ titleTodo, setTitleTodo, setContentTodo, contentTodo }) => {
    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(titleTodo);
        console.log(contentTodo);
    }

    return (
        <form>
          <Input id="title" label="Title" value={titleTodo} setTitleTodo={setTitleTodo} />
          <Textarea id="content" label="Content" value={contentTodo} setContentTodo={setContentTodo} />
          <button onClick={handleSubmit} type="submit">Add</button>
        </form>
    )
}

export default Form;