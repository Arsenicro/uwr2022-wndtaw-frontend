import React, { useState } from "react";
import { v4 } from "uuid";
import TodoContextProvider from "../../Context/TodoContext";
import ITodo from "../../types/ITodo";
import TodoForm from "../TodoForm/TodoForm";
import Todos from "../Todos/Todos";

const TodoList = () => {
  return (
    <div>
      <TodoContextProvider>
        <TodoForm />
        <Todos />
      </TodoContextProvider>
    </div>
  );
};

export default TodoList;
