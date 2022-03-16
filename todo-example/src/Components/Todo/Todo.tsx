import React from "react";
import ITodo from "../../types/ITodo";

interface ITodoProps {
  todo: ITodo;
  removeTodo: (id: string) => void;
}

const Todo = ({ todo, removeTodo }: ITodoProps) => {
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
