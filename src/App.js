import Header from './components/Header';
import TodoItem from './components/TodoItem';
import Form from './components/Form';
import './App.css';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([
    {
      title: "Todotitle",
      content: "I'm baby sriracha hot chicken mixtape pabst organic air ..."
    },
    {
      title: "Todotitle",
      content: "I'm baby sriracha hot chicken mixtape pabst organic air ..."
    },
    {
      title: "Todotitle",
      content: "I'm baby sriracha hot chicken mixtape pabst organic air ..."
    }
  ]);
  const [todo, setTodo] = useState({title: '', content: ''});
  
  const handleSubmit = (evt) => {
    evt.preventDefault();
    setTodos(todos => [...todos, todo]);
    
    setTodo({title: '', content: ''})
  }

  const deleteMe = (evt) => {
    setTodos(todos.filter(todo => todo !== todos[evt.currentTarget.id]))
  }

  return (
    <>
      <Header userName={"User user"} />
      <main>
        <Form todo={todo} setTodo={setTodo} handleSubmit={handleSubmit} />
        <section className="myTodos">
          <h2>My Todos</h2>
          <div>
            {todos?.map((todo, index) => 
              <TodoItem key={index} id={index} title={todo.title} content={todo.content} deleteMe={deleteMe} />
            )}
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
