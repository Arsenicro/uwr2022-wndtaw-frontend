import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { TodoContext } from "../../Context/TodoContext";
import { removeTodo } from "../../Redux/TodoSlice";
import ITodo from "../../types/ITodo";

interface ITodoProps {
  todo: ITodo;
}

const Todo = ({ todo }: ITodoProps) => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(removeTodo(todo.id));
  };

  return (
    <div>
      {todo.name} <button onClick={onClick}>Remove</button>
    </div>
  );
};

export default Todo;
