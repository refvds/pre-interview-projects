export const TodoList = ({ todos, setTodos }) => {
  const deleteHandle = (id) => {
    const updatedTodoList = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodoList);
  };

  const handleCheck = (id) => {
    setTodos((prev) => prev.map((todo) => (todo.id === id ? { ...todo, checked: !todo.checked } : todo)));
  };

  const todoList = todos.map((todo) => (
    <li key={todo.id}>
      <input type='checkbox' id={todo.id} onChange={() => handleCheck(todo.id)} />
      <label htmlFor={todo.id}>{todo.text}</label>
      <button onClick={(e) => deleteHandle(todo.id)}>delete</button>
    </li>
  ));

  return <ul>{todoList}</ul>;
};
