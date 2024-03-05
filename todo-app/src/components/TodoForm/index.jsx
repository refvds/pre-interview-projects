import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addTodo } from '../../store/todoSlice';

export const TodoForm = () => {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();

  const inputHandler = (e) => setTodo(e.target.value);

  const addTodoItem = (e) => {
    e.preventDefault();
    if (todo.length <= 14 && todo.length !== 0) {
      dispatch(
        addTodo({
          id: uuid(),
          text: todo,
          checked: false,
        })
      );
      setTodo('');
    }
  };

  const keyDownHandler = (e) => {
    if (e.key === 'Enter') {
      addTodoItem(e);
    }
  };

  const clickHandlder = (e) => {
    addTodoItem(e);
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
