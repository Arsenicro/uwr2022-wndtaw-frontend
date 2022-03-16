import React, { useState } from "react";
import { v4 } from "uuid";
import ITodo from "../../types/ITodo";
import Todo from "../Todo/Todo";

interface ITodosProps {
  todos: ITodo[];
  removeTodo: (id: string) => void;
}

const Todos = ({ todos, removeTodo }: ITodosProps) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} removeTodo={removeTodo} />
      ))}
    </div>
  );
};

export default Todos;
