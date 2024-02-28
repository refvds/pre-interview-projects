import { useState } from 'react';

export const TodoForm = ({ setTodos, todos }) => {
  const [todo, setTodo] = useState('');

  const inputHandler = (e) => setTodo(e.target.value);

  const addTodo = (e) => {
    e.preventDefault();
    if (todo.length <= 14 && todo.length !== 0) {
      setTodos((prev) => [...prev, { id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1, text: todo }]);
      setTodo('');
    }
  };

  const keyDownHandler = (e) => {
    if (e.key === 'Enter') {
      addTodo(e);
    }
  };

  const clickHandlder = (e) => {
    addTodo(e);
  };

  return (
    <form>
      <input type='text' value={todo} onChange={inputHandler} onKeyDown={keyDownHandler} />
      <button type='sumbit' onClick={clickHandlder}>
        Add
      </button>
    </form>
  );
};
