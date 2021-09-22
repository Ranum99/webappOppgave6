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
    },
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
    },
  ]);
  const [titleTodo, setTitleTodo] = useState('');
  const [contentTodo, setContentTodo] = useState('');

  return (
    <>
      <Header userName={"User user"} />
      <main>
        <Form titleTodo={titleTodo} setTitleTodo={setTitleTodo} setContentTodo={setContentTodo} contentTodo={contentTodo} />
        <section className="myTodos">
          <h2>My Todos</h2>
          <div>
            {todos?.map((todo, index) => 
              <TodoItem key={index} title={todo.title} content={todo.content} />
            )}
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
