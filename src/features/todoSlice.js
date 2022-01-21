import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    deleteAllTodos: (state, action) => {
      state.todos = [];
    },
  },
});

export const { addTodo, deleteAllTodos } = todoSlice.actions;

export const getTodos = (state) => state.todos.todos;

export default todoSlice.reducer;
