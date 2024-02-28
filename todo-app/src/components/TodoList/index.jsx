import React from 'react';

export const TodoList = ({ todos, setTodos }) => {
  const deleteHandle = (id) => {
    const updatedTodoList = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodoList);
  };

  const todoList = todos.map((todo, index) => (
    <li key={todo.id}>
      <input type='checkbox' id='todo' />
      <label htmlFor='todo'>{todo.text}</label>
      <button onClick={(e) => deleteHandle(todo.id)}>delete</button>
    </li>
  ));

  return <ul>{todoList}</ul>;
};
