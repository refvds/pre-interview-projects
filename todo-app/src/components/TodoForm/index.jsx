import { useState } from 'react';

export const TodoForm = ({ setTodos }) => {
  const [todo, setTodo] = useState('');

  const inputHandler = (e) => setTodo(e.target.value);

  const keyDownHandler = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setTodos((prev) => [...prev, todo]);
      setTodo('');
    }
  };

  const clickHandlder = (e) => {
    e.preventDefault();
    setTodos((prev) => [...prev, todo]);
    setTodo('');
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
