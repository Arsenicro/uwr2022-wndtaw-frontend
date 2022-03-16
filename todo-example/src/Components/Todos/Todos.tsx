import React, { useContext, useState } from "react";
import { v4 } from "uuid";
import { TodoContext } from "../../Context/TodoContext";
import ITodo from "../../types/ITodo";
import Todo from "../Todo/Todo";

interface ITodosProps {}

const Todos = ({}: ITodosProps) => {
  const { todos } = useContext(TodoContext);

  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default Todos;
