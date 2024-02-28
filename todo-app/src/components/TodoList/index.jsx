import React from 'react';

export const TodoList = ({ todos }) => {
  const todoList = todos.map((todo, index) => (
    <li key={`${todo}${index}`}>
      <input type='checkbox' id='todo' />
      <label htmlFor='todo'>{todo}</label>
    </li>
  ));

  return <ul>{todoList}</ul>;
};
