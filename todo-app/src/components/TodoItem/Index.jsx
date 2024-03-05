import { useDispatch } from 'react-redux';
import { removeTodo, checkTodo } from '../../store/todoSlice';

// eslint-disable-next-line react/prop-types
export const TodoItem = ({ id, text, checked }) => {
  const dispatch = useDispatch();

  return (
    <>
      <input type='checkbox' id={id} checked={checked} onChange={() => dispatch(checkTodo(id))} />
      <label htmlFor={id}>{text}</label>
      <button onClick={() => dispatch(removeTodo(id))}>delete</button>
    </>
  );
};
