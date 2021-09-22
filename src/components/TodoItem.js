import './TodoItem.css';

const TodoItem = ({title, content}) => {
    return (
        <article className="todoItem">
            <h3>{title}</h3>
            <p>{content}</p>
            <button type="button">Complete</button>
        </article>
    )
}

export default TodoItem;