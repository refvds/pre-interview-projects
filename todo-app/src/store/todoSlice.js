import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
  current: undefined,
  allCount: 0,
  finishedCount: 0,
  unfinishedCount: 0,
};

const countHelper = (state) => {
  state.allCount = state.todos.length;
  state.finishedCount = state.todos.filter((todo) => todo.checked === true).length;
  state.unfinishedCount = state.todos.filter((todo) => todo.checked === false).length;
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
      if (state.current === undefined) {
        countHelper(state);
      }
    },
    removeTodo: (state, action) => {
      const updatedTodos = state.todos.filter((todo) => todo.id !== action.payload);
      state.todos = updatedTodos;
      countHelper(state);
    },
    checkTodo: (state, action) => {
      const updatedTodos = state.todos.map((todo) =>
        todo.id === action.payload ? { ...todo, checked: !todo.checked } : todo
      );
      state.todos = updatedTodos;
      countHelper(state);
    },
    filterList: (state, action) => {
      state.current = action.payload;
      countHelper(state);
    },
  },
});

export const { addTodo, removeTodo, checkTodo, filterList } = todoSlice.actions;
export default todoSlice.reducer;
