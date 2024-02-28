import { useState } from 'react';
import './App.css';

import { TodoList } from './components/TodoList';
import { TodoForm } from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([]);
  console.log(todos);
  return (
    <>
      <TodoForm setTodos={setTodos} />
      <TodoList todos={todos} />
    </>
  );
}

export default App;
