import { useState } from 'react';
import { Provider } from 'react-redux';
import './App.css';

import { TodoList } from './components/TodoList';
import { TodoForm } from './components/TodoForm';
import { TodoFilters } from './components/TodoFilters';
import { store } from './store';

function App() {
  // const [todos, setTodos] = useState({
  //   all: {
  //     arr: [],
  //     status: true,
  //   },
  //   solved: {
  //     arr: todos.all.filter((todo) => todo.checked === true),
  //     status: false,
  //   },
  //   unsolved: {
  //     arr: todos.all.filter((todo) => todo.checked === false),
  //     status: false,
  //   },
  // });
  // console.log(todos);

  // const solved = todos.filter((todo) => todo.checked === true);
  // const unsolved = todos.filter((todo) => todo.checked === false);

  return (
    <Provider store={store}>
      <TodoForm />
      <TodoFilters />
      <TodoList />
    </Provider>
  );
}

export default App;
