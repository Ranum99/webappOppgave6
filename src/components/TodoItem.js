import './TodoItem.css';

const TodoItem = ({id, title, content, deleteMe}) => {
    return (
        <article className="todoItem">
            <h3>{title}</h3>
            <p>{content}</p>
            <button id={id} onClick={deleteMe} type="button">Complete</button>
        </article>
    )
}

export default TodoItem;