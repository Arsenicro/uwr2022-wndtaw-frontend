import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { v4 } from "uuid";
import { TodoContext } from "../../Context/TodoContext";
import { selectTodo } from "../../Redux/TodoSlice";
import ITodo from "../../types/ITodo";
import Todo from "../Todo/Todo";
import classes from "./Todos.module.css";

interface ITodosProps {}

const Todos = ({}: ITodosProps) => {
  const todos = useSelector(selectTodo);

  return (
    <div className={classes.container}>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default Todos;
