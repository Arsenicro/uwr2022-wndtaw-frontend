import React, { useContext } from "react";
import { TodoContext } from "../../Context/TodoContext";
import ITodo from "../../types/ITodo";

interface ITodoProps {
  todo: ITodo;
}

const Todo = ({ todo }: ITodoProps) => {
  const { removeTodo } = useContext(TodoContext);

  const onClick = () => {
    removeTodo(todo.id);
  };

  return (
    <div>
      {todo.name} <button onClick={onClick}>Remove</button>
    </div>
  );
};

export default Todo;
