import React, { useState } from "react";
import { v4 } from "uuid";
import ITodo from "../types/ITodo";

interface ITodoContext {
  todos: ITodo[];
  addTodo: (name: string) => void;
  removeTodo: (id: string) => void;
}

export const TodoContext = React.createContext<ITodoContext>(
  {} as ITodoContext
);

interface ITodoContextProps {
  children: React.ReactNode;
}

const TodoContextProvider = ({ children }: ITodoContextProps) => {
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
    <TodoContext.Provider value={{ todos, addTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
