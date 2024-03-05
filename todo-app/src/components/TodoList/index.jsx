import { useSelector } from 'react-redux';
import { TodoItem } from '../TodoItem/Index';

export const TodoList = () => {
  const { todos, current } = useSelector((state) => state.todos);

  const filteredList = () => {
    if (current === 'finished') {
      return todos.filter((todo) => todo.checked === true);
    } else if (current === 'unfinished') {
      return todos.filter((todo) => todo.checked === false);
    }
    return todos;
  };

  const todoList = filteredList().map((todo) => (
    <li key={todo.id}>
      <TodoItem id={todo.id} text={todo.text} checked={todo.checked} />
    </li>
  ));

  return <ul>{todoList}</ul>;
};
