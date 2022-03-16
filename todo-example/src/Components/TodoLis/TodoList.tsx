import React, { useState } from "react";
import { v4 } from "uuid";
import ITodo from "../../types/ITodo";
import TodoForm from "../TodoForm/TodoForm";
import Todos from "../Todos/Todos";

const TodoList = () => {
  const [todos, setTodos] = useState<ITodo[]>([
    { id: v4(), name: "Todo1", competed: true },
    { id: v4(), name: "Todo2", competed: false },
    { id: v4(), name: "Todo3", competed: true },
    { id: v4(), name: "Todo4", competed: false },
    { id: v4(), name: "Todo5", competed: true },
    { id: v4(), name: "Todo6", competed: true },
  ]);

  const addTodo = (name: string) => {
    setTodos((prevTodos) => {
      const newTodos = [...prevTodos];
      newTodos.push({ id: v4(), name, competed: false });
      return newTodos;
    });
  };

  const removeTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <TodoForm addTodo={addTodo} />
      <Todos todos={todos} removeTodo={removeTodo} />
    </div>
  );
};

export default TodoList;
