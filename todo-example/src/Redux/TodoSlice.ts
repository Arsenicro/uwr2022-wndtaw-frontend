import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 } from "uuid";
import ITodo from "../types/ITodo";
import { RootState } from "./store";

// Define a type for the slice state
interface TodoSlice {
  todos: ITodo[];
}

// Define the initial state using that type
const initialState: TodoSlice = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos.push({ id: v4(), name: action.payload, competed: false });
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectTodo = (state: RootState) => state.todo.todos;

export default todoSlice.reducer;
